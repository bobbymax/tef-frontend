import sliderTwo from "../assets/images/demos/demo1/intro/slider-2.jpg";
import brandOne from "../assets/images/demos/demo1/intro/brand1.png";
import firstBanner from "../assets/images/sliders/second-banner.jpg";

const Slider = () => {
  return (
    <>
      <div
        className="intro-slider owl-carousel owl-theme owl-nav-arrow row animation-slider cols-1 gutter-no mb-8"
        data-owl-options="{
                          'nav': true,
                          'dots': false,
                          'loop': false,
                          'items': 1,
                          'responsive': {
                              '0': {
                                  'nav': false,
                                  'autoplay': true
                              },
                              '768': {
                                  'nav': true
                              }
                          }
                      }"
      >
        <div className="banner banner-fixed banner1">
          <figure>
            <img
              src={firstBanner}
              alt="banner"
              width={1903}
              height={600}
              style={{ backgroundColor: "#f8f6f6" }}
            />
          </figure>
          <div className="banner-content y-50 pb-1">
            <h4
              className="banner-subtitle title-underline2 font-weight-normal text-dim slide-animate appear-animate"
              data-animation-options="{
                                          'name': 'fadeInUpShorter',
                                          'delay': '.2s'
                                      }"
            >
              <span>FROM ONLINE STORE</span>
            </h4>
            <h3
              className="banner-title text-dark lh-1 mb-7 slide-animate appear-animate"
              data-animation-options="{
                                          'name': 'fadeInUpShorter',
                                          'delay': '.4s'
                                      }"
            >
              Panda Birthday
              <br />
              Collection
            </h3>
            <a
              href="shop.html"
              className="btn btn-dark slide-animate appear-animate"
              data-animation-options="{
                                          'name': 'fadeInUpShorter',
                                          'delay': '.6s'
                                      }"
            >
              SHop now
              <i className="p-icon-arrow-long-right" />
            </a>
          </div>
        </div>
        <div className="banner banner-fixed banner2">
          <figure>
            <img
              src={sliderTwo}
              alt="banner"
              width={1903}
              height={600}
              style={{ backgroundColor: "#F3F2EE" }}
            />
          </figure>
          <div className="banner-content y-50 pb-1">
            <img
              src={brandOne}
              width={269}
              height={75}
              alt="brand"
              className="mb-5 slide-animate appear-animate"
              data-animation-options="{
                                              'name': 'fadeIn',
                                              'delay': '.2s'
                                          }"
            />
            <h3
              className="banner-title text-dark mb-5 mb-sm-9 slide-animate appear-animate"
              data-animation-options="{
                                          'name': 'fadeInLeftShorter',
                                          'delay': '.4s'
                                      }"
            >
              New Best Products
              <br />
              With Cocoa Cake and Oil
            </h3>
            <a
              href="shop.html"
              className="btn btn-dark mr-2 mr-xs-6 slide-animate appear-animate"
              data-animation-options="{
                                          'name': 'fadeInLeftShorter',
                                          'delay': '.6s'
                                      }"
            >
              SHop now
              <i className="p-icon-arrow-long-right" />
            </a>
            <h5
              className="banner-price title-underline2 slide-animate appear-animate"
              data-animation-options="{
                                          'name': 'fadeInLeftShorter',
                                          'delay': '.6s'
                                      }"
            >
              Only{" "}
              <span className="price">
                29<span className="d-xs-show">.00</span>
              </span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
