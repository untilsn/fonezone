import { axiosBase } from "./axiosBase";

export const refreshTokenApi = async () => {
  try {
    const res = await axiosBase.post("/api/auth/refresh-token");
    console.log("Refresh API Response:", res.data);
    return res.data;
  } catch (err) {
    console.error(
      "Error from refreshTokenApi:",
      err.response?.data || err.message,
    );
    throw err;
  }
};
