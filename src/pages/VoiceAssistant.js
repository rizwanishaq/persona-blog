import React, { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { toast } from "react-toastify";
import uuid from "react-uuid";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { FaMicrophoneAlt, FaMicrophoneSlash } from "react-icons/fa";
import VoiceNote from "../components/VoiceNote/VoiceNote";

const VoiceAssistant = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (!listening && transcript !== "") {
      // Add note to notes array
      // we can send this to database as well
      setNotes([...notes, { text: transcript, _id: uuid() }]);
      resetTranscript();
    }
    // eslint-disable-line
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listening]);

  if (!browserSupportsSpeechRecognition) {
    return <>{toast.error("Browser doesn't support speech recognition.")}</>;
  }
  if (!isMicrophoneAvailable) {
    return <>{toast.error("Microphone is not available.")}</>;
  }

  return (
    <Container className="mt-2 text-center">
      <h3>Voice Notes</h3>
      <Row>
        <Col>
          <p>{transcript}</p>
          <p>
            {listening ? (
              <FaMicrophoneAlt
                onClick={() => {
                  SpeechRecognition.stopListening();
                  toast.error("Stopped listening");
                }}
              />
            ) : (
              <FaMicrophoneSlash
                onClick={() => {
                  SpeechRecognition.startListening({ language: "es-Es" });
                  toast.success("Started listening");
                }}
              />
            )}
          </p>
        </Col>
        <Col>
          <ListGroup>
            {notes.map((note) => (
              <VoiceNote key={note._id} note={note} />
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default VoiceAssistant;
