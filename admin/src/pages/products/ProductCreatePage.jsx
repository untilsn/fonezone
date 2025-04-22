import React, { useState } from "react";
import HeaderPage from "../../components/header/HeaderPage";
import { useForm } from "react-hook-form";
import { productSchema } from "../../utils/productSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../components/form/InputField";
import TextEditor from "../../components/commons/TextEditor";

const ProductCreatePage = () => {
  const { control, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {},
    resolver: yupResolver(productSchema),
  });

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    // Các trường khác
  });

  const handleDescriptionChange = (htmlContent) => {
    setFormData({
      ...formData,
      description: htmlContent,
    });
  };

  return (
    <div className="">
      <HeaderPage title="Thêm sản phẩm"></HeaderPage>
      <div>
        <form>
          <div className="border border-gray-300 shadow-lg rounded-xl">
            <h1 className="px-4 py-4 text-base font-semibold border-b border-gray-300">
              Thông tin sản phẩm
            </h1>
            <div className="flex flex-col gap-5 p-5">
              <InputField
                control={control}
                name="name"
                label="tên sản phẩm"
                placeholder="điền tên sản phẩm"
              />
              <div className="flex items-center justify-center w-full gap-5">
                <InputField
                  control={control}
                  name="name"
                  label="giá sản phẩm"
                  placeholder="giá sản phẩm"
                />
                <InputField
                  control={control}
                  name="name"
                  label="giảm giá"
                  placeholder="phần trăm giảm giá"
                />
              </div>
              <TextEditor
                initialValue={formData.description}
                onChange={handleDescriptionChange}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductCreatePage;
