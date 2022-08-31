import React from "react";
import { Container } from "react-bootstrap";
import { useExpenseTrackerContext } from "../../hooks/useExpenseTrackerContext";

const IncomeExpense = () => {
  const { transactions } = useExpenseTrackerContext();

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <Container className="mb-3  d-flex justify-content-between align-items-start">
      <div>
        <h4>Income</h4>
        <p style={{ color: "green" }}>+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p style={{ color: "red" }}>-${expense}</p>
      </div>
    </Container>
  );
};

export default IncomeExpense;
