import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/banner/error-bg.webp')] bg-center bg-cover bg-no-repeat opacity-50"></div>

      {/* Nội dung */}
      <div className="relative z-10 max-w-xl text-center p-6">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg">
          Rất tiếc, trang bạn yêu cầu hiện không khả dụng.
        </p>
        <Link className="block p-5 border border-yellow text-lg font-semibold mt-5 capitalize hover:bg-yellow hover:text-white transition-colors" to="/">quay về trang chủ</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
