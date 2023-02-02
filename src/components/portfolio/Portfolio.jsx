/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./portfofio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          All
        </span>
        <span className="work__item" onClick={() => filterItem("Web")}>
          Websites
        </span>
        <span className="work__item" onClick={() => filterItem("Mobile")}>
          Mobile Apps
        </span>
        <span className="work__item" onClick={() => filterItem("Design")}>
          Designs
        </span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, link, link2 } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <div className="work__btns">
                {link && (
                  <a href={link} className="work__button">
                    <i className="icon-link work__button-icon"></i>
                  </a>
                )}
                {link2 && (
                  <a href={link2} className="work__buttons">
                    <i className="icon-social-github work__button-icon"></i>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
