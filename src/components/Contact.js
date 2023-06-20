import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { NavLink } from "react-bootstrap";
import { Row } from "react-bootstrap";
import styles from "../styles/Contact.module.css";
import appStyles from "../App.module.css";
import photo from "../assets/GinaNikroo.jpg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Your message was sent 🎉"))
      .catch((error) => alert(error));
  }

  return (
    <Container
      id="contact"
      className={`${appStyles.Section} text-center text-xl-start`}
    >
      <Card className={`${styles.Contact} border-0`}>
        <Card.Title className={`${appStyles.Title} pb-2 d-block text-center`}>
          Contact Me
        </Card.Title>
      </Card>
      <CardGroup>
        <Row className="py-3">
          <Col>
            <Card className={`${styles.Contact} border-0`}>
              <Row className="align-items-center m-auto">
                <Col className="text-center">
                  <Card.Img
                    className={`${styles.Image} m-auto rounded`}
                    src={photo}
                  />
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title className={`${styles.Title} card-title`}>
                      Junior Software Developer
                    </Card.Title>
                    <Card.Text>
                      <NavLink
                        href="mailto:gina.nikroo@gmail.com"
                        className="py-2"
                      >
                        gina.nikroo@gmail.com
                      </NavLink>
                      <NavLink href="tel:+46707463887">070 746 3887</NavLink>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col className="align-self-center">
            <Card className={`${styles.FormContainer} border-0 m-auto px-3`}>
              <Form netlify="true" name="contact" onSubmit={handleSubmit}>
                <Card.Title className={styles.Subtitle}>Contact Me</Card.Title>
                <Card.Text className={styles.Description}>
                  As a developer, I am always striving to learn more so that I
                  can do more. I hope to find an opportunity where I can
                  continue to develop and add to my skills.
                </Card.Text>
                <Form.Group className="relative mb-2">
                  <Form.Label
                    htmlFor="name"
                    className={styles.Label}
                    onChange={(e) => setName(e.target.value)}
                  >
                    Name
                  </Form.Label>
                  <Form.Control type="text" id="name" name="name" />
                </Form.Group>
                <Form.Group className="relative mb-2">
                  <Form.Label
                    htmlFor="email"
                    className={styles.Label}
                    onChange={(e) => setEmail(e.target.value)}
                  >
                    Email
                  </Form.Label>
                  <Form.Control type="email" id="email" name="email" />
                </Form.Group>
                <Form.Group className="relative mb-2">
                  <Form.Label
                    htmlFor="message"
                    className={styles.Label}
                    onChange={(e) => setMessage(e.target.value)}
                  >
                    Message
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    aria-label="With textarea"
                    id="message"
                    name="message"
                  />
                </Form.Group>
                <Container>
                  <Button
                    type="submit"
                    size="lg"
                    className={`${styles.Button} mt-3 btn border-0`}
                  >
                    Submit
                  </Button>
                </Container>
              </Form>
            </Card>
          </Col>
        </Row>
        <Row className="m-auto py-3 w-100">
          <Card.Body>
            <iframe
              width="100%"
              height="100%"
              title="map"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: "opacity(0.7)" }}
              src="https://www.google.com/maps/embed/v1/place?q=Finntorp,+Sweden&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
          </Card.Body>
        </Row>
      </CardGroup>
    </Container>
  );
};

export default Contact;
