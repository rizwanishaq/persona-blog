import React from "react";
import { Row, ListGroup, Container, Card, Badge } from "react-bootstrap";

const Education = () => {
  return (
    <Container>
      <Row className="mb-1">
        <Card>
          <Card.Body>
            <Card.Header>
              PhD - Computer and Telecommunication Engineering.
              <Card.Subtitle className="text-muted">
                University of Deusto, Bilbao, Spain
                <Card.Subtitle className="text-muted">
                  <small>Jan-2012 - Dec-2015</small>
                </Card.Subtitle>
              </Card.Subtitle>
            </Card.Header>
            <Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Badge bg="dark">Thesis Topic </Badge> Enhancement of
                  Esophageal Speech using Signal Processing algorithms on Source
                  Signal and Vocal Tract Filter.
                </ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <Row className="mb-1">
        <Card>
          <Card.Body>
            <Card.Header>
              Master of Science, Electrical Engineering, Specialization: Signal
              Processing.
              <Card.Subtitle className="text-muted">
                Blekinge Institute of Technology, Karlskrona, Sweden
                <Card.Subtitle className="text-muted">
                  <small>Mar-2008 - June 2010</small>
                </Card.Subtitle>
              </Card.Subtitle>
            </Card.Header>
            <Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Badge bg="dark">Thesis Topic </Badge> Adaptive Gain Equalizer
                  and Modulation Frequency Domain for Noise Reduction
                </ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <Row className="mb-1">
        <Card>
          <Card.Body>
            <Card.Header>
              Bachelor of Science, Computer Engineering.
              <Card.Subtitle className="text-muted">
                Comsats Institute of Information Technology Wah Cantt, Pakistan.
                <Card.Subtitle className="text-muted">
                  <small>Mar-2003 - Mar 2007</small>
                </Card.Subtitle>
              </Card.Subtitle>
            </Card.Header>
            <Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Badge bg="dark">Thesis Topic </Badge> Three Phase Power
                  Factor Sensing and Correction System using 8051
                  Microcontroller
                </ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Education;
