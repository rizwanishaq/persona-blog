import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Main = () => {
  return (
    <section className="pt-100 pb-100 bg-light application_21">
      <Container className="px-xl-0">
        <Row
          className="mb-5 justify-content-between align-items-center align-items-xl-start"
          md={5}
        >
          <Col md={7} xl={6}>
            <div className="pb-15 color-heading f-22 medium op-7">
              <div>Full Stack AI Solutions</div>
            </div>
            <h2 className="text-adaptive">
              Our expertise with full stack ai is here to guide you.
            </h2>
          </Col>
          <Col md={5} xl={6}>
            <img
              src="i/application_21_img_1.png"
              srcSet="i/application_21_img_1@2x.png 2x"
              alt=""
              className="img-fluid mt-30 mt-md-0"
            />
          </Col>
        </Row>
        <Row className="mt-20 mt-0" md={0}>
          <Col className="mt-30 no-gutters" md={4}>
            <div className="pb-15 color-main f-32 bold">
              Artificial Intelligence
            </div>
            <Col
              className="color-heading f-18 medium op-7 text-adaptive"
              xl={9}
            >
              {" "}
              <div>
                We provide state of the art solutions for AI applications.
              </div>
            </Col>
          </Col>
          <Col className="mt-30 no-gutters" md={4}>
            <div className="pb-15 color-main f-32 bold">MERN Stack</div>
            <Col
              className="color-heading f-18 medium op-7 text-adaptive"
              xl={9}
            >
              {" "}
              <div>
                We provide complete web based solution using MERN (Mongo,
                Express, React, and Nodejs) stack
              </div>
            </Col>
          </Col>
          <Col className="mt-30 no-gutters" md={4}>
            <div className="pb-15 color-main f-32 bold">Python</div>
            <Col
              className="color-heading f-18 medium op-7 text-adaptive"
              xl={9}
            >
              {" "}
              <div>We are best with Python based solutions</div>
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Main;
