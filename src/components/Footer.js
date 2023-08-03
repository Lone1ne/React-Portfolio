import "../styles/Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-container justify-content-center">
        <a className="icon-link" href="https://github.com/Lone1ne">
          <FaGithub size={40} />
        </a>
        <a
          className="icon-link"
          href="https://www.linkedin.com/in/derekszcz45/"
        >
          <FaLinkedin size={40} />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
