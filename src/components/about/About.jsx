/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./about.css";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Image from "../../assets/avatar-20.png";
import { AnimatedTitle } from "../animation/TextAnimation";
import ProgressBar from "../animation/ProgressBar";
import Speaker from "../animation/Speaker";
// import AboutBox from "./AboutBox";

const skills = [
  { name: "HTML", level: 98 },
  { name: "CSS", level: 98 },
  { name: "JavaScript", level: 95 },
  { name: "ReactJs", level: 95 },
  { name: "NextJs", level: 95 },
  { name: "React Native", level: 95 },
  { name: "Node.js", level: 90 },
  { name: "ExpressJs", level: 90 },
  { name: "MongoDB", level: 80 },
  { name: "Git", level: 98 },
];

const About = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  // Functions for handling download button click event and showing a notification message
  function handleDownloadClick(event) {
    setIsDownloaded(!isDownloaded);
    if (isDownloaded) {
      event.preventDefault(); // Prevent the file from being downloaded
      toast.info("Resume already downloaded!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("Resume downloaded successfully!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <section className="about container section" id="about">
      <AnimatedTitle text="About Me" />

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <Speaker />
            <p className="about__description">
              Greetings! I'm Nanewortor Patrick Freedom, a passionate software
              developer who thrives on challenges and constantly seeks to
              elevate the digital world. My journey in the tech realm has been
              marked by a deep-rooted fascination for website design and
              development, with a special emphasis on crafting bespoke websites
              from scratch. My expertise extends to mobile development, and I'm
              on a perpetual quest to broaden my horizons in back-end
              development. I take immense pride in creating intuitive and
              user-centric web and mobile experiences that empower businesses
              and organizations to achieve their objectives. Whether it's
              architecting a brand-new website or revamping an existing one, I
              relish every opportunity to push the boundaries of what's
              possible. In my downtime, you'll find me immersing myself in the
              latest tech trends, exploring new programming languages, and
              expanding my technological repertoire. I'm driven by a relentless
              pursuit of growth and improvement as a developer, and I eagerly
              anticipate the exciting twists and turns that await me in my
              career journey. Join me as I continue to navigate the dynamic
              landscape of technology, one line of code at a time!
            </p>
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              download
              onClick={handleDownloadClick}
              className="btn"
            >
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            {skills.map((skill) => (
              <ProgressBar
                key={skill.name}
                skill={skill.name}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      </div>

      {/* <AboutBox /> */}
    </section>
  );
};

export default About;
