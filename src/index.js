import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
const notes = [
  {
    id: 1,
    title: "First note"
  },
  {
    id: 2,
    title: "Second note"
  },
  {
    id: 3,
    title: "Third note"
  }
];
ReactDOM.render(<App notes={notes} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
