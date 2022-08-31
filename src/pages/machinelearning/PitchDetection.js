import React, { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import ProcessAudio from "../../components/PitchDetection/ProcessAudio";
import { Container, Spinner, Row, Col } from "react-bootstrap";
import { FaMicrophoneAlt, FaMicrophoneSlash } from "react-icons/fa";
import ShowPitch from "../../components/PitchDetection/ShowPitch";

const PitchDetection = () => {
  const MODEL_URL = "https://tfhub.dev/google/tfjs-model/spice/1/default/1";
  const [model, setModel] = useState(null);
  const [pitch, setPitch] = useState(0);

  const [start, setStart] = useState(false);

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
        <h3>Pitch Detection</h3>

        <Row>
          <Col>
            {start ? (
              <>
                <FaMicrophoneSlash
                  onClick={() => {
                    setStart(false);
                  }}
                />
                <ProcessAudio model={model} setPitch={setPitch} />
              </>
            ) : (
              <FaMicrophoneAlt onClick={() => setStart(true)} />
            )}
          </Col>
          <Col>
            <ShowPitch pitch={pitch} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PitchDetection;
