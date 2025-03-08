import React from 'react'
import SectionTitle from '../ui/SectionTitle'
import BlogCard from './BlogCard'

const BlogSection = () => {
  return (
    <div>
      <SectionTitle title='blog mới đăng' subTitle='Khám phá tin tức mới nhất, ưu đãi hấp dẫn và nhiều điều thú vị!'></SectionTitle>
      <div className='flex gap-5 items-center justify-between'>
        {Array(3).fill(0).map((b, index) => (
          <BlogCard key={index}></BlogCard>
        ))}
      </div>
    </div>
  )
}

export default BlogSection