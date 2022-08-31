import React from "react";
import { Container } from "react-bootstrap";
import AddTransaction from "../../components/ExpenseTracker/AddTransaction";
import Balance from "../../components/ExpenseTracker/Balance";
import ExpenseHeader from "../../components/ExpenseTracker/ExpenseHeader";
import IncomeExpense from "../../components/ExpenseTracker/IncomeExpense";
import TransactionList from "../../components/ExpenseTracker/TransactionList";

const ExpenseTracker = () => {
  return (
    <Container className="w-25 align-items-center">
      <ExpenseHeader />
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </Container>
  );
};

export default ExpenseTracker;
