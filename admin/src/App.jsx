import { Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "./Layout/AuthLayout";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotPoundPage";
import ProductCreatePage from "./pages/products/ProductCreatePage";
import ProductEditPage from "./pages/products/ProductEditPage";
import ProductListPage from "./pages/products/ProductListPage";
import UserCreatePage from "./pages/users/UserCreatePage";
import UserEditPage from "./pages/users/UserEditPage";
import UserListPage from "./pages/users/UserListPage";

// Thêm các component khác nếu có
import CustomToastify from "./components/ui/CustomToastify";
import DashboardLayout from "./Layout/DashboardLayout";
import EmailResetPassword from "./pages/auth/EmailResetPassword";
import LoginPage from "./pages/auth/LoginPage";
import OtpResetPassword from "./pages/auth/OtpResetPassword";
import ResetNewPassword from "./pages/auth/ResetNewPassword";
import BrandListPage from "./pages/brands/BrandListPage";
import CategoryListPage from "./pages/categories/CategoryListPage";
import OrderListPage from "./pages/orders/OrderListPage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <div>
      <CustomToastify></CustomToastify>

      <Routes>
        {/* Redirect từ / sang admin */}

        <Route path="/" element={<Navigate to="/admin" />} />

        {/* Trang không tìm thấy */}
        <Route path="*" element={<NotFoundPage />} />

        {/* Trang đăng nhập */}
        <Route path="/admin/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="forget-password" element={<EmailResetPassword />} />
          <Route path="forget-password/otp" element={<OtpResetPassword />} />
          <Route path="forget-password/reset" element={<ResetNewPassword />} />
        </Route>

        {/* Admin layout chính */}
        <Route path="/admin" element={<DashboardLayout />}>
          {/* Dashboard */}
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="user-profile" element={<ProfilePage />} />

          {/* Users */}
          <Route path="users">
            <Route index element={<UserListPage />} />
            <Route path="create" element={<UserCreatePage />} />
            <Route path=":id/edit" element={<UserEditPage />} />
          </Route>

          {/* Products */}
          <Route path="products">
            <Route index element={<ProductListPage />} />
            <Route path="create" element={<ProductCreatePage />} />
            <Route path=":slug/edit" element={<ProductEditPage />} />
          </Route>

          {/* Brands */}
          <Route path="brands">
            <Route index element={<BrandListPage />} />
          </Route>

          {/* Categories */}
          <Route path="categories">
            <Route index element={<CategoryListPage />} />
          </Route>

          {/* Orders */}
          <Route path="orders">
            <Route index element={<OrderListPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
