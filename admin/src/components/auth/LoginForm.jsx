import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useMutationHook } from "../../hooks/useMutation";
import { loginSchema } from "../../utils/authSchema";
import PrimaryButton from "../button/PrimaryButton";
import SecondaryButton from "../button/SecondaryButton";
import InputField from "../form/InputField";
import AuthHeader from "./AuthHeader";
import FormFieldControl from "../form/FormFieldControl";

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

  const { mutate: loginMutate, data, isPending } = useMutationHook(login);

  return (
    <form
      onSubmit={handleSubmit((values) => loginMutate(values))}
      className="w-full"
    >
      <AuthHeader title="Đăng nhập" subTitle="Your Social Campaigns" />
      <SecondaryButton>
        <img
          src="https://docs.material-tailwind.com/icons/google.svg"
          alt="google"
          className="w-4 h-4"
        />
        đăng nhập bằng google
      </SecondaryButton>
      <div className="relative my-10 h-[1px] bg-gray-200">
        <span className="absolute px-3 text-sm -translate-x-1/2 -translate-y-1/2 bg-background-body top-1/2 left-1/2">
          or
        </span>
      </div>
      <FormFieldControl
        name="email"
        control={control}
        label="địa chỉ email"
        render={(flied) => {
          return <InputField name="email" placeholder="email@gmail" />;
        }}
      />
      <FormFieldControl
        name="password"
        control={control}
        label="mật khẩu"
        render={(flied) => {
          return (
            <InputField
              name="password"
              placeholder="********"
              type="password"
            />
          );
        }}
      />
      <Link
        to={"/admin/auth/password-forget"}
        className="block mb-5 ml-auto text-sm text-left text-gray-800 transition-all hover:text-primary-active"
      >
        Quên mật khẩu?
      </Link>
      <PrimaryButton type="submit">đăng nhập</PrimaryButton>
    </form>
  );
};

export default LoginForm;
