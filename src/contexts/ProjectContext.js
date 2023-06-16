import { projects } from "../data";
import Carousel from "react-bootstrap/Carousel";
import NavLink from "react-bootstrap/NavLink";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import carouselStyles from "../styles/ProjectCarousel.module.css";

export const SmallScreenSize = (props) => {
  const { mobile } = props;

  const ProjectDetailsMobile = ({ link, title, subtitle, description }) => (
    <>
      <Col
        className={`${carouselStyles.Caption} ${carouselStyles.MobileCaption} pb-5`}
      >
        <NavLink href={link} className="text-decoration-none" target="blank">
          <h3>{title}</h3>
          <p className={carouselStyles.Subtitle}>{subtitle}</p>
          <p>{description}</p>
        </NavLink>
      </Col>
    </>
  );

  const ProjectDetailsDesktop = ({ link, title, subtitle, image, alt }) => (
    <>
      <Col
        className={`${carouselStyles.Caption} ${carouselStyles.DesktopCaption}`}
      >
        <NavLink href={link} className="text-decoration-none" target="blank">
          <h3>{title}</h3>
          <p className={carouselStyles.Subtitle}>{subtitle}</p>
        </NavLink>
      </Col>
      <Col className="w-100">
        <Image
          className={`${carouselStyles.Image} m-auto justify-content-around w-100`}
          src={image}
          alt={alt}
        />
      </Col>
    </>
  );

  return (
    <>
      {mobile ? (
        <Carousel
          className="d-flex justify-content-around"
          slide={false}
          interval={10000}
          touch={true}
          controls={false}
          variant="dark"
        >
          {projects.map((project) => (
            <Carousel.Item
              key={project.title}
              className={`${carouselStyles.Item} m-auto pt-4`}
            >
              <ProjectDetailsMobile {...project} />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <Carousel
          className="d-flex justify-content-around"
          slide={false}
          interval={10000}
          touch={true}
          variant="dark"
        >
          {projects.map((project) => (
            <Carousel.Item
              key={project.title}
              className={`${carouselStyles.Item} m-auto pt-5`}
            >
              <ProjectDetailsDesktop {...project} />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
};
