import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import "../App.css";

const Mainmenu = ({ age, setAge }) => {
  const { gameState, setGameState } = useContext(QuizContext);
  // const [error, setError] = useState(false);
  // const [ageError, setAgeError] = useState(false);

  console.log(gameState);
  return (
    <div className="menu">
      <h1>Which Squid Game player are you ?</h1>
      <p>
        Squid Game is a Netflix television series directed by Hwang Dong-hyuk.
        It is a South Korean original television series that stars Lee Jung-jae
        and Park Hae-soo. It was released worldwide on September 17, 2021. The
        series was about a few hundred people who felt trapped in their
        miserable lives participated in a survival game to win 45.6 billion
        Korean won. After it was released, it jumped to the top of Netflix's
        most popular non-English original series chart. Temptation of wealth,
        the weaknesses of human nature, family and friendships, life or death
        choices...This series revealed the darkest side of human nature and
        society, which might as well be the reality. If this game of life and
        death really does exist, would you join? Are you confident to win the
        games and get the prize money? Come take the test and find out which
        character you are and what kind of story you have!
      </p>
      {/* <h2>What’s your age?</h2>

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
      {ageError && <p>Enter valid age</p>} */}

      <button
        onClick={() => {
          // if (age) {
          //   if (age < 1) {
          //     setAgeError(true);
          //   } else {
          setGameState("quiz");
          //     setError(false);
          //   }
          // } else setError(true);
        }}
      >
        Start
      </button>
    </div>
  );
};

export default Mainmenu;
