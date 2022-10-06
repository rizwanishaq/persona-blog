import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import Container from "react-bootstrap/Container";

// Ref : https://www.youtube.com/watch?v=10dl-gDJLks
const SimpleSVG = () => {
  const [data] = useState([25, 250, 35, 15, 94, 10]);
  const [pieData] = useState([
    { property: "a", value: 4 },
    { property: "b", value: 3 },
    { property: "c", value: 10 },
    { property: "d", value: 2 },
    { property: "e", value: 8 },
  ]);
  const [chartData] = useState([
    { year: "2017", count: 52 },
    { year: "2018", count: 60 },
    { year: "2019", count: 120 },
    { year: "2020", count: 97 },
    { year: "2021", count: 115 },
    { year: "2022", count: 52 },
    { year: "2023", count: 60 },
    { year: "2024", count: 120 },
    { year: "2025", count: 97 },
    { year: "2026", count: 115 },
  ]);
  const ref = useRef();
  const barRef = useRef();
  const pieRef = useRef();
  const areaChart = useRef();

  const layout = {
    width: 800,
    height: 200,
  };

  useEffect(() => {
    // setting up the svg
    const svgElement = d3.select(ref.current);
    // setting the scaling
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, layout.width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([layout.height, 0]);

    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    svgElement
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "none")
      .attr("stroke", "black");

    // setting the axes
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((i) => i);

    const yAxis = d3.axisLeft(yScale).ticks(5);
    const yAxisRight = d3.axisRight(yScale).ticks(5);

    svgElement
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(0, ${layout.height})`);
    svgElement.append("g").call(yAxis);
    svgElement
      .append("g")
      .call(yAxisRight)
      .attr("transform", `translate(${layout.width}, 0)`);
  }, [data]);

  useEffect(() => {
    // setting up the svg
    const svgbar = d3.select(barRef.current);
    // setting the scaling
    const xScale = d3
      .scaleBand()
      .domain(data.map((val, i) => i))
      .range([0, layout.width])
      .padding(0.5);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([layout.height, 0]);

    // setting the axes
    const xAxis = d3.axisBottom(xScale).ticks(data.length);

    const yAxis = d3.axisLeft(yScale).ticks(5);

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

    const svgPie = d3
      .select(pieRef.current)
      .attr("width", layout.width)
      .attr("height", layout.height);

    const formattedData = d3.pie().value((d) => d.value)(pieData);
    const arcGenerator = d3.arc().innerRadius(0).outerRadius(radius);
    const color = d3.scaleOrdinal().range(d3.schemeSet2);

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

  useEffect(() => {
    const svgchart = d3
      .select(areaChart.current)
      .attr("width", layout.width)
      .attr("height", layout.height);

    const x = d3
      .scaleTime()
      .domain(d3.extent(chartData, (d) => d3.timeParse("%Y")(d.year)))
      .range([0, layout.width]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(chartData, (d) => d.count)])
      .range([layout.height, 0]);

    svgchart
      .append("g")
      .call(d3.axisBottom(x).ticks(chartData.length))
      .attr("transform", `translate(0, ${layout.height})`);

    svgchart.append("g").call(d3.axisLeft(y).ticks(5));

    const area = d3
      .area()
      .x((d) => x(d3.timeParse("%Y")(d.year)))
      .y0(y(0))
      .y1((d) => y(d.count));

    svgchart
      .append("path")
      .datum(chartData)
      .attr("d", area)
      .attr("fill", "#f25cb4")
      .attr("stroke", "#c70469")
      .attr("stroke-width", 2);
  }, [chartData]);

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
      <svg
        ref={barRef}
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

      <svg
        ref={areaChart}
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

      {/* <svg
        ref={pieRef}
        style={{
          // border: "1px solid #dad8d2",
          marginTop: 50,
          marginBottom: 50,
          background: "white",
          overflow: "visible",
        }}
        viewBox={`0 0 ${layout.width} ${layout.height}`}
        preserveAspectRatio="none"
      /> */}
    </Container>
  );
};

export default SimpleSVG;
