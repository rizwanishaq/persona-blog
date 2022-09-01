import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
// Note: Require the cpu and webgl backend and add them to package.json as peer dependencies.
import * as cocoSsd from "@tensorflow-models/coco-ssd";

import { Container } from "react-bootstrap";

const ObjectDetection = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      const model = await cocoSsd.load();
      setModel(model);
      console.log("Model loaded");
    };
    loadModel();
  }, [setModel]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!model) return;
      predictionFunction();
    }, 100);

    return () => clearInterval(timer);
  }, [model]);

  const drawPrediction = (predictions, ctx) => {
    // setPredictionData(predictions);
    for (let n = 0; n < predictions.length; n++) {
      // Check scores
      if (predictions[n].score > 0.6) {
        let bboxLeft = predictions[n].bbox[0];
        let bboxTop = predictions[n].bbox[1];
        let bboxWidth = predictions[n].bbox[2];
        let bboxHeight = predictions[n].bbox[3]; // - bboxTop;

        ctx.beginPath();
        ctx.font = "28px Arial";
        ctx.fillStyle = "red";

        ctx.fillText(
          predictions[n].class +
            ": " +
            Math.round(parseFloat(predictions[n].score) * 100) +
            "%",
          bboxLeft,
          bboxTop
        );

        ctx.rect(bboxLeft, bboxTop, bboxWidth, bboxHeight);
        ctx.strokeStyle = "#FF0000";

        ctx.lineWidth = 3;
        ctx.stroke();
      }
    }
  };

  const predictionFunction = async () => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const predictions = await model.detect(webcamRef.current.video);
      canvasRef.current.width = webcamRef.current.video.videoWidth;
      canvasRef.current.height = webcamRef.current.video.videoHeight;

      var ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(
        0,
        0,
        webcamRef.current.video.videoWidth,
        webcamRef.current.video.videoHeight
      );
      if (predictions.length > 0) {
        requestAnimationFrame(() => {
          drawPrediction(predictions, ctx);
        });
      }
    }
  };

  return (
    <Container className="mt-2 text-center">
      <Webcam
        ref={webcamRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: "100%",
          height: "auto",
        }}
      />

      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: "100%",
          height: "auto",
        }}
      />
    </Container>
  );
};

export default ObjectDetection;
