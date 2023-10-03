import React from "react";
import "../styles/Skills.css";
import "animate.css";
import "../styles/Intro.css";
import TrackVisibility from "react-on-screen";

function Skills({ label, image, isImageRight = false, description }) {
  return (
    <div>
      <h2>{label}</h2>
      <TrackVisibility once partialVisibility>
        {({ isVisible }) => (
          <div
            className={
              isVisible
                ? `skills animate__animated animate__fadeInUp`
                : "skills invisible"
            }
          >
            <div className={`skill-row ${isImageRight ? "reverse" : ""}`}>
              <img src={image} alt={label} className="skill-image" />
              <div className="skill-label">{description}</div>
            </div>
          </div>
        )}
      </TrackVisibility>
    </div>
  );
}

export default Skills;
