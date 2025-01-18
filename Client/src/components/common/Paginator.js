import React from "react";
import { Link } from "react-router-dom";

const Paginator = ({ productsCount, pageSize, current, onPageChange }) => {
  const pagesCount = Math.ceil(productsCount / pageSize);

  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(
      <li key={i} className={`page-item${i === current ? " active" : ""}`}>
        <Link
          className="page-link"
          to={`/products/${i}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Link>
      </li>,
    );
  }

  return (
    <div className="row space-top">
      <div className="col-md-12">
        <ul className="pagination">
          <li className={`page-item${current === 1 ? " disabled" : ""}`}>
            <Link
              className="page-link"
              to={`/products/${current - 1}`}
              onClick={() => handlePageChange(current - 1)}
            >
              «
            </Link>
          </li>
          {pages}
          <li
            className={`page-item${current === pagesCount ? " disabled" : ""}`}
          >
            <Link
              className="page-link"
              to={`/products/${current + 1}`}
              onClick={() => handlePageChange(current + 1)}
            >
              »
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Paginator;
