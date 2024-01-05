import React, { useState } from "react";
import { Container, Modal, Row, Col, Button, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon you want to use
import "../../assets/styles/Navbar.css";
import { useMyContext } from "../../ContextData/MyContaxtData";
import { useNavigate } from 'react-router-dom';
import Quizlogo from '../../assets/images/quiz-icon-11.jpg'
import { useLocation } from 'react-router-dom';
const NavHeader = ()=> {
  const location = useLocation();
  console.log(location.pathname,"Path")
  const navigate = useNavigate();
  const {datas,setDatas} = useMyContext()

  const handleHome = () => {
    navigate('/');
  };

  const [submitModal, setSubmitModal] = useState(false);

  const handleShow = () => {
    setSubmitModal(true);
  };

  const handleHide = () => {
    setSubmitModal(false);
  };

  const handleRestart = ()=>{
    setDatas({
      ...datas,
        attemptAns: 0,
        correctAns: 0,
        incorrectAns: 0,
    });
    handleHide()
  }

  const handleExit = ()=>{
    window.close()
  }

  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container className={`${location.pathname === '/' ? "justify-content-center" : ""}`}>
          <Navbar.Brand className="pointer fs-3" onClick={()=>{handleHome()}}>
          <img
              src={Quizlogo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            Quiz Game
            </Navbar.Brand>
          <div className={`${location.pathname === '/' ? "d-none" : "navbar-Menuitem justify-content-end"}`}>
            <Navbar.Text>
              <div className="pointer">
                <FontAwesomeIcon
                  icon={faBars}
                  className="pointer"
                  onClick={() => {
                    handleShow();
                  }}
                />
              </div>
            </Navbar.Text>
          </div>
        </Container>
      </Navbar>

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
        <Modal.Header className=" justify-content-center">
          <Modal.Title id="contained-modal-title-vcenter">Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-example py-0">
          <Container>
            <div>
              <Row>
                <div className="Menu">
                  <small className="MenuItem" onClick={()=> handleHide()}>Resume</small>
                </div>
              </Row>
              <Row>
                <div className="Menu">
                  <small className="MenuItem" onClick={()=> handleRestart()}>Restart</small>
                </div>
              </Row>
              <Row>
                <div className="Menu">
                  <small className="MenuItem" onClick={()=> handleExit()}>Exit</small>
                </div>
              </Row>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
      {/* /////////Modal end////////// */}
    </div>
  );
}

export default NavHeader;
