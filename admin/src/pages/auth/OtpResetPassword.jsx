import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useLocation, useNavigate } from "react-router-dom";
import AuthHeader from "../../components/auth/AuthHeader";
import PrimaryButton from "../../components/button/PrimaryButton";
import SecondaryButton from "../../components/button/SecondaryButton";
import FormFieldControl from "../../components/form/FormFieldControl";
import InputOtpField from "../../components/form/InputOtpField";
import { useAuth } from "../../hooks/api/useAuth";
import { otpSchema } from "../../schemas/authSchema";
import { useEffect } from "react";

const OtpResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { useVerifyOtpReset } = useAuth();
  const userEmail = location?.state?.email;

  useEffect(() => {}, []);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      otp: "",
    },
    mode: "onSubmit",
    resolver: yupResolver(otpSchema),
  });

  const { mutate, isPending } = useVerifyOtpReset({
    onSuccess: (_, variables) => {
      navigate("/admin/auth/forget-password/reset", {
        state: { email: variables.email },
      });
    },
  });

  const handleOtpResetPassword = (value) => {
    mutate({ ...value, email: userEmail });
  };

  return (
    <div className="w-full max-w-md p-6 mx-auto">
      <form onSubmit={handleSubmit(handleOtpResetPassword)} className="w-full">
        <AuthHeader
          title="Xác nhận mã OTP"
          subTitle={
            <>
              Nhập mã OTP được gửi đến email{" "}
              <span className="font-medium underline text-primary">
                {userEmail}
              </span>{" "}
              để đặt lại mật khẩu.
            </>
          }
        />

        <FormFieldControl
          name="otp"
          control={control}
          label="Mã OTP"
          render={(field) => <InputOtpField {...field} />}
        />
        <div className="flex items-center gap-4 mt-6">
          <PrimaryButton type="submit" isLoading={isPending} className="w-full">
            Xác nhận
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
    </div>
  );
};

export default OtpResetPassword;
