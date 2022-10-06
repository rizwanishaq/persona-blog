import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import Container from "react-bootstrap/Container";
import { UseIrisDataset } from "../../hooks/UseIrisDataset";

const BoxPlot = () => {
  //   const data = UseIrisDataset();
  //   const ref = useRef();
  let margin = { top: 10, right: 30, bottom: 30, left: 40 };
  let width = 400 - margin.left - margin.right;
  let height = 400 - margin.top - margin.bottom;

  const ref = useRef();
  const data = {
    max: 21.5,
    min: 2,
    q1: 11.75,
    q3: 18.25,
    median: 13,
  };
  useEffect(() => {
    const minI = data.min < 0 ? data.min - 5 : -5;
    const maxI = data.max + 5;
    var y = d3.scaleLinear().domain([minI, maxI]).range([height, 0]);
    const svg = d3
      .select(ref.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    svg
      .append("g")
      .attr("transform", "translate(0," + 150 + ")")
      .call(d3.axisBottom(y));
    var center = 100;
    width = 50;
    svg
      .append("line")
      .attr("y1", center)
      .attr("y2", center)
      .attr("x1", y(data.min))
      .attr("x2", y(data.max))
      .attr("stroke", "#1C3978");

    // Show the box
    svg
      .append("rect")
      .attr("y", center - width / 2)
      .attr("x", y(data.q3))
      .attr("width", y(data.q1) - y(data.q3))
      .attr("height", width)
      .attr("stroke", "#1C3978")
      .style("fill", "#fff");
    svg
      .selectAll("toto")
      .data([data.min, data.median, data.max])
      .enter()
      .append("line")
      .attr("y1", center - width / 2)
      .attr("y2", center + width / 2)
      .attr("x1", function (d) {
        return y(d);
      })
      .attr("x2", function (d) {
        return y(d);
      })
      .attr("stroke", "#1C3978");
  }, [data]);

  return (
    <Container>
      <svg
        ref={ref}
        style={{
          marginLeft: "50px",
        }}
        preserveAspectRatio="none"
      />
    </Container>
  );
};

export default BoxPlot;
