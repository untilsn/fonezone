import React from 'react'

const SectionTitle = ({ title = "Ưu Đãi & Outlet", subTitle}) => {
  return (
    <div className='text-center'>
      <h1 className='capitalize text-xl text-dark font-semibold mb-2'>
        {title}
      </h1>
      {subTitle && (
        <h2 className='mt-2 text-[15px] text-gray text-opacity-70 mb-10'>
          {subTitle}
        </h2>
      )}
    </div>
  )
}

export default SectionTitle