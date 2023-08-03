import resume from "../images/resume.png";
import "../styles/Resume.css";

function Resume() {
  return (
    <div className="resume-content">
      <a href={resume} target="_blank" rel="noopener noreferrer">
        <img className="resume-img" src={resume} alt="Resume" />
      </a>
    </div>
  );
}

export default Resume;
