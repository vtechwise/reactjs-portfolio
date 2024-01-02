import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Router, ScrollRestoration } from 'react-router-dom'
import ScrollToTop from "./pages/ScrollToTop.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
      {/* <ScrollToTop /> */}
{/* <ScrollRestoration/> */}
      <App />
   
  </React.StrictMode>
);
