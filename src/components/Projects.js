import { Container, Row, Col } from "react-bootstrap";
import boops from "../assets/img/bg.png";

export const Projects = () => {
  const projects = [
    {
      title: "HourBank",
      stack: "TypeScript, NestJS, PostgreSQL, PostGIS, Docker",
      href: "https://github.com/malaika-sud/hourbank",
      text: "Developing a backend-heavy neighborhood time-banking marketplace where users exchange local services through hour-based credits, with a TypeScript monorepo, Dockerized PostgreSQL/PostGIS setup, migration-backed domain schema, shared TypeScript contracts, seed data, and initial NestJS APIs for profiles and listings.",
    },
    {
      title: "Portfolio Website (this site!)",
      stack: "React, JavaScript, React Bootstrap, CSS",
      text: "Built and deployed a responsive React portfolio website showcasing my projects and technical experience across desktop and mobile.",
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <div className="projects-bx">
              <h2> My Projects </h2>
              <p>
                {" "}
                <br />A section to host recent technical projects from my
                backend, full-stack, and frontend development practice.
              </p>

              <div className="project-list">
                {projects.map((project, index) => (
                  <div className="project-row" key={index}>
                    <div className="project-copy">
                      <h4>{project.title}</h4>
                      <span>{project.stack}</span>
                      <p>{project.text}</p>
                      {project.href && (
                        <a
                          className="project-link-button"
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${project.title} on GitHub`}
                        >
                          View on GitHub
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-woop"
        src={boops}
        alt=""
        aria-hidden="true"
      ></img>
    </section>
  );
};
