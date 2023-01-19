import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { range, timer, select, scaleOrdinal } from "d3";

const CosineWave = () => {
  const svgRef = useRef();
  const n = 90;
  const width = 960;
  const height = 200;
  const frequency = 0.3;

  useEffect(() => {
    const svg = select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const radius = width / n / 2;

    const x = (d) => ((d + 0.5) * width) / n;
    const y = (t) => (d) =>
      (Math.sin(d * frequency + t / 1000) * height * 1.5) / 4 + height;

    svg
      .selectAll("circle")
      .data(range(n))
      .enter()
      .append("circle")
      .attr("cx", x)
      .attr("r", radius)
      .call((selection) => {
        timer((time) => {
          selection.attr("cy", y(time));
          selection.attr("fill", "lightblue");
          console.log(y(time));
        });
      });
  }, []);

  return (
    <Container>
      <svg
        ref={svgRef}
        style={{
          overflow: "visible",
        }}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
      />
    </Container>
  );
};

export default CosineWave;
