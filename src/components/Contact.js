import React from "react";
import { Card, Container } from "react-bootstrap";
import styles from "../styles/Contact.module.css";
import appStyles from "../App.module.css";
import photo from "../assets/GinaNikroo.jpg";

const Contact = () => {
  return (
    <Container>
      <Card className={`${styles.Contact} py-5 border-0`}>
        <Card.Img className={`${styles.Image} rounded`} src={photo} />
        <Card.Body>
          <Card.Title className={`${appStyles.Title} card-title fw-bold`}>
            Junior Software Developer
          </Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Contact;
