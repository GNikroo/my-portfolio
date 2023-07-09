import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { about } from "../data";
import styles from "../styles/About.module.css";
import appStyles from "../App.module.css";

const About = () => {
  return (
    <Container id="about" className={`${styles.Section} ${appStyles.Section}`}>
      <h1 className={`${appStyles.Title} d-block text-center`}>about</h1>
      <Card className={`${styles.About} mt-0 border-0`}>
        <Row className={`${styles.Row}`}>
          <Col lg={4} className={styles.Column}>
            <div className={`${styles.Item} border-0 py-4 px-2`}>
              <p className={`${styles.Subtitle} py-2`}>{about[0].subtitle}</p>
              <p>{about[0].description}</p>
            </div>
          </Col>
          <Col lg={4} className={styles.Column}>
            <div className={`${styles.Item} border-0 py-4 px-2`}>
              <p className={`${styles.Subtitle} py-2`}>{about[1].subtitle}</p>
              <p>{about[1].description}</p>
            </div>
          </Col>
          <Col lg={4} className={styles.Column}>
            <div className={`${styles.Item} border-0 py-4 px-2`}>
              <p className={`${styles.Subtitle} py-2`}>{about[2].subtitle}</p>
              <p>{about[2].description}</p>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default About;
