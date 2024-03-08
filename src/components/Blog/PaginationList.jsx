import React from "react";
import Pagination from "react-bootstrap/Pagination";

export const PaginationList = ({ blogsPerPage, totalBlogs, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      {pageNumbers.map((number) => (
        <li className="page-item" key={number}>
          <a href="!#" className="page-link" onClick={() => paginate(number)}>
            {number}
          </a>
        </li>
      ))}
    </Pagination>
  );
};
