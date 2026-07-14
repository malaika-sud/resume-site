import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Col, Row } from "react-bootstrap";
import tooly from "../assets/img/tools.svg";
import course from "../assets/img/course.svg";
import lang from "../assets/img/lang.svg";
import bg from "../assets/img/bg.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const skills = [
        { label: "Python", img: lang },
        { label: "TypeScript", img: lang },
        { label: "JavaScript", img: lang },
        { label: "Rust", img: lang },
        { label: "SQL", img: lang },
        { label: "Java", img: lang },
        { label: "HTML & CSS", img: lang },
        { label: "React", img: tooly },
        { label: "Next.js", img: tooly },
        { label: "Angular", img: tooly },
        { label: "Tailwind CSS", img: tooly },
        { label: "Radix UI", img: tooly },
        { label: "Node.js", img: tooly },
        { label: "NestJS", img: tooly },
        { label: "Django", img: tooly },
        { label: "Spring Boot", img: tooly },
        { label: "Actix Web", img: tooly },
        { label: "Tokio", img: tooly },
        { label: "SQLx", img: tooly },
        { label: "PostgreSQL", img: tooly },
        { label: "PostGIS", img: tooly },
        { label: "pgvector", img: tooly },
        { label: "Docker", img: tooly },
        { label: "WebSockets", img: tooly },
        { label: "Auth0", img: tooly },
        { label: "Git & GitHub", img: tooly },
        { label: "Figma", img: tooly },
        { label: "OpenAI API", img: tooly },
        { label: "DSPy", img: tooly },
        { label: "RAG", img: tooly },
        { label: "Embeddings", img: tooly },
        { label: "Hybrid Search", img: tooly },
        { label: "Prompt Engineering", img: tooly },
        { label: "Artificial Intelligence", img: course },
        { label: "ML for Trading", img: course },
        { label: "Database Systems", img: course },
        { label: "Software Arch. & Design", img: course },
        { label: "Computational Models", img: course },
        { label: "Comp. Systems Design", img: course },
        { label: "Web Applications", img: course },
      ];

      return (
          <section className="skill" id="skills">
              <Container>
                  <Row>
                      <Col>
                        <div className="skill-bx">
                            <h2> My Skill Set </h2>
                            <p> <br/> A comprehensive list of the main programming languages, tools, and relevant coursework that I have experience with!</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                {skills.map((skill, index) => (
                                    <div className="item" key={index}>
                                        <h5>{skill.label}</h5>
                                        <img src={skill.img} alt=""/>
                                    </div>
                                ))}

                            </Carousel>
                        </div>
                      </Col>
                  </Row>
              </Container>
              <img className="background-image-left" src={bg} alt="" aria-hidden="true" />
          </section>
      )
}
