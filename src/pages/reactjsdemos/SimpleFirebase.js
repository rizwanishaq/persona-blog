import React, { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import User from "../../components/FirebaseExample/User";

const SimpleFirebase = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, [usersCollectionRef]);

  const onSubmit = async (data) => {
    const response = await addDoc(usersCollectionRef, {
      name: data.name,
      age: +data.age,
    });

    if (response) {
      toast.success("user added successfully");
    } else {
      toast.error("error adding user");
    }
    reset();
  };

  return (
    <>
      <Container>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </Container>
      <Container className="mb-3 ">
        <h3 className="mt-3">Add new user</h3>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter name ...."
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter age"
              {...register("age", { required: true })}
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Add user
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default SimpleFirebase;
