import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const isMobile = window.innerWidth <= 768;

  const FooterDesktop = (
    <Card.Title className={styles.Title}>
      Gina Nikroo. All rights Reserved
    </Card.Title>
  );

  return (
    <Container className={`${styles.Section} text-center`}>
      <Card className={`${styles.Footer} border-0`}>
        <Card.Body>
          {isMobile ? <span></span> : <span>{FooterDesktop}</span>}
          <Card.Text>
            <Link
              className="d-inline p-2"
              target="_blank"
              to="https://github.com/GNikroo"
            >
              <i
                className={`${styles.Icons} fa-brands fa-square-github d-inline`}
              ></i>
            </Link>
            <Link
              className="d-inline p-2"
              target="_blank"
              to="https://www.linkedin.com/in/gina-nikroo/"
            >
              <i
                className={`${styles.Icons} fa-brands fa-linkedin d-inline`}
              ></i>
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Footer;
