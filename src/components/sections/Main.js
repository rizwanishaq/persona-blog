import React from "react";

const Main = () => {
  return (
    <section className="pt-100 pb-100 bg-light application_21">
      <div className="container px-xl-0">
        <div className="mb-md-5 row justify-content-between align-items-center align-items-xl-start">
          <div className="col-md-7 col-xl-6">
            <div className="pb-15 color-heading f-22 medium op-7">
              <div>Full Stack AI Engineer</div>
            </div>
            <h2 className="text-adaptive">
              My Expertise from fullstack AI is here to guide you
            </h2>
          </div>
          <div className="col-md-5 col-xl-6">
            <img
              src="i/application_21_img_1.png"
              srcSet="i/application_21_img_1@2x.png 2x"
              alt=""
              className="img-fluid mt-30 mt-md-0"
            />
          </div>
        </div>
        <div className="mt-20 mt-md-0 row">
          <div className="mt-30 col-md-4 no-gutters">
            <div className="pb-10 color-heading f-14 bold text-uppercase sp-20">
              01
            </div>
            <div className="pb-15 color-main f-32 bold">
              Artificial Intelligence
            </div>
            <div className="col-xl-9 color-heading f-18 medium op-7 text-adaptive">
              {" "}
              <div>
                From data collection to model training with tensorflow/pytorch
              </div>
            </div>
          </div>
          <div className="mt-30 col-md-4 no-gutters">
            <div className="pb-10 color-heading f-14 bold text-uppercase sp-20">
              02
            </div>
            <div className="pb-15 color-main f-32 bold">ReactJs</div>
            <div className="col-xl-9 color-heading f-18 medium op-7 text-adaptive">
              {" "}
              <div>Front-end with Reactjs</div>
            </div>
          </div>
          <div className="mt-30 col-md-4 no-gutters">
            <div className="pb-10 color-heading f-14 bold text-uppercase sp-20">
              03
            </div>
            <div className="pb-15 color-main f-32 bold">Back End</div>
            <div className="col-xl-9 color-heading f-18 medium op-7 text-adaptive">
              {" "}
              <div>Back-end also with nodejs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
