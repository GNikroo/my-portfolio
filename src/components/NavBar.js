import { useState } from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleCanvasOff = () => {
    setShow(!show);
  };

  return (
    <Navbar fixed="top" className={`${styles.NavBar} mb-3`}>
      <Container fluid>
        <Link to="/" className="text-decoration-none">
          <Navbar.Brand className={styles.Title}>
            Gina Nikroo
            <span className={`${styles.Description} d-none d-md-inline`}>
              <i className="text-white px-3 fa-solid fa-code-commit"></i> Junior
              Full-Stack Developer
            </span>
          </Navbar.Brand>
        </Link>
        <Nav id="basic-navbar-nav">
          <Link to="/about" className={`${styles.Links} d-none d-lg-block`}>
            About
          </Link>
          <Link to="/projects" className={`${styles.Links} d-none d-lg-block`}>
            Projects
          </Link>
          <Link
            to="/certificates"
            className={`${styles.Links} d-none d-lg-block`}
          >
            Certifications
          </Link>
          <Link to="/skills" className={`${styles.Links} d-none d-lg-block`}>
            Skills
          </Link>
          <Link to="/contact" className={`${styles.Links} d-none d-lg-block`}>
            Contact
          </Link>
        </Nav>
        <Button
          onClick={handleShow}
          className={`${styles.Button} d-lg-none border-0`}
        >
          <i className="fa-solid fa-bars"></i>
        </Button>
        <Offcanvas
          className={`${styles.Offcanvas}`}
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Link
              onClick={toggleCanvasOff}
              to="#projects"
              className={`${styles.Links} row pb-3`}
            >
              Projects
            </Link>
            <Link
              onClick={toggleCanvasOff}
              to="#certifications"
              className={`${styles.Links} row pb-3`}
            >
              Certifications
            </Link>
            <Link
              onClick={toggleCanvasOff}
              to="#skills"
              className={`${styles.Links} row pb-3`}
            >
              Skills
            </Link>
            <Link
              onClick={toggleCanvasOff}
              to="#contact"
              className={`${styles.Links} row pb-3`}
            >
              Contact
            </Link>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
