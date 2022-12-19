import React from "react";
import Container from "react-bootstrap/Container";
import NavBar from "../../components/shoppingcart/NavBar";
import Cancel from "./Cancel";
import Store from "./Store";
import Success from "./Success";

const ShoppingCart = () => {
  return (
    <Container>
      <NavBar />
      <Store />
      <Cancel />
      <Success />
    </Container>
  );
};

export default ShoppingCart;
