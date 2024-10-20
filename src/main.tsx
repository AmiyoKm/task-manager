
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import GlobalStateContext from "./context/GlobalContext.tsx";

createRoot(document.getElementById("root")!).render(

    <BrowserRouter>
      <GlobalStateContext>
        <App children={<></>} />
      </GlobalStateContext>
    </BrowserRouter>
  
);
