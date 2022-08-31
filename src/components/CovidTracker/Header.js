import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { MdCoronavirus } from "react-icons/md";

const Header = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: "#1E90FF" }}>
        <Container>
          <Navbar.Brand>
            <MdCoronavirus />
            Covid-19 Tracker <br />
            Api by{" "}
            <a href="https://covid19api.com/" target="_blank" rel="noreferrer">
              {" "}
              covid19api.com
            </a>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
