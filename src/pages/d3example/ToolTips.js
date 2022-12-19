import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import Container from "react-bootstrap/Container";
import { useGetData } from "../../hooks/useGetData";

const ToolTips = () => {
  const data = useGetData();
  const ref = useRef();

  const margin = { top: 20, right: 25, bottom: 30, left: 40 };
  const width = 450 - margin.left - margin.right;
  const height = 450 - margin.top - margin.bottom;

  useEffect(() => {
    const svg = d3
      .select(ref.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Labels of row and columns -> unique identifier of the column called 'group' and 'variable'
    var myGroups = d3
      .map(data, function (d) {
        return d.group;
      })
      .keys();
    var myVars = d3
      .map(data, function (d) {
        return d.variable;
      })
      .keys();

    // Build X scales and axis:
    var x = d3.scaleBand().range([0, width]).domain(myGroups).padding(0.05);
    svg
      .append("g")
      .style("font-size", 15)
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickSize(0))
      .select(".domain")
      .remove();

    // Build Y scales and axis:
    var y = d3.scaleBand().range([height, 0]).domain(myVars).padding(0.05);
    svg
      .append("g")
      .style("font-size", 15)
      .call(d3.axisLeft(y).tickSize(0))
      .select(".domain")
      .remove();

    // Build color scale
    var myColor = d3
      .scaleSequential()
      .interpolator(d3.interpolateInferno)
      .domain([1, 100]);

    // create a tooltip
    var Tooltip = d3
      .select("#div_template")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px");

    // Three function that change the tooltip when user hover / move / leave a cell
    var mouseover = function (d) {
      Tooltip.style("opacity", 1);
      d3.select(this).style("stroke", "black").style("opacity", 1);
    };
    var mousemove = function (d) {
      Tooltip.html("The exact value of<br>this cell is: " + d.value);
      // .style("left", d3.mouse(this)[0] + 70 + "px")
      // .style("top", d3.mouse(this)[1] + "px");
    };
    var mouseleave = function (d) {
      Tooltip.style("opacity", 0);
      d3.select(this).style("stroke", "none").style("opacity", 0.8);
    };

    // add the squares
    svg
      .selectAll()
      .data(data, function (d) {
        return d.group + ":" + d.variable;
      })
      .enter()
      .append("rect")
      .attr("x", function (d) {
        return x(d.group);
      })
      .attr("y", function (d) {
        return y(d.variable);
      })
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("width", x.bandwidth())
      .attr("height", y.bandwidth())
      .style("fill", function (d) {
        return myColor(d.value);
      })
      .style("stroke-width", 4)
      .style("stroke", "none")
      .style("opacity", 0.8)
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);
  }, [data]);

  return (
    <Container>
      <svg
        ref={ref}
        style={{
          border: "1px solid #dad8d2",
          background: "white",
          overflow: "visible",
        }}
        // viewBox={`0 0 ${layout.width} ${layout.height}`}
        preserveAspectRatio="none"
      />
    </Container>
  );
};

export default ToolTips;