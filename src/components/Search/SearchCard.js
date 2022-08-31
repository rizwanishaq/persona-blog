import React from "react";
import { Card } from "react-bootstrap";

const SearchCard = ({ post }) => {
  return (
    <Card className="mt-2 mb-2">
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{post.userId}</Card.Footer>
    </Card>
  );
};

export default SearchCard;
