import React from "react";
import { motion } from "framer-motion";

const HeaderSocials = () => {
  return (
    <motion.div
      className="home__socials"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, staggerChildren: 0.5 }}
    >
      <motion.a
        href="https://www.linkedin.com/in/freedom-patrick-nanewortor-a22235212"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: [1, 1.2, 1, 1.2, 1] }}
        transition={{ delay: 0.5, duration: 2 }}
      >
        <i className="fa-brands fa-linkedin-in"></i>
      </motion.a>

      <motion.a
        href="https://twitter.com/FreedomWhyte?t=mDaSmwTalGdh2HsmjQDDxw&s=03"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: [1, 1.2, 1, 1.2, 1] }}
        transition={{ delay: 1, duration: 2 }}
      >
        <i className="fa-brands fa-twitter"></i>
      </motion.a>

      <motion.a
        href="https://github.com/Freedom-seven"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: [1, 1.2, 1, 1.2, 1] }}
        transition={{ delay: 1.5, duration: 2 }}
      >
        <i className="fa-brands fa-github"></i>
      </motion.a>
    </motion.div>
  );
};

export default HeaderSocials;
