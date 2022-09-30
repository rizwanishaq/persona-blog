import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { db } from "../../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import * as d3 from "d3";

const D3Firebase = () => {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  const dishesCollectionRef = collection(db, "dishes");
  const ref = useRef();

  useEffect(() => {
    const getDishes = async () => {
      const data = await getDocs(dishesCollectionRef);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getDishes();
  }, [update]);

  const onSubmit = async (data) => {
    const response = await addDoc(dishesCollectionRef, {
      name: data.name,
      orders: +data.orders,
    });

    if (response) {
      setUpdate(!update);
      toast.success("user added successfully");
    } else {
      toast.error("error adding user");
    }
    reset();
  };

  useEffect(() => {
    d3.selectAll("svg > g > *").remove();
    const svgElement = d3
      .select(ref.current)
      .attr("height", 600)
      .attr("width", 600);

    const margin = { top: 20, right: 20, bottom: 100, left: 100 };
    const graphWidth = 600 - margin.top - margin.right;
    const graphHeight = 600 - margin.top - margin.bottom;

    const graph = svgElement
      .append("g")
      .attr("width", graphWidth)
      .attr("height", graphHeight)
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xAxisGroup = graph
      .append("g")
      .attr("transform", `translate(0, ${graphHeight})`);
    const yAxisGroup = graph.append("g");

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.orders)])
      .range([graphHeight, 0]);

    const xScale = d3
      .scaleBand()
      .domain(data.map((item) => item.name))
      .range([0, 500])
      .paddingInner(0.2)
      .paddingOuter(0.2);

    graph
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("width", xScale.bandwidth)
      .attr("height", 0)
      .attr("fill", "orange")
      .attr("x", (d) => xScale(d.name))
      .attr("y", graphHeight)
      .transition()
      .duration(500)
      .attr("y", (d) => yScale(d.orders))
      .attr("height", (d) => graphHeight - yScale(d.orders));

    // Create axis
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3
      .axisLeft(yScale)
      .ticks(1)
      .tickFormat((d) => d + " orders");
    xAxisGroup.call(xAxis);
    yAxisGroup.call(yAxis);

    xAxisGroup
      .selectAll("text")
      .attr("transform", "rotate(-40)")
      .attr("text_anchor", "end")
      .attr("fill", "orange");
  }, [data]);
  return (
    <>
      <Container className="mt-2">
        <svg ref={ref} preserveAspectRatio="none" />
      </Container>
      <Container className="mb-3 ">
        <h3 className="mt-3">Add new data point</h3>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter name ...."
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>orders</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter orders"
              {...register("orders", { required: true })}
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Add orders
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default D3Firebase;
