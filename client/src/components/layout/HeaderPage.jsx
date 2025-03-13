import React from 'react';

const HeaderPage = ({ title = "List", subtitle = "Very us more blessed multiphy night" }) => {
  return (
    <div className='border-b border-gray-100'>
      <div
        className="py-14"
        style={{
          backgroundImage: `url('/banner/page_header.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="text-center capitalize">
          <h1 className="text-4xl text-darkPrimary font-medium">{title}</h1>
          <h2 className="mt-2 text-lg text-yellow-dark">{subtitle}</h2>
        </div>
      </div>
    </div>

  )
}

export default HeaderPage