import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import styles from "../styles/Skills.module.css";
import appStyles from "../App.module.css";
import {
  databaseSystems,
  developmentEnvirons,
  frameworks,
  languages,
  versionControls,
} from "../data";

const Skills = () => {
  return (
    <Container id="skills" className={appStyles.Section}>
      <Card className={`${styles.Skills} border-0`}>
        <Card.Title className={`${appStyles.Title} pb-2 d-block text-center`}>
          Skills &amp; Technologies
        </Card.Title>
      </Card>
      <Row>
        <Col lg={2} md={4} sm={2} className="mx-auto pb-5">
          <ListGroup className={appStyles.Color1}>
            <Card.Subtitle className={styles.Subtitle}>Languages</Card.Subtitle>
            <ListGroup.Item className={styles.Item}>
              {languages.map((language) => (
                <div key={language}>
                  <div>
                    <span className={styles.BulletList}>{language}</span>
                  </div>
                </div>
              ))}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={2} md={4} sm={2} className="mx-auto pb-5">
          <ListGroup className={appStyles.Color2}>
            <Card.Subtitle className={styles.Subtitle}>
              Frameworks
            </Card.Subtitle>
            <ListGroup.Item className={styles.Item}>
              {frameworks.map((framework) => (
                <div key={framework}>
                  <div>
                    <span className={styles.BulletList}>{framework}</span>
                  </div>
                </div>
              ))}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={2} md={4} sm={2} className="mx-auto pb-5">
          <ListGroup className={appStyles.Color3}>
            <Card.Subtitle className={styles.Subtitle}>
              Version Control
            </Card.Subtitle>
            <ListGroup.Item className={styles.Item}>
              {versionControls.map((versionControl) => (
                <div key={versionControl}>
                  <div>
                    <span className={styles.BulletList}>{versionControl}</span>
                  </div>
                </div>
              ))}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={2} md={4} sm={2} className="mx-auto pb-5">
          <ListGroup className={appStyles.Color4}>
            <Card.Subtitle className={styles.Subtitle}>
              Database Systems
            </Card.Subtitle>
            <ListGroup.Item className={styles.Item}>
              {databaseSystems.map((databaseSystem) => (
                <div key={databaseSystem}>
                  <div>
                    <span className={styles.BulletList}>{databaseSystem}</span>
                  </div>
                </div>
              ))}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={2} md={4} sm={2} className="mx-auto pb-5">
          <ListGroup className={appStyles.Color5}>
            <Card.Subtitle className={styles.Subtitle}>IDE</Card.Subtitle>
            <ListGroup.Item className={styles.Item}>
              {developmentEnvirons.map((developmentEnviron) => (
                <div key={developmentEnviron}>
                  <div>
                    <span className={styles.BulletList}>
                      {developmentEnviron}
                    </span>
                  </div>
                </div>
              ))}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
