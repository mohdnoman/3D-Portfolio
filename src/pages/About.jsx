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
          Hello! I'm Mohd Noman, a student rocking the BSc in Data Science at
          IIT Madras and a budding web wizard. Let me share my story with you.
          <br />
          <br />
          It all started with a big question: how do websites do their thing?
          Luckily, I have an amazing cousin who's a whiz at coding. They became
          my guide, showing me the ropes of HTML, CSS, and JavaScript. Together,
          we unraveled the mystery behind the web.
          <br />
          <br />
          Being a tech enthusiast, I couldn't get enough. Responsive websites
          became my playground. The magic happened when I saw my creation adapt
          to different screens smoothly. It felt like I cracked a secret code!
          <br />
          <br />
          Inspiration struck me from great minds like Kunal Shah and Naval
          Ravikant. Their stories of tech brilliance motivated me to not just
          write code but to create digital experiences that people love.
          <br />
          <br />
          Currently, my days are filled with classes at IIT Madras, where I'm
          knee-deep in data science. But my nights? They're for coding
          adventures, for tackling challenges, and turning each problem into a
          learning opportunity.
          <br />
          <br />
          Now, as a frontend developer, I'm all about making websites that not
          only work but also look stunning. React is my buddy, and design is my
          playground. I believe in the power of combining data skills with
          frontend magic.
          <br />
          <br />
          So, let's team up! Whether it's navigating the world of React or
          crafting beautiful designs, I'm up for the challenge. Join me in this
          exciting journey where every code line is a step forward, and every
          project is a chance to make the web a cooler place.
          <br />
          <br />
          Ready for some web magic? I am too!
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About