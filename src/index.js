import "core-js/stable";
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Rutas } from "./Router";
import reportWebVitals from "./reportWebVitals";
import { usePromiseTracker } from "react-promise-tracker";
import { Loader } from "./Componentes/Loader/Loader";
const LoadingIndicator = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress && <Loader />;
};

ReactDOM.render(
  <React.StrictMode>
    <Rutas />
    <LoadingIndicator />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
