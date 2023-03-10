import React from "react";
import "./home.css";
import Avatar1 from "../../assets/avatar-10.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Avatar1} alt="" className="home__img" />
        <h1 className="home__name">Nanewortor Patrick Freedom</h1>
        <span className="home__education">I'm a Software developer</span>

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
