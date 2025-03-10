import React from 'react';
import ProductDesc from './ProductDesc';
import ProductTerm from './ProductTerm';
import ProductReview from './ProductReview';
import SectionTabs from '../../../components/ui/SectionTabs';


const ProductTabs = () => {
  const tabsData = [
    { value: "description", label: "mô tả sản phẩm", component: ProductDesc },
    { value: "detailed parameters", label: "thông số chi tiết", component: ProductTerm },
    { value: "reviews", label: "đánh giá", component: ProductReview },
  ];

  return (
    <div className='border p-5 mb-10'>
      <SectionTabs tabs={tabsData} />
    </div>
  )
}

export default ProductTabs