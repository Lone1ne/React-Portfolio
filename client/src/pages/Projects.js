import Project from "../components/Project";

function Projects() {
  const projects = [
    {
      title: "Workout Wizard",
      imageUrl: "./images/project-two-img.png",
      projectUrl: "https://the-workout-wizard-7d5c29c6d6dd.herokuapp.com/",
      githubUrl: "https://github.com/ryantixier/Workout-Wizard",
    },
    {
      title: "Pet Pal",
      imageUrl: "./images/project-one-img.png",
      projectUrl: "https://OutlawDisco.github.io/Pet-Pal/",
      githubUrl: "https://github.com/OutlawDisco/Pet-Pal",
    },
    {
      title: "J.A.T.E.",
      imageUrl: "./images/JATE.png",
      projectUrl: "https://jate-pwa-one-592b1645b581.herokuapp.com/",
      githubUrl: "https://github.com/Lone1ne/PWA-Text-Editor",
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
