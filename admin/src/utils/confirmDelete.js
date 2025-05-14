import swal from "sweetalert";

export const confirmDelete = async ({ title, text, onConfirm }) => {
  const willDelete = await swal({
    title,
    text,
    icon: "warning",
    buttons: ["Hủy", "Xóa"],
    dangerMode: true,
  });

  if (willDelete) {
    await onConfirm();
    swal("Đã xóa!", "Dữ liệu đã bị xóa.", "success");
  }
};
