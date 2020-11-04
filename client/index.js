// entry file

import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./index.css";

import store from "./redux/store";

ReactDOM.render(
  // <Provider store={store}>
  <div>Hello, world!</div>,
  // </Provider>,
  document.getElementById("app") // make sure this is the same as the id of the div in your index.html
);
