import React from 'react'
import { Outlet } from "react-router-dom"

const ProfileSidebar = () => {
  return (
    <div className='bg-blue/50 p-10 rounded-lg'>
      <div className='flex flex-col gap-3 items-center'>
        <img className='max-w-[100px] h-[100xp] object-cover' src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="" />
        <div className='text-sm'>user name</div>
        <div className='text-lg font-semibold text-dark-primary'>user@gmail.com</div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default ProfileSidebar