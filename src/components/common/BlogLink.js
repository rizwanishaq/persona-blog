import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const BlogLink = ({ title, text, link }) => {
  return (
    <ListGroup.Item style={{ border: "none" }}>
      <Link to={link} style={{ textDecoration: "none" }}>
        {" "}
        {text}
      </Link>
    </ListGroup.Item>
  );
};

export default BlogLink;
