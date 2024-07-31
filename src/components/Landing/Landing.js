import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";
import logo from "../../assets/icons/SVG.png";
import svg1 from "../../assets/images/SVG.png";
import svg2 from "../../assets/images/SVG (1).png";
import back1 from "../../assets/images/Background+Blur (1).png";
import back2 from "../../assets/images/Background+Blur.png";
import ss from "../../assets/images/image.png";
import wrong from "../../assets/images/Container.png";
import right from "../../assets/images/Container (1).png";
import img1 from "../../assets/images/image (1).png";
import img2 from "../../assets/images/image (2).png";
import icon from "../../assets/icons/Background+Border.png";
import icon1 from "../../assets/icons/Background+Border (1).png";
import icon2 from "../../assets/icons/Background+Border (2).png";
import icon3 from "../../assets/icons/Background+Border (3).png";
import icon4 from "../../assets/icons/Background+Border (4).png";
import icon5 from "../../assets/icons/Background+Border (5).png";
import icon6 from "../../assets/icons/Background+Border (6).png";
import icon7 from "../../assets/icons/Background+Border (7).png";
import icon8 from "../../assets/icons/Background+Border (8).png";
import icon9 from "../../assets/icons/Background+Border (9).png";
import icon10 from "../../assets/icons/Background+Border (10).png";
import icon11 from "../../assets/icons/Background+Border (11).png";
import icon12 from "../../assets/icons/Background+Border (12).png";
import icon13 from "../../assets/icons/Background+Border (13).png";
import icon14 from "../../assets/icons/Background+Border (14).png";
import icon15 from "../../assets/icons/Background+Border (15).png";
import iconn from "../../assets/icons/Background+Border().png";
import back from "../../assets/images/Screenshot.png";
import bac from "../../assets/images/Background.png";
import last from "../../assets/images/last.png";

export default function Landing() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/login?form=signIn");
  };

  const handleCreateFormBotClick = () => {
    navigate("/login?form=signUp");
  };

  return (
    <div>
      <div className="navbar">
        <div className="nav-left">
          <img src={logo} alt="logo" />
          <div className="sitename">FormBot</div>
        </div>
        <div className="nav-right">
          <div className="sign-in-button">
            <button className="button-1" onClick={handleSignInClick}>
              Sign In
            </button>
            <button className="button-2" onClick={handleCreateFormBotClick}>
              Create a FormBot
            </button>
          </div>
        </div>
      </div>
      <div className="first-board">
        <img className="svg1" src={svg1} alt="svg1" />
        <img className="svg2" src={svg2} alt="svg2" />
        <div className="board">
          <h2>Build advanced chatbots visually</h2>
          <p>
            Typebot gives you powerful blocks to create unique chat experiences.
            Embed them anywhere on your web/mobile apps and start collecting
            results like magic.
          </p>
        </div>
        <button className="button-3" onClick={handleCreateFormBotClick}>
          Create a FormBot for free
        </button>
      </div>
      <div className="screenshot">
        <img src={back1} className="background-1" alt="background1" />
        <img src={back2} className="background-2" alt="background2" />
        <img src={ss} className="ss" alt="screenshot" />
      </div>
      <div className="second-board">
        <h2>Replace your old school forms with chatbots</h2>
        <p>
          Typebot is a better way to ask for information. It leads to an
          increase in customer satisfaction and retention and multiply by 3 your
          conversion rate compared to classical forms.
        </p>
        <img src={wrong} className="wrong" alt="wrong" />
        <img src={right} className="right" alt="right" />
      </div>
      <div className="third-board">
        <div className="first-half">
          <img src={img1} alt="img1" />
          <div>
            <h3>Easy building experience</h3>
            <p>
              All you have to do is drag and drop blocks to create your app.
              Even if you have custom needs, you can always add custom code.
            </p>
          </div>
        </div>
        <div className="last-half">
          <div>
            <h3>Embed it in a click</h3>
            <p>
              Embedding your typebot in your applications is a walk in the park.
              Typebot gives you several step-by-step platform- specific
              instructions. Your typebot will always feel "native".
            </p>
          </div>
          <img src={img2} alt="img2" />
        </div>
      </div>
      <div className="fourth-board">
        <div className="left-div"></div>
        <div className="right-div"></div>
        <div className="first-row">
          <img src={icon} alt="icon" />
          <img src={icon1} alt="icon1" />
          <img src={icon2} alt="icon2" />
          <img src={icon3} alt="icon3" />
          <img src={icon4} alt="icon4" />
          <img src={icon6} alt="icon6" />
          <img src={icon7} alt="icon7" />
          <img src={icon8} alt="icon8" />
        </div>
        <div className="second-row">
          <img src={iconn} alt="iconn" />
          <img src={icon9} alt="icon9" />
          <img src={icon10} alt="icon10" />
          <img src={icon11} alt="icon11" />
          <img src={icon12} alt="icon12" />
          <img src={icon13} alt="icon13" />
          <img src={icon14} alt="icon14" />
          <img src={icon15} alt="icon15" />
        </div>
        <div className="third-row">
          <h3>Integrate with any platform</h3>
          <p>
            Typebot offers several native integrations blocks as well as
            instructions on how to embed typebot on particular platforms
          </p>
        </div>
      </div>
      <div className="fifth-board">
        <h3>Collect results in real-time</h3>
        <p>
          One of the main advantage of a chat application is that you collect
          the user's responses on each question. You won't lose any valuable
          data.
        </p>
        <img src={bac} alt="bac" />
      </div>
      <div className="sixth-board">
        <h3>And many more features</h3>
        <p>Typebot makes form building easy and comes with powerful features</p>
        <img className="back" src={back} alt="back" />
      </div>
      <div className="seventh-board">
        <img className="svg_1" src={svg1} alt="svg1" />
        <img className="svg_2" src={svg2} alt="svg2" />
        <h3>Improve conversion and user engagement with FormBots </h3>
        <button className="button-2" onClick={handleCreateFormBotClick}>
          Create a FormBot
        </button>
        <p>No trial. Generous free plan.</p>
      </div>
      <div className="eight-board">
        <img src={last} alt="last" />
      </div>
    </div>
  );
}
