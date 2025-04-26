import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../button/PrimaryButton";
import InputField from "../form/InputField";
import AuthHeader from "./AuthHeader";

const ForgetPasswordForm = () => {
  const navigate = useNavigate();
  const { control } = useForm({
    defaultValue: {
      email: "",
      password: "",
    },
  });

  return (
    <form className="w-full">
      <AuthHeader
        title="Quên mật khẩu ?"
        subTitle="Nhập email của bạn để đặt lại mật khẩu."
      ></AuthHeader>
      <InputField control={control} name={"email"} placeholder="email" />
      <div className="flex items-center gap-5">
        <PrimaryButton>gửi email</PrimaryButton>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="w-full p-3 text-sm font-semibold text-gray-800 border border-gray-400 rounded-xl hover:bg-gray-100"
        >
          Quay lại
        </button>
      </div>
    </form>
  );
};

export default ForgetPasswordForm;
