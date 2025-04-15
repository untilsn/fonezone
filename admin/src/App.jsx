import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import UserListPage from "./pages/users/UserListPage";
import AdminLayout from "./Layout/AdminLayout";
import UserCreatePage from "./pages/users/UserCreatePage";
import UserEditPage from "./pages/users/UserEditPage";
import ProductListPage from "./pages/products/ProductListPage";
import ProductCreatePage from "./pages/products/ProductCreatePage";
import ProductEditPage from "./pages/products/ProductEditPage";
import NotPoundPage from "./pages/NotPoundPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={"/admin"} />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="*" element={<NotPoundPage />} />
          <Route index element={<DashboardPage />} />
          {/* users */}
          <Route path="users">
            <Route index element={<UserListPage />} />
            <Route path="create" element={<UserCreatePage />} />
            <Route path=":id/edit" element={<UserEditPage />} />
          </Route>
          {/* products */}
          <Route path="products">
            <Route index element={<ProductListPage />} />
            <Route path="create" element={<ProductCreatePage />} />
            <Route path=":id/edit" element={<ProductEditPage />} />
          </Route>
          {/* brand */}
          <Route path="products">
            <Route index element={<ProductListPage />} />
            <Route path="create" element={<ProductCreatePage />} />
            <Route path=":id/edit" element={<ProductEditPage />} />
          </Route>
          {/* category */}
          <Route path="products">
            <Route index element={<ProductListPage />} />
            <Route path="create" element={<ProductCreatePage />} />
            <Route path=":id/edit" element={<ProductEditPage />} />
          </Route>
          {/* order */}
          <Route path="products">
            <Route index element={<ProductListPage />} />
            <Route path="create" element={<ProductCreatePage />} />
            <Route path=":id/edit" element={<ProductEditPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
