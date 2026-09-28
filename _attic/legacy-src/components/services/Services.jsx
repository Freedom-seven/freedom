import React from "react";
import "./services.css";
import Image2 from "../../assets/service-2.svg";
import { AnimatedTitle } from "../animation/TextAnimation";

const data = [
  {
    id: 1,
    image: Image2,
    title: "Front-End Development",
    description:
      "Design and implement user-friendly features using HTML, CSS, JavaScript and React to create visually appealing and interactive web pages.",
  },
  {
    id: 2,
    image: "https://cdn-icons-png.flaticon.com/512/5608/5608615.png",
    title: "Mobile Development",
    description:
      "Design and develop mobile applications for iOS and Android platforms using languages such as React Native.",
  },
  {
    id: 3,
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103751.png",
    title: "Back-End Development",
    description:
      "Design and implement server-side logic, database management, and API creation using languages such as ExpressJs, MongoDB and Node.js to power the functionality of web and mobile applications.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <AnimatedTitle text="Services" />

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
