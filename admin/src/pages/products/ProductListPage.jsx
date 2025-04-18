import React, { useState } from "react";
import HeaderPage from "../../components/header/HeaderPage";
import TableLayout from "../../components/table/TableLayout";
import { ProductColumn } from "../../components/table/columns/ProductColumn";
import Table from "../../components/table/Table";
import MainButton from "../../components/commons/MainButton";
import productData from "../../components/table/columns/productData";

const ProductListPage = () => {
  const handleView = (product) => {
    console.log("View", product);
  };
  const handleEdit = (product) => {
    console.log("Edit", product);
  };
  const handleDelete = (product) => {
    console.log("Delete", product);
  };

  const columns = ProductColumn({
    onView: handleView,
    onEdit: handleEdit,
    onDelete: handleDelete,
  });

  return (
    <div>
      <HeaderPage title="Danh sách sản phẩm">
        <MainButton>thêm sản phẩm mới</MainButton>
      </HeaderPage>
      <TableLayout>
        <Table data={productData} columns={columns} />
      </TableLayout>
    </div>
  );
};

export default ProductListPage;
