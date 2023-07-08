import { useState } from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
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
        <Navbar.Brand to="#about" className={styles.Title}>
          Gina Nikroo
          <span className={`${styles.Description} d-none d-md-inline`}>
            <i className="text-white px-3 fa-solid fa-code-commit"></i> Junior
            Full-Stack Developer
          </span>
        </Navbar.Brand>
        <Nav className="" id="basic-navbar-nav">
          <NavLink
            to="#projects"
            className={`${styles.Links} d-none d-lg-block`}
          >
            Projects
          </NavLink>
          <NavLink
            to="#certifications"
            className={`${styles.Links} d-none d-lg-block`}
          >
            Certifications
          </NavLink>
          <NavLink to="#skills" className={`${styles.Links} d-none d-lg-block`}>
            Skills
          </NavLink>
          <NavLink
            to="#contact"
            className={`${styles.Links} d-none d-lg-block`}
          >
            Contact
          </NavLink>
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
            <NavLink
              onClick={toggleCanvasOff}
              to="#projects"
              className={`${styles.Links} row pb-3`}
            >
              Projects
            </NavLink>
            <NavLink
              onClick={toggleCanvasOff}
              to="#certifications"
              className={`${styles.Links} row pb-3`}
            >
              Certifications
            </NavLink>
            <NavLink
              onClick={toggleCanvasOff}
              to="#skills"
              className={`${styles.Links} row pb-3`}
            >
              Skills
            </NavLink>
            <NavLink
              onClick={toggleCanvasOff}
              to="#contact"
              className={`${styles.Links} row pb-3`}
            >
              Contact
            </NavLink>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
