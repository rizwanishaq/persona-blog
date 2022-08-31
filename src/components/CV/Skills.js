import React from "react";
import * as d3 from "d3";
import { Col } from "react-bootstrap";
import PythonSkills from "./PythonSkills";

const Arc = ({ data, index, createArc, colors, skill }) => (
  <g key={index} className="arc">
    <path className="arc" d={createArc(data)} fill={colors(index)} />
    <text
      transform={`translate(${createArc.centroid(data)})`}
      textAnchor="middle"
      alignmentBaseline="middle"
      fill="white"
      fontSize="10"
    >
      {skill}
    </text>
  </g>
);

const Skills = (props) => {
  const skills = ["python", "MERN", "Tensorflow", "Pytorch", "Databases"];
  const createPie = d3
    .pie()
    .value((d) => d.value)
    .sort(null);
  const createArc = d3
    .arc()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius);
  const colors = d3.scaleOrdinal(d3.schemeCategory10);
  const data = createPie(props.data);

  return (
    <>
      <Col>
        <svg width={props.width} height={props.height}>
          <g transform={`translate(${props.outerRadius} ${props.outerRadius})`}>
            {data.map((d, i) => (
              <Arc
                key={i}
                data={d}
                index={i}
                createArc={createArc}
                colors={colors}
                skill={skills[i]}
              />
            ))}
            <text
              textAnchor="inside"
              alignmentBaseline="middle"
              fill="black"
              fontSize="20"
              dx={"-1em"}
            >
              Skills
            </text>
          </g>
        </svg>
      </Col>
      <Col>
        <PythonSkills />
      </Col>
    </>
  );
};

export default Skills;
