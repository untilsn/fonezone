import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginUserApi,
  loginWithGoogleApi,
  registerUserApi,
  verifyAccountApi,
  getUserProfileApi,
  forgetPassword,
  verifyOtpReset,
  resetPassword,
  refreshToken,
  logoutUser
} from "../api/authApi"; // Đổi thành đúng file API của bạn
import { logout, setUser } from "../redux/slice/userSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (values) => {
    try {
      const data = await loginUserApi(values);
      if (data?.access_token) {
        localStorage.setItem("access_token", data.access_token);
        await getUserProfile(data.access_token);
        navigate("/");
      }
      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const loginWithGoogle = async () => {
    try {
      loginWithGoogleApi();
    } catch (err) {
      console.error(err);
      navigate("/login-fail");
    }
  };

  const register = async (values) => {
    try {
      const data = await registerUserApi(values);
      if (data?.email) {
        navigate("/verify-account", { state: { email: data.email } });
      }
      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const verifyAccount = async (values) => {
    try {
      const data = await verifyAccountApi(values);
      if (data?.access_token) {
        localStorage.setItem("access_token", data.access_token);
        await getUserProfile(data.access_token);
        navigate("/");
      }
      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const getUserProfile = async (token) => {
    try {
      if (!token) return null;
      const data = await getUserProfileApi(token);
      if (data) {
        dispatch(setUser(data));
      }
      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const forgetPassword = async (values, setStep) => {
    try {
      const data = await forgetPassword(values);
      if (data?.step) setStep(data.step);
      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const verifyOtpReset = async (values, setStep) => {
    try {
      const data = await verifyOtpReset(values);
      if (data?.step) setStep(data.step);
      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const resetPassword = async (values) => {
    try {
      const data = await resetPassword(values);
      if (data?.success) navigate("/login");
      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const refreshToken = async () => {
    try {
      return await refreshToken();
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
      localStorage.removeItem("access_token");
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error("Lỗi khi đăng xuất:", error);
    }
  };

  return {
    login,
    loginWithGoogle,
    register,
    verifyAccount,
    getUserProfile,
    forgetPassword,
    verifyOtpReset,
    resetPassword,
    refreshToken,
    logout,
  };
};
