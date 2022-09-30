import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { db } from "../../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import * as d3 from "d3";
import { toast } from "react-toastify";

const DonutD3 = () => {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  const expensesCollectionRef = collection(db, "expenses");
  const ref = useRef();
  const dims = { height: 300, width: 300, radius: 150 };
  const cent = { x: dims.width / 2 + 5, y: dims.height / 2 + 5 };

  useEffect(() => {
    const getexpenses = async () => {
      const data = await getDocs(expensesCollectionRef);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getexpenses();
  }, [update]);

  useEffect(() => {
    d3.selectAll("svg > g > *").remove();
    const svgElement = d3
      .select(ref.current)
      .attr("height", dims.height + 150)
      .attr("width", dims.width + 150);

    const graph = svgElement
      .append("g")
      .attr("transform", `translate(${cent.x}, ${cent.y})`);

    const pie = d3
      .pie()
      .sort(null)
      .value((d) => d.cost);

    const arcPath = d3
      .arc()
      .outerRadius(dims.radius)
      .innerRadius(dims.radius / 2);

    const color = d3
      .scaleOrdinal(d3["schemeSet3"])
      .domain(data.map((d) => d.name));

    graph
      .selectAll("path")
      .data(pie(data))
      .join("path")
      .attr("class", "arc")
      .attr("d", arcPath)
      .transition()
      .duration(500)
      .attr("stroke", "black")
      .attr("stroke-width", 3)
      .attr("fill", (d) => color(d.data.name));
  }, [data]);

  const onSubmit = async (data) => {
    const response = await addDoc(expensesCollectionRef, {
      name: data.name,
      cost: +data.cost,
    });

    if (response) {
      setUpdate(!update);
      toast.success("user added successfully");
    } else {
      toast.error("error adding user");
    }
    reset();
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter name ...."
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Item Cost ($)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Item cost"
                {...register("cost", { required: true })}
              />
            </Form.Group>
            <Button variant="dark" type="submit">
              Add Item
            </Button>
          </Form>
        </Col>
        <Col>
          <svg ref={ref} preserveAspectRatio="none" />
          {/* {JSON.stringify(data)} */}
        </Col>
      </Row>
    </Container>
  );
};

export default DonutD3;
