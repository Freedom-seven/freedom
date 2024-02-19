import React from "react";
import { motion } from "framer-motion";

import "./home.css";
import Avatar1 from "../../assets/avatar-10.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import { TextTitleAnimation, TextAnimation } from "../animation/TextAnimation";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <motion.img
          src={Avatar1}
          alt=""
          className="home__img"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />

        <TextAnimation sentence="Nanewortor Patrick Freedom" />

        <TextTitleAnimation sentence="I'm a Software developer" />

        <HeaderSocials />

        <a href="#contact" className="btn">
          Hire Me
        </a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
};

export default Home;
