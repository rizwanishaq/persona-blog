import React from "react";
import Item from "../components/common/Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MachineLearning = () => {
  return (
    <section className="pt-105 pb-70 bg-light feature_45">
      <Container className="px-xl-0">
        <Row className="justify-content-center">
          <Col className="text-center" xl={8} lg={10}>
            <h2 className="mb-25 small">Machine Learning Demos</h2>
            <div className="mb-60 f-22 color-heading text-adaptive description">
              These are the most simple machine learning demos available which
              are made by using reactjs and tensorflowjs.
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center justify-content-md-between no-gutters">
          <Col className="mt-10">
            <Row className="justify-content-center text-center text-md-left">
              <Item
                key={"voice Control System"}
                title={"voice Control System"}
                link={"/voicecontrolsystem"}
                description={
                  "this demo will allow you to added the notes using your voice"
                }
              />

              <Item
                key={"Pitch-Detection"}
                title={"Pitch-Detection"}
                link={"/pitchdetection"}
                description={"Pitch-Detection example"}
              />

              <Item
                key={"Event-Detection"}
                title={"Event-Detection"}
                description={"Event-Detection example"}
                link={"/eventdetection"}
              />

              <Item
                key={"ImageCapture Example"}
                title={"ImageCapture Example"}
                description={"Image Capture example"}
                link={"/imagecapture"}
              />

              <Item
                key={"ObjectDetection"}
                title={"ObjectDetection"}
                description={"Object detection using tensorflow js"}
                link={"/objectdetection"}
              />

              <Item
                key={"FaceDetection"}
                title={"FaceDetection"}
                description={"Face detection example"}
                link={"/facedetection"}
              />
              <Item
                key={"Selfie Segmentation"}
                title={"Selfie Segmentation"}
                description={"Selfie Segmentation example"}
                link={"/selfeisegmentation"}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MachineLearning;
