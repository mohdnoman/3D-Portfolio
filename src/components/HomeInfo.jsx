import React from "react";
import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box ">
    <p className="font-medium sm:text-xl text-center "> {text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain " />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I'm
      <span className="font-semibold mx-2 text-white">Mohd Noman</span>
      👋
      <br />A Frontend Developer From India
    </h1>
  ),
  2: (
    <InfoBox
      text={
        "Learnded multiple skill's over the past few years and became proficient developer."
      }
      link={"./about"}
      btnText={"Know more"}
    />
  ),
  3: (
    <InfoBox
      text={
        "Created multiple projects to get hendson experience in developing scalable applications"
      }
      link={"./projects"}
      btnText={"Visite my portfolio"}
    />
  ),
  4: (
    <InfoBox
      text={
        "Need a project done or looking for a dev? I'm just a few keystroks away"
      }
      link={"./contact"}
      btnText={"Let's talk "}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
