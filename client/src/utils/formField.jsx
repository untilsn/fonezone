import { CiImageOn, CiLocationOn, CiLock, CiMail, CiPhone, CiUser } from 'react-icons/ci';


export const loginFields = [
  { name: 'email', label: 'Địa chỉ email', icon: <CiMail />, placeholder: 'your@gmail.com' },
  { name: 'password', label: 'Mật khẩu', icon: <CiLock />, placeholder: '••••••', type: 'password' },
];

export const registerFields = [
  { name: 'name', label: 'tên người dùng', icon: <CiUser />, placeholder: 'username' },
  { name: 'email', label: 'Địa chỉ email', icon: <CiMail />, placeholder: 'your@gmail.com' },
  { name: 'password', label: 'Mật khẩu', icon: <CiLock />, placeholder: '••••••', type: 'password' },
  { name: 'confirmPassword', label: 'Xác nhận mật khẩu', icon: <CiLock />, placeholder: '••••••', type: 'password' },
];


export const profileFields = [
  { name: "name", label: "Tên người dùng", icon: <CiUser />, placeholder: "Nhập tên của bạn" },
  { name: "email", label: "Địa chỉ email", icon: <CiMail />, placeholder: "your@gmail.com", disabled: true },
  { name: "phoneNumber", label: "Số điện thoại", icon: <CiPhone />, placeholder: "Nhập số điện thoại" },
  {
    name: "address",
    label: "Địa chỉ",
    icon: <CiLocationOn />,
    type: "group",
    fields: [
      { name: "street", label: "Đường", placeholder: "Nhập tên đường" },
      { name: "ward", label: "Phường/Xã", placeholder: "Nhập phường/xã" },
      { name: "district", label: "Quận/Huyện", placeholder: "Nhập quận/huyện" },
      { name: "city", label: "Thành phố", placeholder: "Nhập thành phố" },
      { name: "postalCode", label: "Mã bưu điện", placeholder: "Nhập mã bưu điện" },
    ],
  },
];
