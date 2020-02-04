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
  const contents = [
    {
      title: "Fundamentals of React",
      exercise: 10
    },
    {
      title: "Using props to pass data",
      exercise: 7
    },
    {
      title: "State of a component",
      exercise: 14
    }
  ];

  const Total = () => {
    return (
      <>
        <p>
          Total :
          {contents.reduce((prev, curr, index, arr) => {
            return prev + curr;
          }, 0)}
        </p>
      </>
    );
  };
  let result = contents.map(element => {
    return <Part title={element.title} numOfExercises={element.exercise} />;
  });
  return (
    <>
      {result}
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
