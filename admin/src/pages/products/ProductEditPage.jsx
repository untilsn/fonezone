import React from "react";
import { useForm } from "react-hook-form";
import PrimaryButton from "../../components/button/PrimaryButton";
import HeaderPage from "../../components/header/HeaderPage";

const ProductEditPage = () => {
  const {} = useForm({
    mode: "onSubmit",
    defaultValues: {},
  });

  return (
    <div>
      <HeaderPage title="Chỉnh sửa sản phẩm">
        <PrimaryButton>Chỉnh sửa sản phẩm</PrimaryButton>
      </HeaderPage>

      <form className="py-10 border-t border-gray-300">
        <div></div>
        <div></div>
      </form>
    </div>
  );
};

export default ProductEditPage;
