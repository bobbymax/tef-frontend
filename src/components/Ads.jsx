import React from "react";

const Ads = () => {
  return (
    <>
      <div className="container">
        <div
          className="owl-carousel owl-theme owl-box-border row cols-md-3 cols-sm-2 cols-1 appear-animate"
          data-owl-options="{
                                          'nav': false,
                                          'dots': false,
                                          'loop': false,
                                          'responsive': {
                                              '0': {
                                                  'items': 1,
                                                  'autoplay': true
                                              },
                                              '576': {
                                                  'items': 2,
                                                  'autoplay': true
                                              },
                                              '768': {
                                                  'items': 3,
                                                  'dots': false
                                              }
                                          }
                                      }"
        >
          <div className="icon-box icon-box-side">
            <span className="icon-box-icon">
              <i className="p-icon-shipping-solid" />
            </span>
            <div className="icon-box-content">
              <h4 className="icon-box-title">FREE SHIPPING &amp; RETURN</h4>
              <p>Free shipping on orders over $99</p>
            </div>
          </div>
          <div className="icon-box icon-box-side">
            <span className="icon-box-icon">
              <i className="p-icon-quality" />
            </span>
            <div className="icon-box-content">
              <h4 className="icon-box-title">QUALITY GUARANTEED</h4>
              <p>We offer high quality of products</p>
            </div>
          </div>
          <div className="icon-box icon-box-side">
            <span className="icon-box-icon">
              <i className="p-icon-fax2" />
            </span>
            <div className="icon-box-content">
              <h4 className="icon-box-title">SECURE PAYMENT</h4>
              <p>We ensure secure payment!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ads;
