import React from "react";

const Card = ({ icon, year, title, desc, role }) => {
  return (
    <div className="timeline__item">
      <i className={icon}></i>
      <span className="timeline__date">
        {year} &nbsp; {role}
      </span>
      <h3 className="timeline__title">{title}</h3>
      <p className="timeline__text">{desc}</p>
    </div>
  );
};

export default Card;
