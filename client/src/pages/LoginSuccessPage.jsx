import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleLoginGoogle } from "../services/authService";
import { useDispatch } from "react-redux";

const LoginSuccessPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    handleLoginGoogle(navigate, dispatch);
  }, [navigate, dispatch]);

  return (
    <div className="bg-gradient">
      <div className="text-xl font-bold text-gray-800 bg-white p-10 z-10">Đang xử lý đăng nhập...</div>
    </div>
  );
};

export default LoginSuccessPage;
