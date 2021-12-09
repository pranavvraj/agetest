import React, { useState,  useRef } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Quiz from "./Components/Quiz";
import Mainmenu from "./Components/Mainmenu";
import EndScreen from "./Components/EndScreen";
import About from "./Components/About";
import Footer from "./Components/Footer";
import {FacebookShareButton, TwitterShareButton, WhatsappShareButton,PinterestShareButton, TumblrShareButton, VKShareButton} from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon, PinterestIcon, TumblrIcon, VKIcon } from "react-share";
import { QuizContext } from "./Helpers/Contexts";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [age, setAge] = useState("");
    const myRef = useRef(null);

  return (
    <div className="App">
      <Navbar myRef={myRef} />
      <div className="title">
        <h1>Age Test</h1>
        <p>Let’s Find Out How Old You Are!</p>
      </div>
      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        {gameState === "menu" && <Mainmenu age={age} setAge={setAge} />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen age={age} />}
      </QuizContext.Provider>
      <div className="share">
        <h3>
          Share Your Findings With Your Friends and Invite Them to Try the Age
          Test!
        </h3>
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
      </div>
      <About myRef={myRef}/>
      <Footer />
    </div>
  );
}

export default App;
