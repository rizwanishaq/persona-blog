import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";

const numberWithCommas = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const GlobalData = ({ global }) => {
  return (
    <Container className="text-center">
      <h1>{global.Country ? `${global.Country}` : "Global"}</h1>
      <p>{moment(global.Date).format("MMMM Do YYYY, h:mm:ss a")}</p>
      <Row>
        <Col style={{ backgroundColor: "#00BFFF" }}>
          <h3>Cases</h3>
          <div>
            <span>New: </span> {numberWithCommas(global.NewConfirmed)}
          </div>
          <div>
            <span>Total: </span> {numberWithCommas(global.TotalConfirmed)}
          </div>
        </Col>
        <Col style={{ backgroundColor: "#1E90FF" }}>
          <h3>Deaths</h3>
          <div>
            <span>New: </span> {numberWithCommas(global.NewDeaths)}
          </div>
          <div>
            <span>Total: </span> {numberWithCommas(global.TotalDeaths)}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GlobalData;
