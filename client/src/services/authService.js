import { getUserProfile, registerUser, verifyAccount } from "../api/authApi"
import { setUser } from "../redux/slice/userSlice"


export const handleRegisterUser = async (values, navigate) => {
  try {
    const data = await registerUser(values)
    if (data?.email) {
      navigate("/verify-account", { state: { email: data.email } })
    }
    return data
  } catch (err) {
    console.error(err.response?.data || err.message);
    throw err;
  }
}


export const handleVerifyAccount = async (values, navigate, dispatch) => {
  try {
    const data = await verifyAccount(values)
    if (data?.access_token) {
      localStorage.setItem("access_token", JSON.stringify(data.access_token))
      await handleGetUserProfile(data.access_token, dispatch)
      navigate("/")
    }
    return data
  } catch (err) {
    console.error(err.response?.data || err.message);
    throw err;
  }
}


export const handleGetUserProfile = async (token, dispatch) => {
  try {
    if (!token) {
      console.error("Token không hợp lệ!");
      return null;
    }
    console.log(data)
    const data = await getUserProfile(token)
    if (data.user) {
      dispatch(setUser(data))
    }
    console.log(data)
    return data
  } catch (err) {
    console.error(err.response?.data || err.message);
    throw err;
  }
}
