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
