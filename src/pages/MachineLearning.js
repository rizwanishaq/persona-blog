import React from "react";
import Item from "../components/common/Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import backgroundImage from "./machinelearning/backgroundimage.png";

const MachineLearning = () => {
  return (
    <section className="pt-105 pb-70 bg-light feature_45">
      <Container
        className="px-xl-0"
        // style={{
        //   backgroundImage: `url(${backgroundImage}`,
        //   backgroundSize: "contain",
        //   backgroundRepeat: "no-repeat",
        //   backgroundColor:
        //     "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))",
        // }}
      >
        <Row className="justify-content-center">
          <Col className="text-center" xl={8} lg={10}>
            <h2 className="mb-25 small">Machine Learning Demos</h2>
            <div className="mb-60 f-22 color-heading text-adaptive description">
              Effortlessly Explore the World of Machine Learning with These
              User-Friendly Demos Powered by ReactJS and TensorFlowJS!
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

              <Item
                key={"OpenAiImage"}
                title={"OpenAiImage"}
                description={"generate the image from the text"}
                link={"/openaiimage"}
              />

              <Item
                key={"HuggingFaceImageGeneration1"}
                title={"HuggingFace stable diffusion image generation"}
                description={"HuggingFace stable diffusion image generation"}
                link={"/huggingfacestable-diffusion-2"}
              />

              <Item
                key={"ChatGPTDemo"}
                title={"ChatGPTDemo Example"}
                description={"ChatGPTDemo"}
                link={"/chatgptdemo"}
              />
              <Item
                key={"TransformerTranslation"}
                title={"Transformer translation example"}
                description={"transformer translation example"}
                link={"/transformertranslation"}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MachineLearning;
