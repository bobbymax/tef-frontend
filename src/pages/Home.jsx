/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Ads from "../components/Ads";
import PopularProducts from "../components/pages/PopularProducts";
import Slider from "../components/Slider";
import banner from "../assets/images/demos/demo1/banner/banner1.jpg";
import Arrivals from "../components/pages/Arrivals";
import Featured from "../components/pages/Featured";
import Trending from "../components/pages/Trending";

const Home = () => {
  return (
    <div className="page-content">
      <section className="intro-section">
        {/* Slider Section */}
        <Slider />
        {/* End Slider Section */}

        {/* Ads Section */}
        <Ads />
        {/* End Ads Section */}
      </section>

      {/* Below Section */}
      <PopularProducts />

      <section
        className="benefit-section appear-animate"
        style={{ background: "#fafaf8" }}
      >
        <div className="container">
          <h4 className="subtitle title-underline2 text-uppercase text-center">
            <span>Why Top Products?</span>
          </h4>
          <h2 className="title justify-content-center text-center pb-6 mb-10">
            100% Natural, 100% Organic
          </h2>
          <figure className="img-back floating">
            <img
              className="layer"
              src={banner}
              width={674}
              height={514}
              alt="banner"
            />
          </figure>
          <div className="row appear-animate">
            <div className="col-md-6">
              <div className="icon-box ml-md-4">
                <span className="icon-box-icon">
                  <i
                    className="p-icon-heartbeat-solid"
                    style={{ fontSize: "2.05em" }}
                  />
                </span>
                <div className="icon-box-content">
                  <h4 className="icon-box-title">Good for Health</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur eiusmod tempor
                    incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 pos-right">
              <div className="icon-box mr-md-4">
                <span
                  className="icon-box-icon"
                  style={{ marginBottom: "1.9rem" }}
                >
                  <i className="p-icon-quality" />
                </span>
                <div className="icon-box-content">
                  <h4 className="icon-box-title">High Nutrition</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur eiusmod tempor
                    incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="icon-box ml-md-4">
                <span
                  className="icon-box-icon"
                  style={{ marginBottom: "2rem" }}
                >
                  <i className="p-icon-fruit" />
                </span>
                <div className="icon-box-content">
                  <h4 className="icon-box-title">Always Fresh</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur eiusmod tempor
                    incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 pos-right">
              <div className="icon-box mr-md-4">
                <span className="icon-box-icon" style={{ marginBottom: 15 }}>
                  <i className="p-icon-filter" style={{ fontSize: "1.9em" }} />
                </span>
                <div className="icon-box-content">
                  <h4 className="icon-box-title">No Fertilizer</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur eiusmod tempor
                    incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arrivals */}
      <Arrivals />

      <Featured />

      <Trending />
    </div>
  );
};

export default Home;
