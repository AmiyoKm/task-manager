
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import GlobalStateContext from "./context/GlobalContext.tsx";


createRoot(document.getElementById("root")!).render(
  <GlobalStateContext>
    <BrowserRouter>
      
        <App children />
      
    </BrowserRouter>
  </GlobalStateContext>
  
);
