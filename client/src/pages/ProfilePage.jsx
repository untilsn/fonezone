import React, { useEffect } from 'react'
import HeaderPage from '../components/layout/HeaderPage'
import ProfileSidebar from '../components/profile/ProfileSidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BreadcrumbPage from '../components/layout/BreadcrumbPage'

const ProfilePage = () => {
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()
  useEffect(() => {
    if (!user || !user._id) { 
      navigate("/login");
    }
  }, [user, navigate]);
  
  return (
    <div className=''>
      <HeaderPage title='profile' subtitle='home'></HeaderPage>
      <BreadcrumbPage></BreadcrumbPage>  
      <div className='container grid-layout'>
        <div className='col-span-3'>
          <ProfileSidebar></ProfileSidebar>
        </div>
        <div className='col-span-9'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage