import React, { useEffect, useRef, useState } from "react";
import { select } from "d3";
import Container from "react-bootstrap/Container";

const generateDataset = () =>
  Array(10)
    .fill(0)
    .map(() => [Math.random() * 100 + 10, Math.random() * 100 + 10]);

const SimpleSVG = () => {
  const [dataset, setDataset] = useState(generateDataset());
  const ref = useRef();

  useEffect(() => {
    const svgElement = select(ref.current);
    svgElement
      .selectAll("circle")
      .data(dataset)
      .join("circle")
      .attr("cx", (d) => d[0])
      .attr("cy", (d) => d[1])
      .attr("r", 3);
  }, [dataset]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newDataset = generateDataset();
      setDataset(newDataset);
    }, 1000);

    // clearing interval
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <svg ref={ref} />
    </Container>
  );
};

export default SimpleSVG;
