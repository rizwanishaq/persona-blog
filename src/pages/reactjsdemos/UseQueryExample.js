import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";

const createStopwatch = () => {
  return () => {
    return new Date();
  };
};

const UseQueryExample = () => {
  const timerRef = useRef(createStopwatch());
  const { data: time } = useQuery("time", timerRef.current, {
    refetchInterval: 1000,
  });
  return (
    <Container className="text-center">{time?.toLocaleTimeString()}</Container>
  );
};

export default UseQueryExample;
