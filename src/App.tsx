import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home';
import WelcomePage from './containers/WelcomePage/WelcomePage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/quiz" element={<Home />} />
        <Route path="/" element={<WelcomePage />}/>
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
