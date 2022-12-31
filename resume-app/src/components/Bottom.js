import { Container, Row, Col } from "react-bootstrap";
import loogo from "../assets/img/loogo.svg";
import linkedinIcon from '../assets/img/icon1.svg';
import githubIcon from '../assets/img/icon2.svg';

export const Bottom = () => {
    return (
        <footer className="bottom">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <div className="woopers">
                            <img src={loogo}/>
                        </div>
                        <div className="email">
                            <p>Website created by Malaika Sud, 2023</p>
                        </div>
                    </Col>

                    <Col sm={6} className="text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/malaika-sud/"><img src={linkedinIcon} alt=""/></a>
                            <a href="https://github.com/malaika-sud"><img src={githubIcon} alt=""/></a>
                        </div>
                    
                        <p>email: malaika.sud@gmail.com</p>
                    </Col>
                </Row>
            </Container>
        </footer>   
    )
}