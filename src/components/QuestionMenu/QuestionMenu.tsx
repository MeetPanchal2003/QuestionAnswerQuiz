import React, { useEffect, useState } from "react";
import QuestionApi from "../../API/QuestionApi/QuestionApi";
import "../../assets/styles/QuestionMenu.css";
import { Container, Modal, Row, Col, Button } from "react-bootstrap";
import { useMyContext } from "../../ContextData/MyContaxtData";

interface QuestionData {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

function QuestionMenu() {
  const { datas, setDatas } = useMyContext();

  const [apiData, setApiData] = useState<QuestionData | null>(null);
  const [questionMcq, setQuestionMcq] = useState<string[]>([]);
  const [selectedAnswer, setselectedAnswer] = useState<any>("");
  const [selected, setselected] = useState<Boolean>(false);
  const [getDataFlag, setGetDataFlag] = useState<Boolean>(false);
  const [submitModal, setSubmitModal] = useState(false);

  const handleShow = () => {
    setSubmitModal(true);
  };

  const handleHide = () => {
    setSubmitModal(false);
  };

  const handleAttemptQuestions = (Attempt_ans:number) => {
    setDatas({
      ...datas,
      attemptAns: Attempt_ans,
    });
  };

  const handleCorrectAnswer = (Corr_ans:number) => {
    setDatas({
      ...datas,
      correctAns: Corr_ans,
    });
  };

  const handleIncorrectAnswer = (Incorr_ans:number) => {
    setDatas({
      ...datas,
      incorrectAns: Incorr_ans,
    });
  };

  const handleRestartQuestions = () => {
    setDatas({
      ...datas,
      attemptAns: 1,
      correctAns: 0,
      incorrectAns: 0,
    });
  };

  const handleRestartGame = () => {
    handleHide();
    handleRestartQuestions()
    setselected(!selected);
    setselectedAnswer("");
    handleApiResponse();
  };

  const nextButtonApiCall = () => {
    QuestionApi().then((result) => {
      setselected(!selected);
      setselectedAnswer("");
      if (result !== undefined) {
        handleAttemptQuestions(datas.attemptAns + 1);
        const data = result as QuestionData;
        setApiData(data);
        var Options: string[] | undefined = [
          ...result.incorrect_answers,
          result.correct_answer,
        ];
        var shuffled = shuffleArray(Options);
        setQuestionMcq(shuffled);
        setGetDataFlag(true);
      } else {
        setGetDataFlag(false);
        new Promise((resolve) => setTimeout(resolve, 5000));
        return nextButtonApiCall();
      }
    });
  };

  const handleSelectAnswer = (Answer: any) => {
    if (selectedAnswer === "") {
      setselected(!selected);
      if (Answer === correct_answer) {
        setselectedAnswer("Match");
        handleCorrectAnswer(datas.correctAns + 1)
      } else {
        setselectedAnswer(Answer);
        handleIncorrectAnswer(datas.incorrectAns + 1)
      }
    }
  };

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleApiResponse = () => {
    QuestionApi().then((result) => {
      if (result !== undefined) {
        const data = result as QuestionData;
        setApiData(data);
        var Options: string[] | undefined = [
          ...result.incorrect_answers,
          result.correct_answer,
        ];
        var shuffled = shuffleArray(Options);
        setQuestionMcq(shuffled);
        setGetDataFlag(true);
      } else {
        setGetDataFlag(false);
        new Promise((resolve) => setTimeout(resolve, 5000));
        return handleApiResponse();
      }
    });
  };

  const handleSubmitResult = () => {
    handleShow();
  };
  const RestartData = ()=>{
    setselectedAnswer('')
    setselected(false)
    handleApiResponse()
  }

  useEffect(() => {
    setDatas({
      ...datas,
        attemptAns: 1,
        correctAns: 0,
        incorrectAns: 0,
    });
    handleApiResponse();
  }, []);

  useEffect(() => {
    if(datas.attemptAns === 0){
      RestartData()
      setDatas({
        ...datas,
        attemptAns: 1,
      });
    }
  }, [datas.attemptAns]);

  const { question, correct_answer } = apiData || {};

  return (
    <div className="App-Main ">
      <Container>
        <Row className="bg-white text-black p-1 m-3 rounded">
          <Col className="bg-success p-2 d-flex justify-content-center">
            <p className="p-0 m-0">Correct Ans : {datas.correctAns}</p>
          </Col>
          <Col className="bg-danger p-2 d-flex justify-content-center">
            <p className="p-0 m-0">Incorrect Ans : {datas.incorrectAns}</p>
          </Col>
        </Row>
        <div className="bg-white text-black p-3 m-3 rounded">
          <div>
            {getDataFlag ? (
              <>
                <p>
                  <b>Question {datas.attemptAns}</b> : {question}
                </p>
                <div>
                  {questionMcq &&
                    questionMcq.map((answer, index) => (
                      <div
                        className={`border my-1 p-1 pointer ${
                          selected &&
                          selectedAnswer === answer &&
                          selectedAnswer !== correct_answer
                            ? "bg-danger"
                            : ""
                        } ${
                          selected && correct_answer === answer
                            ? "bg-success"
                            : ""
                        }`}
                        onClick={() => {
                          handleSelectAnswer(answer);
                        }}
                        key={index}
                      >
                        {answer}
                      </div>
                    ))}
                </div>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="py-3 ">
            {datas.attemptAns < 10 ? (
              <div className="d-flex justify-content-start">
                <button
                  className={`nextButton ${
                    selected
                      ? "pointer enablecolor"
                      : "disablecursor disablecolor"
                  }`}
                  disabled={!selected}
                  onClick={() => {
                    nextButtonApiCall();
                  }}
                >
                  Next
                </button>
              </div>
            ) : (
              <div className="d-flex justify-content-end">
                <button
                  className={`submitButton ${
                    selected ? "pointer" : "disablecursor disablecolor"
                  }`}
                  disabled={!selected}
                  onClick={() => {
                    handleSubmitResult();
                  }}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* ///Modal start/// */}
      <Modal
        show={submitModal}
        centered
        backdrop="static"
        keyboard={false}
        onHide={() => {
          handleHide();
        }}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header className="BorderRemove justify-content-center">
          <Modal.Title id="contained-modal-title-vcenter">Result</Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-example py-0">
          <Container>
            <div>
              <Row>
                <Col className="border p-1" xs={6} md={6}>
                  <p className="m-0 bolderText">Total Question</p>
                </Col>
                <Col className="border p-1" xs={6} md={6}>
                  <p className="m-0 text-center">{datas.attemptAns}</p>
                </Col>
              </Row>
              <Row>
                <Col className="border p-1" xs={6} md={6}>
                  <p className="m-0 bolderText">Total Correct Answer</p>
                </Col>
                <Col className="border p-1" xs={6} md={6}>
                  <p className="m-0 text-center">{datas.correctAns}</p>
                </Col>
              </Row>
              <Row>
                <Col className="border p-1" xs={6} md={6}>
                  <p className="m-0 bolderText">Total Incorrect Answer</p>
                </Col>
                <Col className="border p-1" xs={6} md={6}>
                  <p className="m-0 text-center">{datas.incorrectAns}</p>
                </Col>
              </Row>
            </div>
          </Container>
        </Modal.Body>
        <Modal.Footer className="justify-content-around BorderRemove">
          <Button
            onClick={() => {
              handleRestartGame();
            }}
          >
            Restart The Game
          </Button>
          <Button>Exit The Game</Button>
        </Modal.Footer>
      </Modal>
      {/* /////////Modal end////////// */}
    </div>
  );
}

export default QuestionMenu;
