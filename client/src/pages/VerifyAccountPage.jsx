import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { FaArrowRight } from 'react-icons/fa';
import Logo from '../components/ui/Logo';
import InputOtp from '../components/input/InputOtp';
import { useMutationHook } from '../hooks/useMutation';
import { otpSchema } from '../utils/authSchema';
import { useAuth } from '../hooks/useAuth';


const VerifyAccountPage = () => {
  const { verifyAccount } = useAuth()
  const location = useLocation();
  const email = location.state?.email || '';

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { otp: '' },
    mode: 'onSubmit',
    resolver: yupResolver(otpSchema),
  });
  console.log(errors)
  const { mutate, isPending } = useMutationHook((values) => verifyAccount({ ...values, email }));

  return (
    <div className="bg-gradient">
      <div className="relative container flex items-center justify-center">
        <div className="max-w-[500px] w-full px-12 py-5 bg-white shadow-lg rounded-sm">
          <Link to="/" className="mb-10 block">
            <Logo width="100px" subColor="#FFD700" />
          </Link>

          <h1 className="text-lg font-semibold text-dark">Xác minh tài khoản</h1>
          <p className="text-[13px] text-gray mb-6">
            Vui lòng nhập mã OTP đã được gửi đến email <b>{email}</b> để xác minh tài khoản của bạn.
          </p>

          <form onSubmit={handleSubmit((values) => mutate(values))} className="flex flex-col gap-5">
            <InputOtp name="otp" control={control} errors={errors} />
            <Button
              type="submit"
              loading={isPending}
              className="flex items-center justify-center w-full rounded-lg gap-3 bg-dark hover:bg-yellowDark text-light px-6 py-3"
            >
              Xác minh tài khoản <FaArrowRight className="text-sm" />
            </Button>
          </form>

          <p className="text-center text-gray text-[13px] mt-7">
            <button
              onClick={() => navigate(-1)}
              className="text-blue-400 hover:text-yellow-dark transition-colors underline"
            >
              Quay lại trang trước
            </button>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyAccountPage;
