import React, { useEffect, useState } from "react";
import { storage } from "../../firebase-config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import {
  Container,
  Button,
  Form,
  InputGroup,
  Carousel,
  Image,
} from "react-bootstrap";

const UploadImage = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [update, setUpdate] = useState(false);

  const imageListRef = ref(storage, "image/");

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      setImageList([]);
      response.items.map((item) => {
        return getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, [update]);

  const uploadImage = async () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `image/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload)
      .then(() => {
        toast.success("image uploaded");
        setUpdate(!update);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <Container className="mt-2 text-center">
      <Carousel variant="dark">
        {imageList.map((url, idx) => {
          return (
            <Carousel.Item key={`${url}-${idx}`}>
              <Image
                fluid={true}
                src={url}
                key={url}
                thumbnail={true}
                rounded={true}
                className="w-25 h-25"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <InputGroup className="mb-3 mt-3">
        <Form.Control
          type="file"
          onChange={(e) => setImageUpload(e.target.files[0])}
        />
        <Button onClick={uploadImage}>Upload</Button>
      </InputGroup>
    </Container>
  );
};

export default UploadImage;
