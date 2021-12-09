import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import {} from "../Helpers/QuestionBank";
import "../App.css";

const EndScreen = ({ age }) => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  const yourAge = (age) => {
    let realAge = Math.ceil((score + parseInt(age)) / 2);
    if (realAge < 5) {
      return "Toddler";
    } else if (5 < realAge && realAge < 12) {
      return "Kid";
    } else if (12 < realAge && realAge < 19) {
      return "Teen";
    } else if (19 < realAge && realAge < 25) {
      return "You are a young adult";
    } else {
      return "Mature";
    }
  };
  return (
    <div className="EndScreen">
      <h1>Your real age: {Math.ceil((score + parseInt(age)) / 2)}</h1>
      {}
      <h2>{yourAge(age)}</h2>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
