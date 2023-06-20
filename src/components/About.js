import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import appStyles from "../App.module.css";
import { about } from "../data";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <Container id="about" className={appStyles.Section}>
      <Card
        className={`${styles.Background} align-items-center text-center border-0`}
      >
        <Card.Body>
          <Card.Title className={`${appStyles.Title} card-title`}>
            About Me
          </Card.Title>
        </Card.Body>
        <Row>
          <ListGroup className={`${styles.List} p-4 d-flex align-items-center`}>
            <Col lg={8} md={10} className="rounded py-2">
              <ListGroup.Item className={`${appStyles.Color1} border-0 p-4`}>
                <Card.Subtitle className="lead py-2">
                  {about[0].subtitle}
                </Card.Subtitle>
                <Card.Text>{about[0].description}</Card.Text>
              </ListGroup.Item>
            </Col>
            <Col lg={8} md={10} className="rounded py-2">
              <ListGroup.Item className={`${appStyles.Color2} border-0 p-4`}>
                <Card.Subtitle className="lead py-2">
                  {about[1].subtitle}
                </Card.Subtitle>
                <Card.Text>{about[1].description}</Card.Text>
              </ListGroup.Item>
            </Col>
            <Col lg={8} md={10} className="rounded py-2">
              <ListGroup.Item className={`${appStyles.Color3} border-0 p-4`}>
                <Card.Subtitle className="lead py-2">
                  {about[2].subtitle}
                </Card.Subtitle>
                <Card.Text>{about[2].description}</Card.Text>
              </ListGroup.Item>
            </Col>
          </ListGroup>
        </Row>
      </Card>
    </Container>
  );
};

export default About;