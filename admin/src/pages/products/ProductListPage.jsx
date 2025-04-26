import React from "react";
import { CiExport } from "react-icons/ci";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/button/PrimaryButton";
import HeaderPage from "../../components/header/HeaderPage";
import { ProductColumn } from "../../components/table/columns/ProductColumn";
import productData from "../../components/table/columns/productData";
import Table from "../../components/table/Table";
import TableLayout from "../../components/table/TableLayout";

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
        <Link to={"/admin/products/create"} className="w-[180px]">
          <PrimaryButton isLoading={false}>thêm sản phẩm mới</PrimaryButton>
        </Link>
        <div className="w-[160px]">
          <PrimaryButton
            isLoading={false}
            icon={<CiExport size={20} />}
            variant="secondary"
          >
            export excel
          </PrimaryButton>
        </div>
      </HeaderPage>
      <TableLayout>
        <Table data={productData} columns={columns} />
      </TableLayout>
    </div>
  );
};

export default ProductListPage;
