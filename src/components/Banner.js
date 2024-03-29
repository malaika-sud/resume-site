import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import malaika from "../assets/img/malaika.svg"

export const Banner = () => {

    const [loopNum, setLoopNum ] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["A New Grad", "Seeking Employment"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1900;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '')  { //completely deleted 
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(500);
        }

    }

    return (
        <section className="banner" id="home"> 
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">about me</span>
                        <h1> My name is Malaika Sud. I am... <br/> <span className="wrap">{text}</span></h1>
                        <p>I'm a fresh grad from UC Santa Cruz as of June 2023. I graduated with my B.S. in Computer Science with Honors, and I'm currently seeking software engineering roles. Thank you for visiting my resume website, feel free to peruse and take a look at my skills + experience! </p>
                        <button onClick={() => window.location.href = "mailto:malaika.sud@gmail.com"}>Contact me!<ArrowRightCircle size={25}/> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={malaika} alt=""/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}