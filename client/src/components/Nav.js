import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul className="nav nav-tabs">
      <Link to={"/"} className="nav-item">
        Home
      </Link>
      <Link to={"/about"} className="nav-item">
        About
      </Link>
      <Link to={"/projects"} className="nav-item">
        Projects
      </Link>
      <Link to={"/contact"} className="nav-item">
        Contact
      </Link>
    </ul>
  );
}

export default Nav;
