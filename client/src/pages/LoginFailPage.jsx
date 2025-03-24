import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginFailPage = () => {
  const navigate = useNavigate()


  return (
    <div className="bg-gradient">
      <div className=" bg-white">
        <h2 className="text-xl font-bold text-red-500">Đăng nhập thất bại!</h2>
        <button
          onClick={() => navigate("/login")}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg"
        >
          Thử lại
        </button>
      </div>
    </div>

  )
}

export default LoginFailPage