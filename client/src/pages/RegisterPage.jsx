import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { FaArrowRight, FaGoogle } from "react-icons/fa";
import InputField from "../components/input/InputField";
import Logo from "../components/ui/Logo";
import { registerSchema } from "../utils/authSchema";
import { registerFields } from "../utils/formField";
import { useMutationHook } from "../hooks/useMutation";
import { useAuth } from "../hooks/useAuth";

const RegisterPage = () => {
  const { register } = useAuth();
  const { control, handleSubmit } = useForm({
    defaultValues: { email: "", password: "" },
    mode: "onSubmit",
    resolver: yupResolver(registerSchema),
  });

  const { mutate, isPending } = useMutationHook((values) => register(values));

  return (
    <div className="flex items-center justify-center min-h-screen p-4 py-20 bg-gradient">
      <div className="w-full max-w-md overflow-hidden bg-white border border-gray-100 shadow-sm ">
        <div className="p-8">
          <Link to="/" className="inline-block mb-6">
            <Logo width="120px" subColor="#F59E0B" />
          </Link>

          <h1 className="mb-2 text-2xl font-bold text-gray-800">
            Đăng ký tài khoản
          </h1>
          <p className="mb-6 text-gray-500">
            Tạo tài khoản để bắt đầu trải nghiệm
          </p>

          <form
            onSubmit={handleSubmit((values) => mutate(values))}
            className="space-y-4"
          >
            {registerFields.map((field) => (
              <InputField key={field.name} control={control} {...field} />
            ))}

            <button
              type="submit"
              disabled={isPending}
              className="flex items-center justify-center w-full gap-2 px-6 py-3 font-medium text-white transition-colors bg-gray-800 rounded-lg hover:bg-gray-900"
            >
              {isPending ? (
                "Đang xử lý..."
              ) : (
                <>
                  Đăng ký <FaArrowRight className="text-sm" />
                </>
              )}
            </button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 text-sm text-gray-500 bg-white">
                  hoặc
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => loginWithGoogle()}
              className="flex items-center justify-center w-full gap-2 px-6 py-3 font-medium text-gray-700 transition-colors border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <FaGoogle className="text-blue-500" />
              Đăng ký bằng Google
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-500">
            Đã có tài khoản?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-500 hover:text-blue-600"
            >
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
