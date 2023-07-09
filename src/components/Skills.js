import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import appStyles from "../App.module.css";
import {
  databaseSystems,
  developmentEnvirons,
  frameworks,
  languages,
  versionControls,
} from "../data";
import background from "../assets/mobilebackground.jpg";
import styles from "../styles/Skills.module.css";

const Skills = () => {
  return (
    <Container id="skills" className={`${styles.Section} ${appStyles.Section}`}>
      <h1 className={`${appStyles.Title} d-block text-center`}>
        skills &amp; technologies
      </h1>
      <Row className="m-auto justify-content-start align-items-center">
        <Col xs={12} md={6} lg={4} className="py-3">
          <Card className={`${styles.Skills} mt-0 border-0`}>
            <img className={styles.Image} src={background} />
            <Card.Body className="py-3">
              <Card.Text className={styles.Subtitle}>
                Languages
                <div className={styles.Item}>
                  {languages.map((language) => (
                    <div key={language}>
                      <div>
                        <span className={styles.BulletList}>{language}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="py-3">
          <Card className={`${styles.Skills} border-0`}>
            <img className={styles.Image} src={background} />
            <Card.Body className="py-3">
              <Card.Text className={styles.Subtitle}>
                Frameworks
                <div className={styles.Item}>
                  {frameworks.map((framework) => (
                    <div key={framework}>
                      <div>
                        <span className={styles.BulletList}>{framework}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="py-3">
          <Card className={`${styles.Skills} border-0`}>
            <img className={styles.Image} src={background} />
            <Card.Body className="py-3">
              <Card.Text className={styles.Subtitle}>
                Version Control
                <div className={styles.Item}>
                  {versionControls.map((versionControl) => (
                    <div key={versionControl}>
                      <div>
                        <span className={styles.BulletList}>
                          {versionControl}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="py-3">
          <Card className={`${styles.Skills} border-0`}>
            <img className={styles.Image} src={background} />
            <Card.Body className="py-3">
              <Card.Text className={styles.Subtitle}>
                Database Systems
                <div className={styles.Item}>
                  {databaseSystems.map((databaseSystem) => (
                    <div key={databaseSystem}>
                      <div>
                        <span className={styles.BulletList}>
                          {databaseSystem}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="py-3">
          <Card className={`${styles.Skills} border-0`}>
            <img className={styles.Image} src={background} />
            <Card.Body className="py-3">
              <Card.Text className={styles.Subtitle}>
                IDE/Text Editor
                <div className={styles.Item}>
                  {developmentEnvirons.map((developmentEnviron) => (
                    <div key={developmentEnviron}>
                      <div>
                        <span className={styles.BulletList}>
                          {developmentEnviron}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
