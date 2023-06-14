import React from "react";
import { Card, Container } from "react-bootstrap";
import ProjectCarousel from "./ProjectCarousel";
import styles from "../styles/Projects.module.css";
import appStyles from "../App.module.css";

const Projects = () => {
  return (
    <Container>
      <Card className={`${styles.Projects} py-5 border-0`}>
        <Card.Title className={`${appStyles.Title} d-block text-center`}>
          Projects
        </Card.Title>
        <Card.Body>
          <ProjectCarousel />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Projects;
