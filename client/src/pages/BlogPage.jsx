import React from 'react'
import BlogList from '../components/blog/BlogList'
import BlogSidebar from '../components/blog/BlogSidebar'
import BreadcrumbPage from '../components/layout/BreadcrumbPage'

const BlogPage = () => {
  return (
    <div>
      <BreadcrumbPage></BreadcrumbPage>
      <div className=' container grid-layout'>
        <div className='col-span-9'>
          <BlogList></BlogList>
        </div>
        <div className='col-span-3'>
          <BlogSidebar></BlogSidebar>
        </div>
      </div>
    </div>
  )
}

export default BlogPage