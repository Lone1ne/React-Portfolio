import profilePic from "../images/IMG_1481-modified.png";
import "../styles/About.css";

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img className="profile-img" src={profilePic} alt="profile" />
        <div className="text-content">
          <h3>Hi I'm Derek!</h3>
          <p>
            A highly motivated and detail-oriented full-stack JavaScript
            developer with a passion for creating web applications. I am
            currently enrolled in a bootcamp through the University of Denver to
            further my development skills and I could not be more excited to
            continue my coding journey!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
