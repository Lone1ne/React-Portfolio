import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul className="nav nav-tabs">
      <Link to={"/"} className="nav-item">
        About Me
      </Link>
      <Link to={"/projects"} className="nav-item">
        Projects
      </Link>
      <Link to={"/contact"} className="nav-item">
        Contact
      </Link>
      <Link to={"/resume"} className="nav-item">
        Resume
      </Link>
    </ul>
  );
}

export default Nav;
