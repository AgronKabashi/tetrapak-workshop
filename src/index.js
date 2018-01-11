import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import store from "./store";
import "./index.css";
import App from "_common/app";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById("root")
);
