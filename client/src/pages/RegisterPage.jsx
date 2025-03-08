import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { FaArrowRight } from 'react-icons/fa';
import { CiLock, CiMail, CiUser } from 'react-icons/ci';

import InputField from '../components/input/InputField';
import Logo from '../components/ui/Logo';

const RegisterPage = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: { email: '', password: '' },
    mode: 'onSubmit',
    resolver: yupResolver(),
  });

  const handleLoginUser = () => { };

  const formFields = [
    { name: 'name', label: 'tên người dùng', icon: <CiUser />, placeholder: 'username' },
    { name: 'email', label: 'Địa chỉ email', icon: <CiMail />, placeholder: 'your@gmail.com' },
    { name: 'password', label: 'Mật khẩu', icon: <CiLock />, placeholder: '••••••', type: 'password' },
    { name: 'comfirnPassword', label: 'Xác nhận mật khẩu', icon: <CiLock />, placeholder: '••••••', type: 'password' },
  ];


  return (
    <div className="relative py-20">
      {/* Background với overlay */}
      <div className="bg-gradian"></div>

      <div className="relative container flex items-center justify-center">
        {/* Card login */}
        <div className="max-w-[500px] w-full px-12 py-5 bg-white shadow-lg rounded-xl">
          <Link to="/" className="mb-10 block">
            <Logo width="100px" subColor="#FFD700" />
          </Link>

          <h1 className="text-lg font-semibold text-dark mb-5">Đăng ký tài khoản!</h1>
          {/* Form login */}
          <form onSubmit={handleSubmit(handleLoginUser)} className="flex flex-col gap-5">
            {formFields.map(({ name, label, icon, placeholder, type }) => (
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

            <Button
              type="submit"
              className="flex items-center justify-center w-full mt-4 rounded-lg gap-3 bg-dark hover:bg-yellowDark text-light px-6 py-3">
              Đăng ký <FaArrowRight className="text-sm" />
            </Button>

            <div className="relative my-3 h-[1px] bg-gray-200">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-sm">or</span>
            </div>

            {/* Login Google */}
            <Button
              type="button"
              variant="outlined"
              className="flex w-full items-center justify-center gap-2 rounded-lg">
              <img src="https://docs.material-tailwind.com/icons/google.svg" alt="google" className="h-4 w-4" />
              Đăng ký bằng Google
            </Button>
          </form>

          {/* Register link */}
          <p className="text-center text-gray text-[13px] mt-7">
            Đã có tài khoản?
            {" "}
            <Link
              to="/login"
              className="text-blue-400 hover:text-yellow-dark transition-colors underline">
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage