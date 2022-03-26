import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider as AuthenticationProvider } from "./Context/TokenContext";

import "./index.scss";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthenticationProvider>
        <App />
      </AuthenticationProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
