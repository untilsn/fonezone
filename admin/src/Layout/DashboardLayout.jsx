import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";

const DashboardLayout = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-1 pl-64">
        <Header />
        <main className="px-6 py-7">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
