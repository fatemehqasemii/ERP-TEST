import { Table as AntTable } from "antd";
import { useState } from "react";

const Table = ({
  initialPageSize,
  onPaginationChange,
  columns,
  dataSource,
}) => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: initialPageSize || 10,
  });

  const handleTableChange = (pag) => {
    setPagination({
      current: pag.current,
      pageSize: pag.pageSize,
    });

    onPaginationChange && onPaginationChange(pag.current, pag.pageSize);
  };
  console.log(pagination, "pagination");

  return (
    <AntTable
      dataSource={dataSource.map((item) => ({
        ...item,
        key: item.id,
      }))}
      columns={columns}
      bordered
      scroll={{ x: "max-content" }}
      pagination={{
        showSizeChanger: false,
        current: pagination.current,
        pageSize: pagination.pageSize,
        onChange: (current, pageSize) =>
          handleTableChange({ current, pageSize }),
        position: ["bottomLeft"],
        itemRender: (_, type, originalElement) => {
          if (type === "prev") {
            return <a className="pagination-prev">{"<  Previous"}</a>;
          }
          if (type === "next") {
            return <a className="pagination-next">{"Next >"}</a>;
          }
          return originalElement;
        },
      }}
    />
  );
};

export default Table;
