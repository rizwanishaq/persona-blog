import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Feature = () => {
  return (
    <section className="pt-105 pb-70 bg-light feature_45">
      <Container className="px-xl-0">
        <div className="row justify-content-center">
          <Col className="text-center" xl={8} lg={10}>
            <h2 className="mb-25 small">
              Expertly Crafted Projects - Our Specialty
            </h2>
            <div className="mb-60 f-22 color-heading text-adaptive description">
              Master the art of full-stack AI development or create cutting-edge
              projects with our expert guidance. Let us help you reach your
              goals.
            </div>
          </Col>
        </div>
        <Row className="justify-content-center justify-content-lg-between no-gutters">
          <Col xl={7} lg={6} md={8}>
            <img
              src="i/feature_45_img.jpg"
              srcSet="i/feature_45_img@2x.jpg 2x"
              alt=""
              className="mb-50 mb-lg-0 img-fluid radius10"
            />
          </Col>
          <Col className="mt-10" lg={5}>
            <Row className="row justify-content-center text-center text-md-left">
              <Col className="mb-45 block" lg={12} md={4} sm={8}>
                <div className="mb-15 f-22 title">
                  Decades of Expertise - 8+ Years and Counting
                </div>
                <div className="color-heading text-adaptive">
                  Unleash the potential of full stack machine learning with our
                  decade-long expertise in delivering successful projects.
                </div>
              </Col>
              <Col className="mb-45 block" lg={12} md={4} sm={8}>
                <div className="mb-15 f-22 title">
                  Unleashing the Power of a Global Reach - Serving the World
                  Wide
                </div>
                <div className="color-heading text-adaptive">
                  Experience the power of our global reach as we expand horizons
                  and serve clients all over the world, delivering top-notch
                  services and solutions to a diverse range of industries and
                  markets.
                </div>
              </Col>
              <Col className="mb-45 block" lg={12} md={4} sm={8}>
                <div className="mb-15 f-22 title">
                  Elite Services - 5-Star Quality Guaranteed
                </div>
                <div className="color-heading text-adaptive">
                  Experience the power of our global reach as we expand horizons
                  and serve clients all over the world, delivering top-notch
                  services and solutions to a diverse range of industries and
                  markets.
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Feature;
