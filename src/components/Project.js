import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { SmallScreenSize } from "../contexts/ProjectContext";
import styles from "../styles/Project.module.css";
import appStyles from "../App.module.css";

function Project() {
  return (
    <Container id="projects" className={`${appStyles.Section} mx-auto`}>
      <Card className={`${styles.Projects} border-0`}>
        <Card.Title className={`${appStyles.Title} d-block text-center`}>
          Projects
        </Card.Title>
        <Card.Body className="p-0">
          <Row className={styles.DesktopVisibility}>
            <SmallScreenSize />
          </Row>
          <Row className={styles.MobileVisibility}>
            <SmallScreenSize mobile />
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Project;
