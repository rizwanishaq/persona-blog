import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { productsArray } from "../../productStores";
import ProductCard from "../../components/shoppingcart/ProductCard";

const Store = () => {
  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, idx) => (
          <Col align="center" key={`${product}-${idx}`}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
