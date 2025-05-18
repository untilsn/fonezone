// src/hooks/api/useAuth.ts
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser, setUser } from "../../redux/slice/userSlice";
import { authService } from "../../services/authService";
import { useApiHandler } from "./useApiHandler";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { useMutationHook } = useApiHandler();

  const fetchAndSetUser = async (token) => {
    const res = await authService.getProfile(token);
    dispatch(setUser(res.data));
  };

  const useLogin = (options = {}) =>
    useMutationHook(async (values) => {
      const data = await authService.login(values);
      if (data?.access_token) {
        localStorage.setItem("access_token", data.access_token);
        await fetchAndSetUser(data.access_token);
      }
      return data;
    }, options);

  // const useRegister = (options = {}) =>
  //   useMutationHook(authService.register, options);

  // const useVerifyAccount = (options = {}) =>
  //   useMutationHook(async (values) => {
  //     const data = await authService.verifyAccount(values);
  //     if (data?.access_token) {
  //       localStorage.setItem("access_token", data.access_token);
  //       await fetchAndSetUser(data.access_token);
  //     }
  //     return data;
  //   }, options);

  const useForgetPassword = (options = {}) =>
    useMutationHook(authService.forgetPassword, options);

  const useVerifyOtpReset = (options = {}) =>
    useMutationHook(authService.verifyOtpReset, options);

  const useResetPassword = (options = {}) =>
    useMutationHook(authService.resetPassword, options);

  const useLogout = (options = {}) =>
    useMutationHook(async () => {
      dispatch(logoutUser());
      localStorage.removeItem("access_token");
      return await authService.logout();
    }, options);

  const loginWithGoogle = () => {
    authService.loginWithGoogle();
  };

  const loginWithGoogleSuccess = async () => {
    const navigate = useNavigate(); // Phải gọi trong component
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const access_token = urlParams.get("access_token");
      if (access_token) {
        localStorage.setItem("access_token", access_token);
        await fetchAndSetUser(access_token);
        navigate("/");
      } else {
        navigate("/login-fail");
      }
    } catch (err) {
      console.error("Lỗi đăng nhập Google:", err);
      navigate("/login-fail");
    }
  };

  return {
    useLogin,
    // useRegister,
    // useVerifyAccount,
    useForgetPassword,
    useVerifyOtpReset,
    useResetPassword,
    useLogout,
    loginWithGoogle,
    loginWithGoogleSuccess,
  };
};
