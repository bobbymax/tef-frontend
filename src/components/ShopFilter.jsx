/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";

const ShopFilter = ({ onItemsPerPageChange }) => {
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [sortItems, setSortItems] = useState("default");

  const sorted = [
    { key: "default", label: "Default Sorting" },
    { key: "popularity", label: "Sort By Popularity" },
    { key: "rating", label: "Sort By Average Rating" },
    { key: "date", label: "Sort By The Latest" },
    { key: "price-low", label: "Sort By Price: Low To High" },
    { key: "price-high", label: "Sort By Price: High to Low" },
  ];

  useEffect(() => {
    onItemsPerPageChange(itemsPerPage);
  }, [itemsPerPage]);

  return (
    <nav className="toolbox sticky-toolbox sticky-content fix-top">
      <div className="toolbox-left">
        <a
          href="#"
          className="toolbox-item left-sidebar-toggle btn btn-outline btn-primary btn-icon-right d-lg-none"
        >
          <span>Filter</span>
          <i className="p-icon-category-1 ml-md-1" />
        </a>
        <div className="toolbox-item toolbox-sort select-menu">
          <label>Sort By :</label>
          <select
            name="orderby"
            value={sortItems}
            onChange={(e) => setSortItems(e.target.value)}
          >
            {sorted.map((sort, i) => (
              <option key={i} value={sort.key}>
                {sort.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="toolbox-right">
        <div className="toolbox-item toolbox-show select-box">
          <label>Show :</label>
          <select
            name="count"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(e.target.value)}
          >
            {[12, 24, 36].map((dis, i) => (
              <option key={i} value={dis}>
                {dis}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
};

export default ShopFilter;
