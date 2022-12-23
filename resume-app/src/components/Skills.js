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

      return (
          <section className="skill" id="skills">
              <Container>
                  <Row>
                      <Col>
                        <div className="skill-bx">
                            <h2> My Skill Set </h2>
                            <p> <br/> A comprehensive list of programming languages, tools, and relevant coursework that I have experience with!</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <h5>JavaScript</h5>
                                    <img src={lang} alt=""/>
                                </div>

                                <div className="item">
                                    <h5>C++</h5>
                                    <img src={lang} alt=""/>
                                </div>

                                <div className="item">
                                    <h5>Python</h5>
                                    <img src={lang} alt=""/>
                                </div>

                                <div className="item">
                                    <h5>HTML &amp; CSS</h5>
                                    <img src={lang} alt=""/>
                                </div>

                                <div className="item">
                                    <h5>Haskell</h5>
                                    <img src={lang} alt=""/>
                                </div>

                                <div className="item">
                                    <h5>Git</h5>
                                    <img src={tooly} alt=""/>
                                </div>

                                <div className="item">
                                    <h5>Angular</h5>
                                    <img src={tooly} alt=""/>
                                </div>

                                <div className="item">
                                    <h5>React</h5>
                                    <img src={tooly} alt=""/>
                                </div>

                                <div className="item">
                                    <h5>Figma</h5>
                                    <img src={tooly} alt=""/>
                                </div>

                                <div className="item">
                                    <h5>Jupyter Notebook</h5>
                                    <img src={tooly} alt=""/>
                                </div>

                                <div className="item">
                                    <h5>Data Struct. &amp; Alg.</h5>
                                    <img src={course} alt=""/>
                                </div>

                                <div className="item">
                                    <h5>Analysis of Algorithms</h5>
                                    <img src={course} alt=""/>
                                </div>

                                <div className="item">
                                    <h5>Computational Models</h5>
                                    <img src={course} alt=""/>
                                </div>

                                <div className="item">
                                    <h5>Comp. Systems Design</h5>
                                    <img src={course} alt=""/>
                                </div>

                                <div className="item">
                                    <h5>Computer Graphics</h5>
                                    <img src={course} alt=""/>
                                </div>

                            </Carousel>
                        </div>
                      </Col>
                  </Row>
              </Container>
              <img className="background-image-left" src={bg} />
          </section>
      )
}