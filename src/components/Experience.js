import { useState } from "react";
import { Container, Col, Row, Tab, Nav } from "react-bootstrap";
import gwc from "../assets/img/gwc.png";
import csbridge from "../assets/img/csbridge.png";
import sase from "../assets/img/sase.png";
import tech4good from "../assets/img/tech4good.png";
import boops from "../assets/img/boops.png";
import sailingStoneLogo from "../assets/img/sailing-stone-ai-logo.jpg";

import { ExperienceTab } from "./ExperienceTab";

export const Experience = () => {
  const [activeTab, setActiveTab] = useState("first");

  const experience = [
    {
      job: "Sailing Stone AI",
      role: "Software Engineer",
      imgU: sailingStoneLogo,
      eventKey: "second",
      className: "logo-card",
    },

    {
      job: "Girls Who Code",
      role: "Chapter Founder & President",
      imgU: gwc,
      eventKey: "third",
    },

    {
      job: "Stanford CS Bridge",
      role: "Section Lead",
      imgU: csbridge,
      eventKey: "fourth",
    },

    {
      job: "Society of Asian Scientists & Engineers",
      role: "Engineering Vice President",
      imgU: sase,
      eventKey: "fifth",
    },

    {
      job: "Tech4Good Lab",
      role: "UI Components Lead",
      imgU: tech4good,
      eventKey: "sixth",
    },
  ];

  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col>
            <h2>
              {" "}
              <br /> Experience
            </h2>
            <p>
              {" "}
              <br /> A compilation of my experience in the Computer Science
              sphere. <br /> Click to learn more! <br /> <br />
            </p>

            <Tab.Container
              id="experience-tabs"
              activeKey={activeTab}
              onSelect={(key) => key && setActiveTab(key)}
            >
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Overview</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="second">Sailing Stone AI</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="third">Girls Who Code</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="fourth">CS Bridge</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="fifth">SASE</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="sixth">Tech4Good</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {experience.map((experience, index) => {
                      return (
                        <ExperienceTab
                          key={index}
                          {...experience}
                          onSelect={() => setActiveTab(experience.eventKey)}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <h4>Dec. 2024 - Present</h4> <br />
                  <h5>
                    As a Software Engineer at Sailing Stone AI, I build
                    full-stack AI systems for database, schema, migration, and
                    task workflows.
                  </h5>{" "}
                  <br />
                  <p>
                    - Built a full-stack retrieval-augmented AI assistant with
                    Rust, Next.js, React, TypeScript, PostgreSQL, pgvector, and
                    the OpenAI API. <br />
                    - Engineered a hybrid retrieval pipeline combining pgvector
                    semantic search with PostgreSQL full-text search, relevance
                    weighting, and chunk deduplication. <br />
                    - Designed an async Rust backend that persists durable
                    conversation state in PostgreSQL and streams model responses
                    over WebSockets. <br />
                    - Developed a reusable TypeScript/React chat workspace with
                    optimistic updates, streaming message merging, retry and
                    timeout recovery, and sanitized Markdown rendering. <br />
                    - Built an LLM agent system with DSPy, OpenAI API, and
                    pgvector, and shipped a task-management platform with
                    real-time updates, predictive velocity modeling, and a
                    FaunaDB-to-PostgreSQL migration. <br />
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <h4>Nov. 2019 - May 2021 </h4> <br />
                  <h5>
                    As Chapter Founder &amp; President of Girls Who Code, I
                    advocated for the involvement of women in STEM at Ohlone
                    College.{" "}
                  </h5>{" "}
                  <br />
                  <p>
                    - Served as a proxy between Girls Who Code Headquarters and
                    its Ohlone Chapter. <br />
                    - Organized weekly meetings, workshops, and club activities.{" "}
                    <br />
                    - Handled administrative responsibilities such as
                    advertising, outreach, and recruitment. <br />
                  </p>
                  <br />
                  <h5>
                    {" "}
                    Hosted club workshops on GitHub, HTML/CSS (Web Dev Series),
                    Flutter/Android Studio (App Dev Series). <br />
                    Planned and presented an OhloneHacks Figma workshop for
                    Spring 2021.{" "}
                  </h5>
                </Tab.Pane>

                <Tab.Pane eventKey="fourth">
                  <h4>June 2021 - July 2021 </h4> <br />
                  <h5>
                    As a Section Leader, I led groups of students through the
                    Stanford Summer Python curriculum.
                  </h5>{" "}
                  <br />
                  <p>
                    - Met daily with my group for in-depth reviews of
                    lecture/applying new concepts learned to practice programs.{" "}
                    <br />
                    - Worked with all students in the program for daily office
                    hours, regarding project homework. <br />
                    - Created a welcoming, friendly environment for my section
                    that encouraged asking questions. <br />
                    - Guided 22 students from no coding experience to completed
                    PyGame projects with a 100% completion rate. <br />
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="fifth">
                  <h4>May 2022 - June 2023</h4> <br />
                  <h5>
                    As the Engineering VP I was responsible for organizing
                    events and activities for our engineering majors.{" "}
                  </h5>{" "}
                  <br />
                  <p>
                    - Assisted CS major SASE members with resume advice, small
                    group tutoring, etc. <br />
                    - Coordinated SASE West Regional Conference 2022 and oversaw
                    officer panels. <br />
                    - Co-organized SASE WR Conference 2022 for 1,000+ attendees
                    and ran monthly workshops for 35+ students. <br />
                    - Mentored 10-15 students weekly through a CS tutoring
                    program that improved academic performance. <br />
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="sixth">
                  <h4>Aug. 2022 - June 2023</h4> <br />
                  <h5> As a UI Components Lead I was responsible for: </h5>
                  <p>
                    {" "}
                    - Organizing and mentoring a UI Components team through each
                    quarter <br />
                    - Crafting component hierarchies <br />
                    - Generating components for my teams to work on under
                    supervision <br />
                    - Leading two 10-person UI teams to build 30+ reusable
                    Angular components that improved platform accessibility for
                    500+ users <br />- Establishing pair-programming workflows
                    that improved productivity and collaboration.
                  </p>{" "}
                  <br />
                  <h5>
                    {" "}
                    Primarily worked with HTML, CSS, JavaScript, and Angular to
                    develop responsive components and dynamically updated pages
                    for the Tech4Good web platform.{" "}
                  </h5>{" "}
                  <br />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={boops}
        alt=""
        aria-hidden="true"
      ></img>
    </section>
  );
};
