import React, { useState } from "react";
import HeaderPage from "../../components/header/HeaderPage";
import TableLayout from "../../components/table/TableLayout";
import Table from "../../components/table/Table";
import { ProductColumn } from "../../components/table/columns/ProductColumn";

export const dummyProducts = [
  {
    img: "https://cdn.shopify.com/s/files/1/0070/7032/files/JBL_Photive_wireless_speaker.jpg?v=1613618236",
    product: "Photive wireless speakers",
    type: "Electronics",
    stock: true,
    sku: "2384741241",
    price: 65,
    variants: 2,
  },
  {
    img: "https://cdn.pixabay.com/photo/2016/03/27/21/16/shoes-1284666_1280.jpg",
    product: "Topman shoe",
    type: "Shoes",
    stock: true,
    sku: "412123847",
    price: 21,
    variants: 4,
  },
  {
    img: "https://cdn.pixabay.com/photo/2015/12/09/18/15/sunglasses-1081755_1280.jpg",
    product: "RayBan black sunglasses",
    type: "Accessories",
    stock: false,
    sku: "8472341241",
    price: 37,
    variants: 1,
  },
  {
    img: "https://cdn.pixabay.com/photo/2016/03/23/04/00/shoes-1273073_1280.jpg",
    product: "Mango Women's shoe",
    type: "Shoes",
    stock: true,
    sku: "2412384741",
    price: 65,
    variants: 3,
  },
];

const ProductListPage = () => {
  const [data, setData] = useState(dummyProducts);

  const handleToggleStock = (index) => {
    const newData = [...data];
    newData[index].stock = !newData[index].stock;
    setData(newData);
  };
  const columns = ProductColumn(handleToggleStock);

  return (
    <div>
      <HeaderPage title="Danh sách sản phẩm">
        <button className="p-3 text-xs font-medium text-white capitalize rounded-sm bg-primary">
          thêm sản phẩm
        </button>
      </HeaderPage>
      <TableLayout>
        <Table data={dummyProducts} columns={columns}></Table>
      </TableLayout>
    </div>
  );
};

export default ProductListPage;
