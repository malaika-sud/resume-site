import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import malaikaPhoto from "../assets/img/malaika-photo.png"

const rotatingTitles = [
    "A Software Engineer at Sailing Stone AI",
    "A Georgia Tech CS Graduate Student",
    "Building AI and Full-Stack Systems",
    "Seeking Early Career SWE Roles"
];
const typewriterPeriod = 1900;
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

const getReducedMotionPreference = () => (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia(reducedMotionQuery).matches
);

export const Banner = () => {

    const [loopNum, setLoopNum ] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(getReducedMotionPreference);

    useEffect(() => {
        const mediaQuery = typeof window !== "undefined" && typeof window.matchMedia === "function"
            ? window.matchMedia(reducedMotionQuery)
            : null;

        if (!mediaQuery) {
            return undefined;
        }

        const onPreferenceChange = (event) => {
            setPrefersReducedMotion(event.matches);
        };

        setPrefersReducedMotion(mediaQuery.matches);

        if (typeof mediaQuery.addEventListener === "function") {
            mediaQuery.addEventListener("change", onPreferenceChange);

            return () => mediaQuery.removeEventListener("change", onPreferenceChange);
        }

        if (typeof mediaQuery.addListener === "function") {
            mediaQuery.addListener(onPreferenceChange);

            return () => mediaQuery.removeListener(onPreferenceChange);
        }

        return undefined;
    }, []);

    useEffect(() => {
        if (prefersReducedMotion) {
            return undefined;
        }

        const tick = () => {
            let i = loopNum % rotatingTitles.length;
            let fullText = rotatingTitles[i];
            let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
            setText(updatedText);

            if (isDeleting) {
                setDelta(prevDelta => prevDelta / 2)
            }

            if (!isDeleting && updatedText === fullText) {
                setIsDeleting(true);
                setDelta(typewriterPeriod);
            } else if (isDeleting && updatedText === '')  { //completely deleted 
                setIsDeleting(false);
                setLoopNum(prevLoopNum => prevLoopNum + 1);
                setDelta(500);
            }

        }

        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [delta, isDeleting, loopNum, prefersReducedMotion, text])

    const typewriterText = prefersReducedMotion ? rotatingTitles[0] : text;

    return (
        <section className="banner" id="home"> 
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">about me</span>
                        <h1> My name is Malaika Sud. I am... <span className="typewriter-line"><span className="wrap">{typewriterText}</span></span></h1>
                        <p>I am a Software Engineer at Sailing Stone AI in the San Francisco Bay Area, where I build AI-powered, full-stack systems with Rust, Next.js, React, TypeScript, PostgreSQL, pgvector, and the OpenAI API.</p>
                        <p>I earned my B.S. in Computer Science with Honors from UC Santa Cruz in June 2023 and am currently pursuing my M.S. in Computer Science at Georgia Tech, expected December 2026.</p>
                        <p>Feel free to explore my skills, experience, education, and projects, and click the Resume button in the navigation bar to view my most up-to-date resume.</p>
                        <p>Thank you for visiting!</p>
                        <button onClick={() => window.location.href = "mailto:malaika.sud@gmail.com"}>Contact me!<ArrowRightCircle size={25}/> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img className="hero-photo" src={malaikaPhoto} alt="Malaika Sud in graduation regalia"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
