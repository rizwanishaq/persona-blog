import React, { useRef, useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Webcam from "react-webcam";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const VideoFrames = () => {
  const [image, setImage] = useState(null);
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef, setImage]);

  useEffect(() => {
    const timer = setInterval(() => {
      capture();
    }, 10);

    return () => {
      console.log("cleared");
      clearInterval(timer);
    };
  }, [capture]);

  return (
    <Container className="mt-2 text-center">
      <Row>
        <Col sm={6}>
          <Card>
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              screenshotQuality={1.0}
              onUserMedia={(e) => {
                console.log("stream started");
              }}
            />
            <Card.Body>
              <Card.Title>Original Video</Card.Title>
              <Card.Text>
                This is the original Video we are getting from the Webcam
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6}>
          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>Jpeg Image</Card.Title>
              <Card.Text>
                This the is image we are getting from the Video stream after
                every 10ms.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoFrames;
