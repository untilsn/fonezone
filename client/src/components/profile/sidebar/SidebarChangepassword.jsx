import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "../../input/InputField";

const schema = yup.object({
  oldPassword: yup.string().required("Vui lòng nhập mật khẩu cũ"),
  newPassword: yup
    .string()
    .min(6, "Mật khẩu mới phải có ít nhất 6 ký tự")
    .required("Vui lòng nhập mật khẩu mới"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Mật khẩu xác nhận không khớp")
    .required("Vui lòng xác nhận mật khẩu mới"),
});

const SidebarChangepassword = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Change Password Data:", data);
    alert("Mật khẩu đã được cập nhật!");
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg w-full max-w-md mx-auto">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Đổi Mật Khẩu</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          name="oldPassword"
          control={control}
          type="password"
          label="Mật khẩu cũ"
          placeholder="Nhập mật khẩu cũ"
        />
        <InputField
          name="newPassword"
          control={control}
          type="password"
          label="Mật khẩu mới"
          placeholder="Nhập mật khẩu mới"
        />
        <InputField
          name="confirmPassword"
          control={control}
          type="password"
          label="Xác nhận mật khẩu"
          placeholder="Nhập lại mật khẩu mới"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 border text-dark py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Cập Nhật Mật Khẩu
        </button>
      </form>
    </div>
  );
};

export default SidebarChangepassword;
