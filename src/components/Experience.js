import { Container, Col, Row, Tab, Nav } from "react-bootstrap";
import gwc from "../assets/img/gwc.png";
import csbridge from "../assets/img/csbridge.png";
import sase from "../assets/img/sase.png";
import tech4good from "../assets/img/tech4good.png";
import boops from "../assets/img/boops.png"

import { ExperienceTab } from "./ExperienceTab";

export const Experience = () => {

    const experience = [
        {
            job: "Girls Who Code",
            role: "Chapter Founder & President",
            imgU: gwc,
        },

        {
            job: "Stanford CS Bridge",
            role: "Section Lead",
            imgU: csbridge,
        },

        {
            job: "Society of Asian Scientists & Engineers",
            role: "Engineering Vice President",
            imgU: sase,
        },

        {
            job: "Tech4Good Lab",
            role: "UI Components Lead",
            imgU: tech4good,
        },
    ];

    return (
        <section className="experience" id="experience">
            <Container>
                <Row>
                    <Col>
                        <h2> <br/> Experience</h2>
                        <p> <br/> A compilation of my experience in the Computer Science sphere. <br/> Click to learn more! <br/> <br/></p>

                        <Tab.Container id="experience-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Overview</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="second">Girls Who Code</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="third">CS Bridge</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">SASE</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Tech4Good</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            experience.map((experience, index) => {
                                                return (
                                                    < ExperienceTab key={index} {...experience} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">

                                <h4>Nov. 2019 - May 2021 </h4> <br/> 
                                    <h5>As Chapter Founder &amp; President of Girls Who Code, I advocated for the involvement of women in STEM at Ohlone College. </h5> <br/>
                                    <p>
                                    - Served as a proxy between Girls Who Code Headquarters and its Ohlone Chapter. <br/>
                                    - Organized weekly meetings, workshops, and club activities. <br/>
                                    - Handled administrative responsibilities such as advertising, outreach, and recruitment. <br/>
                                    </p>
                                    <br/>
                                    <h5> Hosted club workshops on GitHub, HTML/CSS (Web Dev Series), Flutter/Android Studio (App Dev Series). <br/>
                                    Planned and presented an OhloneHacks Figma workshop for Spring 2021. </h5>

                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                <h4>June 2021 - July 2021 </h4> <br/> 
                                    <h5>As a Section Leader, I led groups of students through the Stanford Summer Python curriculum.</h5> <br/>
                                    <p>
                                    - Met daily with my group for in-depth reviews of lecture/applying new concepts learned to practice programs. <br/>
                                    - Worked with all students in the program for daily office hours, regarding project homework.  <br/>
                                    - Created a welcoming, friendly environment for my section that encouraged asking questions.  <br/>
                                    </p>

                                </Tab.Pane>

                                <Tab.Pane eventKey="fourth">
                                  <h4>May 2022 - June 2023</h4> <br/>
                                    <h5>As the Engineering VP I was responsible for organizing events and activities for our engineering majors. </h5> <br/>
                                    <p>
                                    - Assisted CS major SASE members with resume advice, small group tutoring, etc. <br/>
                                    - Coordinated SASE West Regional Conference 2022 and oversaw officer panels. <br/>
                                    </p>

                                </Tab.Pane>

                                <Tab.Pane eventKey="fifth">
                                  <h4>Aug. 2022 - June 2023</h4> <br/>
                                    <h5> As a UI Components Lead I was responsible for: </h5>
                                    <p> - organizing and mentoring a UI Components team through each quarter <br/>
                                        - crafting component hierarchies <br/>
                                        - generating components for my teams to work on under supervision.</p> <br/>
                                        <h5> Primarily worked with HTML, CSS, JavaScript, and Angular to develop responsive components and dynamically updated pages for the Tech4Good web platform. </h5> <br/>

                                </Tab.Pane>

                            </Tab.Content>

                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={boops}></img>
        </section>
    )
}