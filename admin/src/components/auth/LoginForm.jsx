import React from "react";
import { useController, useForm } from "react-hook-form";
import InputField from "../form/InputField";
import AuthHeader from "./AuthHeader";
import ButtonGoogle from "../commons/ButtonGoogle";
import ButtonSubmit from "../commons/ButtonSubmit";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const { control } = useForm({
    defaultValue: {
      email: "",
      password: "",
    },
  });

  return (
    <form className="w-full">
      <AuthHeader title="Đăng nhập" subTitle="Your dashboard" />
      <ButtonGoogle></ButtonGoogle>
      <div className="relative my-10 h-[1px] bg-gray-200">
        <span className="absolute px-3 text-sm -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2">
          or
        </span>
      </div>
      <InputField control={control} name={"email"} placeholder="email" />
      <InputField
        control={control}
        name={"password"}
        placeholder="password"
        type="password"
      />
      <Link
        to={"/admin/auth/password-forget"}
        className="block mb-5 ml-auto text-sm text-left text-gray-800 transition-all hover:text-primary-active"
      >
        Quên mật khẩu?
      </Link>
      <ButtonSubmit>đăng nhập</ButtonSubmit>
    </form>
  );
};

export default LoginForm;
