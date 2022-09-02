import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { useLocation } from "../../hooks/useLocation";
import Image from "react-bootstrap/Image";

const Header = () => {
  const { location } = useLocation();

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
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
              to="/blogs"
              className="link ml-15 color-main"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Blog
            </Link>
          </div>
          <div className="mt-10 mt-lg-0 col-lg-3 text-lg-right">
            {location.temperature && location.weather && (
              <Link
                to="#"
                className="link mr-30 color-main"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                {location.city.length > 0 ? `${location.city} ` : ""}
                {location.weather ? (
                  <Image src={location.weather.icon} />
                ) : (
                  ""
                )}{" "}
                {Math.ceil(location.temperature.temp)}&deg;
              </Link>
            )}
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default Header;
