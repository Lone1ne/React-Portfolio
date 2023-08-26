import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Intro from "../components/Intro";
import rocket from "../images/rocket.png";
import "../styles/About.css";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <section className="about">
      <Banner />
      <div className="about-content">
        <Intro />
      </div>
      {isVisible && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img className="rocket-img" src={rocket} alt="Back to Top" />
        </button>
      )}
      <Header />
    </section>
  );
}

export default About;
