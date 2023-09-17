import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "App";
import { AuthContextProvider } from "context";
import { MaterialUIControllerProvider } from "context";

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <MaterialUIControllerProvider>
        <App />
      </MaterialUIControllerProvider>
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
