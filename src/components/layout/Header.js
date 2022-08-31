import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <Nav className="pt-30 pb-30 bg-light lh-40 text-center navigation_8">
      <div className="container px-xl-0">
        <div className="row align-items-center">
          <div className="col-lg-3 text-lg-left">
            <Link
              to="/"
              className="link logo color-main"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              RizPoint
            </Link>
          </div>
          <div className="col-lg-6">
            <Link
              to="/machinelearning"
              className="link mr-15 color-main"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Machine Learning
            </Link>
            <Link
              to="/reactjs"
              className="link mx-15 color-main"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              MERN
            </Link>
            <Link
              to="#"
              className="link mx-15 color-main"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Python
            </Link>
            <Link
              to="#"
              className="link ml-15 color-main"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Blog
            </Link>
          </div>
          <div className="mt-10 mt-lg-0 col-lg-3 text-lg-right">
            <Link
              to="#"
              className="link mr-30 color-main"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Login
            </Link>
            <Link
              to="#"
              className="btn sm border-gray color-main f-16"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default Header;
