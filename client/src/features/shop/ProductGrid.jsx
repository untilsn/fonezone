import React from 'react'
import ProductCard from '../../components/card/ProductCard'

const ProductGrid = () => {
  return (
    <div>
      <div>

      </div>
      <div className='grid grid-cols-3 gap-5'>
          {Array(10).fill(0).map((item, index) => (
            <ProductCard key={index}></ProductCard>
          ))}
      </div>
    </div>
  )
}

export default ProductGrid