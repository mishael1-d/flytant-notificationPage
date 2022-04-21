import React from "react";
import { Pagination } from "antd";

function Paginate({postPerPage, totalPost, paginate, currentPage}) {
  return (
    <div className="paginate">
      <Pagination defaultCurrent={currentPage} total={totalPost} pageSize={postPerPage} onChange={paginate} />
    </div>
  );
}

export default Paginate;
