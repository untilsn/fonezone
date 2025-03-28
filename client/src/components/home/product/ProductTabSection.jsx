import React from "react";
import SectionTitle from "../../ui/SectionTitle";
import SectionTabs from "../../ui/SectionTabs";
import FeaturedProduct from "./FeaturedProduct";
import OnSaleProduct from "./OnSaleProduct";
import TopRatedProduct from "./TopRatedProduct";



const ProductTabSection = () => {
  const tabsData = [
    { value: "featured", label: "Nổi bật", component: FeaturedProduct },
    { value: "discount", label: "Giảm giá", component: OnSaleProduct },
    { value: "rated", label: "Đánh giá cao", component: TopRatedProduct },
  ];

  return (
    <div>
      <SectionTitle title="Xu hướng sản phẩm" />
      <SectionTabs tabs={tabsData} />
    </div>
  );
};

export default ProductTabSection;
