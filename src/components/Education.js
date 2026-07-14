import { Container, Row, Col } from "react-bootstrap";

export const Education = () => {
    const schools = [
        {
            school: "Georgia Institute of Technology",
            degree: "M.S. in Computer Science",
            timeline: "Jan. 2024 - Expected Dec. 2026",
            detail: "3.88 GPA",
            coursework: "Artificial Intelligence, ML for Trading, Database Systems, Software Architecture & Design"
        },
        {
            school: "University of California, Santa Cruz",
            degree: "B.S. in Computer Science, with Honors",
            timeline: "Sep. 2021 - Jun. 2023",
            detail: "3.59 GPA",
            coursework: "Computer Systems Design, Computational Models, Database Systems, Web Applications"
        }
    ];

    return (
        <section className="education" id="education">
            <Container>
                <Row>
                    <Col>
                        <h2>Education</h2>
                        <p>My academic path in computer science, from UC Santa Cruz to my current graduate work at Georgia Tech.</p>
                        <div className="education-grid">
                            {schools.map((school, index) => (
                                <div className="education-card" key={index}>
                                    <span>{school.timeline}</span>
                                    <h3>{school.school}</h3>
                                    <h4>{school.degree}</h4>
                                    <p>{school.detail}</p>
                                    <p><strong>Relevant Coursework:</strong> {school.coursework}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
