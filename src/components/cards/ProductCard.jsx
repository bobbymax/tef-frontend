/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../services/utils/helpers";

const ProductCard = ({
  id,
  title,
  price,
  width,
  height,
  path,
  label,
  addToCart,
}) => {
  return (
    <div className="product-wrap">
      <div className="product shadow-media text-center">
        <figure className="product-media">
          <a href="product-simple.html">
            <img src={path} alt={label} width={width} height={height} />
            <img src={path} alt={label} width={width} height={height} />
          </a>
          <div
            className="product-action-vertical"
            style={{
              backgroundColor: "white",
              padding: "5px 3px",
              borderRadius: 25,
            }}
          >
            <Link
              to="#"
              className="btn-product-icon btn-cart"
              title="Add to Cart"
              onClick={() => addToCart(id)}
            >
              <i className="p-icon-cart-solid" />
            </Link>
            <a
              href="#"
              className="btn-product-icon btn-wishlist"
              title="Add to Wishlist"
            >
              <i className="p-icon-heart-solid" />
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
          {/* <div className="ratings-container">
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
          </div> */}
          <h5 className="product-name">
            <a href="product-simple.html">{title}</a>
          </h5>
          <span className="product-price">
            {/* <del className="old-price">$28.00</del> */}
            <ins className="new-price">{formatCurrency(price)}</ins>
          </span>
        </div>
      </div>
      {/* End .product */}
    </div>
  );
};

export default ProductCard;
