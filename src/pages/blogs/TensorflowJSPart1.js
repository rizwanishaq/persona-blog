import React, { useState, useEffect, useRef } from "react";
import {
  csv,
  autoType,
  select,
  scaleLinear,
  axisBottom,
  axisLeft,
  scaleOrdinal,
  shuffle,
} from "d3";
import * as tf from "@tensorflow/tfjs";
import { Button, Container } from "react-bootstrap";
import DataTable from "react-data-table-component";
import Accordion from "react-bootstrap/Accordion";
import LossComponent from "../../components/tensorflowJsExamples/LossComponent";

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

// const useClassData = ({ data, species }) => {
//   const [classData, setClassData] = useState(null);
//   useEffect(() => {
//     if (data) {
//       const filteredData = data.filter((d) => d.species === species);
//       setClassData(filteredData);
//     }
//   }, [data, species]);
//   return classData;
// };

const useGetData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const response_data = await csv(
        "https://raw.githubusercontent.com/allisonhorst/palmerpenguins/master/inst/extdata/penguins.csv",
        autoType
      );
      // Randomly shuffle the data
      shuffle(response_data);
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
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  useEffect(() => {
    const svg = select(ref.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Add X axis
    const x = scaleLinear().domain([160, 250]).range([0, innerWidth]).nice();
    const xAxis = svg
      .append("g")
      .attr("transform", "translate(0," + innerHeight + ")")
      .call(axisBottom(x));

    xAxis
      .append("text")
      .attr("class", "axis-label")
      .attr("y", 40)
      .attr("x", innerWidth / 2)
      .attr("fill", "black")
      .text("flipper_length_mm ");

    // Add Y axis
    const y = scaleLinear().domain([2500, 7000]).range([innerHeight, 0]).nice();
    svg
      .append("g")
      .call(axisLeft(y))
      .append("text")
      .attr("class", "axis-label")
      .attr("y", -40)
      .attr("x", -innerHeight / 4)
      .attr("fill", "black")
      .attr("transform", `rotate(-90)`)
      .text("body_mass_g");

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

const useModelData = ({ data }) => {
  const [xtrain, setXtrain] = useState();
  const [ytrain, setYtrain] = useState();
  const [xtest, setXtest] = useState();
  const [ytest, setYtest] = useState();

  const classes = {
    Adelie: 0,
    Chinstrap: 1,
    Gentoo: 2,
  };

  useEffect(() => {
    if (data) {
      const xs = tf.tensor(
        data.map((x) => [
          +x.bill_depth_mm,
          +x.bill_depth_mm,
          +x.body_mass_g,
          +x.flipper_length_mm,
        ])
      );
      const ys = tf.cast(
        tf.tensor(data.map((x) => [+classes[x.species]])),
        "int32"
      );
      const ys_one_hot = tf.squeeze(tf.oneHot(ys, 3), 1);
      const x_train = xs.slice([1], [300]);
      const y_train = ys_one_hot.slice([1], [300]);
      const x_test = xs.slice([300], [-1]);
      const y_test = ys_one_hot.slice([300], [-1]);

      setXtrain(x_train);
      setYtrain(y_train);
      setXtest(x_test);
      setYtest(y_test);
    }
  }, [data]);

  return { xtrain, ytrain, xtest, ytest };
};

const useModel = () => {
  const [model, setModel] = useState();
  useEffect(() => {
    const model_ = tf.sequential();
    model_.add(
      tf.layers.dense({ units: 6, inputShape: [4], activation: "relu" })
    );
    model_.add(tf.layers.dense({ units: 3, activation: "softmax" }));
    model_.compile({
      optimizer: "sgd",
      loss: "categoricalCrossentropy",
      metrics: ["accuracy"],
    });
    setModel(model_);
  }, []);

  return model;
};

const TrainModel = ({ model, xtrain, ytrain, xtest, ytest }) => {
  const [loss, setLoss] = useState([]);
  const [acc, setAcc] = useState([]);
  const handleClick = async () => {
    await model.fit(xtrain, ytrain, {
      batchSize: 4,
      epochs: 100000,
      verbose: true,
      validationSplit: 0.15,
      callbacks: {
        onBatchEnd: async (batch, logs) => {
          //   console.log(batch, logs);
          //   setLoss((prevloss) => [...prevloss, +logs["loss"].toFixed(2)]);
          //   setAcc((prevacc) => [...prevacc, +logs["acc"].toFixed(2)]);
        },
        onEpochEnd: async (epoch, logs) => {
          setLoss((prevloss) => [...prevloss, +logs["loss"].toFixed(2)]);
          setAcc((prevacc) => [...prevacc, +logs["acc"].toFixed(2)]);
        },
      },
    });
  };
  return (
    <Container className="mt-2 mb-2">
      <LossComponent data={loss} text={"Loss"} />
      <LossComponent data={acc} text={"Accuracy"} />
      <Button onClick={handleClick}>Train the model</Button>
      {/* <Button onClick={handlePredict}>Predict</Button> */}
    </Container>
  );
};

const TensorflowJSPart1 = () => {
  const model = useModel();
  const data = useGetData();
  const { xtrain, ytrain, xtest, ytest } = useModelData({ data });
  console.log(xtrain && ytrain.shape);
  // const species = {
  //   Adelie: useClassData({ data: data, species: "Adelie" }),
  //   Gentoo: useClassData({ data: data, species: "Gentoo" }),
  //   Chinstrap: useClassData({ data: data, species: "Chinstrap" }),
  // };

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
        <Accordion.Item eventKey="2">
          <Accordion.Header>Model</Accordion.Header>
          <Accordion.Body>
            {data && (
              <TrainModel
                model={model}
                xtrain={xtrain}
                ytrain={ytrain}
                xtest={xtest}
                ytest={ytest}
              />
            )}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default TensorflowJSPart1;
