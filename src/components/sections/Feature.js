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
            <h2 className="mb-25 small">Best in Creating projects</h2>
            <div className="mb-60 f-22 color-heading text-adaptive description">
              Whether your goal is to learn full-stack AI, or just develop our
              state of art projects, we are here to help you
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
                <div className="mb-15 f-22 title">8+ Years</div>
                <div className="color-heading text-adaptive">
                  We have more than 10 years of experience with full stack
                  machine learning projects
                </div>
              </Col>
              <Col className="mb-45 block" lg={12} md={4} sm={8}>
                <div className="mb-15 f-22 title">20+ Countries</div>
                <div className="color-heading text-adaptive">
                  Our globally-acclaimed trainings take place in beautiful
                  destinations around the globe.
                </div>
              </Col>
              <Col className="mb-45 block" lg={12} md={4} sm={8}>
                <div className="mb-15 f-22 title">5-Star Services</div>
                <div className="color-heading text-adaptive">
                  We’re 5 star services provider
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
