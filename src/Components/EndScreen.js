import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import {} from "../Helpers/QuestionBank";
import "../App.css";
import sgh from "../assets/sgh.png";
import csw from "../assets/csw.png";
import hjh from "../assets/hjh.png";
import jds from "../assets/jds.png";
import jy from "../assets/jy.png";
import ksb from "../assets/ksb.png";
import o2n from "../assets/o2n.png";
import aa from "../assets/aa.png";

const EndScreen = ({ age }) => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  const yourAge = (age) => {
    let realAge = score;
    console.log(score);
    if (realAge <= 2) {
      return (
        <div className="player">
          <h1>Seong Gi-hun</h1> <img src={sgh} alt="" />
          <h2>Gentle, honest, brave and strong</h2>
          <h2>Squid Game Player Number 456</h2>
          <p>
            Seong Gi-hun once lived happily with his family. He lost his job as
            a chauffeur, which he worked as for 10 years, got into debts and
            gambling, failed at starting his own businesses, and got divorced.
            He struggled a lot financially, was helpless, and depended on his
            mother for financial support. He met a mysterious man on the metro
            who gave him a card. He then participated in the Game. "Your
            personality is similar in some ways to the personality of Seong
            Gi-hun in that you have broader views than most people. You are
            clever and think critically. However, you are a bit "lazy" and
            "lay-back," which caused you not to think about or not care about
            important things in life. You do care about society, want to help
            more people, and are very good to your family. This shows that you
            are kind-hearted and friendly."
          </p>
        </div>
      );
    } else if (2 < realAge && realAge <= 4) {
      return (
        <div className="player">
          <h1>Oh II-nam</h1> <img src={o2n} alt="" />
          <h2>Having great wisdom and courage but doesn't show easily</h2>
          <h2>Squid Game Player Number 001</h2>
          <p>
            Oh Il-nam was an old man in his 70s. He had a tumor in his brain.
            Right from the beginning with the first game “Red Light, Green
            Light,” he has shown an attitude of carefree. He thinks that life is
            short and adventurous. He rather put in all he’s got into the game
            than being scared by it. He also showed his wisdom and philosophical
            thinking in “Tug-of-Wall” and the “Marble Game.” You have a hint of
            Oh Il-nam in you in that you have great wisdom, and are meant to do
            great things. On the outside, you are practical and prudent. You
            think orderly and thoroughly before coming to a decision. You do not
            think about anything that is not realistic. As for interpersonal
            relationships, you can accurately make judgements about people you
            meet and make a move.
          </p>
        </div>
      );
    } else if (4 < realAge && realAge <= 6) {
      return (
        <div className="player">
          <h1>Kang Sae-byeok</h1> <img src={ksb} alt="" />
          <h2>Stubborn and toughen up, but has a tender heart</h2>
          <h2>Squid Game Player Number 067</h2>
          <p>
            Kang Sae-byeok was a young girl who escaped from North Korea. She
            pickpocketed to survive. She was brave, yet had a soft side. She
            lost contact with her parents, life has been really tough and
            miserable. She has a younger brother who’s in the children’s home.
            She wanted to be reunited with her family by giving her all into the
            Squid Game. You have a hint of Kang Sae-byeok in you in that you are
            independent and strong-minded. You do not give in to the main
            streams, which at times created conflicts between you and others.
            You do not show your emotions, and people find you cold and hard to
            approach. In reality, you know how to show gratitude, love your
            family, and is very responsible.
          </p>
        </div>
      );
    } else if (6 < realAge && realAge <= 10) {
      return (
        <div className="player">
          <h1>Ji-yeong</h1> <img src={jy} alt="" />
          <h2>Quiet, introverted and ineloquent</h2>
          <h2>Squid Game Player Number 240</h2>
          <p>
            Ji-yeong was small, gentle and quiet. She didn’t have any family or
            friends. She didn’t have any goals or dreams. She didn’t even show
            much desire towards the large amount of prize money. She became
            friends with another female player of the Game, Kang Sae-byeok. She
            gave the chance to survive to Kang Sae-byeok in the Marble Game. You
            have a similar personality to Ji-yeong in that you like to be alone,
            you are unique and don't fit into the mainstream. In reality, you
            have a colorful heart, full of imagination, thoughtful, and
            creative. At the same time, you don't feel safe and you desire to be
            understood and protected.
          </p>
        </div>
      );
    } else if (10 < realAge && realAge <= 14) {
      return (
        <div className="player">
          <h1>Jang Deok-su </h1> <img src={jds} alt="" />
          <h2>Well built and strong</h2>
          <h2>Squid Game Player Number 101</h2>
          <p>
            Jang Deok-su was a gangster. Many of the members of the gang joined
            the Game after losing all of their organization’s money and ran
            away. He was strong in combats, and can even kill someone
            barehanded. He was aggressive and hated being betrayed. He is also
            clever. Your personality and the personality of Jang Deok-su have
            some similarities in that you are fearless and without worries. You
            are easily excited and attracted to things that are new to you. You
            would give up high positions at work or in society for freedom. You
            are very loyal to the people around you.
          </p>
        </div>
      );
    } else if (14 < realAge && realAge <= 16) {
      return (
        <div className="player">
          <h1>Hwang Jun-ho</h1> <img src={hjh} alt="" />
          <h2>Courageously striving forward without ceasing</h2>
          <h2>Squid Game Player Number None</h2>
          <p>
            Cho Sang-woo studied business administration at the Seoul National
            University. He was a childhood neighbor of Seong Gi-hun. He was
            gifted since little and look successful on the outside. He worked at
            a big company right after he graduated. He looked successful, but in
            reality, stole money from his company and was greatly in debt.
            Hopeless with life, he decided to participate in the Squid Game. You
            and Cho Sang-woo have similarities in your personalities in that you
            have great ambitions underneath your sharp looks. You would not miss
            any opportunities to climb higher and become better in society. This
            helps you easily climb up to the top in your profession. It is also
            very hard for others to defeat you.
          </p>
        </div>
      );
    } else if (16 < realAge && realAge <= 20) {
      return (
        <div className="player">
          <h1>Cho Sang-woo</h1> <img src={csw} alt="" />
          <h2>Clever and full of stratagies</h2>
          <h2>Squid Game Player Number 218</h2>
          <p>
            Cho Sang-woo studied business administration at the Seoul National
            University. He was a childhood neighbor of Seong Gi-hun. He was
            gifted since little and look successful on the outside. He worked at
            a big company right after he graduated. He looked successful, but in
            reality, stole money from his company and was greatly in debt.
            Hopeless with life, he decided to participate in the Squid Game. You
            and Cho Sang-woo have similarities in your personalities in that you
            have great ambitions underneath your sharp looks. You would not miss
            any opportunities to climb higher and become better in society. This
            helps you easily climb up to the top in your profession. It is also
            very hard for others to defeat you.
          </p>
        </div>
      );
    } else {
      return (
        <div className="player">
          <h1>Abdul Ali</h1>
          <img src={aa} alt="" />
          <h2>Innocent, natural, kind and strong-minded</h2>
          <h2>Squid Game Player Number 199</h2>
          <p>
            Abdul Ali was an illegal laborer from Pakistan. He was simple, kind,
            brave and loyal. He valued his family a lot. He came to South Korea
            hoping to provide his family with a better life. After an accident
            in his workplace, his employer pretended nothing had happened and
            even refused to pay him for half a year. Then he participated in the
            Squid Game. You have a hint of Abdul Ali in you in that you have a
            strong mind when facing tasks at school or work. You are very
            efficient and capable. You always do your best in every task given
            to you. You are very responsible towards your family, you are
            willing to put in time and effort for your family.
          </p>
        </div>
      );
    }
  };
  return (
    <div className="EndScreen">
      {/* <h1>Your real age: {Math.ceil((score + parseInt(age)) / 2)}</h1> */}
      {}
      <div>{yourAge(age)}</div>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
