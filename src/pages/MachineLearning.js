import React from "react";
import BlogLink from "../components/common/BlogLink";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

const MachineLearning = () => {
  return (
    <Container className="px-xl-0 pt-100 pb-100 text-center">
      <ListGroup>
        <BlogLink
          key={"Voice Control System"}
          title={"Voice Control System"}
          text={"Voice Control System example"}
          link={"/voicecontrolsystem"}
        />

        <BlogLink
          key={"Pitch-Detection"}
          title={"Pitch-Detection"}
          text={"Pitch-Detection example"}
          link={"/pitchdetection"}
        />

        <BlogLink
          key={"Event-Detection"}
          title={"Event-Detection"}
          text={"Event-Detection example"}
          link={"/eventdetection"}
        />

        <BlogLink
          key={"ImageCapture Example"}
          title={"ImageCapture Example"}
          text={"Image Capture example"}
          link={"/imagecapture"}
        />

        <BlogLink
          key={"ObjectDetection"}
          title={"ObjectDetection"}
          text={"Object detection using tensorflow js"}
          link={"/objectdetection"}
        />

        <BlogLink
          key={"FaceDetection"}
          title={"FaceDetection"}
          text={"Face detection example"}
          link={"/facedetection"}
        />
        <BlogLink
          key={"Selfie Segmentation"}
          title={"Selfie Segmentation"}
          text={"Selfie Segmentation example"}
          link={"/selfeisegmentation"}
        />
      </ListGroup>
    </Container>
  );
};

export default MachineLearning;
