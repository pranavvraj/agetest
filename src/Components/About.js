import React from "react";

const About = ({ myRef }) => {
  return (
    <div ref={myRef} className="about">
      <div>
        <h3>What’s the Age Test?</h3>
        <p>
          The Age Test helps you determine your real age based on not your birth
          date but how you act. Sounds interesting? All you need to do is answer
          24 quick questions to get your result.
        </p>
      </div>
      <div>
        <h3>What Are the Questions Based On?</h3>
        <p>
          The set comprises 24 basic questions to assess and evaluate how you
          feel and think, based on your personality.
        </p>
      </div>
      <div>
        <h3>When Will I Get the Result?</h3>
        <p>
          The result automatically gets displayed once you answer all the 24
          questions in the test; it’s that simple. However, if you want to know
          your “correct” age, ensure you answer the questions honestly.
        </p>
      </div>
      <div>
        <h3>Can I Share My Result With My Friends?</h3>

        <p>
          Ofcourse, you can. We urge you to share your results with your friends
          and invite them to try the Age Test too. We bet they’ll love it.
        </p>
      </div>
    </div>
  );
};

export default About;
