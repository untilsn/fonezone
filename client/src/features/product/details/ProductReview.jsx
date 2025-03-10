import { Rating } from '@material-tailwind/react'
import React from 'react'
import RatingIcon from '../../../components/ui/RatingIcon';

const reviewsFromServer = [
  { id: 1, rating: 5 },
  { id: 2, rating: 4 },
  { id: 3, rating: 5 },
  { id: 4, rating: 5 },
  { id: 5, rating: 4 },
];


const ProductReview = () => {
  return (
    <div>

      <div className='grid grid-cols-2 gap-10 mb-20'>
        <form className='flex flex-col gap-10 '>
          <h1 className='text-xl font-semibold text-darkPrimary capitalize'>add reviews</h1>
          <div className='flex items-center'>
            <label className='font-bold text-sm capitalize max-w-[100px] w-full'>Rating</label>
            <RatingIcon iconSize={16} color='black' />
          </div>
          <div className='flex items-start'>
            <label className='font-bold text-sm capitalize max-w-[100px] w-full'>Reviews</label>
            <textarea name="review" className='outline-none border rounded-lg min-h-40 border-textColor  p-3 w-full placeholder:capitalize' placeholder='your review *' id=""></textarea>
          </div>
          <button className='py-3 px-8 rounded-lg ml-auto bg-gray-200 text-darkPrimary font-semibold text-sm capitalize transition-all hover:bg-darkPrimary hover:text-light'>
            add review
          </button>
        </form>
        <div className='p-4 flex flex-col items-center gap-3'>
          <h2 className='capitalize text-xl font-medium text-darkPrimary'>sao trung bình</h2>
          <h1 className='text-3xl font-semibold text-yellowDark'>4.3</h1>
          <span className='text-sm'>(4 lượt đánh giá)</span>

        </div>
      </div>

      <div className='flex flex-col gap-5'>
        <RatingIcon iconSize={16} color='black' />
        <p className='w-full text-sm'>Fusce vitae nibh mi. Integer posuere, libero et ullamcorper facilisis, enim eros tincidunt orci, eget vestibulum sapien nisi ut leo. Cras finibus vel est ut mollis. Donec luctus condimentum ante et euismod.</p>
        <div className='flex items-center gap-2 text-sm'>
          <h1 className=' font-semibold text-dark'>abubacker </h1>
          <span>-</span>
          <span className='text-secondary'>November 19, 2021</span>
        </div>
      </div>
    </div>
  )
}

export default ProductReview