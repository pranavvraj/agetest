import React, { useState, useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import "../App.css";

const Mainmenu = ({ age, setAge }) => {
  const { gameState, setGameState } = useContext(QuizContext);
  const [error, setError] = useState(false);
  const [ageError, setAgeError] = useState(false);

  console.log(gameState);
  return (
    <div className="menu">
      <h2>What’s your age?</h2>

      <input
        onChange={(e) => {
          setAge(e.target.value);
        }}
        value={age}
        type="number"
        placeholder="Enter age"
        min="1"
        step="1"
      />

      {error && <p>Enter your age to proceed</p>}
      {ageError && <p>Enter valid age</p>}

      <button
        onClick={() => {
          if (age) {
            if (age < 1) {
              setAgeError(true);
            } else {
              setGameState("quiz");
              setError(false);
            }
          } else setError(true);
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default Mainmenu;
