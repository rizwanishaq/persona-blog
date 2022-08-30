import React, { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import { Container, Spinner, Row, Col } from "react-bootstrap";
import { FaMicrophoneAlt, FaMicrophoneSlash } from "react-icons/fa";
import ProcessAudio from "../components/EventDetection/ProcessAudio";

const EventDetection = () => {
  //   Constant for APP
  const MODEL_URL = "https://tfhub.dev/google/tfjs-model/yamnet/tfjs/1";
  const CLASS_MAP_URL =
    "https://raw.githubusercontent.com/rizwanishaq/event-detection-tensorflow/main/src/yamnet_class_map.csv";

  const [labels, setLabels] = useState({});
  const [model, setModel] = useState(null);
  const [start, setStart] = useState(false);
  const [top5, setTop5] = useState([]);

  useEffect(() => {
    fetch(CLASS_MAP_URL)
      .then((response) => response.text())
      .then((json) => {
        const labelarray = json.split("\n");
        // eslint-disable-next-line
        labelarray.map((array) => {
          const split = array.split(",");

          if (split[0] !== "index" && split !== undefined) {
            setLabels((prevState) => ({
              ...prevState,
              [split[0]]: split[2],
            }));
          }
        });
      });
  }, []);

  useEffect(() => {
    const loadModel = async () => {
      const model = await tf.loadGraphModel(MODEL_URL, {
        fromTFHub: true,
      });
      setModel(model);
    };
    loadModel();
  }, []);

  if (!model) {
    return (
      <Container>
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  return (
    <>
      <Container className="mt-2 text-center">
        <h3>Event Detection</h3>

        <Row>
          <Col>
            {start ? (
              <>
                <FaMicrophoneSlash
                  onClick={() => {
                    setStart(false);
                  }}
                />
                <ProcessAudio
                  labels={labels}
                  model={model}
                  top5={top5}
                  setTop5={setTop5}
                />
              </>
            ) : (
              <FaMicrophoneAlt onClick={() => setStart(true)} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EventDetection;
