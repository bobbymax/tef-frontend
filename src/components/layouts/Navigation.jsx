/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="main-nav">
      <ul className="menu">
        <li className={`${location?.pathname === "/" && "active"}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`${location?.pathname === "/cart" && "active"}`}>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
