import React from "react";
import { useController, useForm } from "react-hook-form";
import InputField from "../form/InputField";
import AuthHeader from "./AuthHeader";
import ButtonGoogle from "../commons/ButtonGoogle";
import ButtonSubmit from "../commons/ButtonSubmit";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/authSchema";
import { useAuth } from "../../hooks/useAuth";
import { useMutationHook } from "../../hooks/useMutation";

const LoginForm = () => {
  const { login, loginWithGoogle } = useAuth();
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
    defaultValue: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const { data, isPending } = useMutationHook((values) => login(values));
  console.log(data, isPending, "hook login");

  return (
    <form
      onSubmit={handleSubmit((values) => mutate(values))}
      className="w-full"
    >
      <AuthHeader title="Đăng nhập" subTitle="Your Social Campaigns" />
      <ButtonGoogle></ButtonGoogle>
      <div className="relative my-10 h-[1px] bg-gray-200">
        <span className="bg-background-body absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 text-sm">
          or
        </span>
      </div>
      <InputField
        label="email address"
        control={control}
        name={"email"}
        placeholder="email"
      />
      <InputField
        label="password"
        control={control}
        name={"password"}
        placeholder="password"
        type="password"
      />
      <Link
        to={"/admin/auth/password-forget"}
        className="hover:text-primary-active mb-5 ml-auto block text-left text-sm text-gray-800 transition-all"
      >
        Quên mật khẩu?
      </Link>
      <ButtonSubmit>đăng nhập</ButtonSubmit>
    </form>
  );
};

export default LoginForm;
