import React, { useState, useEffect, useRef } from "react";
import {
  csv,
  autoType,
  select,
  scaleLinear,
  axisBottom,
  axisLeft,
  scaleOrdinal,
} from "d3";
import * as tf from "@tensorflow/tfjs";
import { Button, Container } from "react-bootstrap";
import DataTable from "react-data-table-component";
import Accordion from "react-bootstrap/Accordion";

const DrawTable = ({ data }) => {
  const columns = [
    {
      name: "species",
      selector: (row) => row.species,
    },
    {
      name: "island",
      selector: (row) => row.island,
    },
    {
      name: "bill_length_mm",
      selector: (row) => row.bill_length_mm,
    },
    {
      name: "bill_depth_mm",
      selector: (row) => row.bill_depth_mm,
    },
    {
      name: "body_mass_g",
      selector: (row) => row.body_mass_g,
    },
    {
      name: "flipper_length_mm",
      selector: (row) => row.flipper_length_mm,
    },
    {
      name: "sex",
      selector: (row) => row.sex,
    },
    {
      name: "year",
      selector: (row) => row.year,
    },
  ];
  return (
    <Container>
      <DataTable columns={columns} data={data} pagination />
    </Container>
  );
};

const useClassData = ({ data, species }) => {
  const [classData, setClassData] = useState(null);
  useEffect(() => {
    if (data) {
      const filteredData = data.filter((d) => d.species === species);
      setClassData(filteredData);
    }
  }, [data, species]);
  return classData;
};

const useGetData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const response_data = await csv(
        "https://raw.githubusercontent.com/allisonhorst/palmerpenguins/master/inst/extdata/penguins.csv",
        autoType
      );
      //   discarding the NA values
      //   https://d3-graph-gallery.com/graph/basic_datamanipulation.html
      const filter_response_data = response_data.filter((d) => {
        return d.bill_length_mm !== "NA" && d.sex !== "NA";
      });
      setData(filter_response_data);
    };
    getData();
  }, []);

  return data;
};

const SpeciesDraw = ({ data }) => {
  const ref = useRef();
  const margin = { top: 10, right: 30, bottom: 30, left: 60 };
  const width = 460 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  useEffect(() => {
    const svg = select(ref.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Add X axis
    const x = scaleLinear().domain([160, 250]).range([0, width]);
    const xAxis = svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(axisBottom(x));
    xAxis
      .append("text")
      .attr("y", 80)
      .attr("x", width / 2)
      .attr("fill", "black")
      .text("something");

    // Add Y axis
    const y = scaleLinear().domain([2500, 7000]).range([height, 0]);
    svg.append("g").call(axisLeft(y));

    const color = scaleOrdinal()
      .domain(["Adelie", "Gentoo", "Chinstrap"])
      .range(["#440154ff", "#21908dff", "#fde725ff"]);

    const scatter = svg.append("g");

    // Add circles
    scatter
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => x(+d.flipper_length_mm))
      .attr("cy", (d) => y(+d.body_mass_g))
      .attr("r", 3)
      .style("fill", (d) => color(d.species))
      .style("opacity", 0.5);
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

const TensorflowJSPart1 = () => {
  const data = useGetData();
  const species = {
    Adelie: useClassData({ data: data, species: "Adelie" }),
    Gentoo: useClassData({ data: data, species: "Gentoo" }),
    Chinstrap: useClassData({ data: data, species: "Chinstrap" }),
  };

  return (
    <Container className="mt-2">
      <Accordion>
        <Accordion.Item eventKey="data-table">
          <Accordion.Header>
            Palmer Penguins data in tabular form
          </Accordion.Header>
          <Accordion.Body>{data && <DrawTable data={data} />}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>D3 Graph</Accordion.Header>
          <Accordion.Body>{data && <SpeciesDraw data={data} />}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default TensorflowJSPart1;
