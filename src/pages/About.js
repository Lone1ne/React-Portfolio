import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import rocket from "../images/rocket.png";
import webDevImg from "../images/webdevimg.png";
import psychologyImg from "../images/psychimg.png";
import businessImg from "../images/businessimg.jpeg";
import financeImg from "../images/financeimg.jpeg";
import "../styles/About.css";

const webDevDescription = (
  <p>
    After completing multiple freelance projects on my own, I decided to expand
    my knowledge base by joining an intensive web development bootcamp through
    the University of Denver. Here, I honed my skills in Full Stack Web
    Development and worked on numerous projects with peers. I finished the
    course as one of the top of the class as well as making some life-long
    friends along the way.
  </p>
);
const psychologyDescription = (
  <p>
    I graduated from Central Michigan University with a Bachelor of Science in
    Psychology. I have always been fascinated by the human mind and could see
    that psychology could be applied in all aspects of life. I also minored in
    Philosophy.
  </p>
);
const businessDescription = (
  <p>
    I have always had a passion for business and entrepreneurship. I have
    started multiple businesses in the past and have learned a lot from each
    one. I am always looking for new opportunities to learn and grow.
  </p>
);
const financeDescription = (
  <p>
    I have always been interested in finance and investing. I love learning
    about the stock market and have been investing for almost 10 years. Today, I
    consider myself a seasoned investor, with an average of 30% return on my
    investments.
  </p>
);

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
      {/* <div className="animated-boxes">
        <h1 className="journey">My Journey</h1>
        <Skills
          label="Business"
          image={businessImg}
          isImageRight={true}
          description={businessDescription}
        />
        <Skills
          label="Finance"
          image={financeImg}
          isImageRight={false}
          description={financeDescription}
        />
        <Skills
          label="Psychology"
          image={psychologyImg}
          isImageRight={true}
          description={psychologyDescription}
        />
        <Skills
          label="Web Development"
          image={webDevImg}
          isImageRight={false}
          description={webDevDescription}
        />
      </div>
      <Header /> */}
    </section>
  );
}

export default About;
