import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { SmallScreenSize } from "../contexts/ProjectContext";
import styles from "../styles/ProjectCarousel.module.css";

function ProjectCarousel() {
  return (
    <Container className="d-flex m-auto">
      <Row className={`${styles.DesktopVisibility} m-auto align-items-center`}>
        <SmallScreenSize />
      </Row>
      <Row className={`${styles.MobileVisibility} m-auto align-items-center`}>
        <SmallScreenSize mobile />
      </Row>
    </Container>
  );
}

export default ProjectCarousel;
