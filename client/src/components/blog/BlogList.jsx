import React from 'react'
import BlogCardPage from './BlogCardPage'

const BlogList = () => {
  return (
    <div className='flex flex-col gap-5 '>
      {Array(5).fill(0).map((item, index) => (
        <div key={index}>
          <BlogCardPage></BlogCardPage>
        </div>
      ))}
    </div>
  )
}

export default BlogList