// Reference:
// https://medium.com/@kj_schmidt/show-data-on-mouse-over-with-d3-js-3bf598ff8fc2
// https://www.youtube.com/watch?v=OoZ0LWD9KUs&t=2s&ab_channel=CurranKelleher
import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import { geoConicConformalSpain } from "d3-composite-projections";
import { select, json, geoPath, scaleOrdinal, schemeCategory10 } from "d3";
import { feature } from "topojson-client";

const SpainMap = () => {
  const layout = {
    width: 900,
    height: 500,
  };
  const projection = geoConicConformalSpain();
  const pathGenerator = geoPath().projection(projection);

  const ref = useRef();

  useEffect(() => {
    const get_data = async () => {
      const svg = select(ref.current);

      const data = await json(
        "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/spain/spain-province.json"
      );
      const countryShapes = feature(data, data.objects.ESP_adm2);
      countryShapes.features.shift();
      const colorScale = scaleOrdinal(schemeCategory10);
      console.log()

      svg
        .selectAll("path")
        .data(countryShapes.features)
        .enter()
        .append("path")
        .attr("class", "states")
        .attr("stroke", "white")
        .attr("stroke-opacity", 1.5)
        .attr("stroke-width", "1px")
        .attr("fill", (d) => colorScale(d.properties.NAME_1))
        .attr("d", (d) => pathGenerator(d))
        .append("title")
        .text((d) => d.properties.NAME_1);

      svg
        .selectAll("text")
        .data(countryShapes.features)
        .enter()
        .append("text")
        .text((d) => d.properties.NAME_1)
        .attr("x", (d) => pathGenerator.centroid(d)[0])
        .attr("y", (d) => pathGenerator.centroid(d)[1])
        .attr("text-anchor", "middle")
        .attr("font-size", "8px");
    };
    get_data();
  }, []);

  return (
    <Container>
      <svg
        ref={ref}
        style={{
          overflow: "visible",
        }}
        viewBox={`0 0 ${layout.width} ${layout.height}`}
        preserveAspectRatio="none"
      />
    </Container>
  );
};

export default SpainMap;
