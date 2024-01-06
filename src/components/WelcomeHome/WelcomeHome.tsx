import { useNavigate } from "react-router-dom";
import "../../assets/styles/WelcomeHome.css";

function WelcomeHome() {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate("/quiz");
    window.scrollTo(0, 0);
  };

  const handleAboutGame = () => {
    navigate("/about");
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="welcomepage">
        <div className="container">
          <div>
            <div className="divCenter">
              <div className="welcomeHeader">Welcome to my Quiz Game</div>
            </div>
            <div className="WelcomeMenudivCenter">
              <div>
                <div className="welcomeMenuTitle">
                  <small className="MenuTitle">MENU</small>
                </div>

                <div
                  className="welcomeMenu pointer mb-2"
                  onClick={() => {
                    handleStartGame();
                  }}
                >
                  <small className="WelcomeMenuItem">Start Game</small>
                </div>
                <div
                  className="welcomeMenu pointer"
                  onClick={() => {
                    handleAboutGame();
                  }}
                >
                  <small className="WelcomeMenuItem">About Us</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeHome;
