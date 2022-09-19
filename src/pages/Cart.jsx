/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../services/hooks/useCart";
import {
  formatCurrency,
  removeProductFromCart,
  updateCartState,
} from "../services/utils/helpers";

const Cart = () => {
  const [cart, setCart] = useCart();
  const [total, setTotal] = useState(0);

  const updateCart = (food, action = "") => {
    const newItems = updateCartState(food, action);
    setCart(newItems);
  };

  const handleRemoveFromCart = (item) => {
    const newItems = removeProductFromCart(item);
    setCart(newItems);
  };

  useEffect(() => {
    if (cart?.length > 0) {
      const totalAmount = cart
        ?.map((item) => parseFloat(item?.price))
        .reduce((sum, prev) => sum + prev, 0);
      setTotal(totalAmount);
    } else {
      setTotal(0);
    }
  }, [cart]);

  return (
    <div className="page-content pt-8 pb-10 mb-4">
      <div className="step-by">
        <h3 className="title title-step active">
          <a href="cart.html">1.Shopping Cart</a>
        </h3>
        <h3 className="title title-step">
          <a href="checkout.html">2.Checkout</a>
        </h3>
        <h3 className="title title-step">
          <a href="order.html">3.Order Complete</a>
        </h3>
      </div>
      <div className="container mt-7 mb-2">
        <div className="row">
          <div className="col-lg-8 col-md-12 pr-lg-6">
            <table className="shop-table cart-table">
              <thead>
                <tr>
                  <th>
                    <span>Product</span>
                  </th>
                  <th />
                  <th>
                    <span>Price</span>
                  </th>
                  <th>
                    <span>quantity</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart?.length > 0 &&
                  cart?.map((item, i) => (
                    <tr key={i}>
                      <td className="product-thumbnail">
                        <figure>
                          <a href="product-simple.html">
                            <img
                              src={item?.product_path}
                              width={90}
                              height={112}
                              alt="product"
                            />
                          </a>
                        </figure>
                      </td>
                      <td className="product-name">
                        <div className="product-name-section">
                          <Link to="product-simple.html">
                            {item?.product_title}
                          </Link>
                        </div>
                      </td>
                      <td className="product-subtotal">
                        <span className="amount">
                          {formatCurrency(item?.price)}
                        </span>
                      </td>
                      <td className="product-quantity">
                        <div className="input-group">
                          <button
                            className="quantity-minus p-icon-minus-solid"
                            disabled={item?.quantity == 1}
                            onClick={() => updateCart(item, "subtract")}
                          />
                          <p className="quantity form-control">
                            {item?.quantity}
                          </p>
                          <button
                            className="quantity-plus p-icon-plus-solid"
                            onClick={() => updateCart(item, "add")}
                          />
                        </div>
                      </td>
                      <td className="product-remove">
                        <button
                          type="button"
                          className="btn-remove"
                          onClick={() => handleRemoveFromCart(item)}
                        >
                          <i className="p-icon-times" />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="cart-actions mb-6 pt-6">
              <Link to="/" className="btn btn-dim btn-icon-left mr-4 mb-4">
                <i className="p-icon-arrow-long-left" />
                Continue Shopping
              </Link>
            </div>
            <div className="cart-coupon-box pt-5 pb-8">
              <h4 className="title coupon-title text-capitalize mb-4">
                Coupon Discount
              </h4>
              <form action="#">
                <input
                  type="text"
                  name="coupon_code"
                  className="input-text mb-6"
                  id="coupon_code"
                  defaultValue
                  placeholder="Enter coupon code here..."
                  required
                />
                <button type="submit" className="btn btn-dark btn-outline">
                  Apply Coupon
                </button>
              </form>
            </div>
          </div>
          <aside className="col-lg-4 sticky-sidebar-wrapper">
            <div
              className="sticky-sidebar"
              data-sticky-options="{'bottom': 20}"
            >
              <div className="summary mb-4">
                <h3 className="summary-title">Cart Totals</h3>
                <table className="shipping mb-2">
                  <tbody>
                    <tr className="summary-subtotal">
                      <td>
                        <h4 className="summary-subtitle">Subtotal</h4>
                      </td>
                      <td>
                        <p className="summary-subtotal-price">
                          {formatCurrency(total)}
                        </p>
                      </td>
                    </tr>
                    <tr className="sumnary-shipping shipping-row-last">
                      <td colSpan={2}>
                        <h4 className="summary-subtitle pb-3">
                          Calculate Shipping
                        </h4>
                        <ul>
                          <li>
                            <input
                              type="radio"
                              id="flat_rate"
                              name="shipping"
                              className="custom-control-input"
                              defaultChecked
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="flat_rate"
                            >
                              Flat rate
                            </label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              id="free-shipping"
                              name="shipping"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="free-shipping"
                            >
                              Free shipping
                            </label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              id="local_pickup"
                              name="shipping"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="local_pickup"
                            >
                              Local pickup
                            </label>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="shipping-address">
                  <label className="mb-4">Delivery within Abuja</label>
                  <div className="select-box">
                    <select name="country" className="form-control">
                      <option value="us" selected>
                        United States (US)
                      </option>
                      <option value="uk"> United Kingdom</option>
                      <option value="fr">France</option>
                      <option value="aus">Austria</option>
                    </select>
                  </div>
                  <div className="select-box">
                    <select name="country" className="form-control">
                      <option value="us" selected>
                        California
                      </option>
                      <option value="uk">Alaska</option>
                      <option value="fr">Delaware</option>
                      <option value="aus">Hawaii</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="code"
                    placeholder="Town / City"
                  />
                  <input
                    type="text"
                    className="form-control"
                    name="code"
                    placeholder="Postcode / ZIP"
                  />
                  <a href="#" className="btn btn-dark btn-outline">
                    Update total
                  </a>
                </div>
                <table className="total">
                  <tbody>
                    <tr className="summary-subtotal">
                      <td>
                        <h4 className="summary-subtitle">Total</h4>
                      </td>
                      <td>
                        <p className="summary-total-price ls-s">$227.99</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <a
                  href="checkout.html"
                  className="btn btn-dim btn-checkout btn-block"
                >
                  Proceed to checkout
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Cart;
