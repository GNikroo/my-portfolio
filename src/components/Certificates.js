import React from "react";
import { Container, NavLink } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Image } from "react-bootstrap";
import styles from "../styles/Certificates.module.css";
import appStyles from "../App.module.css";
import { certificates } from "../data";

const Certificates = () => {
  return (
    <Container id="certifications" className={`${appStyles.Section} mx-auto`}>
      <Card className={`${styles.Certificates} border-0`}>
        <Card.Title className={`${appStyles.Title} d-block text-center`}>
          Certifications
        </Card.Title>
        <Card.Body className="py-4 text-center">
          {certificates.map((certificate) => (
            <div key={certificate.course}>
              <Card.Subtitle className={`${styles.Subtitle} pb-1`}>
                {certificate.institution}
              </Card.Subtitle>
              <Card.Text className={styles.Date}>{certificate.date}</Card.Text>
              <NavLink href={certificate.image} target="blank">
                <Card.Text className="pb-5 text-decoration-underline">
                  {certificate.course}
                </Card.Text>
              </NavLink>
              <Image className="d-none" src={certificate.image} />
            </div>
          ))}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Certificates;
