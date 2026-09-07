import { useState } from "react";
import { Container, Col, Row, Tab, Nav } from "react-bootstrap";
import gwc from "../assets/img/gwc.png";
import csbridge from "../assets/img/csbridge.png";
import sase from "../assets/img/sase.png";
import tech4good from "../assets/img/tech4good.png";
import boops from "../assets/img/boops.png";
import sailingStoneLogo from "../assets/img/sailing-stone-ai-logo.jpg";

import { ExperienceTab } from "./ExperienceTab";

const experienceTabKeys = ["first", "second", "third", "fourth", "fifth", "sixth"] as const;

type ExperienceTabKey = typeof experienceTabKeys[number];

type ExperienceItem = {
  job: string;
  role: string;
  imgU: string;
  eventKey: Exclude<ExperienceTabKey, "first">;
  className?: string;
};

const isExperienceTabKey = (key: string | null): key is ExperienceTabKey => (
  key !== null && experienceTabKeys.includes(key as ExperienceTabKey)
);

export const Experience = () => {
  const [activeTab, setActiveTab] = useState<ExperienceTabKey>("first");

  const experience: ExperienceItem[] = [
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
              onSelect={(key) => {
                if (isExperienceTabKey(key)) {
                  setActiveTab(key);
                }
              }}
              transition={false}
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
                    {experience.map((item) => {
                      return (
                        <ExperienceTab
                          key={item.eventKey}
                          {...item}
                          onSelect={() => setActiveTab(item.eventKey)}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <p className="experience-date">Dec. 2024 - Present</p> <br />
                  <p className="experience-summary">
                    As a Software Engineer at Sailing Stone AI, I build
                    full-stack AI systems for database, schema, migration, and
                    task workflows.
                  </p>{" "}
                  <br />
                  <p>
                    - Built a full-stack retrieval-augmented AI assistant with
                    Rust, Next.js, React, and TypeScript that answers user
                    questions grounded in 12 retrieved context items from
                    product and customer documentation plus the last 6
                    conversation turns. <br />
                    - Engineered a hybrid retrieval pipeline pairing OpenAI
                    embeddings and pgvector semantic search with PostgreSQL
                    full-text search, weighting semantic and keyword relevance
                    70/30 and deduplicating document chunks into
                    relevance-ranked prompts. <br />
                    - Designed an async Rust backend that persists durable
                    conversation state in PostgreSQL and streams model responses
                    over WebSockets, scoped per tenant and account. <br />
                    - Developed a reusable TypeScript/React chat workspace with
                    optimistic updates, streaming message merging, retry and
                    timeout recovery, and sanitized Markdown rendering for both
                    a full chat page and an embedded in-app panel. <br />
                    - Built an LLM agent system with DSPy, OpenAI API, and
                    pgvector for internal task automation and semantic search,
                    and shipped a task-management platform with real-time
                    updates, predictive velocity modeling, a
                    FaunaDB-to-PostgreSQL migration, and an automated Google
                    Sheets-to-database pipeline. <br />
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <p className="experience-date">Nov. 2019 - May 2021 </p> <br />
                  <p className="experience-summary">
                    As Chapter Founder &amp; President of Girls Who Code, I
                    advocated for the involvement of women in STEM at Ohlone
                    College.{" "}
                  </p>{" "}
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
                  <p className="experience-summary">
                    {" "}
                    Hosted club workshops on GitHub, HTML/CSS (Web Dev Series),
                    Flutter/Android Studio (App Dev Series). <br />
                    Planned and presented an OhloneHacks Figma workshop for
                    Spring 2021.{" "}
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="fourth">
                  <p className="experience-date">June 2021 - July 2021 </p> <br />
                  <p className="experience-summary">
                    As a Section Leader, I led groups of students through the
                    Stanford Summer Python curriculum.
                  </p>{" "}
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
                  <p className="experience-date">May 2022 - June 2023</p> <br />
                  <p className="experience-summary">
                    As the Engineering VP I was responsible for organizing
                    events and activities for our engineering majors.{" "}
                  </p>{" "}
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
                  <p className="experience-date">Aug. 2022 - June 2023</p> <br />
                  <p className="experience-summary">
                    {" "}
                    As a UI Components Lead I was responsible for:{" "}
                  </p>
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
                  <p className="experience-summary">
                    {" "}
                    Primarily worked with HTML, CSS, JavaScript, and Angular to
                    develop responsive components and dynamically updated pages
                    for the Tech4Good web platform.{" "}
                  </p>{" "}
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
