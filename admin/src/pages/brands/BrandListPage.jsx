import React, { useState } from "react";
import HeaderPage from "../../components/header/HeaderPage";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/button/PrimaryButton";
import TableLayout from "../../components/table/TableLayout";
import Table from "../../components/table/Table";
import { CiExport } from "react-icons/ci";
import { useQuery } from "@tanstack/react-query";
import { getAllBrandsApi } from "../../api/brandsApi";
import { toast } from "react-toastify";
import BrandsColumn from "../../components/table/columns/BrandsColumn";
import FormModalLayout from "../../Layout/FormModalLayout";
import BrandFormModal from "./BrandFormModal";

const BrandListPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [editBrand, setEditBrand] = useState(null);

  const handleOpenModal = (brand = null) => {
    setEditBrand(brand);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setEditBrand(null);
    setShowModal(false);
  };

  const {
    data: brands = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["brands"],
    queryFn: getAllBrandsApi,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    onError: (err) => {
      const message =
        err?.response?.data?.message || "Lỗi tải danh sách thương hiệu";
      toast.error(message);
    },
  });

  const handleSubmit = async (data) => {
    try {
      if (editBrand) {
        await updateBrandApi(editBrand._id, data);
        toast.success("Cập nhật thương hiệu thành công");
      } else {
        await createBrandApi(data);
        toast.success("Thêm thương hiệu thành công");
      }
      refetch();
      handleCloseModal();
    } catch (error) {
      const message = error?.response?.data?.message || "Lỗi xử lý thương hiệu";
      toast.error(message);
    }
  };

  const handleEdit = (brand) => {
    handleOpenModal(brand);
  };

  const handleDelete = (brand) => {
    toast.warn(
      `Chức năng xoá thương hiệu "${brand?.name}" chưa được phát triển`,
    );
  };

  const columns = BrandsColumn({
    onEdit: handleEdit,
    onDelete: handleDelete,
  });

  return (
    <div>
      <HeaderPage title="Danh sách thương hiệu">
        <PrimaryButton onClick={() => handleOpenModal()} className="w-[200px]">
          Thêm thương hiệu mới
        </PrimaryButton>
        <PrimaryButton
          icon={<CiExport size={20} />}
          variant="secondary"
          onClick={() => toast.info("Chức năng đang phát triển")}
        >
          Export Excel
        </PrimaryButton>
      </HeaderPage>

      <TableLayout>
        {isLoading ? (
          <div className="p-4 text-center">Đang tải danh sách...</div>
        ) : isError ? (
          <div className="p-4 text-center text-red-500">
            Đã xảy ra lỗi khi tải dữ liệu.
          </div>
        ) : (
          <Table data={brands?.data || []} columns={columns} />
        )}
      </TableLayout>

      {showModal && (
        <FormModalLayout onClose={handleCloseModal}>
          <BrandFormModal
            brand={editBrand}
            onSubmit={handleSubmit}
            onClose={handleCloseModal}
          />
        </FormModalLayout>
      )}
    </div>
  );
};

export default BrandListPage;
