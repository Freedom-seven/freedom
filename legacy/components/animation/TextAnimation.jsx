import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const TextAnimation = ({ sentence }) => {
  const letters = sentence.split("");

  return (
    <motion.h1
      className="home__name"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 2 }}
    >
      {letters.map((char, index) => (
        <motion.span
          key={char + "-" + index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export const TextTitleAnimation = ({ sentence }) => {
  const letters = sentence.split("");

  return (
    <motion.div
      className="home__education"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 3 }}
    >
      {letters.map((char, index) => (
        <motion.span
          key={char + "-" + index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const AnimatedTitle = ({ text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
  };

  return (
    <motion.h2
      className="section__title"
      ref={ref}
      initial="hidden"
      animate={controls}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          custom={index}
          variants={letterVariants}
        >
          {char}
        </motion.span>
      ))}
    </motion.h2>
  );
};
