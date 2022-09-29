import React from "react";
import { useForm } from "react-hook-form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

// Ref : https://www.youtube.com/watch?v=NnttDWb__KI

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container className="mt-4">
      <Row>
        {/* Form Column */}
        <Col sm>
          <h1>React-hook-Form Checking</h1>
          <p>Random checking of react-hook-form</p>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                {...register("name", {
                  required: true,
                  maxLength: 80,
                })}
              />
              {errors.name && (
                <span className="text-danger">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length of name is 80 char."}
                </span>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <span className="text-danger">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "InValid email"}
                </span>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone Number"
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && (
                <span className="text-danger">Invalid phone number</span>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Write your message here ... "
                style={{ height: "100px" }}
                {...register("message", {
                  required: true,
                })}
              />
              {errors.message && (
                <span className="text-danger">This field is required</span>
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>

        {/* Image Column */}
        <Col sm>
          <Image
            fluid={true}
            src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            rounded={true}
            width="100%"
            height="100%"
            object-fit="cover"
            alt="living-room"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ReactHookForm;
