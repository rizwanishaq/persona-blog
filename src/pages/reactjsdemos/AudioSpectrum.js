import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import * as d3 from "d3";

const AudioSpectrum = () => {
  const [data, setData] = useState([]);
  const ref = useRef();
  const height = 400;
  const width = 600;

  useEffect(() => {
    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .style("border", "1px solid black");
  }, []);

  useEffect(() => {
    const svg = d3.select(ref.current);
    var selection = svg.selectAll("rect").data(data);
    var yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, height - 100]);

    selection
      .transition()
      //   .duration(300)
      .attr("height", (d) => yScale(d))
      .attr("y", (d) => height - yScale(d));

    selection
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 45)
      .attr("y", (d) => height)
      .attr("width", 40)
      .attr("height", 0)
      .attr("fill", "orange")
      .transition()
      //   .duration(300)
      .attr("height", (d) => yScale(d))
      .attr("y", (d) => height - yScale(d));

    selection
      .exit()
      .transition()
      //   .duration(300)
      .attr("y", (d) => height)
      .attr("height", 0)
      .remove();
  }, [data]);

  useEffect(() => {
    const startFromFile = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: false,
        audio: true,
      });
      const audioCtx = new AudioContext();
      const analyzer = audioCtx.createAnalyser();
      analyzer.fftSize = 2048;
      const audioSrc = audioCtx.createMediaStreamSource(stream);
      audioSrc.connect(analyzer);

      const dataArray = new Uint8Array(analyzer.frequencyBinCount);

      const update = () => {
        analyzer.getByteFrequencyData(dataArray);
        const orig = Array.from(dataArray);
        setData(orig.flat());
        requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    };
    startFromFile();
  }, []);

  return (
    <Container>
      <svg ref={ref}></svg>
    </Container>
  );
};

export default AudioSpectrum;
