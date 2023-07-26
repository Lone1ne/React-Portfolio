import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul className="nav nav-tabs">
      <Link to={"/React-Portfolio"} className="nav-item">
        About Me
      </Link>
      <Link to={"/React-Portfolio/projects"} className="nav-item">
        Projects
      </Link>
      <Link to={"/React-Portfolio/contact"} className="nav-item">
        Contact
      </Link>
      <Link to={"/React-Portfolio/resume"} className="nav-item">
        Resume
      </Link>
    </ul>
  );
}

export default Nav;
