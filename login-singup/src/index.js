import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";


const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
    <Toaster />
  </BrowserRouter>
);
