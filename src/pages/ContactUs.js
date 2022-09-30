import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactUs = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .sendForm(
        "service_hy4x6wj",
        "template_bcel6r7",
        form.current,
        "QlmhXGRn1zMjlPUK7"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Message has been sent!");
            console.log(result.text);
          }
        },
        (error) => {
          console.log(error.text);
          toast.error("something wrong while sending message!");
        }
      );
  };

  return (
    <Container className="mt-4  mb-4">
      <h1>Contact Us</h1>
      <p>
        {" "}
        Send us your queries, we will try to answer them as soon as possible.{" "}
      </p>

      <Form onSubmit={handleSubmit(onSubmit)} ref={form}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            {...register("user_name", {
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
            {...register("user_email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <span className="text-danger">
              {errors.email.type === "required" && "This field is required."}
              {errors.email.type === "pattern" && "InValid email"}
            </span>
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
    </Container>
  );
};

export default ContactUs;
