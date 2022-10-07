import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import Container from "react-bootstrap/Container";
import { UseIrisDataset } from "../../hooks/UseIrisDataset";

// ref: https://d3-graph-gallery.com/graph/interactivity_brush.html#brushingforzoom

const BoxPlot = () => {
  const data = UseIrisDataset();
  const ref = useRef();
  const margin = { top: 10, right: 30, bottom: 30, left: 60 };
  const width = 460 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  useEffect(() => {
    const svg = d3
      .select(ref.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Add X axis
    const x = d3.scaleLinear().domain([0, 20]).range([0, width]);
    const xAxis = svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    const y = d3.scaleLinear().domain([0, 9]).range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    // Add a clipPath: everything out of this area won't be drawn.
    const clip = svg
      .append("defs")
      .append("svg:clipPath")
      .attr("id", "clip")
      .append("svg:rect")
      .attr("width", width)
      .attr("height", height)
      .attr("x", 0)
      .attr("y", 0);

    // Color scale: give me a specie name, I return a color
    const color = d3
      .scaleOrdinal()
      .domain(["setosa", "versicolor", "virginica"])
      .range(["#440154ff", "#21908dff", "#fde725ff"]);

    // Add brushing
    const brush = d3
      .brushX() // Add the brush feature using the d3.brush function
      .extent([
        [0, 0],
        [width, height],
      ]) // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
      .on("end", updateChart); // Each time the brush selection changes, trigger the 'updateChart' function

    // Create the scatter variable: where both the circles and the brush take place
    const scatter = svg.append("g").attr("clip-path", "url(#clip)");

    // Add circles
    scatter
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => x(d.Sepal_Length))
      .attr("cy", (d) => y(d.Petal_Length))
      .attr("r", 8)
      .style("fill", (d) => color(d.Species))
      .style("opacity", 0.5);

    // Add the brushing
    scatter.append("g").attr("class", "brush").call(brush);

    // A function that set idleTimeOut to null
    let idleTimeout;
    const idled = () => {
      idleTimeout = null;
    };

    // A function that update the chart for given boundaries
    function updateChart(event) {
      const extent = event.selection;

      // If no selection, back to initial coordinate. Otherwise, update X axis domain
      if (!extent) {
        if (!idleTimeout) return (idleTimeout = setTimeout(idled, 350)); // This allows to wait a little bit
        x.domain([0, 20]);
      } else {
        x.domain([x.invert(extent[0]), x.invert(extent[1])]);
        scatter.select(".brush").call(brush.move, null); // This remove the grey brush area as soon as the selection has been done
      }

      // Update axis and circle position
      xAxis.transition().duration(1000).call(d3.axisBottom(x));
      scatter
        .selectAll("circle")
        .transition()
        .duration(1000)
        .attr("cx", (d) => x(d.Sepal_Length))
        .attr("cy", (d) => y(d.Petal_Length));
    }
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
