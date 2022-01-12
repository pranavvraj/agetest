import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import {} from "../Helpers/QuestionBank";
import "../App.css";
import sgh from "../assets/sgh.png";

const EndScreen = ({ age }) => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  const yourAge = (age) => {
    let realAge = Math.ceil((score + parseInt(age)) / 2);
    if (realAge < 2) {
      return <img className="sghimg" src={sgh} alt="" />;
    } else if (2 < realAge && realAge < 4) {
      return "Kid ";
    } else if (4 < realAge && realAge < 6) {
      return "Teen !";
    } else if (6 < realAge && realAge < 8) {
      return "You are a young adult !";
    } else {
      return "You are Mature !";
    }
  };
  return (
    <div className="EndScreen">
      <h1>Your real age: {Math.ceil((score + parseInt(age)) / 2)}</h1>
      {}
      <div>{yourAge(age)}</div>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
