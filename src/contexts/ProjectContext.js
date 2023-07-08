import { projects } from "../data";
import { Carousel } from "react-bootstrap";
import { NavLink } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import styles from "../styles/ProjectContext.module.css";

export const SmallScreenSize = (props) => {
  const { mobile } = props;

  const ProjectDetailsMobile = ({ link, title, subtitle, description }) => (
    <>
      <Col className={`${styles.Caption} ${styles.MobileCaption} mx-auto pb-5`}>
        <NavLink href={link} className="text-decoration-none" target="blank">
          <h3>{title}</h3>
          <p className={styles.Subtitle}>{subtitle}</p>
          <p>{description}</p>
        </NavLink>
      </Col>
    </>
  );

  const ProjectDetailsDesktop = ({ link, title, subtitle, image, alt }) => (
    <>
      <Col className={`${styles.Caption} ${styles.DesktopCaption}`}>
        <NavLink href={link} className="text-decoration-none" target="blank">
          <h3>{title}</h3>
          <p className={styles.Subtitle}>{subtitle}</p>
        </NavLink>
      </Col>
      <Col className={`${styles.ImageCol} mx-auto`}>
        <NavLink href={link} target="blank">
          <Image className={`${styles.Image} w-100`} src={image} alt={alt} />
        </NavLink>
      </Col>
    </>
  );

  return (
    <>
      {mobile ? (
        <Carousel
          className="d-flex"
          slide={false}
          interval={10000}
          touch={true}
          controls={false}
        >
          {projects.map((project) => (
            <Carousel.Item
              key={project.title}
              className={`${styles.Item} pt-4`}
            >
              <ProjectDetailsMobile {...project} />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <Carousel
          className="d-flex"
          slide={false}
          interval={10000}
          touch={true}
        >
          {projects.map((project) => (
            <Carousel.Item key={project.title} className={styles.Item}>
              <ProjectDetailsDesktop {...project} />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
};
