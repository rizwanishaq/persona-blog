import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Image from "react-bootstrap/Image";

const OpenAIImage = () => {
  const [image, setImage] = useState("");
  const [processing, setProcessing] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    setImage("");
    setProcessing(true);
    console.log(data);
    try {
      const response = await fetch(
        "https://openai-image-demo.onrender.com/openai/generateimage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        console.log(response);
      }

      const response_data = await response.json();
      const imageUrl = response_data.data;
      console.log(imageUrl);
      setImage(imageUrl);
      setProcessing(false);
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }

    reset();
  };

  return (
    <Container>
      <section className="showcase">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Write some prompt to generate the image</Form.Label>
            <Form.Control
              type="text"
              {...register("prompt", { required: true })}
              placeholder="Enter a text ...."
            />
          </Form.Group>
          <Form.Group>
            <Form.Select
              className="mt-4 mb-3"
              {...register("size", { required: true })}
            >
              <option values="small">small</option>
              <option values="medium">medium</option>
              <option values="large">large</option>
            </Form.Select>
          </Form.Group>
          <Button variant="dark" type="submit">
            Generate
          </Button>
        </Form>
      </section>

      <Image
        src={processing ? "i/processing.gif" : image}
        responsive="true"
        className="mt-3 mb-50 mb-lg-0 img-fluid radius10"
      />
    </Container>
  );
};

export default OpenAIImage;
