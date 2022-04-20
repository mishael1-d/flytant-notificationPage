import React from "react";
import { Pagination } from "antd";

function Paginate() {
  return (
    <div className="paginate">
      <Pagination defaultCurrent={1} total={6} />
    </div>
  );
}

export default Paginate;
