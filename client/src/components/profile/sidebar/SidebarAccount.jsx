import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import InputField from "../../input/InputField";
import { profileFields } from "../../../utils/formField";
import { Button } from "@material-tailwind/react";

const SidebarAccount = () => {
  const user = useSelector((state) => state.user);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      avatar: user?.avatar || "",
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
    <div className="px-5 py-10 bg-white shadow-md rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="relative max-w-40 w-full h-40">
          <img className="w-full h-full rounded-full object-cover" src={user.avatar} alt="Avatar" />
          <div className="absolute bottom-2 right-2 p-3 rounded-full border-2 border-teal bg-white cursor-pointer">
            <FaRegEdit />
          </div>
        </div>
        <button className="text-sm font-semibold text-blue flex items-center gap-2 uppercase">
          <FaRegEdit />
          Cập nhật thông tin tài khoản
        </button>
      </div>

      {/* Form cập nhật thông tin */}
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

        <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-dark px-6 py-3 rounded-lg">
          Cập nhật thông tin
        </Button>
      </form>
    </div>
  );
};

export default SidebarAccount;
