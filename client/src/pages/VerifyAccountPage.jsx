import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Logo from "../components/ui/Logo";
import InputOtp from "../components/input/InputOtp";
import { useMutationHook } from "../hooks/useMutation";
import { otpSchema } from "../utils/authSchema";
import { useAuth } from "../hooks/useAuth";

const VerifyAccountPage = () => {
  const { verifyAccount } = useAuth();
  const location = useLocation();
  const email = location.state?.email || "";

  const { control, handleSubmit } = useForm({
    defaultValues: { otp: "" },
    mode: "onSubmit",
    resolver: yupResolver(otpSchema),
  });

  const { mutate, isPending } = useMutationHook((values) =>
    verifyAccount({ ...values, email })
  );

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="w-full max-w-md overflow-hidden bg-white border border-gray-100 shadow-sm rounded-xl">
        <div className="p-8">
          <Link to="/" className="inline-block mb-6">
            <Logo width="120px" subColor="#F59E0B" />
          </Link>

          <h1 className="mb-2 text-2xl font-bold text-gray-800">
            Xác minh tài khoản
          </h1>
          <p className="mb-6 text-gray-500">
            Mã OTP đã được gửi đến <span className="font-medium">{email}</span>
          </p>

          <form
            onSubmit={handleSubmit((values) => mutate(values))}
            className="space-y-6"
          >
            <InputOtp name="otp" control={control} />

            <button
              type="submit"
              disabled={isPending}
              className="flex items-center justify-center w-full gap-2 px-6 py-3 font-medium text-white transition-colors bg-gray-800 rounded-lg hover:bg-gray-900"
            >
              {isPending ? (
                "Đang xử lý..."
              ) : (
                <>
                  Xác minh tài khoản <FaArrowRight className="text-sm" />
                </>
              )}
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-500">
            <Link
              to="/login"
              className="font-medium text-blue-500 hover:text-blue-600"
            >
              Quay lại trang đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyAccountPage;
