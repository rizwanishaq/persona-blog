import React from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";

const Item = ({ title, link, description }) => {
  return (
    <Col className="mb-15 block" lg={4} md={4} sm={12}>
      <div className="mb-15 f-22 title">
        <Link to={link} style={{ textDecoration: "none" }}>
          {title}
        </Link>
      </div>
      <div className="color-heading text-adaptive">{description}</div>
    </Col>
  );
};

export default Item;
