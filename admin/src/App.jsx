import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import UserListPage from "./pages/users/UserListPage";
import AdminLayout from "./Layout/AdminLayout";
import UserCreatePage from "./pages/users/UserCreatePage";
import UserEditPage from "./pages/users/UserEditPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={"/admin"} />}></Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />}></Route>
          {/* users */}
          <Route path="users">
            <Route index element={<UserListPage />}></Route>
            <Route path="create" element={<UserCreatePage />}></Route>
            <Route path=":id/edit" element={<UserEditPage />}></Route>
          </Route>
          {/* products */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
