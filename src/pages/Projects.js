import Project from "../components/Project";
import noSQL from "../images/noSQL.png";
import chat98 from "../images/chat98.png";
import workoutWizard from "../images/project-two-img.png";
import petPal from "../images/project-one-img.png";
import jate from "../images/JATE.png";
import weatherApp from "../images/weather-app.png";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Chat98",
      imageUrl: chat98,
      projectUrl: "https://chat98-a21833346cf4.herokuapp.com/",
      githubUrl: "https://github.com/TrueWillB/chat98",
    },
    {
      title: "Workout Wizard",
      imageUrl: workoutWizard,
      projectUrl: "https://the-workout-wizard-7d5c29c6d6dd.herokuapp.com/",
      githubUrl: "https://github.com/ryantixier/Workout-Wizard",
    },
    {
      title: "Pet Pal",
      imageUrl: petPal,
      projectUrl: "https://OutlawDisco.github.io/Pet-Pal/",
      githubUrl: "https://github.com/OutlawDisco/Pet-Pal",
    },
    {
      title: "J.A.T.E.",
      imageUrl: jate,
      projectUrl: "https://jate-pwa-one-592b1645b581.herokuapp.com/",
      githubUrl: "https://github.com/Lone1ne/PWA-Text-Editor",
    },
    {
      title: "Weather App",
      imageUrl: weatherApp,
      projectUrl: "https://lone1ne.github.io/Weather-App/",
      githubUrl: "https://github.com/Lone1ne/Weather-App",
    },
    {
      title: "noSQL Social Network API",
      imageUrl: noSQL,
      projectUrl:
        "https://drive.google.com/file/d/1XFO7xdx7AGIORtKZv7AwYUrN4Eiujwas/view",
      githubUrl: "https://github.com/Lone1ne/noSQL-Social-Media",
    },
  ];

  return (
    <section className="project" id="project">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          imageUrl={project.imageUrl}
          projectUrl={project.projectUrl}
          githubUrl={project.githubUrl}
        />
      ))}
    </section>
  );
}

export default Projects;
