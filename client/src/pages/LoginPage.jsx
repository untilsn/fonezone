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
    <div className="py-20 bg-gradient">
      <div className="container flex items-center justify-center ">
        {/* Card login */}
        <div className="max-w-[500px] w-full px-12 py-5 bg-white shadow-lg rounded-sm">
          <Link to="/" className="block mb-10">
            <Logo width="100px" subColor="#FFD700" />
          </Link>

          <h1 className="text-lg font-semibold text-dark">
            Đăng nhập Electro!
          </h1>
          <p className="text-[13px] text-gray mb-6">
            Vui lòng đăng nhập vào tài khoản của bạn và bắt đầu cuộc phiêu lưu.
          </p>

          {/* Form login */}
          <form
            onSubmit={handleSubmit((values) => mutate(values))}
            className="flex flex-col gap-5"
          >
            {loginFields.map(({ name, label, icon, placeholder, type }) => (
              <InputField
                id={name}
                key={name}
                name={name}
                control={control}
                label={label}
                icon={icon}
                placeholder={placeholder}
                type={type}
              />
            ))}

            <Link
              to="/reset-password"
              className="text-[13px] text-gray self-end hover:text-yellow-dark transition-colors"
            >
              Quên mật khẩu?
            </Link>

            <Button
              type="submit"
              loading={isPending}
              className="flex items-center justify-center w-full gap-3 px-6 py-3 rounded-lg bg-dark hover:bg-yellowDark text-light"
            >
              Đăng nhập <FaArrowRight className="text-sm" />
            </Button>

            <div className="relative my-3 h-[1px] bg-gray-200">
              <span className="absolute px-3 text-sm -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2">
                or
              </span>
            </div>

            {/* Login Google */}
            <Button
              type="button"
              onClick={loginWithGoogle}
              variant="outlined"
              className="flex items-center justify-center w-full gap-2 rounded-lg"
            >
              <img
                src="https://docs.material-tailwind.com/icons/google.svg"
                alt="google"
                className="w-4 h-4"
              />
              Đăng nhập bằng Google
            </Button>
          </form>

          {/* Register link */}
          <p className="text-center text-gray text-[13px] mt-7">
            Bạn chưa có tài khoản?{" "}
            <Link
              to="/register"
              className="text-blue-400 underline transition-colors hover:text-yellow-dark"
            >
              Đăng ký tại đây
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
