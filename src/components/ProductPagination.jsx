/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const ProductPagination = ({
  rows,
  total,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (total > 0 && itemsPerPage > 0) {
      setTotalPages(Math.ceil(total / itemsPerPage));
    }
  }, [total, itemsPerPage]);

  useEffect(() => {
    if (rows?.length == 0) {
      setTotalPages(0);
    }
  }, [rows]);

  const paginationItems = useMemo(() => {
    const pages = [];
    const totalSub = totalPages > 15 ? Math.ceil(totalPages / 5) : totalPages;
    for (let i = 1; i <= totalSub; i++) {
      pages.push(
        <li
          key={i}
          className={`page-item ${i == currentPage ? "active" : ""}`}
          aria-current="page"
        >
          <Link className="page-link" to="#" onClick={() => onPageChange(i)}>
            {i}
          </Link>
        </li>
      );
    }

    return pages;
  }, [totalPages, currentPage]);

  return (
    <nav className="toolbox toolbox-pagination pt-2 pb-6">
      <p className="toolbox-item show-info">
        Showing <span>{`1-${itemsPerPage} of ${total}`}</span> Products
      </p>
      <ul className="pagination">
        <li className="page-item disabled">
          <Link
            className="page-link page-link-prev"
            to="#"
            aria-label="Previous"
            tabIndex={-1}
            aria-disabled="true"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage == 1}
          >
            <i className="p-icon-angle-left" />
          </Link>
        </li>
        {paginationItems}
        {/* <li className="page-item page-item-dots" />
        <li className="page-item">
          <a className="page-link" href="#">
            5
          </a>
        </li> */}
        <li className="page-item">
          <Link
            className="page-link page-link-next"
            to="#"
            aria-label="Next"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage == totalPages}
          >
            <i className="p-icon-angle-right" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default ProductPagination;
