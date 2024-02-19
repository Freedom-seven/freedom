/* eslint-disable array-callback-return */
import React from "react";

import "./resume.css";
import Data from "./Data";
import Card from "./Card";
import { AnimatedTitle } from "../animation/TextAnimation";

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <AnimatedTitle text="Experience" />

      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  role={val.role}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
