import React from 'react'

const BlogCardPage = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img src="https://d-themes.com/wordpress/molla/demo-2/wp-content/uploads/sites/4/2020/03/blog-3.jpg" alt="Blog Image" className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-lg font-semibold opacity-0 hover:opacity-100">View Image</span>
        </div>
      </div>
      <div className="p-4">
        <span className="text-gray-500 text-sm">by John Doe, March 29, 2020</span>
        <h2 className="text-xl font-bold mt-2 hover:text-yellow-700 transition-colors duration-300">
          Aenean dignissim pellentesque felis
        </h2>
        <p className="text-gray-600 mt-2">in Hobbies, Travel</p>
        <p className="text-gray-700 mt-2">Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices...</p>
        <a href="#" className="mt-4 inline-block text-orange-500 hover:font-bold hover:border-b-2 hover:border-orange-500 transition-all duration-300">Read More</a>
      </div>
    </div>
  )
}

export default BlogCardPage