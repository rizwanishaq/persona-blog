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
              Get a taste of ReactJS with these mini-apps that pack a big punch!
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
              <Item
                key={"CountriesInformation"}
                title={"CountriesInformation Example"}
                description={"Get the information related to the countries"}
                link={"/countries"}
              />
              <Item
                key={"D3TemplateTooltips"}
                title={"D3TemplateTooltips Example"}
                description={"D3TemplateTooltips Example"}
                link={"/templatetooltips"}
              />
              <Item
                key={"ShoppingCart"}
                title={"ShoppingCart Example"}
                description={"ShoppingCart Example"}
                link={"/shoppingcart"}
              />
              <Item
                key={"react-list-drag_drop"}
                title={"React List Drag Drop Example"}
                description={"React List Drag Drop Example"}
                link={"/reactdragdrop"}
              />
              <Item
                key={"ColorMapD3"}
                title={"Color map d3 example"}
                description={"Color map example d3"}
                link={"/colormapd3"}
              />
              <Item
                key={"BarChartD3"}
                title={"BarChartD3 example"}
                description={"BarChartD3 example from youtube video"}
                link={"/barchartd3"}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ReactJs;
