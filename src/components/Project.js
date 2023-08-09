import { useState } from "react";
import "../styles/Projects.css";
function Project({ title, imageUrl, projectUrl, githubUrl, description }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className={`project-content ${isFlipped ? "flipped" : ""}`}>
      <div className="project-inner">
        <div className="project-front">
          <h3>{title}</h3>
          <img className="project-img" src={imageUrl} alt={title} />
          <div className="button-container">
            <a href={projectUrl} className="project-link">
              <button className="btn btn-primary">Visit Project</button>
            </a>
            <button
              className="btn btn-success flip-button"
              onClick={handleFlip}
            >
              Description
            </button>
            <a href={githubUrl} className="github-link">
              <button className="btn btn-primary">GitHub Repo</button>
            </a>
          </div>
        </div>
        <div className="project-back">
          <p>{description}</p>
          <button className="btn btn-success flip-button" onClick={handleFlip}>
            Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
