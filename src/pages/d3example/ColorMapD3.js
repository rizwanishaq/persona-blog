// Reference:
// https://medium.com/@kj_schmidt/show-data-on-mouse-over-with-d3-js-3bf598ff8fc2
// https://www.youtube.com/watch?v=OoZ0LWD9KUs&t=2s&ab_channel=CurranKelleher
import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import {
  select,
  json,
  geoPath,
  geoEqualEarth,
  tsv,
  zoom,
  scaleOrdinal,
  schemeSpectral,
} from "d3";
import { feature } from "topojson-client";

const ColorMapD3 = () => {
  const [data, setData] = useState([]);
  const layout = {
    width: 900,
    height: 500,
  };
  const projection = geoEqualEarth();
  const pathGenerator = geoPath().projection(projection);
  const ref = useRef();

  useEffect(() => {
    const get_data = async () => {
      const svg = select(ref.current);
      const g = svg.append("g");

      g.append("path")
        .attr("class", "sphere")
        .attr("fill", "#4242e4")
        .attr("d", pathGenerator({ type: "Sphere" }));

      const [tsvData, topoJSONdata] = await Promise.all([
        tsv("https://unpkg.com/world-atlas@1.1.4/world/50m.tsv"),
        json("https://unpkg.com/world-atlas@1.1.4/world/50m.json"),
      ]);

      const rowById = tsvData.reduce((accumulator, d) => {
        accumulator[d.iso_n3] = d;
        return accumulator;
      }, {});

      const countries = feature(topoJSONdata, topoJSONdata.objects.countries);
      countries.features.forEach((d) => {
        Object.assign(d.properties, rowById[d.id]);
      });
      console.log(countries);

      const colorValue = (d) => d.properties.continent;

      const colorScale = scaleOrdinal();

      colorScale
        .domain(countries.features.map(colorValue))
        .domain(colorScale.domain().sort().reverse())
        .range(schemeSpectral[colorScale.domain().length]);

      svg.call(
        zoom().on("zoom", (e) => {
          g.attr("transform", e.transform);
        })
      );

      g.selectAll("path")
        .data(countries.features)
        .enter()
        .append("path")
        .attr("class", "country")
        .attr("fill", "lightgreen")
        .attr("stroke", "black")
        .attr("stroke-opacity", 0.1)
        .attr("d", pathGenerator)
        .attr("fill", (d) => colorScale(colorValue(d)))
        // .on("mouseover", function () {
        //   select(this).style("fill", "red");
        // })
        // .on("mouseout", function () {
        //   select(this).style("fill", "lightgreen");
        // })
        .append("title")
        .text((d) => `${d.properties.name}: ${colorValue(d)}`);
    };
    get_data();
  }, []);

  const LINK = "https://unpkg.com/world-atlas@1/world/110m.json";
  return (
    <Container>
      <h3>Continents</h3>
      <svg
        ref={ref}
        style={{
          //   border: "1px solid #dad8d2",
          //   marginTop: 50,
          //   marginBottom: 50,
          //   backgroundColor: "darkblue",
          overflow: "visible",
        }}
        viewBox={`0 0 ${layout.width} ${layout.height}`}
        preserveAspectRatio="none"
      />
    </Container>
  );
};

export default ColorMapD3;
