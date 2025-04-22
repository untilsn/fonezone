import React, { useState } from "react";
import HeaderPage from "../../components/header/HeaderPage";
import { useForm } from "react-hook-form";
import { productSchema } from "../../utils/productSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../components/form/InputField";
import FormFieldControl from "../../components/form/FormFieldControl";
import ButtonSubmit from "../../components/commons/ButtonSubmit";
import TextEditorField from "../../components/form/TextEditorField";
import SelectField from "../../components/form/SelectField";
import MultiSelectField from "../../components/form/MultiSelectField";

const ProductCreatePage = () => {
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      price: "",
      discount: "",
      description: "",
      stock: "",
      brand: "",
      ram: [],
      storage: [],
    },
    resolver: yupResolver(productSchema),
  });

  const handleCreateProduct = (values) => {
    console.log(values);
  };

  return (
    <div className="">
      <HeaderPage title="Thêm sản phẩm"></HeaderPage>
      <div>
        <form onSubmit={handleSubmit(handleCreateProduct)}>
          <div className="border border-gray-300 shadow-lg rounded-xl">
            <h1 className="px-4 py-4 text-base font-semibold border-b border-gray-300">
              Thông tin sản phẩm
            </h1>
            <div className="flex flex-col gap-3 p-5">
              {/* name */}
              <FormFieldControl
                control={control}
                name="name"
                label="Tên sản phẩm"
                render={({ value, onChange, name }) => (
                  <InputField
                    value={value}
                    onChange={onChange}
                    name={name}
                    placeholder="tên sản phẩm"
                  />
                )}
              />
              {/* price n discount */}
              <div className="flex items-center justify-center w-full gap-10">
                <div className="w-1/2">
                  <FormFieldControl
                    control={control}
                    name="price"
                    label="giá sản phẩm"
                    render={({ value, onChange, name }) => (
                      <InputField
                        value={value}
                        onChange={onChange}
                        name={name}
                        placeholder="nhập giá sản phẩm"
                      />
                    )}
                  />
                </div>
                <div className="w-1/2">
                  <FormFieldControl
                    control={control}
                    name="discount"
                    label="phần trăm giảm giá"
                    render={({ value, onChange, name }) => (
                      <InputField
                        value={value}
                        onChange={onChange}
                        name={name}
                        placeholder="nhập phần trăm giảm giá"
                      />
                    )}
                  />
                </div>
              </div>
              {/* category n brand */}
              <div className="flex items-center w-full gap-10">
                <div className="w-1/2">
                  <FormFieldControl
                    control={control}
                    name="brand"
                    label="thương hiệu"
                    render={({ value, onChange }) => (
                      <SelectField value={value} onChange={onChange} />
                    )}
                  />
                </div>
                <div className="w-1/2">
                  <FormFieldControl
                    control={control}
                    name="category"
                    label="danh mục"
                    render={({ value, onChange }) => (
                      <SelectField value={value} onChange={onChange} />
                    )}
                  />
                </div>
              </div>
              {/* ram n storage */}
              <div className="flex items-center justify-center w-full gap-10">
                <div className="w-1/2">
                  <FormFieldControl
                    name="ram"
                    control={control}
                    label="Chọn Bộ nhớ"
                    render={(field) => (
                      <MultiSelectField
                        field={field}
                        options={[
                          { label: "64GB", value: "64GB" },
                          { label: "128GB", value: "128GB" },
                          { label: "256GB", value: "256GB" },
                        ]}
                      />
                    )}
                  />
                </div>
                <div className="w-1/2">
                  <FormFieldControl
                    name="storage"
                    control={control}
                    label="Chọn Bộ nhớ"
                    render={(field) => (
                      <MultiSelectField
                        field={field}
                        options={[
                          { label: "64GB", value: "64GB" },
                          { label: "128GB", value: "128GB" },
                          { label: "256GB", value: "256GB" },
                        ]}
                      />
                    )}
                  />
                </div>
              </div>
              {/* desc */}
              <FormFieldControl
                control={control}
                name="description"
                label="mô tả sản phẩm"
                render={({ value, onChange }) => (
                  <TextEditorField initialValue={value} onChange={onChange} />
                )}
              />
            </div>
          </div>
          <ButtonSubmit>tạo sản phẩm</ButtonSubmit>
        </form>
      </div>
    </div>
  );
};

export default ProductCreatePage;
