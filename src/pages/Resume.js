import resume from "../images/resume.png";
import "../styles/Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <h2>Resume</h2>
      <div className="resume-content">
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <img className="resume-img" src={resume} alt="Resume" />
        </a>
      </div>
    </div>
  );
}

export default Resume;
