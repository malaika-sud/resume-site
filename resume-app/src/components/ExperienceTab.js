import { Col } from "react-bootstrap";

export const ExperienceTab = ({ job, role, imgU }) => {
    return (
        <Col sm={7} md={6}> 
            <div className="exp-imgbx">
                <img src={imgU} />

                <div className="exp-txtx">
                    <h4>{job}</h4>
                    <span>{role}</span>
                </div>
            </div>
        </Col>
    )
}