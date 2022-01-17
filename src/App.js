import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Quiz from "./Components/Quiz";
import Mainmenu from "./Components/Mainmenu";
import EndScreen from "./Components/EndScreen";
import About from "./Components/About";
import Footer from "./Components/Footer";
import sg from "./assets/sg logo.png";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  TumblrShareButton,
  VKShareButton,
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  PinterestIcon,
  TumblrIcon,
  VKIcon,
} from "react-share";
import { QuizContext } from "./Helpers/Contexts";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  // const [age, setAge] = useState("");
  const myRef = useRef(null);

  return (
    <div
      className="App"
      style={{ transform: `translateY(${offsetY * 0.5}px)` }}
    >
      <Navbar myRef={myRef} />
      {/* <div className="title"> */}
      <div className="ad">Advertisement</div>
      <div className="logocontainer">
        <img className="logoimg" src={sg} alt="" />
      </div>

      {/* </div> */}
      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        {gameState === "menu" && <Mainmenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
      <div className="share">
        <h2>
          Share Your Findings With Your Friends and Invite Them to Try the Age
          Test!
        </h2>
        <div className="sharebtns">
          <FacebookShareButton
            url="https://age-test.com"
            quote="Age Test. What is your real age ?"
          >
            <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
          </FacebookShareButton>
          <WhatsappShareButton
            url="https://age-test.com"
            title="Age Test. What is your real age ?"
          >
            <WhatsappIcon logoFillColor="white" round={true}></WhatsappIcon>
          </WhatsappShareButton>
          <TwitterShareButton
            url="https://age-test.com"
            title="Age Test. What is your real age ?"
          >
            <TwitterIcon logoFillColor="white" round={true}></TwitterIcon>
          </TwitterShareButton>
          <PinterestShareButton
            url="https://age-test.com"
            description="Age Test. What is your real age ?"
          >
            <PinterestIcon logoFillColor="white" round={true}></PinterestIcon>
          </PinterestShareButton>
          <TumblrShareButton
            url="https://age-test.com"
            caption="Age Test. What is your real age ?"
          >
            <TumblrIcon logoFillColor="white" round={true}></TumblrIcon>
          </TumblrShareButton>
          <VKShareButton
            url="https://age-test.com"
            title="Age Test. What is your real age ?"
          >
            <VKIcon logoFillColor="white" round={true}></VKIcon>
          </VKShareButton>
        </div>
        <div className="ad">Advertisement</div>
      </div>
      <About myRef={myRef} />
      <div className="ad">Advertisement</div>
      <Footer />
    </div>
  );
}

export default App;
