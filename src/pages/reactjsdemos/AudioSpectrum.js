import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { line, scaleLinear } from "d3";
// Ref : https://tomhazledine.com/line-graphs-with-react-svg-d3/

const AudioSpectrum = () => {
  const [data, setData] = useState({});
  const audioCtx = useRef(null);

  const layout = {
    width: 500,
    height: 200,
  };
  const graphDetails = {
    xScale: scaleLinear().range([0, layout.width]),
    yScale: scaleLinear().range([layout.height, 0]),
    lineGenerator: line(),
  };

  graphDetails.xScale.domain([0, data.length - 1]);
  graphDetails.yScale.domain([0, 280]);

  graphDetails.lineGenerator.x((d) => graphDetails.xScale(d["x"]));
  graphDetails.lineGenerator.y((d) => graphDetails.yScale(d["y"]));

  const [lineData, setLineData] = useState(() =>
    graphDetails.lineGenerator(data)
  );

  useEffect(() => {
    if (data) {
      const newLine = graphDetails.lineGenerator(data);
      setLineData(newLine);
    }
  }, [data]);

  useEffect(() => {
    const startFromFile = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: false,
        audio: true,
      });

      audioCtx.current = new AudioContext();
      const analyzer = audioCtx.current.createAnalyser();
      analyzer.fftSize = 2048;
      const audioSrc = audioCtx.current.createMediaStreamSource(stream);
      audioSrc.connect(analyzer);

      const dataArray = new Uint8Array(analyzer.frequencyBinCount);

      const update = () => {
        analyzer.getByteFrequencyData(dataArray);
        const orig = Array.from(dataArray);
        const duplicate = [[...orig].reverse(), orig].flat();
        const cleanData = duplicate.map((item, i) => ({ x: i, y: item }));
        setData(cleanData);
        requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    };
    startFromFile();

    return () => {
      audioCtx.current && audioCtx.current.close();
      console.log("Component unmounted");
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Container className="mt-2">
      <svg
        style={{ border: "1px solid #dad8d2" }}
        width={"100%"}
        height={layout.height}
        viewBox={`0 0 ${layout.width} ${layout.height}`}
        preserveAspectRatio="none"
      >
        <path style={{ fill: "none", stroke: "#00b7c6" }} d={lineData} />
      </svg>
    </Container>
  );
};

export default AudioSpectrum;
