/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./portfofio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [displayLimit, setDisplayLimit] = useState(20);
  const [displayMore, setDisplayMore] = useState(false);
  const [active, setActive] = useState("All");

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
    setActive(categoryItem);
  };

  useEffect(() => {
    setDisplayMore(items.length > displayLimit);
  }, [items, displayLimit]);

  const handleDisplayMore = () => {
    setDisplayLimit(displayLimit + 20);
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        <span
          className={`work__item ${active === "All" ? "active" : ""}`}
          onClick={() => setItems(Menu)}
        >
          All
        </span>
        <span
          className={`work__item ${active === "Web" ? "active" : ""}`}
          onClick={() => filterItem("Web")}
        >
          Websites
        </span>
        <span
          className={`work__item ${active === "Mobile" ? "active" : ""}`}
          onClick={() => filterItem("Mobile")}
        >
          Mobile Apps
        </span>
        <span
          className={`work__item ${active === "Design" ? "active" : ""}`}
          onClick={() => filterItem("Design")}
        >
          Designs
        </span>
      </div>

      <div className="work__container grid">
        {items.slice(0, displayLimit).map((elem) => {
          const { id, image, title, category, link, github_link } = elem;
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
                {github_link && (
                  <a href={github_link} className="work__buttons">
                    <i className="icon-social-github work__button-icon"></i>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {displayMore && (
        <button className="work__view-more-btn" onClick={handleDisplayMore}>
          <p>View More</p>
          <svg
            stroke-width="4"
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 5l7 7m0 0l-7 7m7-7H3"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
          </svg>
        </button>
      )}
      {items === Menu && (
        <div class="card">
          <p class="card-text">
            These projects demonstrate my skills in cross platform development,
            team collaboration, and utilizing various technologies such as HTML,
            CSS, JavaScript, React, Firebase, React native and API calls. They
            show my ability to take projects from conception to completion, and
            my passion for using technology to create innovative solutions.
          </p>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
