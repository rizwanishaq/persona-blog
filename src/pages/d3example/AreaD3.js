import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import Container from "react-bootstrap/Container";
import { useReadCSV } from "../../hooks/UseReadCSV";

const AreaD3 = () => {
  const data = useReadCSV();
  const layout = {
    width: 800,
    height: 200,
  };
  const ref = useRef();

  useEffect(() => {
    const svg = d3
      .select(ref.current)
      .attr("width", layout.width)
      .attr("height", layout.height);

    const x = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date))
      .range([0, layout.width]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => +d.value)])
      .range([layout.height, 0]);

    svg
      .append("g")
      .call(d3.axisBottom(x))
      .attr("transform", `translate(0, ${layout.height})`);

    svg.append("g").call(d3.axisLeft(y));

    const areaGenerator = d3
      .area()
      .x((d) => x(d.date))
      .y0(y(0))
      .y1((d) => y(d.value));

    svg
      .append("path")
      .datum(data)
      .attr("d", areaGenerator)
      .attr("fill", "#69b3a2")
      .attr("fill-opacity", 0.3)
      .attr("stroke", "black")
      .attr("stroke-width", 1);

    // svg.on("dblclick", () => {});
  }, [data]);

  return (
    <Container>
      <svg
        ref={ref}
        style={{
          border: "1px solid #dad8d2",
          marginTop: 50,
          marginBottom: 50,
          background: "white",
          overflow: "visible",
        }}
        viewBox={`0 0 ${layout.width} ${layout.height}`}
        preserveAspectRatio="none"
      />
    </Container>
  );
};

export default AreaD3;
