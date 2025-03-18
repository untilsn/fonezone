import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { FaArrowRight } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import InputField from '../input/InputField';
import Logo from '../ui/Logo';
import { useMutationHook } from '../../hooks/useMutation';
import { forgetPasswordSchema } from '../../utils/authSchema';
import { handleForgetPassword } from '../../services/authService';

const EmailResetPassword = ({ setStep, setEmail }) => {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: { email: '' },
    mode: 'onSubmit',
    resolver: yupResolver(forgetPasswordSchema),
  });

  const { mutate, isPending } = useMutationHook((values) => {
    handleForgetPassword(values, setStep);
    setEmail(values.email);
  });


  return (
    <div className="relative container flex items-center justify-center">
      {/* Card login */}
      <div className="max-w-[500px] w-full px-12 py-5 bg-white shadow-lg rounded-sm">
        <Link to="/" className="mb-10 block">
          <Logo width="100px" subColor="#FFD700" />
        </Link>

        <h1 className="text-lg font-semibold text-dark">Reset mật khẩu!</h1>
        <p className="text-[13px] text-gray mb-6">
          Nhập địa chỉ email của bạn để nhận mã OTP đặt lại mật khẩu.
        </p>


        {/* Form login */}
        <form onSubmit={handleSubmit((values) => mutate(values))} className="flex flex-col gap-5">
          <InputField
            name="email"
            control={control}
            label="Địa chỉ email"
            icon={<CiMail />}
            placeholder="your@gmail.com"
          />
          <Button
            type='submit'
            loading={isPending}
            className="flex items-center justify-center w-full mt-5 rounded-lg gap-3 bg-dark hover:bg-yellowDark text-light px-6 py-3">
            Gửi mã OTP <FaArrowRight className="text-sm" />
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

  )
}

export default EmailResetPassword