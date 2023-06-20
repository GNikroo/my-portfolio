import React, { useState } from "react";
import { Button, Card, CardGroup, Col, Container, Form, Row } from "react-bootstrap";
import appStyles from "../App.module.css";
import styles from "../styles/Contact.module.css";

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
        <Row className="py-3 justify-content-center">
          <Col lg={7}>
            <Card className={`${styles.FormContainer} border-0 mx-auto px-3`}>
              <Form netlify="true" name="contact" onSubmit={handleSubmit}>
                <Card.Title className={styles.Subtitle}>Contact Me</Card.Title>
                <Card.Text className={styles.Description}>
                  As a developer, I am always striving to learn more so that I
                  can do more. I hope to find an opportunity where I can
                  continue to develop and add to my skills.
                </Card.Text>
                <Row className="px-3">
                    <Col md={6} sm={1}>
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
                    </Col>
                    <Col md={6} sm={1}>
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
                                rows={5}
                            />
                        </Form.Group>
                    </Col>
                </Row>
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
