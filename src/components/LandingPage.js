import React from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../styles/LandingPage.module.css";
import appStyles from "../App.module.css";

const LandingPage = () => {
  const isMobile = window.innerWidth <= 768;

  const LandingPageMobile = (
    <Container
      id="home"
      fluid
      className={`${appStyles.Section} ${styles.MobileContainer}`}
    >
      <Card
        className={`${styles.MobileCard} d-flex m-auto border-0 text-center`}
      >
        <Card.Title className="rounded">
          <Link to="/about" className={`${styles.Link} text-decoration-none`}>
            view me
          </Link>
        </Card.Title>
      </Card>
    </Container>
  );

  const LandingPageDesktop = (
    <Container
      id="home"
      fluid
      className={`${appStyles.Section} ${styles.DesktopContainer}`}
    >
      <Card
        className={`${styles.DesktopCard} d-flex border-0 text-center py-4`}
      >
        <Card.Title className={`${styles.Title} rounded`}>
          Gina Nikroo
        </Card.Title>
        <Link to="/about" className={`${styles.Link} text-decoration-none`}>
          view me
        </Link>
      </Card>
    </Container>
  );

  return (
    <div>
      {isMobile ? (
        <div className="">{LandingPageMobile}</div>
      ) : (
        <div className="">{LandingPageDesktop}</div>
      )}
    </div>
  );
};

export default LandingPage;
