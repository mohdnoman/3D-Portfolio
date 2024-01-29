import React from 'react'
import { skills } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Mohd Noman
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Curious frontend developer who loves making websites look great and
          work smoothly. I started by figuring out the basics of HTML, and now,
          I'm on a lifelong journey of learning and creating. Join me as I turn
          ideas into awesome digital spaces!
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skill's</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">My Story</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          Hey there! I'm Mohd Noman, a passionate frontend developer who
          embarked on a thrilling journey into the world of web development.
          <br /> <br /> My story begins with a simple curiosity about how
          websites come to life. I vividly remember my first attempt at coding,
          where HTML felt like deciphering a secret code. Back then, the idea of
          creating a visually appealing website seemed like a distant dream.
          <br /> <br /> But dreams become reality with determination, and my
          determination led me to delve deeper into the realm of web
          development. I embraced the challenges, navigating through the
          intricate landscapes of HTML, CSS, and JavaScript.
          <br /> <br /> The turning point for me was the realization that
          learning wasn't just about mastering syntax; it was about creating
          experiences. Armed with this perspective, I dived headfirst into
          projects, pushing my boundaries and refining my skills.
          <br /> <br /> The journey wasn't always smooth. There were late nights
          filled with debugging sessions, but those moments became my greatest
          teachers. Each challenge I faced was a stepping stone towards frontend
          mastery.
          <br /> <br /> One of the pivotal moments in my learning journey was
          when I built my first responsive website. Witnessing my creation adapt
          seamlessly to different screen sizes was a euphoric experience. It was
          at that moment I knew I was on the right path.
          <br /> <br /> To upskill myself, I explored modern frameworks like
          React and honed my design skills to create not just functional but
          visually stunning interfaces. The dynamic world of frontend
          development became my canvas, and I was the artist bringing ideas to
          life.
          <br /> <br /> Now, as a seasoned frontend developer, I take pride in
          my ability to craft user-centric, responsive designs that seamlessly
          blend form and function. My journey has taught me that learning is a
          perpetual adventure, and each line of code is an opportunity to
          evolve.
          <br /> <br /> Join me on this exciting journey, where every project is
          a new chapter, and every challenge is a chance to innovate. Let's
          build captivating digital experiences together!
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About