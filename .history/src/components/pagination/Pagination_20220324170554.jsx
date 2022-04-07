import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";
import "./pagination.css"
const Pagination = ({ postsPerPage, totalPosts, paginate, page, slider, start }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={{width:'100%'}}>
      <ul className="pagination">
      <li className={`page-item`}>
            <p onClick={() => slider(-1)} className="page-link">
            <LeftOutlined className="ic" />
            </p>
          </li>
        {pageNumbers.splice(start, 6).map((number) => (
          <li key={number} className={`page-item ${number===page?"active1":''}`}>
            <p onClick={() => paginate(number)} className="page-link">
              {number}
            </p>
          </li>
        ))}
         <li className={`page-item`}>
            <p onClick={() => slider(1)} className="page-link">
            <RightOutlined className="ic" />
            </p>
          </li>
      </ul>
      <br/>
      <br/>
      <br/>
    </div>
  );
};
export default Pagination;
