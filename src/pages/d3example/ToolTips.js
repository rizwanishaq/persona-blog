import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import Container from "react-bootstrap/Container";

const ToolTips = () => {
  const ref = useRef();

  const margin = { top: 20, right: 25, bottom: 30, left: 40 };
  const width = 450 - margin.left - margin.right;
  const height = 450 - margin.top - margin.bottom;

  useEffect(() => {
    const svg = d3
      .select(ref.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("rect")
      .attr("x", 60)
      .attr("y", 60)
      .attr("width", 60)
      .attr("height", 60)
      .on("mouseover", function () {
        d3.select(this).transition().attr("x", 320).ease("elastic");
      })
      .on("mouseout", function () {
        d3.select(this)
          .transition()
          .attr("x", 60)
          .attr("y", 60)
          .attr("width", 60)
          .attr("height", 60);
      });
  }, []);

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
