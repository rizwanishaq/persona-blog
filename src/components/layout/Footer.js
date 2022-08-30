import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-90 pb-75 bg-dark color-white text-center text-sm-left footer_9">
      <div className="container px-xl-0">
        <div className="row justify-content-center">
          <div className="mb-50 mb-lg-0 col-lg-4">
            <div className="mb-30 f-22 title">
              200,000 users registered since January 2015
            </div>
            <div className="mb-35 text-adaptive">
              We’ve created the product that will help your balance and
              flexibility
            </div>
            <form
              action="form-handler.php"
              method="POST"
              className="mb-100 row no-gutters"
            >
              <div className="col-lg-7 col-md-5 col-7">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required="required"
                  className="input w-full sm border-transparent-white focus-white color-white placeholder-transparent-white"
                />
              </div>
              <div className="col-lg-5 col-md-3 col-5">
                <div className="ml-10">
                  <button className="btn sm action-1 w-full f-16">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
            <div className="row no-gutters justify-content-center justify-content-sm-start">
              <div className="col-lg-auto col-sm-4 col-auto">
                <Link to="#" className="link mr-10 color-white">
                  Terms of Service
                </Link>
              </div>
              <div className="col-lg-auto col-sm-4 col-auto">
                <Link to="#" className="link ml-10 color-white">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-2 col-sm-4 col-6 links">
            <div className="mb-25 f-18 medium title">Yoga Teachers</div>
            <div>
              <Link to="#" className="link mb-20 color-white">
                Poses
              </Link>
            </div>
            <div>
              <Link to="#" className="link mb-20 color-white">
                Shop
              </Link>
            </div>
            <div>
              <Link to="#" className="link mb-20 color-white">
                Programs
              </Link>
            </div>
            <div>
              <Link to="#" className="link mb-20 color-white">
                Blog
              </Link>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4 col-6 links">
            <div className="mb-25 f-18 medium title">Yoga Online</div>
            <div>
              <Link to="#" className="link mb-20 color-white">
                Events
              </Link>
            </div>
            <div>
              <Link to="#" className="link mb-20 color-white">
                Education
              </Link>
            </div>
            <div>
              <Link to="#" className="link mb-20 color-white">
                Contact
              </Link>
            </div>
            <div>
              <Link to="#" className="link mb-20 color-white">
                Videos
              </Link>
            </div>
            <div>
              <Link to="#" className="link mb-20 color-white">
                Podcasts
              </Link>
            </div>
          </div>
          <div className="col-xl-1 d-none d-xl-block"></div>
          <div className="mt-50 mt-sm-0 col-xl-2 col-lg-3 col-sm-4 col-7 text-center">
            <Link to="#" className="btn action-3 w-full px-0">
              Start Trainings
            </Link>
            <div className="mt-20">
              <span>or </span>
              <Link to="#" className="link color-white">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
