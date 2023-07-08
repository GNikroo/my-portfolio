import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { about } from "../data";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <Container id="about" fluid className={styles.Section}>
      <Row className={`${styles.Row}`}>
        <Col sm md lg={4} className={styles.Column}>
          <div className={`${styles.Item} border-0 py-4 px-2`}>
            <p className={`${styles.Subtitle} py-2`}>{about[0].subtitle}</p>
            <p>{about[0].description}</p>
          </div>
        </Col>
        <Col sm md lg={4} className={styles.Column}>
          <div className={`${styles.Item} border-0 py-4 px-2`}>
            <p className={`${styles.Subtitle} py-2`}>{about[1].subtitle}</p>
            <p>{about[1].description}</p>
          </div>
        </Col>
        <Col sm md lg={4} className={styles.Column}>
          <div className={`${styles.Item} border-0 py-4 px-2`}>
            <p className={`${styles.Subtitle} py-2`}>{about[2].subtitle}</p>
            <p>{about[2].description}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
