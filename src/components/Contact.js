import React from "react";
import {
  Button,
  Card,
  CardGroup,
  Col,
  Container,
  Form,
  NavLink,
  Row,
} from "react-bootstrap";
import styles from "../styles/Contact.module.css";
import appStyles from "../App.module.css";
import photo from "../assets/GinaNikroo.jpg";

const Contact = () => {
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
        <Row>
          <Col>
            <Card className={`${styles.Contact} py-5 border-0`}>
              <Row className="align-items-center m-auto">
                <Col className="text-center">
                  <Card.Img
                    className={`${styles.Image} m-auto rounded`}
                    src={photo}
                  />
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title
                      className={`${appStyles.Title} card-title fw-bold`}
                    >
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
          <Col>
            <Card
              className={`${styles.FormContainer} border-0 m-auto px-3 pt-5`}
            >
              <Form netlify="true" name="contact" className="">
                <Card.Title className="">Hire Me</Card.Title>
                <Card.Text className="">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Illum suscipit officia aspernatur veritatis. Asperiores,
                  aliquid?
                </Card.Text>
                <Form.Group>
                  <Form.Text className="relative mb-4">
                    <Form.Label htmlFor="name" className="">
                      Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="name"
                      name="name"
                      className=""
                    />
                  </Form.Text>
                </Form.Group>
                <Form.Group className="relative mb-4">
                  <Form.Label htmlFor="email" className="">
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    name="email"
                    className=""
                  />
                </Form.Group>
                <Form.Group className="relative mb-4">
                  <Form.Label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Message
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    aria-label="With textarea"
                    id="message"
                    name="message"
                    className=""
                  />
                </Form.Group>
                <Container className={`${styles.ButtonContainer} d-grid gap-2`}>
                  <Button
                    type="submit"
                    size="lg"
                    className={`${styles.Button} btn border-0`}
                  >
                    Submit
                  </Button>
                </Container>
              </Form>
            </Card>
          </Col>
        </Row>
        <Row className="m-auto w-100">
          <Card.Body>
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
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
