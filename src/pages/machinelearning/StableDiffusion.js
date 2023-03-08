import React, { useState } from "react";
import { HfInference } from "@huggingface/inference";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Image from "react-bootstrap/Image";

const StableDiffusion = () => {
  const hf = new HfInference(process.env.REACT_APP_HUGGING_FACE_API);
  const [image, setImage] = useState("");
  const [processing, setProcessing] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    setImage("");
    setProcessing(true);
    console.log(data);
    try {
      await hf
        .textToImage({
          inputs: `${data.prompt}`,
          negative_prompt: "blurry",
          model: "stabilityai/stable-diffusion-2",
        })
        .then((arrayBuffer) => {
          const blob = new Blob([arrayBuffer], { type: "image/jpeg" });
          const imageUrl = URL.createObjectURL(blob);
          setImage(imageUrl);
          setProcessing(false);
        });
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

export default StableDiffusion;
