import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MyContextProvider } from "./ContextData/MyContaxtData";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <MyContextProvider>
    <App />
  </MyContextProvider>
);
reportWebVitals();
