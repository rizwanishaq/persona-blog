import React from "react";
import Item from "../components/common/Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Blogs = () => {
  return (
    <section className="pt-105 pb-70 bg-light feature_45">
      <Container className="px-xl-0">
        <Row className="justify-content-center">
          <Col className="text-center" xl={8} lg={10}>
            <h2 className="mb-25 small">Blogs</h2>
            <div className="mb-60 f-22 color-heading text-adaptive description">
              Small blogs
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center justify-content-md-between no-gutters">
          <Col className="mt-10">
            <Row className="justify-content-center text-center text-md-left">
              <Item
                key={"Memcached"}
                title={"Memcached"}
                description={"Memcached description"}
                link={"/memcached"}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;
