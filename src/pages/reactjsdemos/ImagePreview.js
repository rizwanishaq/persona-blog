import React, { useEffect, useRef, useState } from "react";
import { Container, Form, Button, Image } from "react-bootstrap";

const ImagePreview = () => {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const fileInput = useRef(null);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  return (
    <Container>
      <Form>
        {preview ? (
          <Image
            src={preview}
            roundedCircle
            onClick={() => {
              setImage(null);
            }}
          />
        ) : (
          <Form.Group className="mt-3">
            <Button
              onClick={(e) => {
                e.preventDefault();
                fileInput.current.click();
              }}
            >
              Add Image
            </Button>
            <Form.Control
              type="file"
              style={{ display: "none" }}
              ref={fileInput}
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file && file.type.substring(0, 5) === "image") {
                  setImage(file);
                } else {
                  setImage(null);
                }
              }}
            />
          </Form.Group>
        )}
      </Form>
    </Container>
  );
};

export default ImagePreview;
