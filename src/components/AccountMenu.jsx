import React from "react";

const AccountMenu = () => {
  return (
    <ul className="nav nav-tabs mb-8 col-lg-3 col-md-4">
      <li className="nav-item">
        <a className="nav-link active" href="#dashboard">
          Dashboard
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#orders">
          Orders
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#downloads">
          Downloads
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#address">
          Addresses
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#account">
          Account details
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link no-tab-item" href="wishlist.html">
          Wishlist
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link no-tab-item" href="login.html">
          Logout
        </a>
      </li>
    </ul>
  );
};

export default AccountMenu;
