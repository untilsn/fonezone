import React from 'react'
import HeaderPage from '../components/layout/HeaderPage'
import ProfileSidebar from '../components/profile/ProfileSidebar'

const ProfilePage = () => {
  return (
    <div className=''>
      <HeaderPage title='profile' subtitle='home'></HeaderPage>
      <div className='container grid-layout'>
        <div className='col-span-3'>
          <ProfileSidebar></ProfileSidebar>
        </div>
        <div className='col-span-9'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque vitae labore asperiores, blanditiis qui repudiandae odit aliquam, ad facilis, ipsam esse reprehenderit est dignissimos fuga nihil alias exercitationem eligendi? Quo?
        </div>
      </div>
    </div>
  )
}

export default ProfilePage