import React from "react";
import { Container } from "react-bootstrap";
import { useExpenseTrackerContext } from "../../hooks/useExpenseTrackerContext";

const Balance = () => {
  const { transactions } = useExpenseTrackerContext();

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <Container className="mb-3">
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </Container>
  );
};

export default Balance;
