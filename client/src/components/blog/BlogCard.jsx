import React from 'react'
import { FaRegCommentDots } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

const BlogCard = () => {

  return (
    <div className=' w-full flex flex-col'>
      <img className='rounded-sm w-full h-[250px] mb-5' src="https://thinkzone.vn/uploads/2022_01/blogging-1641375905.jpg" alt="" />
      <div className='p-5'>
        <div className='flex items-center justify-between mb-2 text-sm '>
          <h1 className='capitalize'>do chung tuan</h1>
          <div className='flex items-center gap-3'>
            <i><FaRegCommentDots />
            </i>
            <span>0 Bình luận</span>
          </div>
        </div>
        <h1 className='font-semibold mb-4 text-sm text-darkPrimary'>Vì sao bạn nên có một trang blog cho công ty mình? Làm blog như thế nào?</h1>
        <button className='flex items-center gap-3'>xem thêm <FaChevronRight className='text-xs' />
        </button>
      </div>
    </div>
  )
}

export default BlogCard