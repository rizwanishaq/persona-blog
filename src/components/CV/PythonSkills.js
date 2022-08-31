import React from "react";
import { SiElastic } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { ListGroup } from "react-bootstrap";
import {SiTensorflow} from "react-icons/si";
import { FaNodeJs, FaPython,  } from "react-icons/fa";

const PythonSkills = () => {
  return (
    <>
      <ListGroup>
        <ListGroup.Item>
          <SiElastic /> ElasticSearch
        </ListGroup.Item>
        <ListGroup.Item>
          <DiMongodb /> MongoDB
        </ListGroup.Item>
        <ListGroup.Item>
          <FaNodeJs /> Nodejs
        </ListGroup.Item>
        <ListGroup.Item>
          <FaPython /> Python
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default PythonSkills;
