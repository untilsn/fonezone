import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LoginFailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Lấy lỗi từ query params
  const searchParams = new URLSearchParams(location.search);
  const errorMessage = searchParams.get("error") || "Có lỗi xảy ra, vui lòng thử lại.";

  return (
    <div className="flex h-screen items-center justify-center bg-gradient">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <h2 className="text-xl font-bold text-red-500">Đăng nhập thất bại!</h2>
        <p className="mt-2 text-gray-600">{errorMessage}</p>
        <button
          onClick={() => navigate("/login")}
          className="mt-4 px-6 py-3  hover:bg-yellow-dark hover:text-white font-semibold transition border border-yellow"
        >
          Quay về trang đăng nhập
        </button>
      </div>
    </div>
  );
};

export default LoginFailPage;
