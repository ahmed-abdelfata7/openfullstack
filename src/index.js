import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};
const Part = props => {
  return (
    <div>
      <p>
        {props.title} {props.numOfExercises}
      </p>
    </div>
  );
};
const Content = () => {
  let firstPart = "Fundamentals of React";
  let firstPartEx = 10;
  let secondPart = "Using props to pass data";
  let secondPartEx = 7;
  let thirdPart = "State of a component";
  let thirdPartEx = 14;
  const Total = () => {
    return (
      <>
        <p>Total : {firstPartEx + secondPartEx + thirdPartEx}</p>
      </>
    );
  };
  return (
    <>
      <Part title={firstPart} numOfExercises={firstPartEx} />
      <Part title={secondPart} numOfExercises={secondPartEx} />
      <Part title={thirdPart} numOfExercises={thirdPartEx} />
      <Total />
    </>
  );
};

const App = () => {
  return (
    <div>
      <Header title="Half Stack application development" />
      <Content />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
