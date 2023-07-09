import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "../styles/NotFound.module.css";
import appStyles from "../App.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container
      id="notfound"
      className={`${styles.Section} ${appStyles.Section}`}
    >
      <Card className={`${styles.NotFound} m-auto border-0 text-center`}>
        <h1 className={`${styles.Title} d-block`}>
          <Row className="d-flex align-items-center">
            <Col>4</Col>
            <Col className={styles.Zero}>0</Col>
            <Col>4</Col>
          </Row>
        </h1>
        <h2 className={styles.Subtitle}>this page does not exist!</h2>
        <Link to="/" className={`${styles.Link} text-decoration-none`}>
          go home <span className={styles.Line}>&ndash;</span>
          <span className={styles.Arrow}>&rsaquo;</span>
        </Link>
      </Card>
    </Container>
  );
};

export default NotFound;
