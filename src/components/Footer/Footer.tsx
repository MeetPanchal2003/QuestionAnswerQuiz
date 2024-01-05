import React from "react";
import "../../assets/styles/Footer.css";
import Quizlogo from '../../assets/images/QuizLogo.png' 

function Footer() {

  const linkedInUrl = 'https://www.linkedin.com/in/meet-panchal-5a0001233';
  const GithubUrl = 'https://github.com/MeetPanchal2003';

  const redirectToLinkedIn = () => {
    window.open(linkedInUrl, '_blank');
  };

  const redirectToGithub = () => {
    window.open(GithubUrl, '_blank');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row divCenter">
          <div className="myFooter-column BorderRight">
            <div className="discriptionBlock">
              <div className="footerLogodiv">
                <img
                  src={Quizlogo}
                  className="img-fluid FooterLogo"
                  alt=""
                />
                <div className="fs-3 text-white bolderText">
                  Quiz Game
                  </div>
            </div>
            <div className="widget1">
              <p>
              <b>Question Quiz :</b> A dynamic and engaging quiz game designed to challenge and entertain users with a diverse range of thought-provoking questions. Explore your knowledge, compete with friends, and enjoy the thrill of learning in a fun and interactive way. Developed with passion by Meet Panchal – 2024.
              </p>
            </div>
            </div>
          </div>
          <div className="myFooter-column divCenter">
            <div className="widget2">
              <h5>Developer Details</h5>
              <div className="media">
                <div className="FooterText media-body d-flex align-self-center">
                  {/* <div> */}
                      <div>Full Name : </div>
                      <div className="details">Meet Panchal</div>
                  {/* </div> */}
                </div>
                <div className="FooterText media-body d-flex align-self-center">
                  {/* <div> */}
                      <div>Email : </div>
                      <div className="details">panchalmeet432@gmail.com</div>
                  {/* </div> */}
                </div>
                <div className="FooterText media-body d-flex align-self-center">
                  {/* <div> */}
                      <div>Linkdin : </div>
                      <div className="details" onClick={redirectToLinkedIn}>
                        www.linkedin.com/in/meet-panchal
                        </div>
                  {/* </div> */}
                </div>
                <div className="FooterText media-body d-flex align-self-center">
                  {/* <div> */}
                      <div>Github : </div>
                      <div className="details" onClick={redirectToGithub}>
                        https://github.com/MeetPanchal2003
                      </div>
                  {/* </div> */}
                </div>
                <div className="FooterText media-body d-flex align-self-center">
                  {/* <div> */}
                      <div>Date : </div>
                      <div className="details">05/01/2024</div>
                  {/* </div> */}
                </div>
                <div className="FooterText media-body d-flex align-self-center">
                  {/* <div> */}
                      <div>Project : </div>
                      <div className="details">Quiz Game</div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyRightArea">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p>
              Copyright &copy; 2024 Meet Panchal. All rights reserved.
              </p>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
