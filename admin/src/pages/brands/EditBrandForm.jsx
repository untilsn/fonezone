import React from "react";
import { useForm } from "react-hook-form";
import PrimaryButton from "../../components/button/PrimaryButton";
import FormFieldControl from "../../components/form/FormFieldControl";
import InputField from "../../components/form/InputField";
import TextAreaField from "../../components/form/TextAreaField";

const EditBrandForm = ({ brand, onSubmit, isLoading }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: brand?.name || "",
      description: brand?.description || "",
    },
  });

  const handleUpdate = (data) => {
    onSubmit?.(brand?._id, data);
  };

  return (
    <form onSubmit={handleSubmit(handleUpdate)} className="space-y-4">
      <h1 className="text-lg font-semibold capitalize">Cập nhập thương hiệu</h1>
      <FormFieldControl
        control={control}
        name="name"
        label="tên thương hiệu"
        render={(field) => {
          return <InputField {...field} placeholder="nhập tên" />;
        }}
      />
      <FormFieldControl
        control={control}
        name="description"
        label="mô tả thương hiệu"
        render={(field) => {
          return <TextAreaField {...field} placeholder="nhập mô tả" />;
        }}
      />
      <PrimaryButton type="submit" loading={isLoading}>
        Cập nhật thương hiệu
      </PrimaryButton>
    </form>
  );
};

export default EditBrandForm;
