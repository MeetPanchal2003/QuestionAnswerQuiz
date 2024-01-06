import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home/Home";
import WelcomePage from "./containers/WelcomePage/WelcomePage";
import About from "./containers/AboutUsPage/AboutUsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/quiz" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
