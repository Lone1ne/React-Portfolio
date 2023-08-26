import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "../styles/Banner.css";

function Banner() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const words = ["Web Developer", "Full Stack Developer", "UI/UX Designer"];

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const typeSpeed = isDeleting ? 200 : 200;

    if (!isDeleting && text.length === currentWord.length) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prevIndex) => prevIndex + 1);
    } else {
      setTimeout(() => {
        setText((prev) =>
          isDeleting ? prev.slice(0, -1) : prev + currentWord[prev.length]
        );
      }, typeSpeed);
    }
  }, [text, isDeleting, wordIndex]);

  return (
    <section className="banner" id="home">
      <Row className="align-items-center">
        <div>
          <h2 className="banner-text">
            <span className="wrap">{text || "\u00A0"}</span>
          </h2>
          <button onClick={() => console.log("message")}>
            <ArrowRightCircle size={25} />
            Message Me
          </button>
        </div>
      </Row>
    </section>
  );
}

export default Banner;
