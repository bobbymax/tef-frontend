/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Brand from "./Brand";
import Navigation from "./layouts/Navigation";
import TopBar from "./layouts/TopBar";
import product from "../assets/images/cart/product.jpg";

const Header = () => {
  return (
    <header className="header">
      <TopBar />

      {/* End HeaderTop */}
      <div className="header-middle has-center sticky-header fix-top sticky-content has-border">
        <div className="container">
          <div className="header-left">
            {/* Brand Here */}
            <Brand />
          </div>
          <div className="header-center">
            {/* Navigation */}
            <Navigation />
          </div>
          <div className="header-right">
            <div className="header-search hs-toggle">
              <a className="search-toggle" href="#" title="Search">
                <i className="p-icon-search-solid" />
              </a>
              <form action="#" className="form-simple">
                <input
                  type="search"
                  autoComplete="off"
                  placeholder="Search in..."
                  required
                />
                <button className="btn btn-search" type="submit">
                  <i className="p-icon-search-solid" />
                </button>
              </form>
            </div>

            <div className="dropdown login-dropdown off-canvas">
              <a
                className="login-toggle"
                href="ajax/login.html"
                data-toggle="login-modal"
              >
                <span className="sr-only">login</span>
                <i className="p-icon-user-solid" />
              </a>
              {/* End Login Toggle */}
              <div className="canvas-overlay" />
              <a href="#" className="btn-close" />
              <div className="dropdown-box scrollable">
                <div className="login-popup">
                  <div className="form-box">
                    <div className="tab tab-nav-underline tab-nav-boxed">
                      <ul className="nav nav-tabs nav-fill mb-4">
                        <li className="nav-item">
                          <a
                            className="nav-link active lh-1 ls-normal"
                            href="#signin"
                          >
                            Login
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link lh-1 ls-normal"
                            href="#register"
                          >
                            Register
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane active" id="signin">
                          <form action="#">
                            <div className="form-group">
                              <input
                                type="text"
                                id="singin-email"
                                name="singin-email"
                                placeholder="Username or Email Address"
                                required
                              />
                              <input
                                type="password"
                                id="singin-password"
                                name="singin-password"
                                placeholder="Password"
                                required
                              />
                            </div>
                            <div className="form-footer">
                              <div className="form-checkbox">
                                <input
                                  type="checkbox"
                                  id="signin-remember"
                                  name="signin-remember"
                                />
                                <label htmlFor="signin-remember">
                                  Remember me
                                </label>
                              </div>
                              <a href="#" className="lost-link">
                                Lost your password?
                              </a>
                            </div>
                            <button
                              className="btn btn-dark btn-block"
                              type="submit"
                            >
                              Login
                            </button>
                          </form>
                          <div className="form-choice text-center">
                            <label>or Login With</label>
                            <div className="social-links social-link-active ">
                              <a
                                href="#"
                                title="Facebook"
                                className="social-link social-facebook fab fa-facebook-f"
                              />
                              <a
                                href="#"
                                title="Twitter"
                                className="social-link social-twitter fab fa-twitter"
                              />
                              <a
                                href="#"
                                title="Linkedin"
                                className="social-link social-linkedin fab fa-linkedin-in"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="tab-pane" id="register">
                          <form action="#">
                            <div className="form-group">
                              <input
                                type="text"
                                id="register-user"
                                name="register-user"
                                placeholder="Username"
                                required
                              />
                              <input
                                type="email"
                                id="register-email"
                                name="register-email"
                                placeholder="Your Email Address"
                                required
                              />
                              <input
                                type="password"
                                id="register-password"
                                name="register-password"
                                placeholder="Password"
                                required
                              />
                            </div>
                            <div className="form-footer mb-5">
                              <div className="form-checkbox">
                                <input
                                  type="checkbox"
                                  id="register-agree"
                                  name="register-agree"
                                  required
                                />
                                <label htmlFor="register-agree">
                                  I agree to the privacy policy
                                </label>
                              </div>
                            </div>
                            <button
                              className="btn btn-dark btn-block"
                              type="submit"
                            >
                              Register
                            </button>
                          </form>
                          <div className="form-choice text-center">
                            <label className="ls-m">or Register With</label>
                            <div className="social-links social-link-active ">
                              <a
                                href="#"
                                title="Facebook"
                                className="social-link social-facebook fab fa-facebook-f"
                              />
                              <a
                                href="#"
                                title="Twitter"
                                className="social-link social-twitter fab fa-twitter"
                              />
                              <a
                                href="#"
                                title="Linkedin"
                                className="social-link social-linkedin fab fa-linkedin-in"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    title="Close (Esc)"
                    type="button"
                    className="mfp-close"
                  >
                    <span>×</span>
                  </button>
                </div>
              </div>
              {/* End Dropdown Box */}
            </div>
            <a
              href="wishlist.html"
              className="wishlist wishlist-toggle"
              title="Wishlist"
            >
              <i className="p-icon-heart-solid" />
            </a>
            {/* Cart */}
            <div className="dropdown cart-dropdown off-canvas mr-0 mr-lg-2">
              <a href="#" className="cart-toggle link">
                <i className="p-icon-cart-solid">
                  <span className="cart-count">2</span>
                </i>
              </a>
              <div className="canvas-overlay" />
              <div className="dropdown-box">
                <div className="canvas-header">
                  <h4 className="canvas-title">Shopping Cart</h4>
                  <a href="#" className="btn btn-dark btn-link btn-close">
                    close
                    <i className="p-icon-arrow-long-right" />
                    <span className="sr-only">Cart</span>
                  </a>
                </div>
                <div className="products scrollable">
                  <div className="product product-mini">
                    <figure className="product-media">
                      <a href="product-simple.html">
                        <img
                          src={product}
                          alt="product"
                          width={84}
                          height={105}
                        />
                      </a>
                      <a href="#" title="Remove Product" className="btn-remove">
                        <i className="p-icon-times" />
                        <span className="sr-only">Close</span>
                      </a>
                    </figure>
                    <div className="product-detail">
                      <a href="product.html" className="product-name">
                        Peanuts
                      </a>
                      <div className="price-box">
                        <span className="product-quantity">7</span>
                        <span className="product-price">$12.00</span>
                      </div>
                    </div>
                  </div>
                  {/* End of Cart Product */}
                  <div className="product product-mini">
                    <figure className="product-media">
                      <a href="product-simple.html">
                        <img
                          src={product}
                          alt="product"
                          width={84}
                          height={105}
                        />
                      </a>
                      <a href="#" title="Remove Product" className="btn-remove">
                        <i className="p-icon-times" />
                        <span className="sr-only">Close</span>
                      </a>
                    </figure>
                    <div className="product-detail">
                      <a href="product.html" className="product-name">
                        Prime Beef
                      </a>
                      <div className="price-box">
                        <span className="product-quantity">4</span>
                        <span className="product-price">$16.00</span>
                      </div>
                    </div>
                  </div>
                  {/* End of Cart Product */}
                </div>
                {/* End of Products  */}
                <div className="cart-total">
                  <label>Subtotal:</label>
                  <span className="price">$148.00</span>
                </div>
                {/* End of Cart Total */}
                <div className="cart-action">
                  <a href="cart.html" className="btn btn-outline btn-dim mb-2">
                    View Cart
                  </a>
                  <a href="checkout.html" className="btn btn-dim">
                    <span>Go To Checkout</span>
                  </a>
                </div>
                {/* End of Cart Action */}
              </div>
              {/* End Dropdown Box */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
