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
                key={"CryptoTrack"}
                title={"CryptoTrack"}
                description={"Tracking Crypto"}
                link={"/cryptotrack"}
              />
              <Item
                key={"ReactTable"}
                title={"ReactTable"}
                description={"ReactTable"}
                link={"/reacttable"}
              />
              <Item
                key={"UseQueryExample"}
                title={"UseQueryExample"}
                description={"UseQuery Example"}
                link={"/useQueryexample"}
              />
              <Item
                key={"AudioSpectrum"}
                title={"AudioSpectrum"}
                description={"AudioSpectrum Example"}
                link={"/audiospectrum"}
              />
              <Item
                key={"ReactHookForm"}
                title={"ReactHookForm"}
                description={"ReactHookForm Example"}
                link={"/reacthookform"}
              />
              <Item
                key={"D3Experimentation"}
                title={"D3Experimentation"}
                description={"D3Experimentation"}
                link={"/d3experimentation"}
              />
              <Item
                key={"FireBaseProject1"}
                title={"FireBaseProject1"}
                description={"Donut Chart Example"}
                link={"/donutchart"}
              />
              <Item
                key={"AreaD3"}
                title={"AreaD3 Example"}
                description={"D3 Area Example"}
                link={"/aread3"}
              />
              <Item
                key={"BoxPlot"}
                title={"BoxPlot Example"}
                description={"D3 BoxPlot Example"}
                link={"/boxplotd3"}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ReactJs;
