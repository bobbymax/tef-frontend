/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import AccountMenu from "../components/AccountMenu";
import BreadCrumb from "../components/BreadCrumb";
import PageHeader from "../components/PageHeader";

const Account = () => {
  return (
    <>
      <PageHeader title="My Account" />
      <BreadCrumb />
      <div className="page-content mt-4 mb-10 pb-6">
        <div className="container">
          <div className="tab tab-vertical gutter-lg">
            {/* Account SideMenu */}
            <AccountMenu />
            {/* End Account SideMenu */}
            <div className="tab-content col-lg-9 col-md-8">
              <div className="tab-pane active" id="dashboard">
                <p className="mb-0">
                  Hello{" "}
                  <span className="font-weight-bold text-secondary">
                    John Doe
                  </span>{" "}
                  (not{" "}
                  <span className="font-weight-bold text-secondary">
                    John Doe
                  </span>
                  ?{" "}
                  <a href="login.html" className="text-primary">
                    Log out
                  </a>
                  )
                </p>
                <p>
                  From your account dashboard you can view your{" "}
                  <a href="#orders" className="link-to-tab text-primary">
                    recent orders
                  </a>
                  , manage your{" "}
                  <a href="#address" className="link-to-tab text-primary">
                    {" "}
                    shipping and billing addresses
                  </a>
                  , and{" "}
                  <a href="#account" className="link-to-tab text-primary">
                    edit your password and account details
                  </a>
                  .
                </p>
                <div className="row cols-lg-3 cols-xs-2 cols-1 nav">
                  <div className="ib-wrapper mb-4">
                    <div className="icon-box text-center ib-border">
                      <a href="#orders">
                        <span className="icon-box-icon">
                          <i className="p-icon-orders" />
                        </span>
                        <div className="icon-box-content">
                          <p>ORDERS</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="ib-wrapper mb-4">
                    <div className="icon-box text-center ib-border">
                      <a href="#downloads">
                        <span className="icon-box-icon">
                          <i className="p-icon-download" />
                        </span>
                        <div className="icon-box-content">
                          <p>DOWNLOADS</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="ib-wrapper mb-4">
                    <div className="icon-box text-center ib-border">
                      <a href="#address">
                        <span className="icon-box-icon">
                          <i className="p-icon-map" />
                        </span>
                        <div className="icon-box-content">
                          <p>ADDRESSES</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="ib-wrapper mb-4">
                    <div className="icon-box text-center ib-border">
                      <a href="#account">
                        <span className="icon-box-icon">
                          <i className="p-icon-user-solid" />
                        </span>
                        <div className="icon-box-content">
                          <p>ACCOUNT DETAILS</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="ib-wrapper mb-4">
                    <div className="icon-box text-center ib-border">
                      <a href="wishlist.html" className="no-tab-item">
                        <span className="icon-box-icon">
                          <i className="p-icon-heart-solid" />
                        </span>
                        <div className="icon-box-content">
                          <p>WISHLIST</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="ib-wrapper mb-4">
                    <div className="icon-box text-center ib-border">
                      <a href="login.html" className="no-tab-item">
                        <span className="icon-box-icon">
                          <i className="p-icon-logout" />
                        </span>
                        <div className="icon-box-content">
                          <p>LOGOUT</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="orders">
                <table className="order-table">
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Total</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="order-number">
                        <a href="#">#3596</a>
                      </td>
                      <td className="order-date">
                        <span>September 23, 2021</span>
                      </td>
                      <td className="order-status">
                        <span>On hold</span>
                      </td>
                      <td className="order-total">
                        <span>$147.00 for 4 items</span>
                      </td>
                      <td className="order-action">
                        <a
                          href="#orders-view"
                          className="btn btn-secondary btn-outline btn-block btn-rounded btn-sm"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="order-number">
                        <a href="#">#3593</a>
                      </td>
                      <td className="order-date">
                        <span>February 21, 2021</span>
                      </td>
                      <td className="order-status">
                        <span>On hold</span>
                      </td>
                      <td className="order-total">
                        <span>$290.00 for 2 items</span>
                      </td>
                      <td className="order-action">
                        <a
                          href="#orders-view"
                          className="btn btn-secondary btn-outline btn-block btn-rounded btn-sm"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="order-number">
                        <a href="#">#2547</a>
                      </td>
                      <td className="order-date">
                        <span>January 4, 2021</span>
                      </td>
                      <td className="order-status">
                        <span>On hold</span>
                      </td>
                      <td className="order-total">
                        <span>$480.00 for 8 items</span>
                      </td>
                      <td className="order-action">
                        <a
                          href="#orders-view"
                          className="btn btn-secondary btn-outline btn-block btn-rounded btn-sm"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="order-number">
                        <a href="#">#2549</a>
                      </td>
                      <td className="order-date">
                        <span>January 19, 2021</span>
                      </td>
                      <td className="order-status">
                        <span>On hold</span>
                      </td>
                      <td className="order-total">
                        <span>$680.00 for 5 items</span>
                      </td>
                      <td className="order-action">
                        <a
                          href="#orders-view"
                          className="btn btn-secondary btn-outline btn-block btn-rounded btn-sm"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="order-number">
                        <a href="#">#4523</a>
                      </td>
                      <td className="order-date">
                        <span>Jun 6, 2021</span>
                      </td>
                      <td className="order-status">
                        <span>On hold</span>
                      </td>
                      <td className="order-total">
                        <span>$564.00 for 3 items</span>
                      </td>
                      <td className="order-action">
                        <a
                          href="#orders-view"
                          className="btn btn-secondary btn-outline btn-block btn-rounded btn-sm"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="order-number">
                        <a href="#">#4526</a>
                      </td>
                      <td className="order-date">
                        <span>Jun 19, 2021</span>
                      </td>
                      <td className="order-status">
                        <span>On hold</span>
                      </td>
                      <td className="order-total">
                        <span>$123.00 for 8 items</span>
                      </td>
                      <td className="order-action">
                        <a
                          href="#orders-view"
                          className="btn btn-secondary btn-outline btn-block btn-rounded btn-sm"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tab-pane order" id="orders-view">
                <h2 className="title text-left pb-1">Order Details</h2>
                <div className="order-details">
                  <table className="order-details-table">
                    <thead>
                      <tr className="summary-subtotal">
                        <td>
                          <h3 className="summary-subtitle">Your Order</h3>
                        </td>
                        <td />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product-subtitle">Product</td>
                        <td />
                      </tr>
                      <tr>
                        <td className="product-name">
                          Juice{" "}
                          <span>
                            <i className="p-icon-times" />1
                          </span>
                        </td>
                        <td className="product-price">$129.99</td>
                      </tr>
                      <tr>
                        <td className="product-name">
                          Greenhouse Cherry{" "}
                          <span>
                            <i className="p-icon-times" />2
                          </span>
                        </td>
                        <td className="product-price">$98.00</td>
                      </tr>
                      <tr className="summary-subtotal">
                        <td>
                          <h4 className="summary-subtitle">Subtotal:</h4>
                        </td>
                        <td className="summary-value font-weight-normal">
                          $325.99
                        </td>
                      </tr>
                      <tr className="summary-subtotal">
                        <td>
                          <h4 className="summary-subtitle">Payment method:</h4>
                        </td>
                        <td className="summary-value">Cash on delivery</td>
                      </tr>
                      <tr className="summary-subtotal">
                        <td>
                          <h4 className="summary-subtitle">Total:</h4>
                        </td>
                        <td>
                          <p className="summary-total-price">$325.99</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="row mt-9">
                  <div className="col-sm-6">
                    <div className="card card-address">
                      <div className="card-body">
                        <h5 className="card-title lh-2 mb-2">
                          Billing Address
                        </h5>
                        <p>
                          John Doe
                          <br />
                          Panda Company
                          <br />
                          Steven street
                          <br />
                          El Carjon, CA 92020
                        </p>
                        <p>nicework125@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card card-address">
                      <div className="card-body">
                        <h5 className="card-title lh-2 mb-2">
                          Shipping Address
                        </h5>
                        <p>You have not set up this type of address yet.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="mt-0 mb-6" />
                <a href="#orders" className="btn btn-dark btn-sm back-order">
                  <i className="p-icon-arrow-long-left ml-0 mr-1" />
                  Back to list
                </a>
              </div>
              <div className="tab-pane" id="downloads">
                <p className="mb-4 text-body">No downloads available yet.</p>
                <a href="shop.html" className="btn btn-dark">
                  Go to Shop
                  <i className="p-icon-arrow-long-right" />
                </a>
              </div>
              <div className="tab-pane" id="address">
                <p>
                  The following addresses will be used on the checkout page by
                  default.
                </p>
                <div className="row">
                  <div className="col-sm-6 mb-4">
                    <div className="card card-address">
                      <div className="card-body">
                        <h5 className="card-title lh-2 mb-2">
                          Billing Address
                        </h5>
                        <p>
                          John Doe
                          <br />
                          Panda Company
                          <br />
                          Steven street
                          <br />
                          El Carjon, CA 92020
                        </p>
                        <a
                          href="#"
                          className="btn btn-link btn-primary btn-underline"
                        >
                          Edit your billing address
                          <i className="p-icon-arrow-long-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-4">
                    <div className="card card-address">
                      <div className="card-body">
                        <h5 className="card-title lh-2 mb-2">
                          Shipping Address
                        </h5>
                        <p>You have not set up this type of address yet.</p>
                        <a
                          href="#"
                          className="btn btn-link btn-primary btn-underline"
                        >
                          Add <i className="p-icon-arrow-long-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="account">
                <form action="#">
                  <div className="row">
                    <div className="col-sm-6 mb-4">
                      <label>First Name *</label>
                      <input
                        type="text"
                        name="first_name"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="col-sm-6 mb-4">
                      <label>Last Name *</label>
                      <input
                        type="text"
                        name="last_name"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  <label>Display Name *</label>
                  <input
                    type="text"
                    name="display_name"
                    required
                    placeholder="John Doe"
                    className="mb-4"
                  />
                  <span>
                    <small className="d-block mb-4">
                      This will be how your name will be displayed in the
                      account section and in reviews
                    </small>
                  </span>
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="nicework125@gmail.com"
                  />
                  <fieldset>
                    <legend>Password Change</legend>
                    <label>
                      Current password (leave blank to leave unchanged)
                    </label>
                    <input type="password" name="current_password" />
                    <label>New password (leave blank to leave unchanged)</label>
                    <input type="password" name="new_password" />
                    <label>Confirm new password</label>
                    <input type="password" name="confirm_password" />
                  </fieldset>
                  <button type="submit" className="btn btn-primary">
                    SAVE CHANGES
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
