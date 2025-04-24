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
import ImageUploadField from "../../components/form/ImageUploadField";
import { useBrand } from "../../hooks/queries/useBrand";

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
      images: [],
    },
    // resolver: yupResolver(productSchema),
  });

  const { data: brands, isLoading } = useBrand();
  console.log(brands);

  const handleCreateProduct = (values) => {
    console.log(values);
  };

  return (
    <div className="">
      <HeaderPage title="Thêm sản phẩm"></HeaderPage>
      <div>
        <form
          onSubmit={handleSubmit(handleCreateProduct)}
          className="flex flex-col gap-5"
        >
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
                        type="number"
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
                        type="number"
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
                      <SelectField
                        value={value}
                        onChange={onChange}
                        options={brands?.data?.map((brand) => ({
                          label: brand.name,
                          value: brand._id,
                        }))}
                      />
                    )}
                  />
                </div>
                <div className="w-1/2">
                  <FormFieldControl
                    control={control}
                    name="category"
                    label="danh mục"
                    render={({ value, onChange }) => (
                      <SelectField
                        isMulti={true}
                        value={value}
                        onChange={onChange}
                      />
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
          {/* uplaod image */}
          <div className="border border-gray-300 shadow-lg rounded-xl">
            <h1 className="px-4 py-4 text-base font-semibold border-b border-gray-300">
              Hình ảnh sản phẩm
            </h1>
            <div className="flex flex-col gap-3 p-5">
              <div>
                <h3 className="block mb-2 text-xs font-medium capitalize">
                  Media <span className="ml-1 text-red-500">*</span>
                </h3>
                <FormFieldControl
                  name="images"
                  control={control}
                  render={(field) => (
                    <ImageUploadField
                      value={field.value}
                      onChange={field.onChange}
                      maxFiles={5}
                    />
                  )}
                />
              </div>
            </div>
          </div>
          <ButtonSubmit>tạo sản phẩm</ButtonSubmit>
        </form>
      </div>
    </div>
  );
};

export default ProductCreatePage;
