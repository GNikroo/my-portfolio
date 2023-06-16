import React from "react";
import { Card, Col, Container, ListGroup, NavLink, Row } from "react-bootstrap";
import styles from "../styles/About.module.css";
import appStyles from "../App.module.css";

const About = () => {
  return (
    <Container id="about" className={appStyles.Section}>
      <Card
        className={`${styles.Background} align-items-center text-center border-0`}
      >
        <Card.Body>
          <Card.Title className={`${appStyles.Title} card-title`}>
            Gina Nikroo
          </Card.Title>
        </Card.Body>
        <Row className="text-center">
          <Col>
            <NavLink href="#contact" className={`${styles.Links} text-nowrap`}>
              contact me
            </NavLink>
          </Col>
          <Col>
            <NavLink href="#projects" className={`${styles.Links} text-nowrap`}>
              see my work
            </NavLink>
          </Col>
          <Col>
            <NavLink href="#skills" className={`${styles.Links} text-nowrap`}>
              see my skills
            </NavLink>
          </Col>
        </Row>
        <Row>
          <ListGroup className={`${styles.List} p-4 d-flex align-items-center`}>
            <Col lg={8} md={10} className="rounded py-2">
              <ListGroup.Item className={`${appStyles.Color1} border-0 p-4`}>
                Since 2022, I have been studying at Code Institute to become a
                junior software developer. I have completed my coursework to
                earn a Diploma in Full Stack Software Development and am
                currently awaiting my diploma.
              </ListGroup.Item>
            </Col>
            <Col lg={8} md={10} className="rounded py-2">
              <ListGroup.Item className={`${appStyles.Color2} border-0 p-4`}>
                I have thirteen years of early childhood education experience in
                international preschools located across Stockholm. As a
                preschool teacher, I have cultivated valuable interpersonal
                skills working with students and colleagues alike. I have become
                particularly adept at problem-solving, divergent thinking,
                active listening, and collaborative work.
              </ListGroup.Item>
            </Col>
            <Col lg={8} md={10} className="rounded py-2">
              <ListGroup.Item className={`${appStyles.Color3} border-0 p-4`}>
                I have a solid foundation in both front-end and back-end
                development encompassing HTML, CSS, JavaScript, and Python. I am
                excited to enter the tech industry and work with a team where I
                can utilize my diverse experiences and dedication to continuous
                learning to make meaningful contributions.
              </ListGroup.Item>
            </Col>
          </ListGroup>
        </Row>
      </Card>
    </Container>
  );
};

export default About;
