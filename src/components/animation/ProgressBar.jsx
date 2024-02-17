import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProgressBar = ({ skill, level }) => {
  const controls = useAnimation();
  const barControls = useAnimation(); // New controls for the progress bar
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the animation only triggers once
  });
  const [currentLevel, setCurrentLevel] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({ translateY: 0, opacity: 1 });
      barControls.start({ width: `${level}%`, opacity: 1 }); // Use barControls for the progress bar
      setTimeout(() => {
        const intervalId = setInterval(() => {
          setCurrentLevel((prev) => (prev < level ? prev + 1 : prev));
        }, 20);
        return () => clearInterval(intervalId);
      }, 1000); // Delay the start of the percentage count by 2 seconds
    }
  }, [controls, barControls, inView, level]); // Add barControls to the dependency array

  return (
    <motion.div
      className="skills__data"
      initial={{ translateY: 50, opacit: -1 }}
      animate={controls}
      transition={{ duration: 1, type: "spring" }}
    >
      <div className="skills__titles">
        <h3 className="skills__name">{skill}</h3>
        <span className="skills__number">{currentLevel}%</span>
      </div>

      <div className="skills__bar">
        <motion.div
          className={`skills__percentage development ${
            level >= 75 ? "green" : level >= 50 ? "orange" : "red"
          }`}
          ref={ref}
          initial={{ width: 0, opacity: 0 }}
          animate={barControls} // Use barControls here
          transition={{ duration: 1 }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default ProgressBar;
