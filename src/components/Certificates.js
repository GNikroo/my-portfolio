import React from "react";
import { Card, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import appStyles from "../App.module.css";
import { certificates } from "../data";
import styles from "../styles/Certificates.module.css";

const Certificates = () => {
  return (
    <Container
      id="certifications"
      className={`${styles.Section} ${appStyles.Section}`}
    >
      <h1 className={`${appStyles.Title} d-block text-center`}>
        certifications
      </h1>
      <Card className={`${styles.Certificates} m-auto border-0`}>
        <Card.Body className="py-4 text-center">
          {certificates.map((certificate) => (
            <div key={certificate.course}>
              <Card.Subtitle className={`${styles.Subtitle} pb-1`}>
                {certificate.institution}
              </Card.Subtitle>
              <Card.Text className={styles.Date}>{certificate.date}</Card.Text>
              <Link
                to={certificate.image}
                className={styles.Link}
                target="_blank"
              >
                <Card.Text className="pb-5 text-decoration-underline">
                  {certificate.course}
                </Card.Text>
              </Link>
              <Image
                className="d-none"
                height="400"
                width="600"
                src={certificate.image}
              />
            </div>
          ))}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Certificates;
