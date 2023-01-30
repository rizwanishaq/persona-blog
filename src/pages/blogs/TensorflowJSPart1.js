import React, { useState, useEffect, useRef } from "react";
import { csv, autoType } from "d3";
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

const TensorflowJSPart1 = () => {
  const data = useGetData();
  return (
    <Container className="mt-2">
      <Accordion>
        <Accordion.Item eventKey="data-table">
          <Accordion.Header>
            Palmer Penguins data in tabular form
          </Accordion.Header>
          <Accordion.Body>{data && <DrawTable data={data} />}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default TensorflowJSPart1;
