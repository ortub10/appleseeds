import React from "react";
import "./style.css";

class Quiz extends React.Component {
  render() {
    return (
      <div className="quiz">
        <QuizTitle />
        <Q1 />
        <Q1Input />
        <Q2 />
        <Q2Input />
      </div>
    );
  }
}

export default Quiz;

const QuizTitle = () => {
  return <h2>How Do You Like Front End?</h2>;
};

const Q1 = () => {
  return <p>How Much you love front end?</p>;
};

const Q1Input = () => {
  return <input type="range" />;
};

const Q2 = () => {
  return <p>Waht is your favorite front end feature/topic?</p>;
};

const Q2Input = () => {
  return <input type="text" />;
};
