import { useState } from "react";
import { CiExport } from "react-icons/ci";
import { toast } from "react-toastify";
import { useDebounce } from "use-debounce";

import PrimaryButton from "../../components/button/PrimaryButton";
import HeaderPage from "../../components/header/HeaderPage";
import BrandsColumn from "../../components/table/columns/BrandsColumn";
import Table from "../../components/table/Table";
import TableLayout from "../../components/table/TableLayout";
import FormModalLayout from "../../Layout/FormModalLayout";
import { utils, write, writeFileXLSX } from "xlsx";

import { useBrands } from "../../hooks/api/useBrands";
import { confirmDelete } from "../../utils/confirmDelete";
import CreateBrandForm from "./CreateBrandForm";
import EditBrandForm from "./EditBrandForm";

const BrandListPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState("create");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [rowSelection, setRowSelection] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

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
    search: debouncedSearchTerm,
  });

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

  const handleSearch = (value) => {
    setSearchTerm(value);
    setPage(1);
  };

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
    confirmDelete({
      title: "Bạn có chắc muốn xóa?",
      text: `Thương hiệu "${brand.name}" sẽ bị xóa khỏi hệ thống!`,
      onConfirm: () => deleteBrandMutation.mutate({ id: brand._id }),
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBrand(null);
    setFormType("create");
  };

  const exportToExcel = (selectedRows, allData) => {
    const dataToExport = selectedRows.length > 0 ? selectedRows : allData;

    const ws = utils.json_to_sheet(dataToExport);

    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Brands");

    writeFileXLSX(wb, "brands_data.xlsx");
  };

  const handleExport = () => {
    const selectedRows = Object.keys(rowSelection)
      .filter((key) => rowSelection[key]) // Lọc các dòng được chọn
      .map((key) => brands.data[key]); // Lấy dữ liệu từ các dòng đã chọn
    exportToExcel(selectedRows, brands.data);
  };

  const columns = BrandsColumn({
    onToggleActive: handleToggleActive,
    onEdit: handleEdit,
    onDelete: handleDelete,
  });

  return (
    <div>
      <HeaderPage title="Danh sách thương hiệu">
        <div className="w-[250px]">
          <PrimaryButton onClick={handleOpenCreate}>
            Thêm thương hiệu mới
          </PrimaryButton>
        </div>
        <PrimaryButton
          icon={<CiExport size={20} />}
          variant="secondary"
          onClick={handleExport}
          className="max-w-[200px]"
        >
          Export Excel
        </PrimaryButton>
      </HeaderPage>

      <TableLayout
        controls={{
          search: true,
          filter: false,
          pageSize: false,
          pagination: false,
        }}
        handlers={{ onSearch: handleSearch }}
      >
        <Table
          data={brands?.data || []}
          columns={columns}
          isLoading={isLoading}
          isError={isError}
          rowSelection={rowSelection}
          onRowSelectionChange={setRowSelection}
          emptyMessage="Không tìm thấy sản phẩm"
        />
      </TableLayout>

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
