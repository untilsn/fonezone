import React from 'react'
import Header from './components/layout/header/Header'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Footer from './components/layout/Footer'
import RegisterPage from './pages/RegisterPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import NotFoundPage from './pages/NotFoundPage'
import ShopPage from './pages/ShopPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import WishlistPage from './pages/WishlistPage'
import CartPage from './pages/CartPage'
import BlogPage from './pages/BlogPage'
import AboutPage from './pages/AboutPage'
import ProfilePage from './pages/ProfilePage'
import VerifyAccountPage from './pages/VerifyAccountPage'
import CustomToastify from './components/ui/CustomToastify'
import LoginSuccessPage from './pages/LoginSuccessPage'
import LoginFailPage from './pages/LoginFailPage'
import SidebarAccount from './components/profile/sidebar/SidebarAccount'
import SidebarReview from './components/profile/sidebar/SidebarReview'
import SidebarWishlist from './components/profile/sidebar/SidebarWishlist'
import SiderbarOrder from './components/profile/sidebar/SiderbarOrder'
import SidebarChangepassword from './components/profile/sidebar/SidebarChangepassword'
import SidebarMessage from './components/profile/sidebar/SidebarMessage'
import ScrollTopButton from './components/common/ScrollTopButton'
import CheckoutPage from './pages/CheckoutPage'

const App = () => {
  return (
    <div>
      <CustomToastify></CustomToastify>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/login-success' element={<LoginSuccessPage />} />
        <Route path='/login-fail' element={<LoginFailPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/reset-password' element={<ResetPasswordPage />} />
        <Route path='/verify-account' element={<VerifyAccountPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/product' element={<ProductDetailsPage />} />
        <Route path='/wishlist' element={<WishlistPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/profile' element={<ProfilePage />} >
          <Route path='account' element={<SidebarAccount />} />
          <Route path='message' element={<SidebarMessage />} />
          <Route path='change-password' element={<SidebarChangepassword />} />
          <Route path='review' element={<SidebarReview />} />
          <Route path='wishlist' element={<SidebarWishlist />} />
          <Route path='order' element={<SiderbarOrder />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer></Footer>
      <ScrollTopButton></ScrollTopButton>
    </div>
  )
}

export default App