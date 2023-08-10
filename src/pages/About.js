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
            A highly motivated Full-Stack Developer with a passion for
            developing web applications. Proficient in both front-end and
            back-end development and backed by a diverse skill set including
            psychology, business, finance, and customer service. After
            successfully completing an accelerated programming course and
            numerous personal and collaborative projects, I consistently
            demonstrate a strong commitment to learning and developing industry
            skills.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
