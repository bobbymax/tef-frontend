/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const StickyFooter = () => {
  return (
    <div className="sticky-footer sticky-content fix-bottom">
      <a href="demo1.html" className="sticky-link">
        <i className="p-icon-home" />
        <span>Home</span>
      </a>
      <a href="shop.html" className="sticky-link">
        <i className="p-icon-category" />
        <span>Categories</span>
      </a>
      <a href="wishlist.html" className="sticky-link">
        <i className="p-icon-heart-solid" />
        <span>Wishlist</span>
      </a>
      <a href="account.html" className="sticky-link">
        <i className="p-icon-user-solid" />
        <span>Account</span>
      </a>
      <div className="header-search hs-toggle dir-up">
        <a href="#" className="search-toggle sticky-link">
          <i className="p-icon-search-solid" />
          <span>Search</span>
        </a>
        <form action="#" className="form-simple">
          <input
            type="text"
            name="search"
            autoComplete="off"
            placeholder="Search your keyword..."
            required
          />
          <button className="btn btn-search" type="submit">
            <i className="p-icon-search-solid" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default StickyFooter;
