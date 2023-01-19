import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import {
  axisBottom,
  axisLeft,
  csv,
  extent,
  scaleLinear,
  scaleTime,
  select,
  line,
  curveBasis,
} from "d3";

const useData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const response_data = await csv(
        "https://vizhub.com/curran/datasets/temperature-in-san-francisco.csv"
      );
      response_data.map((d) => {
        d.temperature = +d.temperature;
        d.timestamp = new Date(d.timestamp);
        return d;
      });
      setData(response_data);
    };
    getData();
  }, []);

  return data;
};

const Temperature = () => {
  const svgRef = useRef();
  const data = useData();

  const width = 960;
  const height = 500;
  const margin = { top: 60, right: 40, bottom: 88, left: 105 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const title = "A Week in San Francisco";

  const xValue = (d) => d.timestamp;
  const xAxisLabel = "Time";

  const yValue = (d) => d.temperature;
  const yAxisLabel = "Temperature";

  useEffect(() => {
    if (!data) return;

    const svg = select(svgRef.current)
      .attr("height", height)
      .attr("width", width)
      .attr("preserveAspectRatio", "none");

    const xScale = scaleTime()
      .domain(extent(data, xValue))
      .range([0, innerWidth])
      .nice();

    const yScale = scaleLinear()
      .domain(extent(data, yValue))
      .range([innerHeight, 0])
      .nice();

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xAxis = axisBottom(xScale).tickSize(-innerHeight).tickPadding(15);

    const yAxis = axisLeft(yScale).tickSize(-innerWidth).tickPadding(10);

    const yAxisG = g.append("g").call(yAxis);
    yAxisG.selectAll(".domain").remove();

    yAxisG
      .append("text")
      .attr("class", "axis-label")
      .attr("y", -60)
      .attr("x", -innerHeight / 2)
      .attr("fill", "black")
      .attr("transform", `rotate(-90)`)
      .attr("text-anchor", "middle")
      .text(yAxisLabel);

    const xAxisG = g
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(0,${innerHeight})`);

    xAxisG.select(".domain").remove();

    xAxisG
      .append("text")
      .attr("class", "axis-label")
      .attr("y", 80)
      .attr("x", innerWidth / 2)
      .attr("fill", "black")
      .text(xAxisLabel);

    const lineGenerator = line()
      .x((d) => xScale(xValue(d)))
      .y((d) => yScale(yValue(d)))
      .curve(curveBasis);

    g.append("path")
      .attr("class", "line-path")
      .attr("fill", "none")
      .attr("stroke", "maroon")
      .attr("stroke-width", 5)
      .attr("stroke-linejoin", "round")
      .attr("d", lineGenerator(data));

    g.append("text")
      .attr("class", "title")
      .attr("font-size", "3em")
      .attr("fill", "#635F5D")
      .attr("y", -10)
      .text(title);
    // eslint-disable-line
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (!data) {
    return <pre>Loading ...</pre>;
  }

  return (
    <Container>
      <svg
        ref={svgRef}
        style={{
          overflow: "visible",
        }}
      ></svg>
    </Container>
  );
};

export default Temperature;
