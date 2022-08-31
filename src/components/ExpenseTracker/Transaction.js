import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { ListGroup } from "react-bootstrap";
import { toast } from "react-toastify";
import { useExpenseTrackerContext } from "../../hooks/useExpenseTrackerContext";

const Transaction = ({ transaction }) => {
  const { dispatch } = useExpenseTrackerContext();
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        {transaction.text}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
      </div>
      <div>
        <AiFillDelete
          onClick={(e) => {
            dispatch({ type: "DELETE_TRANSACTION", payload: transaction });
            toast.success("Transaction deleted");
          }}
        />
      </div>
    </ListGroup.Item>
  );
};

export default Transaction;
