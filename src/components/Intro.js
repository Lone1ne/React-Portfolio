import { Container, Row, Col } from "react-bootstrap";
import profilePic from "../images/IMG_1481-modified.png";
import "animate.css";
import "../styles/Intro.css";
import TrackVisibility from "react-on-screen";

function Intro() {
  return (
    <section className="intro">
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={12} md={4} xl={4}>
            <div className="center">
              <img className="profile-img" src={profilePic} alt="Header Img" />
            </div>
          </Col>
          <Col xs={12} md={8} xl={8}>
            <div className="center">
              <TrackVisibility once partialVisibility>
                {({ isVisible }) => (
                  <span
                    className={
                      isVisible
                        ? "tagline animate__animated animate__backInDown"
                        : "tagline invisible"
                    }
                  >
                    Welcome to my Portfolio
                  </span>
                )}
              </TrackVisibility>

              <TrackVisibility once partialVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible
                        ? "text-content animate__animated animate__lightSpeedInRight animate__delay-0.5s"
                        : "text-content invisible"
                    }
                  >
                    <h1>Hi, I'm Derek!</h1>
                    <p>
                      A highly motivated Full-Stack Developer with a passion for
                      developing web applications. Proficient in both front-end
                      and back-end development and backed by a diverse skill set
                      including psychology, business, finance, and customer
                      service. After completing multiple freelance projects on
                      my own, I decided to expand my knowledge base by joining
                      an intensive web development bootcamp through the
                      University of Denver. Here, I honed my skills in Full
                      Stack Web Development and worked on numerous projects with
                      peers. I finished the course as one of the top of the
                      class as well as making some life-long friends along the
                      way.
                    </p>
                  </div>
                )}
              </TrackVisibility>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Intro;
