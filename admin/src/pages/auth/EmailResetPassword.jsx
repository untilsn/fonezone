import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/api/useAuth";
import { useForm } from "react-hook-form";
import AuthHeader from "../../components/auth/AuthHeader";
import FormFieldControl from "../../components/form/FormFieldControl";
import InputField from "../../components/form/InputField";
import PrimaryButton from "../../components/button/PrimaryButton";
import SecondaryButton from "../../components/button/SecondaryButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgetPasswordSchema } from "../../schemas/authSchema";

const EmailResetPassword = () => {
  const navigate = useNavigate();
  const { useForgetPassword } = useAuth();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
    mode: "onSubmit",
    resolver: yupResolver(forgetPasswordSchema),
  });

  const { mutate, isPending } = useForgetPassword({
    onSuccess: (_, variables) => {
      navigate("/admin/auth/forget-password/otp", {
        state: { email: variables.email },
      });
    },
  });

  return (
    <form onSubmit={handleSubmit((value) => mutate(value))} className="w-full">
      <AuthHeader
        title="Quên mật khẩu ?"
        subTitle="Nhập email của bạn để đặt lại mật khẩu."
      ></AuthHeader>
      <FormFieldControl
        name="email"
        control={control}
        label="Email"
        render={(flied) => {
          return (
            <InputField
              {...flied}
              type="email"
              placeholder="Nhập email của bạn"
            />
          );
        }}
      />
      <div className="flex items-center gap-5">
        <PrimaryButton isLoading={isPending} disabled={isPending} type="submit">
          gửi email
        </PrimaryButton>
        <SecondaryButton
          type="button"
          disabled={isPending}
          onClick={() => navigate(-1)}
          className="w-full p-3 text-sm font-semibold text-gray-800 border border-gray-400 rounded-xl hover:bg-gray-100"
        >
          Quay lại
        </SecondaryButton>
      </div>
    </form>
  );
};

export default EmailResetPassword;
