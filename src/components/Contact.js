import React, { useState } from "react";
import {
  Button,
  Card,
  CardGroup,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
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
      className={`${styles.Section} ${appStyles.Section}`}
    >
      <h1 className={`${appStyles.Title} d-block text-center`}>contact</h1>
      <Card className={`${styles.Contact} m-auto border-0`}>
        <Row className="py-1 justify-content-center">
          <Col lg={7}>
            <Card className={`${styles.FormContainer} border-0 mx-auto px-3`}>
              <Form data-netlify="true" name="contact" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <Card.Text className={styles.Description}>
                  If you would like to get into contact with me about developer
                  opportunities, please fill out the form and I'll get back to
                  you as soon as possible!
                </Card.Text>
                <Row className="px-3">
                  <Col md={6} sm={1}>
                    <Form.Group className="relative mb-2">
                      <Form.Label htmlFor="name" className={styles.Label}>
                        Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="given-name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="relative mb-2">
                      <Form.Label htmlFor="email" className={styles.Label}>
                        Email
                      </Form.Label>
                      <Form.Control
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} sm={1}>
                    <Form.Group className="relative mb-2">
                      <Form.Label htmlFor="message" className={styles.Label}>
                        Message
                      </Form.Label>
                      <Form.Control
                        onChange={(e) => setMessage(e.target.value)}
                        as="textarea"
                        aria-label="With textarea"
                        id="message"
                        name="message"
                        rows={5}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Container className="text-center">
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
        <Row className="m-auto p-2 pb-5 w-100">
          <Card.Body>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d65118.06237581816!2d18.066014112133303!3d59.33396474234963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sse!4v1687270474264!5m2!1sen!2sse"
              width="100%"
              height="100%"
              className="border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Card.Body>
        </Row>
      </Card>
    </Container>
  );
};

export default Contact;
