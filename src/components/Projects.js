import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import projImg13 from "../assets/img/project-img13.png";
import projImg14 from "../assets/img/project-img14.png";
import projImg15 from "../assets/img/project-img15.png";
// import projImg16 from "../assets/img/project-img16.png";
// import projImg17 from "../assets/img/project-img17.png";
// import projImg18 from "../assets/img/project-img18.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import clickSound from '../assets/sounds/click.wav';

export const Projects = () => {

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const projects = [
    {
      title: "Valentine Website",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Cute Passcode",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Couple Diaries",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Landing Page",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Testimonies Carousel",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Portfolio Website",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];


  const projects2 = [
    {
      title: "Bento Website",
      description: "Design & Development",
      imgUrl: projImg7,
    },
    {
      title: "Services Table",
      description: "Design & Development",
      imgUrl: projImg8,
    },
    {
      title: "ToS Tables",
      description: "Design & Development",
      imgUrl: projImg9,
    },
    {
      title: "Project Workflow",
      description: "Design & Development",
      imgUrl: projImg10,
    },
    {
      title: "Get In Touch",
      description: "Design & Development",
      imgUrl: projImg11,
    },
    {
      title: "FaQ Card",
      description: "Design & Development",
      imgUrl: projImg12,
    },
  ];



  const projects3 = [
    {
      title: "Footer Design",
      description: "Design & Development",
      imgUrl: projImg13,
    },
    {
      title: "Valentine Quiz",
      description: "Design & Development",
      imgUrl: projImg14,
    },
    {
      title: "Valentine Choice",
      description: "Design & Development",
      imgUrl: projImg15,
    },
    {
      title: "Landing Page",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Testimonies Carousel",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Portfolio Website",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];










  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 onMouseEnter={playClickSound}>Projects</h2>
                  <p onMouseEnter={playClickSound}>
                    I'm experienced in building various interactive and
                    responsive websites with attractive designs and optimal
                    functionality. Some of the projects I have worked on.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item onMouseEnter={playClickSound}>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item onMouseEnter={playClickSound}>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item onMouseEnter={playClickSound}>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};