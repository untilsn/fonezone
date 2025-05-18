import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/api/useAuth";
import { loginSchema } from "../../utils/authSchema";
import PrimaryButton from "../button/PrimaryButton";
import SecondaryButton from "../button/SecondaryButton";
import FormFieldControl from "../form/FormFieldControl";
import InputField from "../form/InputField";
import AuthHeader from "./AuthHeader";

const LoginForm = () => {
  const { useLogin } = useAuth();
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

  return (
    <form
      onSubmit={handleSubmit((values) => loginMutate(values))}
      className="w-full"
    >
      <AuthHeader title="Đăng nhập" subTitle="Your Social Campaigns" />
      <SecondaryButton>
        <img
          src="https://docs.material-tailwind.com/icons/google.svg"
          alt="google"
          className="w-4 h-4"
        />
        đăng nhập bằng google
      </SecondaryButton>
      <div className="relative my-10 h-[1px] bg-gray-200">
        <span className="absolute px-3 text-sm -translate-x-1/2 -translate-y-1/2 bg-background-body top-1/2 left-1/2">
          or
        </span>
      </div>
      <FormFieldControl
        name="email"
        control={control}
        label="địa chỉ email"
        render={(flied) => {
          return <InputField {...flied} placeholder="email@gmail" />;
        }}
      />
      <FormFieldControl
        name="password"
        control={control}
        label="mật khẩu"
        render={(flied) => {
          return (
            <InputField {...flied} placeholder="********" type="password" />
          );
        }}
      />
      <Link
        to={"/admin/auth/forget-password"}
        className="block mb-5 ml-auto text-sm text-left text-gray-800 transition-all hover:text-primary-active"
      >
        Quên mật khẩu?
      </Link>
      <PrimaryButton isLoading={isPending} type="submit">
        đăng nhập
      </PrimaryButton>
    </form>
  );
};

export default LoginForm;
