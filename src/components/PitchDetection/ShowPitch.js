import React from "react";
import { Container, Card } from "react-bootstrap";
import { FaMale, FaFemale, FaQuestionCircle } from "react-icons/fa";

const ShowPitch = ({ pitch }) => {
  return (
    <Container>
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-start">
          {pitch !== 0 &&
            (pitch >= 70.0 && pitch <= 165.0 ? (
              <>
                <div className="ms-2 me-auto">
                  <FaMale />
                </div>
                <div>
                  <span style={{ justifyContent: "space-between" }}>
                    <p style={{ float: "right" }}>male: {pitch}</p>
                  </span>
                </div>
              </>
            ) : pitch > 165.0 && pitch <= 350 ? (
              <span style={{ justifyContent: "space-between" }}>
                <FaFemale />
                <p style={{ float: "right" }}>female: {pitch}</p>
              </span>
            ) : (
              <span style={{ justifyContent: "space-between" }}>
                <i className="fas fa-question-circle"></i>
                <p style={{ float: "right" }}>
                  Noise: <FaQuestionCircle /> {pitch}
                </p>
              </span>
            ))}
        </Card.Header>
      </Card>
    </Container>
  );
};

export default ShowPitch;
