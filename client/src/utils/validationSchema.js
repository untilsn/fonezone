import * as yup from "yup";

// login 
export const loginSchema = yup.object({
  loginEmail: yup
    .string()
    .required("Email address is required")
    .email("Your email is invalid"),
  loginPassword: yup
    .string()
    .required("Password is required")
    .min(8, "Your password must be at least 8 character or greater"),
})

// register
export const registerSchema = yup.object({
  signupUsername: yup
    .string()
    .required("Username is required")
    .max(14, "Username must not exceed 14 characters"),
  signupEmail: yup
    .string()
    .required("Email address is required")
    .email("Your email is invalid"),
  signupPassword: yup
    .string()
    .required("Password is required")
    .min(8, "Your password must be at least 8 character or greater"),
  signupConfirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref("signupPassword"), null], "Confirm password must match the password"),
});


