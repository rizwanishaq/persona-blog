import React from "react";

const Feature = () => {
  return (
    <section className="pt-105 pb-70 bg-light feature_45">
      <div className="container px-xl-0">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10 text-center">
            <h2 className="mb-25 small">Best in Creating projects</h2>
            <div className="mb-60 f-22 color-heading text-adaptive description">
              Whether your goal is to learn full-stack AI, or just develop our
              state of art projects, we are here to help you
            </div>
          </div>
        </div>
        <div className="row justify-content-center justify-content-lg-between no-gutters">
          <div className="col-xl-7 col-lg-6 col-md-8">
            <img
              src="i/feature_45_img.jpg"
              srcSet="i/feature_45_img@2x.jpg 2x"
              alt=""
              className="mb-50 mb-lg-0 img-fluid radius10"
            />
          </div>
          <div className="mt-10 col-lg-5">
            <div className="row justify-content-center text-center text-md-left">
              <div className="mb-45 col-lg-12 col-md-4 col-sm-8 block">
                <div className="mb-15 f-22 title">10+ Years</div>
                <div className="color-heading text-adaptive">
                  Our curriculum has been developed over 3 decades and is rich
                  with the accumulated experience of dozens of teachers.
                </div>
              </div>
              <div className="mb-45 col-lg-12 col-md-4 col-sm-8 block">
                <div className="mb-15 f-22 title">20+ Countries</div>
                <div className="color-heading text-adaptive">
                  Our globally-acclaimed trainings take place in beautiful
                  destinations around the globe.
                </div>
              </div>
              <div className="mb-45 col-lg-12 col-md-4 col-sm-8 block">
                <div className="mb-15 f-22 title">
                  5-Star Yoga Alliance Rated
                </div>
                <div className="color-heading text-adaptive">
                  We’re a Yoga Alliance 5-star rated training school based on
                  past reviews from our trainees.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
