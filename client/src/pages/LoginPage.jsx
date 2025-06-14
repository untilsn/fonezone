import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { FaArrowRight } from "react-icons/fa";
import InputField from "../components/input/InputField";
import Logo from "../components/ui/Logo";
import { loginSchema } from "../utils/authSchema";
import { loginFields } from "../utils/formField";
import { useMutationHook } from "../hooks/useMutation";
import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {
  const { login, loginWithGoogle } = useAuth();
  const { control, handleSubmit } = useForm({
    defaultValues: { email: "", password: "" },
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const { mutate, isPending } = useMutationHook((values) => login(values));

  return (
    <div className="flex items-center justify-center min-h-screen p-4 py-20 bg-gradient">
      {/* Login Card */}
      <div className="w-full max-w-md px-8 py-10 bg-white border border-gray-100 shadow-sm ">
        {/* Logo and Header */}
        <div className="mb-8 text-left">
          <Link to="/" className="inline-block mb-6">
            <Logo width="120px" subColor="#F59E0B" />
          </Link>

          <h1 className="mb-2 text-2xl font-bold text-gray-800">
            Đăng nhập Electro!
          </h1>
          <p className="text-sm text-gray-500">
            Vui lòng đăng nhập vào tài khoản của bạn và bắt đầu cuộc phiêu lưu.
          </p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit((values) => mutate(values))}
          className="space-y-6"
        >
          {loginFields.map(({ name, label, icon, placeholder, type }) => (
            <InputField
              key={name}
              name={name}
              control={control}
              label={label}
              icon={icon}
              placeholder={placeholder}
              type={type}
            />
          ))}

          <div className="flex justify-end">
            <Link
              to="/reset-password"
              className="text-sm text-blue-500 transition-colors hover:text-blue-600"
            >
              Quên mật khẩu?
            </Link>
          </div>

          <Button
            type="submit"
            loading={isPending}
            className="flex items-center justify-center w-full gap-2 py-3 text-white transition-colors bg-gray-800 rounded-lg hover:bg-gray-900"
          >
            Đăng nhập <FaArrowRight className="text-sm" />
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 text-sm text-gray-500 bg-white">hoặc</span>
            </div>
          </div>

          {/* Google Login */}
          <Button
            type="button"
            onClick={loginWithGoogle}
            variant="outlined"
            className="flex items-center justify-center w-full gap-2 py-3 text-gray-700 transition-colors border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <img
              src="https://docs.material-tailwind.com/icons/google.svg"
              alt="google"
              className="w-5 h-5"
            />
            Đăng nhập bằng Google
          </Button>
        </form>

        {/* Registration Link */}
        <p className="mt-8 text-sm text-center text-gray-500">
          Bạn chưa có tài khoản?{" "}
          <Link
            to="/register"
            className="font-medium text-blue-500 transition-colors hover:text-blue-600"
          >
            Đăng ký tại đây
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
