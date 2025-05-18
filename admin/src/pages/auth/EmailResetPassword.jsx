import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/api/useAuth";
import { useForm } from "react-hook-form";
import AuthHeader from "../../components/auth/AuthHeader";
import FormFieldControl from "../../components/form/FormFieldControl";
import InputField from "../../components/form/InputField";
import PrimaryButton from "../../components/button/PrimaryButton";
import SecondaryButton from "../../components/button/SecondaryButton";

const EmailResetPassword = () => {
  const navigate = useNavigate();
  const { useForgetPassword } = useAuth();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const { mutate, onSuccess, isPending } = useForgetPassword({
    onSuccess: () => {
      navigate("/admin/auth/forget-password/otp");
    },
  });

  const handleForgetPassword = (value) => {
    console.log(value);
  };

  return (
    <form onSubmit={handleSubmit((value) => mutate(value))} className="w-full">
      <AuthHeader
        title="Quên mật khẩu ?"
        subTitle="Nhập email của bạn để đặt lại mật khẩu."
      ></AuthHeader>
      <FormFieldControl
        name="email"
        control={control}
        label="địa chỉ email"
        render={(flied) => {
          return <InputField {...flied} placeholder="email@gmail" />;
        }}
      />
      <div className="flex items-center gap-5">
        <PrimaryButton isLoading={isPending} type="submit">
          gửi email
        </PrimaryButton>
        <SecondaryButton
          type="button"
          isLoading={isPending}
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
