import React from "react";
import { ListGroup, Container } from "react-bootstrap";
import { useExpenseTrackerContext } from "../../hooks/useExpenseTrackerContext";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useExpenseTrackerContext();
  return (
    <Container className="mb-3">
      <h3>History</h3>
      <ListGroup>
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ListGroup>
    </Container>
  );
};

export default TransactionList;
