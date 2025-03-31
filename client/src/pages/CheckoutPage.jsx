import React from 'react'
import HeaderPage from '../components/layout/HeaderPage'
import BreadcrumbPage from '../components/layout/BreadcrumbPage'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { profileFields } from '../utils/formField';
import InputField from '../components/input/InputField';
import { Button } from '@material-tailwind/react';

const CheckoutPage = () => {
  const user = useSelector((state) => state.user);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      avatar: user?.avatar || "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      phoneNumber: user?.phoneNumber || "",
      address: user?.address?.[0] || {}, // Lấy địa chỉ mặc định
    },
    mode: "onChange",
  });

  const onSubmit = (values) => {
    console.log("Updated profile:", values);
    // TODO: Thực hiện cập nhật user API ở đây
  };


  return (
    <div>
      <HeaderPage></HeaderPage>
      <BreadcrumbPage></BreadcrumbPage>
      <div className='container py-10'>
        <div className='grid grid-cols-12 gap-5'>
          <div className='col-span-9'>
            {/* shipping */}
            <div className=''>
              <h1 className='font-semibold text-xl mb-5 text-gray-dark'>Shipping</h1>
              <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="grid grid-cols-2 gap-5 mb-10">
                  {profileFields.map(({ name, label, icon, placeholder, type, fields }) =>
                    type === "group" ? (
                      fields.map(({ name: subName, label: subLabel, placeholder: subPlaceholder }) => (
                        <InputField
                          key={subName}
                          name={`address.${subName}`}
                          control={control}
                          label={subLabel}
                          placeholder={subPlaceholder}
                          icon={icon}
                        />
                      ))
                    ) : (
                      <InputField key={name} name={name} control={control} label={label} placeholder={placeholder} icon={icon} />
                    )
                  )}
                </div>
              </form>
            </div>
            {/* payment */}
            <div className='col-span-9'>
              <h1 className='font-semibold text-xl mb-5 text-gray-dark'>payment method</h1>
              
            </div>
          </div>
          <div className='col-span-3'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta laudantium quos cumque iste expedita, doloribus, iure corporis, minus vitae qui est quia repudiandae illum. Quaerat repellat facilis quasi laudantium corporis?
          </div>
        </div>

      </div>
    </div>
  )
}

export default CheckoutPage