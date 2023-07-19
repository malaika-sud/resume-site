import { Container, Row, Col } from "react-bootstrap"
import world from '../assets/img/world.png';
import foodge from "../assets/img/foodge.png";
import boops from "../assets/img/bg.png"

export const Projects = () => {


    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <div className="projects-bx">
                        <h2> My Projects </h2>
                        <p> <br/>A section to host some of my personal projects &amp; showcase my interests in coding! My skills, as listed above, put to use. Click on the images to explore.</p>
                        
                        <div className="proj1">
                        <a href="https://people.ucsc.edu/~msud/" target="_blank"><img src={world} alt="" /></a>
                    
                            <div className="txt">
                                A collection of the projects I created for CSE 160 Computer Graphics, Fall '22. Click on each ASG folder &amp; then the related .html file to see the final product displayed on your browser! Projects created using HTML, CSS, JS, and for ASG5 utilizing the Three.js library. <br/>
                            </div>
                
                        </div>

                        <div className="proj2">
                        {/* CHANGE THE LINK LATER WHEN HOSTED ON A PLATFORM */}
                        <a href="https://github.com/malaika-sud/foodge" target="_blank"><img src={foodge} alt="" /></a>
                    
                            <div className="txt2">
                                A recipe website inspired by my college cooking skills (or lack thereof). I began this project to find a solution to the fact that I "never had anything to eat". Created utilizing the MealDB API, CSS, and JS. (IN PROGRESS: will update with the officially hosted website on completion. For now, directs to the GitHub repository.) <br/>
                            </div>
                
                        </div>

                        </div>
                    </Col>
                </Row>
            </Container>

            <img className="background-image-woop" src={boops}></img>
        </section>
    )

}