import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginUserApi,
  loginWithGoogleApi,
  registerUserApi,
  verifyAccountApi,
  getUserProfileApi,
  logoutUserApi,
  resetPasswordApi,
  verifyOtpResetApi,
  forgetPasswordApi
} from "../api/authApi";
import { logoutUser, setUser } from "../redux/slice/userSlice";

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


  const loginWithGoogleSuccess = async () => {
    try {
      const urlParams = new URLSearchParams(window.location.search);

      const access_token = urlParams.get("access_token");

      if (access_token) {
        localStorage.setItem("access_token", access_token);
        await getUserProfile(access_token);
        navigate("/");
      } else {
        navigate("/login-fail");
      }
    } catch (err) {
      console.error("Lỗi khi đăng nhập với Google:", err.response?.data || err.message);
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
      const res = await getUserProfileApi(token);
      if (res) {
        dispatch(setUser(res.data));
      }
      return res;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const forgetPassword = async (values, setStep) => {
    try {
      const data = await forgetPasswordApi(values);
      if (data?.step) setStep(data.step);
      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const verifyOtpReset = async (values, setStep) => {
    try {
      const data = await verifyOtpResetApi(values);
      if (data?.step) setStep(data.step);
      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const resetPassword = async (values) => {
    try {
      const data = await resetPasswordApi(values);
      if (data?.success) navigate("/login");
      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const logout = async () => {
    try {
      await logoutUserApi();
      localStorage.removeItem("access_token");
      dispatch(logoutUser());
      navigate("/login");
    } catch (error) {
      console.error("Lỗi khi đăng xuất:", error);
    }
  };

  return {
    login,
    loginWithGoogle,
    loginWithGoogleSuccess,
    register,
    verifyAccount,
    getUserProfile,
    forgetPassword,
    verifyOtpReset,
    resetPassword,
    logout,
  };
};
