import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormFieldControl from "../../components/form/FormFieldControl";
import InputField from "../../components/form/InputField";
import SecondaryButton from "../../components/button/SecondaryButton";
import PrimaryButton from "../../components/button/PrimaryButton";

const BrandFormModal = ({ brand, onSubmit, onClose }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: brand?.name || "",
    },
  });

  // Reset form when brand prop changes
  useEffect(() => {
    if (brand) {
      reset({
        name: brand.name || "",
      });
    } else {
      reset({
        name: "",
      });
    }
  }, [brand, reset]);

  const submitForm = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="w-full">
      <h2 className="mb-4 text-xl font-semibold">
        {brand ? "Chỉnh sửa thương hiệu" : "Thêm thương hiệu mới"}
      </h2>

      <FormFieldControl
        control={control}
        name="brand"
        label="tên thuơng hiệu "
        render={(field) => (
          <InputField {...field} placeholder="nhập tên thương hiệu mới" />
        )}
      />

      {/* <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Mô tả</label>
        <textarea
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          rows="3"
          placeholder="Nhập mô tả thương hiệu"
          {...register("description")}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Logo URL</label>
        <input
          type="text"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Nhập đường dẫn logo"
          {...register("logo")}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Trạng thái</label>
        <select
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          {...register("status")}
        >
          <option value="active">Hoạt động</option>
          <option value="inactive">Không hoạt động</option>
        </select>
      </div> */}

      <div className="mt-6 flex justify-end gap-2">
        <SecondaryButton
          type="button"
          className="max-w-[100px]"
          onClick={onClose}
        >
          Hủy
        </SecondaryButton>
        <PrimaryButton type="submit" className="max-w-[200px]">
          {brand ? "Cập nhật" : "Tạo mới"}
        </PrimaryButton>
      </div>
    </form>
  );
};

export default BrandFormModal;
