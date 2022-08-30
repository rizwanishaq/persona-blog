import React, { useState, useEffect, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { Container, Button } from "react-bootstrap";

const ImageCapture = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  useEffect(() => {}, []);

  return (
    <Container className="text-center">
      <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />
      <div>
        <Button onClick={capture}>Capture photo</Button>
      </div>
      {imgSrc && <img src={imgSrc} alt="captured" />}
    </Container>
  );
};

export default ImageCapture;
