import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/api/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthHeader from "../../components/auth/AuthHeader";
import FormFieldControl from "../../components/form/FormFieldControl";
import InputField from "../../components/form/InputField";
import PrimaryButton from "../../components/button/PrimaryButton";
import { loginSchema } from "../../utils/authSchema";

const LoginPage = () => {
  const { useLogin, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const { mutate: loginMutate, isPending } = useLogin({
    onSuccess: () => {
      navigate("/");
    },
  });
  const BASE_ENDPOINT = "/api/auth";

  console.log(
    `${import.meta.env.VITE_CLIENT_URL}${BASE_ENDPOINT}/google/admin`,
  );
  const handleLoginGoogle = () => {};

  return (
    <form
      onSubmit={handleSubmit((values) => loginMutate(values))}
      className="w-full space-y-5"
    >
      <AuthHeader
        title="Đăng nhập"
        subTitle="Chào mừng trở lại! Vui lòng nhập thông tin đăng nhập"
      />

      <button
        type="button"
        onClick={loginWithGoogle}
        className="hover:border-primary focus:ring-primary/30 flex h-11 w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md focus:ring-2 focus:outline-none"
      >
        <img
          src="https://docs.material-tailwind.com/icons/google.svg"
          alt="google"
          className="w-5 h-5"
        />
        <span>Đăng nhập bằng Google</span>
      </button>

      <div className="relative my-7">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-3 text-sm text-gray-500 bg-background-body">
            hoặc
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <FormFieldControl
          name="email"
          control={control}
          label="Email"
          render={(field) => (
            <InputField {...field} placeholder="Nhập email của bạn" />
          )}
        />
        <FormFieldControl
          name="password"
          control={control}
          label="Mật khẩu"
          render={(field) => (
            <InputField
              {...field}
              placeholder="Nhập mật khẩu"
              type="password"
            />
          )}
        />
      </div>

      <div className="flex items-center justify-between">
        <Link
          to="/admin/auth/forget-password"
          className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-active"
        >
          Quên mật khẩu?
        </Link>
      </div>

      <PrimaryButton isLoading={isPending} type="submit" className="w-full">
        Đăng nhập
      </PrimaryButton>
    </form>
  );
};

export default LoginPage;
