import React, { useEffect, useState } from "react";
import * as speech from "@tensorflow-models/speech-commands";
import { toast } from "react-toastify";
import { Container, Row, Col } from "react-bootstrap";
import { FaMicrophoneAlt, FaMicrophoneSlash } from "react-icons/fa";

// ref: https://stackoverflow.com/questions/63761550/cannot-load-tensorflow-models-speech-commands

const SpeechCommand = () => {
  const [model, setModel] = useState(null);
  const [action, setAction] = useState(null);
  const [labels, setLabels] = useState(null);
  const [listening, setListening] = useState(false);

  useEffect(() => {
    const loadModel = async () => {
      const recognizer = await speech.create("BROWSER_FFT");
      await recognizer.ensureModelLoaded();
      setModel(recognizer);
      setLabels(recognizer.wordLabels());
    };
    loadModel();
    // eslint-disable-line
  }, []);

  const argMax = (arr) => {
    return arr.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
  };

  const recognizeCommand = async () => {
    toast.info("Listening...");
    setListening(true);
    model.listen(
      (result) => {
        setAction(labels[argMax(Object.values(result.scores))]);
      },
      { includeSpectrogram: true, probabilityThreshold: 0.9 }
    );
  };

  return (
    <>
      <Container className="mt-2 text-center">
        <h3>Speech Commands</h3>
        <Row>
          <Col>
            <p>{listening && action}</p>
            <p>
              {listening ? (
                <FaMicrophoneSlash
                  onClick={() => {
                    setListening(false);
                    model.stopListening();
                    toast.error("Model listening stopped");
                  }}
                />
              ) : (
                <FaMicrophoneAlt onClick={recognizeCommand} />
              )}
            </p>
          </Col>
        </Row>
      </Container>
      );
    </>
  );
};

export default SpeechCommand;
