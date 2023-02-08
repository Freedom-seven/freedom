import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.linkedin.com/in/freedom-patrick-nanewortor-a22235212"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin-in"></i>
      </a>

      <a
        href="https://twitter.com/FreedomWhyte?t=mDaSmwTalGdh2HsmjQDDxw&s=03"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-twitter"></i>
      </a>

      <a
        href="https://github.com/Freedom-seven"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-github"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
