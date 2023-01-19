import {
  drag,
  geoOrthographic,
  geoPath,
  json,
  select,
  zoom,
  scaleOrdinal,
  schemeSpectral,
  schemeCategory10,
} from "d3";
import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import { feature } from "topojson-client";

const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const world = await json(
        "https://unpkg.com/world-atlas@2.0.2/countries-110m.json"
      );
      const land = feature(world, world.objects.countries);
      setData(land);
    };
    getData();
  }, []);
  return data;
};

const ZoomAndDragMap = () => {
  const svgRef = useRef();
  const data = useData();
  const width = 960;
  const height = 960;
  const projection = geoOrthographic();
  const initialScale = projection.fitWidth(960, { type: "Sphere" }).scale();
  const geo = geoPath().projection(projection);
  const sensitivity = 58;

  useEffect(() => {
    if (!data) return;
    console.log(data);
    const svg = select(svgRef.current)
      .attr("height", height)
      .attr("width", width)
      .attr("preserveAspectRatio", "none");

    const path = svg.append("path");
    const render = () => path.attr("d", geo(data));

    render();

    svg
      .call(
        drag().on("drag", (event) => {
          const rotate = projection.rotate();
          const scale = projection.scale();
          const k = sensitivity / scale;
          projection.rotate([
            rotate[0] + event.dx * k,
            rotate[1] - event.dy * k,
          ]);
          render();
        })
      )
      .call(
        zoom().on("zoom", ({ transform: { k } }) => {
          projection.scale(initialScale * k);
          render();
        })
      );
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

export default ZoomAndDragMap;
