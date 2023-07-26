function Project({ title, imageUrl, projectUrl, githubUrl }) {
  const style = {
    width: "20%",
    height: "auto",
  };
  return (
    <div className="project-content">
      <h3>{title}</h3>
      <img className="project-img" style={style} src={imageUrl} alt={title} />
      <div className="button-container">
        <a href={projectUrl} className="project-link">
          <button className="btn btn-success">Visit Project</button>
        </a>
        <a href={githubUrl} className="github-link">
          <button className="btn btn-primary">GitHub Repo</button>
        </a>
      </div>
    </div>
  );
}

export default Project;
