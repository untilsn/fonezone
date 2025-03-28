import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";

const LoginSuccessPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginWithGoogleSuccess } = useAuth();

  useEffect(() => {
    loginWithGoogleSuccess()
  }, [navigate, dispatch]);

  return (
    <div className="bg-gradient">
      <div className="text-xl font-bold text-gray-800 bg-white p-10 z-10">Đang xử lý đăng nhập...</div>
    </div>
  );
};

export default LoginSuccessPage;
