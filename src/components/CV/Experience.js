import React from "react";
import { Row, ListGroup, Container, Card } from "react-bootstrap";
// import { useAuthContext } from "../../hooks/useAuthContext";

const Experience = () => {
  // const { user } = useAuthContext();
  const user = true;
  return (
    <Container>
      <Row className="mb-1">
        {user && (
          <Card>
            <Card.Body>
              <Card.Header>
                Research and Development Engineer (AI)
                <Card.Subtitle className="text-muted">
                  DialogaGroup, Bilbao, Spain
                  <Card.Subtitle className="text-muted">
                    <small>Jan-2016 - Present</small>
                  </Card.Subtitle>
                </Card.Subtitle>
              </Card.Header>
              <Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Design, test, and delpoyemnt of different Artificial
                    Intelligence(AI) project related to computer vi-
                    sion(generation of video from real-time audio samples) and
                    speech processing (Speaker/Language/Gender
                    Identification/verification from real-time audio samples)
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Coordinating all the technical and developement issues/risks
                    related to modeling, testing and deployment of the AI models
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Designing of the AI models using Tensorflow and Pytorch
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Deployment of the AI models using NVIDIA Triton Inference
                    Server
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Deployment of APIs through
                    NodeJS(front(reactjs)/back(nodejs), gRPC)
                  </ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </Row>
      <Row className="mb-1">
        <Card>
          <Card.Body>
            <Card.Header>
              Researcher
              <Card.Subtitle className="text-muted">
                Deustotech-eVida , Bilbao, Spain.
                <Card.Subtitle className="text-muted">
                  <small>Jan-2012 - Dec 2015</small>
                </Card.Subtitle>
              </Card.Subtitle>
            </Card.Header>
            <Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Enhancement of pathology speech signal using the signal
                  processing algorithms
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
              Visiting Researcher
              <Card.Subtitle className="text-muted">
                Aalto University, Espoo , Finland.
                <Card.Subtitle className="text-muted">
                  <small>Mar-2015 - June 2015</small>
                </Card.Subtitle>
              </Card.Subtitle>
            </Card.Header>
            <Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  GlottHMM synthesizer for Esophageal Speech Enhancement
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
              Researcher
              <Card.Subtitle className="text-muted">
                GRADIANT, Vigo, Spain.
                <Card.Subtitle className="text-muted">
                  <small>May-2011 - Oct 2011</small>
                </Card.Subtitle>
              </Card.Subtitle>
            </Card.Header>
            <Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Research in LTE Technology and Software Development of the
                  Receiver. LTE/LTE-A downlink physical layer implementation.
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
              Visiting Instructor
              <Card.Subtitle className="text-muted">
                Govt. Polytechnic Institute, Attock, Pakistan.
                <Card.Subtitle className="text-muted">
                  <small>Nov-2007 - Mar 2008</small>
                </Card.Subtitle>
              </Card.Subtitle>
            </Card.Header>
            <Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Optical Fiber Communication, Data Communication and Networks,
                  Wireless and Mobile Networks (GSM), Telecommunication Access
                  Networks
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
              Research student
              <Card.Subtitle className="text-muted">
                University of Trento, Italy.
                <Card.Subtitle className="text-muted">
                  <small>May-2007 - Oct 2008</small>
                </Card.Subtitle>
              </Card.Subtitle>
            </Card.Header>
            <Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Programming Plateforms and communication runtimes for Wireless
                  Sensors Networks(WSN)
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
              Student Internee
              <Card.Subtitle className="text-muted">
                Kohat cement factory, Kohat, Pakistan.
                <Card.Subtitle className="text-muted">
                  <small>Aug-2005 - Sep 2005</small>
                </Card.Subtitle>
              </Card.Subtitle>
            </Card.Header>
            <Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Automation of Kohat white cement
                </ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Experience;
