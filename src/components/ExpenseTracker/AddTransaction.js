import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import uuid from "react-uuid";
import { useExpenseTrackerContext } from "../../hooks/useExpenseTrackerContext";

const AddTransaction = () => {
  const { dispatch } = useExpenseTrackerContext();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    data._id = uuid();
    data.amount = +data.amount;
    dispatch({ type: "ADD_TRANSACTION", payload: data });
    toast.success("Transaction added");
    reset();
  };
  return (
    <Container className="mb-3 ">
      <h3 className="mt-3">Add new transaction</h3>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Text</Form.Label>
          <Form.Control
            type="text"
            {...register("text", { required: true })}
            placeholder="Enter a text ...."
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            Amount <br />
            (negative - expense, positive - income){" "}
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter number"
            {...register("amount", { required: true })}
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Add transaction
        </Button>
      </Form>
    </Container>
  );
};

export default AddTransaction;
