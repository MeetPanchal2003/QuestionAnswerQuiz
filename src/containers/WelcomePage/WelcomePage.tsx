import React from 'react'
import './welcome.css'
import { useNavigate } from 'react-router-dom';
import NavHeader from '../../components/Navbar/NavHeader'
import Footer from '../../components/Footer/Footer'

function WelcomePage() {
  const navigate = useNavigate();
  const handleStartGame = () => {
    navigate('/quiz');
  };

  const handleExitGame = ()=>{
    window.location.href = 'www.google.'
  }

  return (
    <div>
      <NavHeader/>
    <div className='welcomepage'>
        <div className='container justify-content-center'>
            <div>
                <div className='divCenter'>
                    <div className='welcomeHeader'>Welcome to my Quiz Game</div>
                </div>
                <div className='divCenter'>
                    <div>
                    <div className='welcomeMenu pointer mb-2' onClick={()=>{handleStartGame()}}>
                    <small className='WelcomeMenuItem'>
                      Start Game
                      </small>
                      </div>
                    <div className='welcomeMenu pointer' onClick={()=>{handleExitGame()}}>
                      <small className='WelcomeMenuItem' >
                      Exit
                      </small>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

  )
}

export default WelcomePage
