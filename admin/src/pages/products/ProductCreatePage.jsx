import React from "react";
import { useForm } from "react-hook-form";
import PrimaryButton from "../../components/button/PrimaryButton";
import FormFieldControl from "../../components/form/FormFieldControl";
import ImageUploadField from "../../components/form/ImageUploadField";
import InputField from "../../components/form/InputField";
import SelectField from "../../components/form/SelectField";
import TextEditorField from "../../components/form/TextEditorField";
import HeaderPage from "../../components/header/HeaderPage";
import { useBrand } from "../../hooks/queries/useBrand";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "../../utils/productSchema";
import { useQueryHook } from "../../hooks/useQueryHook";
import { useBrands } from "../../hooks/useBrands";

const defaultValues = {
  name: "",
  slug: "",
  price: "",
  discount: 0,
  discountPrice: 0,
  stock: 0,
  brand: "",
  category: "",
  images: [],
  colors: [],
  ram: [],
  storage: [],
  description: "",
  specifications: {},
  rating: 0,
  isFeatured: false,
  view: 0,
};

const ProductCreatePage = () => {
  const { getAllBrands } = useBrands();
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
    defaultValues,
    resolver: yupResolver(productSchema),
  });

  const { data: brands, isLoading } = useBrand();
  const { data } = useQueryHook("brands", getAllBrands());
  console.log(data);

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
          <div className="rounded-xl border border-gray-300 shadow-lg">
            <h1 className="border-b border-gray-300 px-4 py-4 text-base font-semibold">
              Thông tin sản phẩm
            </h1>
            <div className="flex flex-col gap-3 p-5">
              {/* name */}
              <FormFieldControl
                control={control}
                name="name"
                label="Tên sản phẩm"
                render={(field) => (
                  <InputField {...field} placeholder="tên sản phẩm" />
                )}
              />
              {/* price n discount */}
              <div className="flex w-full items-center justify-center gap-10">
                <div className="w-1/2">
                  <FormFieldControl
                    control={control}
                    name="price"
                    label="giá sản phẩm"
                    render={(field) => (
                      <InputField
                        {...field}
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
                    render={(field) => (
                      <InputField
                        {...field}
                        type="number"
                        placeholder="nhập phần trăm giảm giá"
                      />
                    )}
                  />
                </div>
              </div>
              {/* category n brand */}
              <div className="flex w-full items-center gap-10">
                <div className="w-1/2">
                  <FormFieldControl
                    control={control}
                    name="brand"
                    label="thương hiệu"
                    render={(field) => (
                      <SelectField
                        {...field}
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
                    render={(field) => (
                      <SelectField {...field} isMulti={true} />
                    )}
                  />
                </div>
              </div>
              {/* ram n storage */}
              <div className="flex w-full items-center justify-center gap-10">
                <div className="w-1/2">
                  <FormFieldControl
                    control={control}
                    name="ram"
                    label="Bộ nhớ"
                    render={(field) => (
                      <SelectField
                        {...field}
                        isMulti={true}
                        placeholder="chọn bộ nhớ"
                        options={[
                          { label: "64GB", value: "64GB" },
                          { label: "128GB", value: "128GB" },
                          { label: "256GB", value: "256GB" },
                        ]}
                      />
                    )}
                    onChange={(value) => {
                      field.onChange(
                        value.map((item) => ({
                          size: item,
                          priceDifference: 0,
                        })),
                      );
                    }}
                  />
                </div>
                <div className="w-1/2">
                  <FormFieldControl
                    name="storage"
                    control={control}
                    label="dung lượng"
                    render={(field) => (
                      <SelectField
                        {...field}
                        isMulti={true}
                        placeholder="chọn dung lượng"
                        options={[
                          { label: "64GB", value: "64GB" },
                          { label: "128GB", value: "128GB" },
                          { label: "256GB", value: "256GB" },
                          { label: "512GB", value: "512GB" },
                          { label: "1024GB", value: "1024GB" },
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
          <div className="rounded-xl border border-gray-300 shadow-lg">
            <h1 className="border-b border-gray-300 px-4 py-4 text-base font-semibold">
              Hình ảnh sản phẩm
            </h1>
            <div className="px-7 py-5">
              <FormFieldControl
                name="images"
                label="Media"
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
          <PrimaryButton type="submit">tạo sản phẩm</PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default ProductCreatePage;
