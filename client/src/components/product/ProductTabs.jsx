import React, { useState, useMemo } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import FeaturedProduct from "./category/FeaturedProduct";
import OnSaleProduct from "./category/OnSaleProduct";
import TopRatedProduct from "./category/TopRatedProduct";


// Định nghĩa trước componentsMap để tránh tạo lại khi component re-render
const componentsMap = {
  featured: FeaturedProduct,
  discount: OnSaleProduct,
  rated: TopRatedProduct,
};

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("featured");

  const tabsData = [
    { value: "featured", label: "Nổi bật" },
    { value: "discount", label: "Giảm giá" },
    { value: "rated", label: "Đánh giá cao" },
  ];

  // Chỉ re-render component cần thiết khi activeTab thay đổi
  const ActiveComponent = useMemo(() => componentsMap[activeTab], [activeTab]);

  return (
    <div className="w-full">
      <Tabs className="" value={activeTab}>
        <TabsHeader
          className="rounded-none bg-transparent p-2 max-w-[600px] w-full mx-auto mb-10"
          indicatorProps={{
            className: "bg-transparent border-b border-gray-900 shadow-none rounded-none",
          }}
        >
          {tabsData.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={`text-gray-900 text-xl capitalize font-bold transition-all ${
                activeTab === value ? "" : "text-gray-500 hover:text-yellow"
              }`}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          <TabPanel value={activeTab}>
            {ActiveComponent && <ActiveComponent />}
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default ProductTabs;
