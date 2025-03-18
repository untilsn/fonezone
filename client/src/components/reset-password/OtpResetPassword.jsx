import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@material-tailwind/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Logo from '../ui/Logo';
import InputOtp from '../input/InputOtp';
import { otpSchema } from '../../utils/authSchema';
import { useMutationHook } from '../../hooks/useMutation';
import { handleVerifyOtpReset } from '../../services/authService';


const OtpResetPassword = ({ email }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { otp: "" },
    mode: 'onSubmit',
    resolver: yupResolver(otpSchema),
  });

  const { mutate, isPending } = useMutationHook((values) => handleVerifyOtpReset({ ...values, email }))
  return (
    <div className="relative container flex items-center justify-center">
      {/* Card login */}
      <div className="max-w-[500px] w-full px-12 py-5 bg-white shadow-lg rounded-sm">
        <Link to="/" className="mb-10 block">
          <Logo width="100px" subColor="#FFD700" />
        </Link>

        <h1 className="text-lg font-semibold text-dark">Nhập mã OTP để tiếp tục đặt lại mật khẩu!</h1>
        <p className="text-[13px] text-gray mb-6">
          Vui lòng nhập mã OTP đã được gửi đến email của bạn để đặt lại mật khẩu.
        </p>

        {/* Form login */}
        <form onSubmit={handleSubmit((values) => mutate(values))} className="flex flex-col gap-5">
          <InputOtp control={control} name="otp" errors={errors}></InputOtp>
          <Button
            type="submit"
            loading={isPending}
            className="flex items-center justify-center w-full rounded-lg mt-5 gap-3 bg-dark hover:bg-yellowDark text-light px-6 py-3">
            Xác nhận mã OTP <FaArrowRight className="text-sm" />
          </Button>
        </form>

        {/* Register link */}
        <p className="text-center text-gray text-[13px] mt-7">
          <Link
            to="/register"
            className="text-blue-400 hover:text-yellow-dark transition-colors underline">
            Đăng ký
          </Link>
          {" "}hoặc{" "}
          <button
            onClick={() => navigate(-1)}
            className="text-blue-400 hover:text-yellow-dark transition-colors underline">
            Trở về trang trước
          </button>.
        </p>
      </div>
    </div>
  );
};

export default OtpResetPassword;
