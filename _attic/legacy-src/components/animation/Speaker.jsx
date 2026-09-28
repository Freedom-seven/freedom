import React, { useState, useRef, useEffect } from "react";

const Speaker = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const utterance = useRef(null);

  const text =
    "Greetings! I'm Nanewortor Patrick Freedom, a passionate software developer who thrives on challenges and constantly seeks to elevate the digital world. My journey in the tech realm has been marked by a deep-rooted fascination for website design and development, with a special emphasis on crafting bespoke websites from scratch. My expertise extends to mobile development, and I'm on a perpetual quest to broaden my horizons in back-end development. I take immense pride in creating intuitive and user-centric web and mobile experiences that empower businesses and organizations to achieve their objectives. Whether it's architecting a brand-new website or revamping an existing one, I relish every opportunity to push the boundaries of what's possible. In my downtime, you'll find me immersing myself in the latest tech trends, exploring new programming languages, and expanding my technological repertoire. I'm driven by a relentless pursuit of growth and improvement as a developer, and I eagerly anticipate the exciting twists and turns that await me in my career journey. Join me as I continue to navigate the dynamic landscape of technology, one line of code at a time!";

  const handleSpeakClick = () => {
    if (!isSpeaking) {
      utterance.current = new SpeechSynthesisUtterance(text);
      utterance.current.onend = () => {
        setIsSpeaking(false);
        setIsPaused(false);
      };
      window.speechSynthesis.speak(utterance.current);
      setIsSpeaking(true);
    } else {
      if (isPaused) {
        window.speechSynthesis.resume();
        setIsPaused(false);
      } else {
        window.speechSynthesis.pause();
        setIsPaused(true);
      }
    }
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isSpeaking]);

  return (
    <div className="speaker-container">
      <button className="speak-button" onClick={handleSpeakClick}>
        <i
          className={`fas fa-${
            isSpeaking ? (isPaused ? "volume-up" : "pause") : "volume-up"
          } icon`}
        ></i>
        {isSpeaking ? (
          isPaused ? (
            <span className="tooltip">Click to resume reading</span>
          ) : (
            <span className="tooltip">Click to pause reading</span>
          )
        ) : (
          <span className="tooltip">Click for auto reading</span>
        )}
      </button>
      {/* <p className="text">{text}</p> */}
    </div>
  );
};

export default Speaker;
