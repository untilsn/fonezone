import React from 'react'
import BlogList from '../components/blog/BlogList'
import BlogSidebar from '../components/blog/BlogSidebar'
import BreadcrumbPage from '../components/layout/BreadcrumbPage'

const BlogPage = () => {
  return (
    <div>
      <BreadcrumbPage></BreadcrumbPage>
      <div className='flex items-center gap-5 container py-10'>
        <BlogList></BlogList>
        <BlogSidebar></BlogSidebar>
      </div>
    </div>
  )
}

export default BlogPage