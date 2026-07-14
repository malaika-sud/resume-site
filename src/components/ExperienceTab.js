import { Col } from "react-bootstrap";

export const ExperienceTab = ({ job, role, imgU, className = "", onSelect }) => {
    return (
        <Col sm={7} md={6}> 
            <button className="experience-card-link" onClick={onSelect} type="button">
            <div className={`exp-imgbx ${className}`}>
                <img src={imgU} alt={`${job} experience`} />

                <div className="exp-txtx">
                    <h4>{job}</h4>
                    <span>{role}</span>
                </div>
            </div>
            </button>
        </Col>
    )
}
