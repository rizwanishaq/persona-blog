import React, { useEffect, useRef, useState } from "react";
import {
  select,
  scaleLinear,
  line,
  curveCardinal,
  axisBottom,
  axisLeft,
  scaleBand,
  pie,
  arc,
  scaleOrdinal,
  schemeSet2,
} from "d3";
import Container from "react-bootstrap/Container";
import { colors } from "@react-spring/shared";

// Ref : https://www.youtube.com/watch?v=10dl-gDJLks
const SimpleSVG = () => {
  const [data] = useState([25, 50, 35, 15, 94, 10]);
  const [pieData] = useState([
    { property: "a", value: 4 },
    { property: "b", value: 3 },
    { property: "c", value: 10 },
    { property: "d", value: 2 },
    { property: "e", value: 8 },
  ]);
  const ref = useRef();
  const barRef = useRef();
  const pieRef = useRef();

  const layout = {
    width: 400,
    height: 100,
  };

  useEffect(() => {
    // setting up the svg
    const svgElement = select(ref.current);
    // setting the scaling
    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, layout.width]);

    const yScale = scaleLinear()
      .domain([0, layout.height])
      .range([layout.height, 0]);

    const generateScaledLine = line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(curveCardinal);

    svgElement
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "none")
      .attr("stroke", "black");

    // setting the axes
    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((i) => i);

    const yAxis = axisLeft(yScale).ticks(5);

    svgElement
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(0, ${layout.height})`);
    svgElement.append("g").call(yAxis);
  }, [data]);

  useEffect(() => {
    // setting up the svg
    const svgbar = select(barRef.current);
    // setting the scaling
    const xScale = scaleBand()
      .domain(data.map((val, i) => i))
      .range([0, layout.width])
      .padding(0.5);

    const yScale = scaleLinear()
      .domain([0, layout.height])
      .range([layout.height, 0]);

    // setting the axes
    const xAxis = axisBottom(xScale).ticks(data.length);

    const yAxis = axisLeft(yScale).ticks(5);

    svgbar
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(0, ${layout.height})`);

    svgbar.append("g").call(yAxis);

    // setting the svg data
    svgbar
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("x", (v, i) => xScale(i))
      .attr("y", yScale)
      .attr("width", xScale.bandwidth())
      .attr("height", (val) => layout.height - yScale(val));
  }, [data]);

  useEffect(() => {
    const radius = layout.width / 4;

    const svgPie = select(pieRef.current)
      .attr("width", layout.width)
      .attr("height", layout.height);

    const formattedData = pie().value((d) => d.value)(pieData);
    const arcGenerator = arc().innerRadius(0).outerRadius(radius);
    const color = scaleOrdinal().range(schemeSet2);

    svgPie
      .selectAll()
      .data(formattedData)
      .join("path")
      .attr("d", arcGenerator)
      .attr("fill", (d) => color(d.value))
      .style("opacity", 0.7);

    svgPie
      .selectAll()
      .data(formattedData)
      .join("text")
      .text((d) => d.data.property)
      .attr("transform", (d) => `translate(${arcGenerator.centroid(d)})`)
      .style("text-anchor", "middle");
  }, [pieData]);

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
        width={"100%"}
        height={layout.height}
        viewBox={`0 0 ${layout.width} ${layout.height}`}
        preserveAspectRatio="none"
      />
      <svg
        ref={barRef}
        style={{
          border: "1px solid #dad8d2",
          marginTop: 50,
          background: "white",
          overflow: "visible",
        }}
        viewBox={`0 0 ${layout.width} ${layout.height}`}
        preserveAspectRatio="none"
      />
      <svg
        ref={pieRef}
        style={{
          // border: "1px solid #dad8d2",
          marginTop: "400px",
          background: "white",
          overflow: "visible",
        }}
        viewBox={`0 0 ${layout.width} ${layout.height}`}
        preserveAspectRatio="none"
      />
    </Container>
  );
};

export default SimpleSVG;
