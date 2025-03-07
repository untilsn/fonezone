import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import Logo from '../common/Logo';
import InputOtp from '../input/InputOtp';


const OtpResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';

  const { control, handleSubmit } = useForm({
    defaultValues: { email: '', password: '' },
    mode: 'onSubmit',
    resolver: yupResolver(),
  });

  const handleLoginUser = () => { };



  return (


    <div className="relative container flex items-center justify-center">
      {/* Card login */}
      <div className="max-w-[500px] w-full px-12 py-5 bg-white shadow-lg rounded-xl">
        <Link to="/" className="mb-10 block">
          <Logo width="100px" subColor="#FFD700" />
        </Link>

        <h1 className="text-lg font-semibold text-dark">Nhập mã OTP để tiếp tục đặt lại mật khẩu!</h1>
        <p className="text-[13px] text-gray mb-6">
          Vui lòng nhập mã OTP đã được gửi đến email của bạn để đặt lại mật khẩu.
        </p>

        {/* Form login */}
        <form onSubmit={handleSubmit(handleLoginUser)} className="flex flex-col gap-5">
          <InputOtp></InputOtp>
          <Button
            onClick={navigate("/reset-password")}
            type="button"
            className="flex items-center justify-center w-full rounded-lg gap-3 bg-dark hover:bg-yellowDark text-light px-6 py-3">
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
