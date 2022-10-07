import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const CountryCard = ({ country }) => {
  return (
    <Container className="text-center">
      <Card>
        <Card.Body>
          <Card.Text>{JSON.stringify(country, 4)}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CountryCard;
