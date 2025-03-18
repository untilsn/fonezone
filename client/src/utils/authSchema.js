import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .required("Vui lòng nhập địa chỉ email")
    .email("Email không hợp lệ"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "Mật khẩu phải có ít nhất 8 ký tự"),
});

// register
export const registerSchema = yup.object({
  name: yup
    .string()
    .required("Vui lòng nhập tên người dùng")
    .max(24, "Tên người dùng không được quá 24 ký tự"),
  email: yup
    .string()
    .required("Vui lòng nhập địa chỉ email")
    .email("Email không hợp lệ"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "Mật khẩu phải có ít nhất 8 ký tự"),
  confirmPassword: yup
    .string()
    .required("Vui lòng nhập lại mật khẩu")
    .oneOf([yup.ref("password"), null], "Mật khẩu nhập lại không khớp"),
});


export const verifySchema = yup.object().shape({
  otp: yup
    .string()
    .length(6, 'OTP phải có 6 chữ số')
    .matches(/^[0-9]+$/, 'OTP chỉ được chứa số')
    .required('OTP là bắt buộc'),
});