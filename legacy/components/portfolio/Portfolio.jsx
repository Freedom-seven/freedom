import React, { useState, useEffect } from "react";
import "./portfofio.css";
import Menu from "./Menu";
import { AnimatedTitle } from "../animation/TextAnimation";

const Portfolio = () => {
  const [displayLimit, setDisplayLimit] = useState(20);
  const [displayMore, setDisplayMore] = useState(false);
  const [active, setActive] = useState("All");

  useEffect(() => {
    const activeItems = Menu.filter(
      (elem) => active === "All" || elem.category === active
    );
    setDisplayMore(activeItems.length > displayLimit);
  }, [displayLimit, active]);

  const handleDisplayMore = () => {
    setDisplayLimit(displayLimit + 10);
  };

  return (
    <section className="work container section" id="work">
      <AnimatedTitle text="Recent Works" />

      <div className="work__filters">
        <span
          className={`work__item ${active === "All" ? "active" : ""}`}
          onClick={() => setActive("All")}
        >
          All
        </span>
        <span
          className={`work__item ${active === "Web" ? "active" : ""}`}
          onClick={() => setActive("Web")}
        >
          Websites
        </span>
        <span
          className={`work__item ${active === "Mobile" ? "active" : ""}`}
          onClick={() => setActive("Mobile")}
        >
          Mobile Apps
        </span>
        <span
          className={`work__item ${active === "Design" ? "active" : ""}`}
          onClick={() => setActive("Design")}
        >
          Designs
        </span>
      </div>

      <div className="work__container grid">
        {Menu.filter((elem) => active === "All" || elem.category === active)
          .slice(0, displayLimit)
          .map((elem) => {
            const { id, image, title, category, link, github_link } = elem;
            return (
              <div className="work__card" key={id}>
                <div className="work__thumbnail">
                  <img src={image} alt={title} className="work__img" />
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
    </section>
  );
};

export default Portfolio;
