import React, { useState } from "react";
import { CiExport } from "react-icons/ci";
import { toast } from "react-toastify";
import PrimaryButton from "../../components/button/PrimaryButton";
import HeaderPage from "../../components/header/HeaderPage";
import BrandsColumn from "../../components/table/columns/BrandsColumn";
import Table from "../../components/table/Table";
import TableLayout from "../../components/table/TableLayout";
import { useBrands } from "../../hooks/useBrands";
import FormModalLayout from "../../Layout/FormModalLayout";
import CreateBrandForm from "./CreateBrandForm";
import EditBrandForm from "./EditBrandForm";
import swal from "sweetalert";
import LoadingState from "../../components/commons/LoadingState";
import ErrorState from "../../components/commons/ErrorState";

const BrandListPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState("create"); // 'create' | 'edit'
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const {
    useGetAllBrands,
    useCreateBrand,
    useUpdateBrand,
    useToogleActiveBrand,
    useDeleteBrand,
  } = useBrands();

  const {
    data: brands,
    isLoading,
    isError,
    refetch,
  } = useGetAllBrands({
    search: searchTerm,
    limit: pageSize,
    page,
  });

  console.log(brands);
  const createBrandMutation = useCreateBrand({
    onSuccess: () => {
      refetch();
      handleCloseModal();
    },
  });

  const updateBrandMutation = useUpdateBrand({
    onSuccess: () => {
      refetch();
      handleCloseModal();
    },
  });

  const toggleActiveMutation = useToogleActiveBrand({
    onSuccess: () => refetch(),
  });

  const deleteBrandMutation = useDeleteBrand({
    onSuccess: () => refetch(),
  });

  const handleOpenCreate = () => {
    setFormType("create");
    setSelectedBrand(null);
    setShowModal(true);
  };

  const handleEdit = (brand) => {
    setFormType("edit");
    setSelectedBrand(brand);
    setShowModal(true);
  };

  const handleCreateBrand = (data) => {
    createBrandMutation.mutate(data);
  };

  const handleUpdateBrand = (id, data) => {
    updateBrandMutation.mutate({ id, ...data });
  };

  const handleToggleActive = (brand) => {
    toggleActiveMutation.mutate({ id: brand._id });
  };

  const handleDelete = (brand) => {
    swal({
      title: "Bạn có chắc muốn xóa?",
      text: `Thương hiệu "${brand.name}" sẽ bị xóa khỏi hệ thống!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result) {
        deleteBrandMutation.mutate({ id: brand._id });
        swal(
          "Đã xóa thương hiệu!",
          `Thương hiệu ${brand.name} đã được xóa khỏi hệ thống`,
          "success",
        );
      }
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBrand(null);
    setFormType("create");
  };

  const columns = BrandsColumn({
    onToggleActive: handleToggleActive,
    onEdit: handleEdit,
    onDelete: handleDelete,
  });

  return (
    <div>
      {/* Header và nút thêm */}
      <HeaderPage title="Danh sách thương hiệu">
        <PrimaryButton onClick={handleOpenCreate} className="w-[200px]">
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

      {/* Bảng danh sách */}
      <TableLayout
        totalItems={brands?.data?.length || 0}
        visibleItems={Math.min(pageSize, brands?.data?.length || 0)}
        paginationProps={{ page, pageSize, onPageChange: setPage }}
        pageSize={pageSize}
        onChangePageSize={(value) => setPageSize(value)}
      >
        {isLoading ? (
          <LoadingState />
        ) : isError ? (
          <ErrorState />
        ) : (
          <Table data={brands?.data || []} columns={columns} />
        )}
      </TableLayout>

      {/* Modal form tạo / sửa */}
      {showModal && (
        <FormModalLayout onClose={handleCloseModal}>
          {formType === "create" ? (
            <CreateBrandForm
              onSubmit={handleCreateBrand}
              isLoading={createBrandMutation.isPending}
            />
          ) : (
            <EditBrandForm
              brand={selectedBrand}
              onSubmit={handleUpdateBrand}
              isLoading={updateBrandMutation.isPending}
            />
          )}
        </FormModalLayout>
      )}
    </div>
  );
};

export default BrandListPage;
