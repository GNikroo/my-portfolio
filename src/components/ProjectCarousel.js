import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/wordshare.jpg";
import img2 from "../assets/nosweat.jpg";
import img3 from "../assets/hidden.jpg";
import img4 from "../assets/memory.jpg";
import img5 from "../assets/wellness.jpg";
import { Col, Container, Image, NavLink, Row } from "react-bootstrap";
import styles from "../styles/ProjectCarousel.module.css";

function ProjectCarousel() {
  return (
    <Container className="d-flex m-auto">
      <Row className={`${styles.Carousel} m-auto align-items-center`}>
        <Carousel
          className="d-flex justify-content-around"
          slide={false}
          interval={10000}
          touch={true}
          variant="dark"
        >
          <Carousel.Item className={styles.Item}>
            <Col className={`${styles.Caption} pb-2`}>
              <NavLink
                href="https://wordshare.herokuapp.com/"
                className="text-decoration-none"
                target="blank"
              >
                <h3>Word Share</h3>
                <p>React Frontend - HTML5, CSS with React Boostrap, ReactJS</p>
              </NavLink>
              <NavLink
                href="https://ws-api.herokuapp.com/"
                className="text-decoration-none"
                target="blank"
              >
                <p>
                  Django Rest Framework Backend - Django Rest Framework,
                  Postrgres DB
                </p>
              </NavLink>
            </Col>
            <Col>
              <Image
                className={`${styles.Image} height justify-content-around m-auto w-100`}
                src={img1}
                alt="Word share"
              />
            </Col>
          </Carousel.Item>

          <Carousel.Item className={styles.Item}>
            <Col className={styles.Caption}>
              <NavLink
                href="https://no-sweat-fitforum.herokuapp.com/"
                className="text-decoration-none"
                target="blank"
              >
                <h3>No Sweat!</h3>
                <p>
                  HTML5, CSS with Bootstrap, Python, Django framework, Postgres
                  DB
                </p>
              </NavLink>
            </Col>
            <Col>
              <Image
                className={`${styles.Image} justify-content-around m-auto w-100`}
                src={img2}
                alt="No sweat"
              />
            </Col>
          </Carousel.Item>

          <Carousel.Item className={styles.Item}>
            <Col className={styles.Caption}>
              <NavLink
                href="https://the-hidden-room.herokuapp.com/"
                className="text-decoration-none"
                target="blank"
              >
                <h3>The Hidden Room</h3>
                <p>HTML5, CSS, Python</p>
              </NavLink>
            </Col>
            <Col>
              <Image
                className={`${styles.Image} justify-content-around m-auto w-100`}
                src={img3}
                alt="Hidden room"
              />
            </Col>
          </Carousel.Item>
          <Carousel.Item className={styles.Item}>
            <Col className={styles.Caption}>
              <NavLink
                href="https://gnikroo.github.io/Memory-Game/"
                className="text-decoration-none"
                target="blank"
              >
                <h3>Memory</h3>
                <p>HTML5, CSS, JavaScript</p>
              </NavLink>
            </Col>
            <Col>
              <Image
                className={`${styles.Image} justify-content-around m-auto w-100`}
                src={img4}
                alt="Memory"
              />
            </Col>
          </Carousel.Item>
          <Carousel.Item className={styles.Item}>
            <Col className={styles.Caption}>
              <NavLink
                href="https://gnikroo.github.io/Wellness/"
                className="text-decoration-none"
                target="blank"
              >
                <h3>Wellness - Begin with you</h3>
                <p>HTML5, CSS</p>
              </NavLink>
            </Col>
            <Col>
              <Image
                className={`${styles.Image} justify-content-around m-auto w-100`}
                src={img5}
                alt="Wellness"
              />
            </Col>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
}

export default ProjectCarousel;
