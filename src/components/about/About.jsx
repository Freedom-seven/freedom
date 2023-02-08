/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./about.css";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Image from "../../assets/avatar-20.png";
// import AboutBox from "./AboutBox";

const About = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [javascript, setJavascript] = useState(75);
  const [react, setReact] = useState(90);
  const [html, setHtml] = useState(90);
  const [css, setCss] = useState(90);
  const [reactNative, setReactNative] = useState(90);
  const [node, setNode] = useState(80);
  const [express, setExpress] = useState(60);
  const [mongoDB, setMongoDB] = useState(60);
  const [git, setGit] = useState(90);

  const handleDownload = () => {
    setIsDownloaded(true);
    toast("File downloaded successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // const handleClick = () =>
  //   toast("Download will soon being", {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hello! My name is Nanewortor Patrick Freedom and I am a software
              developer. I have a wealth of experience in website design and
              development, with a particular focus on customizing and building
              websites from the ground up. Additionally, I have expertise in
              mobile development and am continuously learning and expanding my
              skills in back-end development. I am passionate about creating
              intuitive and user-friendly web and mobile experiences that help
              businesses and organizations reach their goals. Whether it's
              building a new website from scratch or updating and improving an
              existing one, I am always up for a challenge. In my free time, I
              enjoy staying up-to-date on the latest developments in the tech
              industry and learning about new programming languages and
              technologies. I am always looking for opportunities to grow and
              improve as a developer, and am excited to see where my career
              takes me next.
            </p>
            <a
              href="../../assets/Freedom Resume.pdf"
              download="Freedom's resume.pdf"
              onClick={handleDownload}
              className="btn"
            >
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">HTML</h3>
                <span className="skills__number">{html}%</span>
              </div>

              <div className="skills__bar">
                <progress
                  className={`skills__percentage development ${
                    html >= 75 ? "green" : html >= 50 ? "orange" : "red"
                  }`}
                  value={html}
                  max="100"
                ></progress>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">CSS</h3>
                <span className="skills__number">{css}%</span>
              </div>

              <div className="skills__bar">
                <progress
                  className={`skills__percentage development ${
                    css >= 75 ? "green" : css >= 50 ? "orange" : "red"
                  }`}
                  value={css}
                  max="100"
                ></progress>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__number">{javascript}%</span>
              </div>

              <div className="skills__bar">
                <progress
                  className={`skills__percentage development ${
                    javascript >= 75
                      ? "green"
                      : javascript >= 50
                      ? "orange"
                      : "red"
                  }`}
                  value={javascript}
                  max="100"
                ></progress>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React</h3>
                <span className="skills__number">{react}%</span>
              </div>

              <div className="skills__bar">
                <progress
                  className={`skills__percentage development ${
                    react >= 75 ? "green" : react >= 50 ? "orange" : "red"
                  }`}
                  value={react}
                  max="100"
                ></progress>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React Native</h3>
                <span className="skills__number">{reactNative}%</span>
              </div>

              <div className="skills__bar">
                <progress
                  className={`skills__percentage development ${
                    reactNative >= 75
                      ? "green"
                      : reactNative >= 50
                      ? "orange"
                      : "red"
                  }`}
                  value={reactNative}
                  max="100"
                ></progress>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Node.js</h3>
                <span className="skills__number">{node}%</span>
              </div>

              <div className="skills__bar">
                <progress
                  className={`skills__percentage development ${
                    node >= 75 ? "green" : node >= 50 ? "orange" : "red"
                  }`}
                  value={node}
                  max="100"
                ></progress>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">ExpressJs</h3>
                <span className="skills__number">{express}%</span>
              </div>

              <div className="skills__bar">
                <progress
                  className={`skills__percentage development ${
                    express >= 75 ? "green" : express >= 50 ? "orange" : "red"
                  }`}
                  value={express}
                  max="100"
                ></progress>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">MongoDB</h3>
                <span className="skills__number">{mongoDB}%</span>
              </div>

              <div className="skills__bar">
                <progress
                  className={`skills__percentage development ${
                    mongoDB >= 75 ? "green" : mongoDB >= 50 ? "orange" : "red"
                  }`}
                  value={mongoDB}
                  max="100"
                ></progress>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Git</h3>
                <span className="skills__number">{git}%</span>
              </div>

              <div className="skills__bar">
                <progress
                  className={`skills__percentage development ${
                    git >= 75 ? "green" : git >= 50 ? "orange" : "red"
                  }`}
                  value={git}
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <AboutBox /> */}
    </section>
  );
};

export default About;
