import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../components/ui/Logo";

const AuthLayout = ({}) => {
  return (
    <div className="grid grid-cols-2">
      <div className="relative flex flex-col items-center justify-center w-full max-w-lg min-h-screen p-10 mx-auto">
        <Link to="/" className="absolute top-5 left-5">
          <Logo color="" subColor="#056ee9"></Logo>
        </Link>
        <Outlet></Outlet>
      </div>
      <div
        style={{ backgroundImage: `url("/public/welcome.jpg")` }}
        className="min-h-screen bg-center bg-no-repeat bg-cover"
      ></div>
    </div>
  );
};

export default AuthLayout;
