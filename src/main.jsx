import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DarkModeProvider } from "./components/DarkModeContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <BrowserRouter>
   <DarkModeProvider>
      <App />
    </DarkModeProvider>
   </BrowserRouter>
    
  </StrictMode>
);
