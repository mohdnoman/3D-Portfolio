import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl  max-sm:mt-[70px]   sm:leading-snug text-center font-[300] neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I'm
        <span className="font-semibold mx-2 text-white">Mohd Noman</span>
        👋
        <br />A Frontend Developer From India
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-[300] sm:text-xl text-center">
          Mastered multiple skills in recent years,
          <br /> now a proficient developer.
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          Know more
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-[300] text-center sm:text-xl">
          Crafted projects for hands-on experience <br /> in building scalable
          applications.
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Visit my portfolio
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-[300] sm:text-xl text-center">
          Need a project or a developer?
          <br /> I'm just a few keystroks away
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Let's talk
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
