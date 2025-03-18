import { CiLock, CiMail, CiUser } from 'react-icons/ci';


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

