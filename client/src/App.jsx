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
import ScrollTopButton from './components/button/ScrollTopButton'
import BlogPage from './pages/BlogPage'
import AboutPage from './pages/AboutPage'
import ProfilePage from './pages/ProfilePage'

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/reset-password' element={<ResetPasswordPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/product' element={<ProductDetailsPage />} />
        <Route path='/wishlist' element={<WishlistPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer></Footer>
      <ScrollTopButton></ScrollTopButton>  
    </div>
  )
}

export default App