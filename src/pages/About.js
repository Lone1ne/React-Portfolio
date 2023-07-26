import profilePic from "../images/IMG_1481-modified.png";

function About() {
  return (
    <div>
      <h2>About Me</h2>
      <div class="about-content">
        <img class="profile-img" src={profilePic} alt="profile" />
        <div class="text-content">
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
    </div>
  );
}

export default About;
