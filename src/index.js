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
  let firstPart = {
    title: "Fundamentals of React",
    exercise: 10
  };
  let secondPart = {
    title: "Using props to pass data",
    exercise: 7
  };
  let thirdPart = {
    title: "State of a component",
    exercise: 14
  };

  const Total = () => {
    return (
      <>
        <p>
          Total :{firstPart.exercise + secondPart.exercise + thirdPart.exercise}
        </p>
      </>
    );
  };
  return (
    <>
      <Part title={firstPart.title} numOfExercises={firstPart.exercise} />
      <Part title={secondPart.title} numOfExercises={secondPart.exercise} />
      <Part title={thirdPart.title} numOfExercises={thirdPart.exercise} />
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
