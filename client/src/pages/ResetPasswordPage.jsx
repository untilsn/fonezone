import React from 'react'
import EmailResetPassword from '../components/reset-password/EmailResetPassword'
import OtpResetPassword from '../components/reset-password/OtpResetPassword'
import NewPasswordForm from '../components/reset-password/NewPasswordForm'

const ResetPasswordPage = () => {
  return (
    <div>
      <div className='relative py-10'>
        <div className='bg-gradian'></div>
        <div className='flex flex-col gap-10 '>
          <EmailResetPassword></EmailResetPassword>
          <OtpResetPassword></OtpResetPassword>
          <NewPasswordForm></NewPasswordForm>
        </div>
      </div>
    </div>
  )
}

export default ResetPasswordPage