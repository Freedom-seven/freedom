import React, { useState } from "react";
import "./sidebar.css";
import { motion } from "framer-motion";
import Logo from "../../assets/logo.png";

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);

  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav__logo">
          <motion.img
            src={Logo}
            alt=""
            className="logo"
            whileHover={{ scale: 1.1 }}
            initial={{ scale: 0.9, rotate: -10 }}
            animate={toggle ? { rotate: 0 } : { rotate: 0, scale: 1 }}
            transition={{
              y: { type: "spring", stiffness: 500, damping: 15 },
              rotate: { duration: 1 },
            }}
          />
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <motion.li
                className="nav__item"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="#home" className="nav__link">
                  <i className="icon-home"></i>
                </a>
              </motion.li>

              <motion.li
                className="nav__item"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="#about" className="nav__link">
                  <i className="icon-user-following"></i>
                </a>
              </motion.li>

              <motion.li
                className="nav__item"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="#services" className="nav__link">
                  <i className="icon-briefcase"></i>
                </a>
              </motion.li>

              <motion.li
                className="nav__item"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="#resume" className="nav__link">
                  <i className="icon-graduation"></i>
                </a>
              </motion.li>

              <motion.li
                className="nav__item"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="#work" className="nav__link">
                  <i className="icon-layers"></i>
                </a>
              </motion.li>

              <motion.li
                className="nav__item"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="#blog" className="nav__link">
                  <i className="icon-note"></i>
                </a>
              </motion.li>

              <motion.li
                className="nav__item"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="#contact" className="nav__link">
                  <i className="icon-bubble"></i>
                </a>
              </motion.li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span className="copyright">
            &copy; 2022 - {new Date().getFullYear()}.
          </span>
        </div>
      </aside>

      {!toggle ? (
        <div
          className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
          onClick={() => showMenu(!toggle)}
        >
          <i className="icon-menu"></i>
        </div>
      ) : (
        <div
          className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
          onClick={() => showMenu(!toggle)}
        >
          <i className="icon-close"></i>
        </div>
      )}
    </>
  );
};

export default Sidebar;
