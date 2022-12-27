import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import malaika from "../assets/img/malaika.svg"

export const Banner = () => {

    const [loopNum, setLoopNum ] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Woman in STEM", "Soon-To-Be Grad", "Student Leader"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

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
                        <h1> My name is Malaika Sud. I am a... <br/> <span className="wrap">{text}</span></h1>
                        <p>I'm currently a senior at UC Santa Cruz studying Computer Science. I'll be graduating with a Bachelor's of Science in CS in June 2023 and I'm an aspiring software engineer! Thank you for visiting my resume website, feel free to peruse and take a look at my skills + experience! </p>
                        <button onClick={() => console.log('connect')}>Contact me! <ArrowRightCircle size={25}/> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={malaika} alt="Header image"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}