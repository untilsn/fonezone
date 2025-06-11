import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import AuthHeader from "../../components/auth/AuthHeader";
import PrimaryButton from "../../components/button/PrimaryButton";
import SecondaryButton from "../../components/button/SecondaryButton";
import FormFieldControl from "../../components/form/FormFieldControl";
import InputField from "../../components/form/InputField";
import { useAuth } from "../../hooks/api/useAuth";
import { resetPasswordSchema } from "../../schemas/authSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const ResetNewPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { useResetPassword } = useAuth();
  const userEmail = location?.state?.email;

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: userEmail || "",
      newPassword: "",
      confirmNewPassword: "",
    },
    resolver: yupResolver(resetPasswordSchema),
  });

  const { mutate, isPending } = useResetPassword({
    onSuccess: () => {
      navigate("/admin/auth/login");
    },
  });

  const handleResetPassword = (value) => {
    mutate({
      email: userEmail,
      newPassword: value.newPassword,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(handleResetPassword)}
      className="w-full space-y-6"
    >
      <AuthHeader title="Đặt lại mật khẩu" subTitle="Đặt lại mật khẩu mới" />

      <div className="space-y-4">
        <FormFieldControl
          name="newPassword"
          control={control}
          label="Mật khẩu mới"
          render={(field) => (
            <InputField
              {...field}
              type="password"
              placeholder="Nhập mật khẩu mới"
            />
          )}
        />

        <FormFieldControl
          name="confirmNewPassword"
          control={control}
          label="Xác nhận mật khẩu"
          render={(field) => (
            <InputField
              {...field}
              type="password"
              placeholder="Nhập lại mật khẩu mới"
            />
          )}
        />
      </div>

      <div className="flex items-center gap-4 pt-2">
        <PrimaryButton type="submit" isLoading={isPending} className="w-full">
          Đặt lại mật khẩu
        </PrimaryButton>
        <SecondaryButton
          type="button"
          disabled={isPending}
          onClick={() => navigate(-1)}
          className="w-full"
        >
          Quay lại
        </SecondaryButton>
      </div>
    </form>
  );
};

export default ResetNewPassword;
