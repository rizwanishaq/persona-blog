import React from "react";
import Item from "../components/common/Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ReactJs = () => {
  return (
    <section className="pt-105 pb-70 bg-light feature_45">
      <Container className="px-xl-0">
        <Row className="justify-content-center">
          <Col className="text-center" xl={8} lg={10}>
            <h2 className="mb-25 small">ReactJs Demos</h2>
            <div className="mb-60 f-22 color-heading text-adaptive description">
              Very simple and small applications using the reactjs library
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center justify-content-md-between no-gutters">
          <Col className="mt-10">
            <Row className="justify-content-center text-center text-md-left">
              <Item
                key={"Image Preview Example"}
                title={"Image Preview Example"}
                description={"Just random task of image preview"}
                link={"/imagepreview"}
              />

              <Item
                key={"Expense Tracker"}
                title={"Expense Tracker"}
                description={"Expense Tracker example"}
                link={"/expensetracker"}
              />

              <Item
                key={"Covid Tracker"}
                title={"Covid Tracker"}
                description={"Covid Tracker example from CovidTracker"}
                link={"/covidtracker"}
              />

              <Item
                key={"Firebase Tutorial"}
                title={"Firebase Tutorial"}
                description={"Firebase Tutorial example"}
                link={"/firebasetutorial"}
              />

              <Item
                key={"Search"}
                title={"Search"}
                description={"Search Text example"}
                link={"/search"}
              />
              <Item
                key={"UploadImage"}
                title={"UploadImage"}
                description={"Upload Image example"}
                link={"/uploadimage"}
              />

              <Item
                key={"UseWebsocket Example"}
                title={"UseWebsocket Example"}
                description={"UseWebsocket Example"}
                link={"/usewebsocketexample"}
              />
              <Item
                key={"VideoFrames"}
                title={"VideoFrames"}
                description={"How to get the videos frames"}
                link={"/videoframes"}
              />
              <Item
                key={"ReactSpring"}
                title={"ReactSpring"}
                description={"How to React Spring"}
                link={"/reactspring"}
              />
              <Item
                key={"TeamAllocation"}
                title={"TeamAllocatin"}
                description={"Team allocation demo"}
                link={"/teamallocation"}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ReactJs;
