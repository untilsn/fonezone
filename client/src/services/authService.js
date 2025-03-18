import { forgetPassword, getUserProfile, loginUser, logoutUser, registerUser, resetPassword, verifyAccount, verifyOtpReset } from "../api/authApi"
import { logout, setUser } from "../redux/slice/userSlice"


export const handleLoginUser = async (values, navigate, dispatch) => {
  try {
    const res = await loginUser(values)
    if (res?.access_token) {
      localStorage.setItem("access_token", JSON.stringify(res.access_token))
      await handleGetUserProfile(res.access_token, dispatch)
      navigate("/")
    }
    return res
  } catch (err) {
    console.error(err.response?.data || err.message);
    throw err;
  }
}


export const handleRegisterUser = async (values, navigate) => {
  try {
    const res = await registerUser(values)
    if (res?.email) {
      navigate("/verify-account", { state: { email: res.email } })
    }
    return res
  } catch (err) {
    console.error(err.response?.data || err.message);
    throw err;
  }
}


export const handleVerifyAccount = async (values, navigate, dispatch) => {
  try {
    const res = await verifyAccount(values)
    if (res?.access_token) {
      localStorage.setItem("access_token", JSON.stringify(res.access_token))
      await handleGetUserProfile(res.access_token, dispatch)
      navigate("/")
    }
    return res
  } catch (err) {
    console.error(err.response?.data || err.message);
    throw err;
  }
}


export const handleGetUserProfile = async (token, dispatch) => {
  try {
    if (!token) return null;
    const res = await getUserProfile(token)
    if (res?.data) {
      dispatch(setUser(res.data))
    }
    return res
  } catch (err) {
    console.error(err.response?.data || err.message);
    throw err;
  }
}



export const handleForgetPassword = async (values, setStep) => {
  try {
    const res = await forgetPassword(values)
    console.log(res)
    if (res &&res?.step) {
      setStep(res.step)
    }
    return res
  } catch (err) {
    console.error(err.response?.data || err.message);
    throw err;
  }
}


export const handleVerifyOtpReset = async (values) => {
  try {
    const res = await verifyOtpReset(values)
    if (res?.step) {
      setStep(res.step)
    }
    return res
  } catch (err) {
    console.error(err.response?.data || err.message);
    throw err;
  }
}


export const handleResetPassword = async (values) => {
  try {
    const res = await resetPassword(values)
    if (res?.step) {
      setStep(res.step)
    }
    return res
  } catch (err) {
    console.error(err.response?.data || err.message);
    throw err;
  }
}



export const handleLogoutUser = async (dispatch) => {
  try {
    await logoutUser()
    dispatch(logout())
    localStorage.clear()
  } catch (err) {
    console.error(err.response?.data || err.message);
    throw err;
  }
}
