/* eslint-disable jsx-a11y/anchor-is-valid */
import product from "../../assets/images/products/295x369.jpg";
import banner2 from "../../assets/images/demos/demo1/banner/banner2.jpg";
import banner3 from "../../assets/images/demos/demo1/banner/banner3.jpg";

const Arrivals = () => {
  return (
    <>
      <section className="new-section container mt-10 pt-8 appear-animate">
        <h2 className="title title-underline2 justify-content-center mb-8">
          <span>New Arrivals</span>
        </h2>
        <div
          className="owl-carousel owl-theme owl-nav-arrow owl-nav-outer owl-nav-image-center row cols-lg-4 cols-md-3 cols-2"
          data-owl-options="{
                              'items': 4,
                              'nav': false,
                              'dots': true,
                              'margin': 20,
                              'loop': false,
                              'responsive': {
                                  '0': {
                                      'items': 2
                                  },
                                  '768': {
                                      'items': 3,
                                      'dots': true
                                  },
                                  '992': {
                                      'items': 4
                                  },
                                  '1400': {
                                      'nav': true,
                                      'dots': false
                                  }
                              }
                          }"
        >
          <div className="product shadow-media text-center">
            <figure className="product-media">
              <a href="product-simple.html">
                <img src={product} alt="product" width={295} height={369} />
              </a>
              <div className="product-label-group">
                <label className="product-label label-new">Top</label>
              </div>
              <div className="product-action-vertical">
                <a
                  href="#"
                  className="btn-product-icon btn-cart"
                  data-toggle="modal"
                  data-target="#addCartModal"
                  title="Add to Cart"
                >
                  <i className="p-icon-cart-solid" />
                </a>
                <a
                  href="#"
                  className="btn-product-icon btn-wishlist"
                  title="Add to Wishlist"
                >
                  <i className="p-icon-heart-solid" />
                </a>
                <a
                  href="#"
                  className="btn-product-icon btn-compare"
                  title="Compare"
                >
                  <i className="p-icon-compare-solid" />
                </a>
                <a
                  href="#"
                  className="btn-product-icon btn-quickview"
                  title="Quick View"
                >
                  <i className="p-icon-search-solid" />
                </a>
              </div>
            </figure>
            <div className="product-details">
              <div className="ratings-container">
                <div className="ratings-full">
                  <span className="ratings" style={{ width: "60%" }} />
                  <span className="tooltiptext tooltip-top" />
                </div>
                <a
                  href="product-simple.html#content-reviews"
                  className="rating-reviews"
                >
                  (12)
                </a>
              </div>
              <h5 className="product-name">
                <a href="product-simple.html">Butter Glutinous Cake</a>
              </h5>
              <span className="product-price">
                <del className="old-price">$28.00</del>
                <ins className="new-price">$12.00</ins>
              </span>
            </div>
          </div>
          {/* End .product */}
          <div className="product shadow-media text-center">
            <figure className="product-media">
              <a href="product-simple.html">
                <img src={product} alt="product" width={295} height={369} />
              </a>
              <div className="product-label-group">
                <label className="product-label label-new">Top</label>
              </div>
              <div className="product-action-vertical">
                <a
                  href="#"
                  className="btn-product-icon btn-cart"
                  data-toggle="modal"
                  data-target="#addCartModal"
                  title="Add to Cart"
                >
                  <i className="p-icon-cart-solid" />
                </a>
                <a
                  href="#"
                  className="btn-product-icon btn-wishlist"
                  title="Add to Wishlist"
                >
                  <i className="p-icon-heart-solid" />
                </a>
                <a
                  href="#"
                  className="btn-product-icon btn-compare"
                  title="Compare"
                >
                  <i className="p-icon-compare-solid" />
                </a>
                <a
                  href="#"
                  className="btn-product-icon btn-quickview"
                  title="Quick View"
                >
                  <i className="p-icon-search-solid" />
                </a>
              </div>
            </figure>
            <div className="product-details">
              <div className="ratings-container">
                <div className="ratings-full">
                  <span className="ratings" style={{ width: "100%" }} />
                  <span className="tooltiptext tooltip-top" />
                </div>
                <a
                  href="product-simple.html#content-reviews"
                  className="rating-reviews"
                >
                  (12)
                </a>
              </div>
              <h5 className="product-name">
                <a href="product-simple.html">Fresh Mulberry</a>
              </h5>
              <span className="product-price">
                <del className="old-price">$90.00</del>
                <ins className="new-price">$36.00</ins>
              </span>
            </div>
          </div>
          {/* End .product */}
          <div className="product shadow-media text-center">
            <figure className="product-media">
              <a href="product-simple.html">
                <img src={product} alt="product" width={295} height={369} />
              </a>
              <div className="product-action-vertical">
                <a
                  href="#"
                  className="btn-product-icon btn-cart"
                  data-toggle="modal"
                  data-target="#addCartModal"
                  title="Add to Cart"
                >
                  <i className="p-icon-cart-solid" />
                </a>
                <a
                  href="#"
                  className="btn-product-icon btn-wishlist"
                  title="Add to Wishlist"
                >
                  <i className="p-icon-heart-solid" />
                </a>
                <a
                  href="#"
                  className="btn-product-icon btn-compare"
                  title="Compare"
                >
                  <i className="p-icon-compare-solid" />
                </a>
                <a
                  href="#"
                  className="btn-product-icon btn-quickview"
                  title="Quick View"
                >
                  <i className="p-icon-search-solid" />
                </a>
              </div>
            </figure>
            <div className="product-details">
              <div className="ratings-container">
                <div className="ratings-full">
                  <span className="ratings" style={{ width: "60%" }} />
                  <span className="tooltiptext tooltip-top" />
                </div>
                <a
                  href="product-simple.html#content-reviews"
                  className="rating-reviews"
                >
                  (12)
                </a>
              </div>
              <h5 className="product-name">
                <a href="product-simple.html">Prime Beef</a>
              </h5>
              <span className="product-price">
                <del className="old-price">$22.00</del>
                <ins className="new-price">$16.00</ins>
              </span>
            </div>
          </div>
          {/* End .product */}
          <div className="product shadow-media text-center">
            <figure className="product-media">
              <a href="product-simple.html">
                <img src={product} alt="product" width={295} height={369} />
              </a>
              <div className="product-label-group">
                <label className="product-label label-new">Top</label>
              </div>
              <div className="product-action-vertical">
                <a
                  href="#"
                  className="btn-product-icon btn-cart"
                  data-toggle="modal"
                  data-target="#addCartModal"
                  title="Add to Cart"
                >
                  <i className="p-icon-cart-solid" />
                </a>
                <a
                  href="#"
                  className="btn-product-icon btn-wishlist"
                  title="Add to Wishlist"
                >
                  <i className="p-icon-heart-solid" />
                </a>
                <a
                  href="#"
                  className="btn-product-icon btn-compare"
                  title="Compare"
                >
                  <i className="p-icon-compare-solid" />
                </a>
                <a
                  href="#"
                  className="btn-product-icon btn-quickview"
                  title="Quick View"
                >
                  <i className="p-icon-search-solid" />
                </a>
              </div>
            </figure>
            <div className="product-details">
              <div className="ratings-container">
                <div className="ratings-full">
                  <span className="ratings" style={{ width: "100%" }} />
                  <span className="tooltiptext tooltip-top" />
                </div>
                <a
                  href="product-simple.html#content-reviews"
                  className="rating-reviews"
                >
                  (12)
                </a>
              </div>
              <h5 className="product-name">
                <a href="product-simple.html">Organic Garlic</a>
              </h5>
              <span className="product-price">
                <span className="price">$42.00</span>
              </span>
            </div>
          </div>
          {/* End .product */}
          <div className="product shadow-media text-center">
            <figure className="product-media">
              <a href="product-simple.html">
                <img src={product} alt="product" width={295} height={369} />
              </a>
              <div className="product-action-vertical">
                <a
                  href="#"
                  className="btn-product-icon btn-cart"
                  data-toggle="modal"
                  data-target="#addCartModal"
                  title="Add to Cart"
                >
                  <i className="p-icon-cart-solid" />
                </a>
                <a
                  href="#"
                  className="btn-product-icon btn-wishlist"
                  title="Add to Wishlist"
                >
                  <i className="p-icon-heart-solid" />
                </a>
                <a
                  href="#"
                  className="btn-product-icon btn-compare"
                  title="Compare"
                >
                  <i className="p-icon-compare-solid" />
                </a>
                <a
                  href="#"
                  className="btn-product-icon btn-quickview"
                  title="Quick View"
                >
                  <i className="p-icon-search-solid" />
                </a>
              </div>
            </figure>
            <div className="product-details">
              <div className="ratings-container">
                <div className="ratings-full">
                  <span className="ratings" style={{ width: "80%" }} />
                  <span className="tooltiptext tooltip-top" />
                </div>
                <a href="product-simple.html" className="rating-reviews">
                  (6)
                </a>
              </div>
              <h5 className="product-name">
                <a href="product-simple.html">Fresh Cherry</a>
              </h5>
              <span className="product-price">
                <span className="price">$36.00</span>
              </span>
            </div>
          </div>
          {/* End .product */}
        </div>
        <div className="row mt-10 appear-animate">
          <div className="col-md-6">
            <div className="banner banner-fixed banner3 mb-md-0 mb-4">
              <figure>
                <img
                  src={banner2}
                  alt="banner"
                  width={610}
                  height={250}
                  style={{ backgroundColor: "#86786b" }}
                />
              </figure>
              <div className="banner-content y-50">
                <h4 className="banner-subtitle font-weight-normal text-white ls-1 mt-1">
                  JUST ARRIVED
                </h4>
                <h3 className="banner-title text-white lh-1 mb-3">
                  New DietCoke
                </h3>
                <a
                  href="shop.html"
                  className="btn btn-underline btn-link text-white"
                >
                  Shop Now
                  <i className="p-icon-arrow-long-right pl-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="banner banner-fixed banner3">
              <figure>
                <img
                  src={banner3}
                  alt="banner"
                  width={610}
                  height={250}
                  style={{ backgroundColor: "#ddd" }}
                />
              </figure>
              <div className="banner-content y-50">
                <h4 className="banner-subtitle font-weight-normal text-dim ls-1 mt-1">
                  BEST SELLING
                </h4>
                <h3 className="banner-title text-dark lh-1 mb-3">
                  Special Snack
                </h3>
                <a
                  href="shop.html"
                  className="btn btn-underline btn-link text-dark"
                >
                  Shop Now
                  <i className="p-icon-arrow-long-right pl-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Arrivals;
