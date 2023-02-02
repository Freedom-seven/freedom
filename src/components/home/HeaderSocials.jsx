import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.instagram.com/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-linkedin-in"></i>
      </a>

      <a
        href="https://www.twitter.com/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-twitter"></i>
      </a>

      {/* <a
        href="https://www.behance.com/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-behance"></i>
      </a>

      <a
        href="https://www.dribble.com/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-dribbble"></i>
      </a>

      <a
        href="https://www.pinterest.com/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-pinterest"></i>
      </a> */}
    </div>
  );
};

export default HeaderSocials;
