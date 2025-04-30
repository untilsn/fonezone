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
    defaultValues: {
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
          className="h-4 w-4"
        />
        đăng nhập bằng google
      </SecondaryButton>
      <div className="relative my-10 h-[1px] bg-gray-200">
        <span className="bg-background-body absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 text-sm">
          or
        </span>
      </div>
      <FormFieldControl
        name="email"
        control={control}
        label="địa chỉ email"
        render={(flied) => {
          return <InputField {...flied} placeholder="email@gmail" />;
        }}
      />
      <FormFieldControl
        name="password"
        control={control}
        label="mật khẩu"
        render={(flied) => {
          return (
            <InputField {...flied} placeholder="********" type="password" />
          );
        }}
      />
      <Link
        to={"/admin/auth/password-forget"}
        className="hover:text-primary-active mb-5 ml-auto block text-left text-sm text-gray-800 transition-all"
      >
        Quên mật khẩu?
      </Link>
      <PrimaryButton type="submit">đăng nhập</PrimaryButton>
    </form>
  );
};

export default LoginForm;
