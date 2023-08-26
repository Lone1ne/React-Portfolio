import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <>
      <Navbar
        bg="dark"
        expand="md"
        data-bs-theme="dark"
        className={scrolled ? "shrink" : ""}
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link to={"/React-Portfolio"} className="nav-link">
                <Nav.Link as="span">About</Nav.Link>
              </Link>

              <NavDropdown
                title="Projects"
                className="nav-link"
                id="navbarScrollingDropdown"
              >
                <Link to={"/React-Portfolio/projects#chat98"}>
                  <NavDropdown.Item href="#chat98">Chat98</NavDropdown.Item>
                </Link>

                <Link to={"/React-Portfolio/projects#workout-wizard"}>
                  <NavDropdown.Item href="#workout-wizard">
                    Workout Wizard
                  </NavDropdown.Item>
                </Link>

                <Link to={"/React-Portfolio/projects#pet-pal"}>
                  <NavDropdown.Item href="#pet-pal">Pet Pal</NavDropdown.Item>
                </Link>

                <Link to={"/React-Portfolio/projects#jate"}>
                  <NavDropdown.Item href="#jate">J.A.T.E.</NavDropdown.Item>
                </Link>

                <Link to={"/React-Portfolio/projects#weather-dashboard"}>
                  <NavDropdown.Item href="#weather-dashboard">
                    Weather Dashboard
                  </NavDropdown.Item>
                </Link>

                <Link to={"/React-Portfolio/projects#noSQL-social-network"}>
                  <NavDropdown.Item href="#noSQL-social-network">
                    NoSQL Social Network
                  </NavDropdown.Item>
                </Link>

                <NavDropdown.Divider />

                <Link to={"/React-Portfolio/projects"}>
                  <NavDropdown.Item href="#projects">
                    View All Projects
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <Navbar.Brand href="#home">Derek Szczepanik</Navbar.Brand>

              <Link to={"/React-Portfolio/resume"} className="nav-link">
                <Nav.Link as="span">Resume</Nav.Link>
              </Link>

              <Link to={"/React-Portfolio/contact"} className="nav-link">
                <Nav.Link as="span">Contact</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
