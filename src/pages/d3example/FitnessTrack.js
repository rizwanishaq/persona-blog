import React, { useEffect, useRef, useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import * as d3 from "d3";
import { Col, Form, Row } from "react-bootstrap";

const FitnessTrack = () => {
  return (
    <Container>
      <Nav className="z-depth-0">
        <section className="center">
          <h3>small project</h3>
        </section>
      </Nav>

      <section>
        <p classsName="grey-text flow-text">A fitnexx tracker for ninjas</p>
      </section>

      <Container>
        <Row>
          <Col sm={12}>
            <button data-actvity="cycling">Cycling</button>
            <button data-actvity="running">Running</button>
            <button data-actvity="swimming">Swimming</button>
            <button data-actvity="walking">Walking</button>
          </Col>
          <Col sm={12} lg={1}>
            <div className="canvas"></div>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form>
              <p className="flow-text grey-text center">
                How much <span>cycling</span> have you done today?
              </p>
              <input
                type="text"
                className="grey-text"
                id="cycling"
                placeholder="Distance in m"
              />
              <p className="center pink-text error text-lighten-1"></p>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default FitnessTrack;
