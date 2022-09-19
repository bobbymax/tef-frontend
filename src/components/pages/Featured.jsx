/* eslint-disable jsx-a11y/anchor-is-valid */
import product from "../../assets/images/products/232x290.jpg";
import product2 from "../../assets/images/products/295x369.jpg";
import banner from "../../assets/images/demos/demo1/banner/banner4.jpg";

const Featured = () => {
  return (
    <>
      <section className="feature-section appear-animate">
        <div className="container mt-10 pt-8 mb-10 pb-2">
          <h2 className="title title-underline2 justify-content-center mb-8">
            <span>Our Featured</span>
          </h2>
          <div
            className="owl-carousel owl-theme owl-nav-arrow owl-nav-outer owl-nav-image-center row cols-lg-5 cols-md-3 cols-2"
            data-owl-options="{
                                      'items': 5,
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
                                              'items': 5
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
                  <img src={product} alt="product" width={232} height={290} />
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
                  <a href="product-simple.html">Low-Fat Peanut Oil</a>
                </h5>
                <span className="product-price">
                  <span className="price">$48.00</span>
                </span>
              </div>
            </div>
            {/* End .product */}
            <div className="product shadow-media text-center">
              <figure className="product-media">
                <a href="product-simple.html">
                  <img src={product} alt="product" width={232} height={290} />
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
                  <a href="product-simple.html">Fresh Cherry</a>
                </h5>
                <span className="product-price mb-1">
                  <del className="old-price">$24.00</del>
                  <ins className="new-price">$16.00</ins>
                </span>
              </div>
            </div>
            {/* End .product */}
            <div className="product shadow-media text-center">
              <figure className="product-media">
                <a href="product-simple.html">
                  <img src={product} alt="product" width={232} height={290} />
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
                  <a href="product-simple.html">Dark Chocolate</a>
                </h5>
                <span className="product-price">
                  <del className="old-price">$28.00</del>
                  <ins className="new-price">$22.00</ins>
                </span>
              </div>
            </div>
            {/* End .product */}
            <div className="product shadow-media text-center">
              <figure className="product-media">
                <a href="product-simple.html">
                  <img src={product} alt="product" width={232} height={290} />
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
                  <a href="product-simple.html">Box Cake</a>
                </h5>
                <span className="product-price">
                  <span className="price">$38.00</span>
                </span>
              </div>
            </div>
            {/* End .product */}
            <div className="product shadow-media text-center">
              <figure className="product-media">
                <a href="product-simple.html">
                  <img src={product} alt="product" width={232} height={290} />
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
                    <span className="ratings" style={{ width: "90%" }} />
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
                  <a href="product-simple.html">Dry Jujube</a>
                </h5>
                <span className="product-price">
                  <del className="old-price">$22.00</del>
                  <ins className="new-price">$15.00</ins>
                </span>
              </div>
            </div>
            {/* End .product */}
            <div className="product shadow-media text-center">
              <figure className="product-media">
                <a href="product-simple.html">
                  <img src={product2} alt="product" width={295} height={369} />
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
          </div>
        </div>
        <div className="banner banner-fixed banner1 appear-animate">
          <figure>
            <img
              src={banner}
              width={1920}
              height={500}
              alt="banner"
              style={{ background: "#f6f1ec" }}
            />
          </figure>
          <div className="banner-content y-50 pb-1">
            <h3
              className="banner-subtitle title-underline2 font-weight-normal text-uppercase text-dim pb-1 appear-animate"
              data-animation-options="{
                                      'name': 'fadeInUpShorter',
                                      'delay': '.2s'
                                  }"
            >
              <span>100% Organic</span>
            </h3>
            <h2
              className="banner-title text-dark lh-1 mb-7 appear-animate"
              data-animation-options="{
                                      'name': 'fadeInUpShorter',
                                      'delay': '.4s'
                                  }"
            >
              Fresh Vegetables
              <br />
              for you
            </h2>
            <a
              href="shop.html"
              className="btn btn-dark appear-animate"
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
      </section>
    </>
  );
};

export default Featured;
