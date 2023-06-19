import React from "react";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { NavLink } from "react-bootstrap";
import appStyles from "../App.module.css";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <Container
      id="contact"
      className={`${appStyles.Section}  p-5 text-center text-xl-start`}
    >
      <Card className={`${styles.Footer} text-center border-0`}>
        <Card.Body>
          <Card.Title className={styles.Title}>Gina Nikroo</Card.Title>
          <Card.Text>
            <NavLink
              className="d-inline p-2"
              target="blank"
              href="https://github.com/GNikroo"
            >
              <i
                className={`${styles.Icons} fa-brands fa-square-github d-inline`}
              ></i>
            </NavLink>
            <NavLink
              className="d-inline p-2"
              target="blank"
              href="https://www.linkedin.com/in/gina-nikroo/"
            >
              <i
                className={`${styles.Icons} fa-brands fa-linkedin d-inline`}
              ></i>
            </NavLink>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Footer;
