import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import appStyles from "../App.module.css";
import { SmallScreenSize } from "../contexts/ProjectContext";
import styles from "../styles/Project.module.css";

const Project = () => {
  return (
    <Container
      id="projects"
      className={`${styles.Section} ${appStyles.Section}`}
    >
      <h1 className={`${appStyles.Title} d-block text-center`}>projects</h1>
      <Card className={`${styles.Projects} m-auto border-0`}>
        <Card.Body className="p-0 border-0">
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
};

export default Project;
