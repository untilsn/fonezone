import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useBrands } from "../../hooks/useBrands";
import { useMutationHook } from "../../hooks/useMutation";
import FormFieldControl from "../../components/form/FormFieldControl";
import InputField from "../../components/form/InputField";
import SecondaryButton from "../../components/button/SecondaryButton";
import PrimaryButton from "../../components/button/PrimaryButton";

const BrandFormModal = ({ brand = null, onClose, onSuccess }) => {
  const { createBrands, updateBrand } = useBrands();
  const { mutate: createBrand, isPending: isCreating } =
    useMutationHook(createBrands);
  const { mutate: updateBrandMutation, isPending: isUpdating } =
    useMutationHook(updateBrand);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: brand?.name || "",
    },
  });

  useEffect(() => {
    reset({
      name: brand?.name || "",
    });
  }, [brand, reset]);

  const onSubmit = (data) => {
    if (brand) {
      updateBrandMutation(
        { id: brand._id, ...data },
        {
          onSuccess: () => {
            toast.success("Cập nhật thương hiệu thành công");
            onSuccess?.();
          },
          onError: (err) => {
            toast.error(err?.response?.data?.message || "Lỗi khi cập nhật");
          },
        },
      );
    } else {
      createBrand(data, {
        onSuccess: () => {
          toast.success("Thêm thương hiệu thành công");
          onSuccess?.();
        },
        onError: (err) => {
          toast.error(
            err?.response?.data?.message || "Lỗi khi thêm thương hiệu",
          );
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <h2 className="mb-4 text-xl font-semibold">
        {brand ? "Chỉnh sửa thương hiệu" : "Thêm thương hiệu mới"}
      </h2>

      <FormFieldControl
        control={control}
        name="name"
        label="Tên thương hiệu"
        render={(field) => (
          <InputField {...field} placeholder="Nhập tên thương hiệu" />
        )}
      />

      <div className="mt-6 flex justify-end gap-2">
        <SecondaryButton type="button" onClick={onClose}>
          Hủy
        </SecondaryButton>
        <PrimaryButton type="submit" isLoading={isCreating || isUpdating}>
          {brand ? "Cập nhật" : "Tạo mới"}
        </PrimaryButton>
      </div>
    </form>
  );
};

export default BrandFormModal;
