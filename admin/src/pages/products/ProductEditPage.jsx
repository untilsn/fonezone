import React from "react";
import HeaderPage from "../../components/header/HeaderPage";
import MainButton from "../../components/commons/MainButton";
import { useForm } from "react-hook-form";

const ProductEditPage = () => {
  const {} = useForm({
    mode: "onSubmit",
    defaultValues: {},
  });

  return (
    <div>
      <HeaderPage title="Chỉnh sửa sản phẩm">
        <MainButton>Chỉnh sửa sản phẩm</MainButton>
      </HeaderPage>

      <form className="py-10 border-t border-gray-300">
        <div></div>
        <div></div>
      </form>
    </div>
  );
};

export default ProductEditPage;
