import { useState } from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleCanvasOff = () => {
    setShow(!show);
  };

  return (
    <>
      <Navbar fixed="top" className={`${styles.NavBar} mb-3`}>
        <Container fluid>
          <Navbar.Brand href="#about" className={styles.Title}>
            Gina Nikroo
            <span className={`${styles.Description} d-none d-md-inline`}>
              <i className="text-white px-3 fa-solid fa-code-commit"></i> Junior
              Fullstack Developer
            </span>
          </Navbar.Brand>
          <Nav className={styles.Collapse} id="basic-navbar-nav">
            <Nav.Link
              href="#projects"
              className={`${styles.Links} d-none d-lg-block pb-3`}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#certifications"
              className={`${styles.Links} d-none d-lg-block pb-3`}
            >
              Certifications
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={`${styles.Links} d-none d-lg-block pb-3`}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={`${styles.Links} d-none d-lg-block pb-3`}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Button
            onClick={handleShow}
            className={`${styles.Button} d-lg-none border-0`}
          >
            <i className="fa-solid fa-bars"></i>
          </Button>
          <Offcanvas
            className={styles.Offcanvas}
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav.Link
                onClick={toggleCanvasOff}
                href="#projects"
                className={`${styles.Links} pb-3`}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                onClick={toggleCanvasOff}
                href="#certifications"
                className={`${styles.Links} pb-3`}
              >
                Certifications
              </Nav.Link>
              <Nav.Link
                onClick={toggleCanvasOff}
                href="#skills"
                className={`${styles.Links} pb-3`}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                onClick={toggleCanvasOff}
                href="#contact"
                className={`${styles.Links} pb-3`}
              >
                Contact
              </Nav.Link>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
