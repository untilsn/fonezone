import React from "react";
import { useForm } from "react-hook-form";
import PrimaryButton from "../../components/button/PrimaryButton";
import FormFieldControl from "../../components/form/FormFieldControl";
import InputField from "../../components/form/InputField";
import TextAreaField from "../../components/form/TextAreaField";

const CreateBrandForm = ({ onSubmit, isLoading }) => {
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const handleCreate = (data) => {
    onSubmit?.(data);
  };

  return (
    <form onSubmit={handleSubmit(handleCreate)} className="space-y-4">
      <h1 className="text-lg font-semibold capitalize">tạo mới thương hiệu</h1>
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
        Tạo thương hiệu
      </PrimaryButton>
    </form>
  );
};

export default CreateBrandForm;
