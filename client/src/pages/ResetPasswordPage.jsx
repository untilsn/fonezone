import React, { useState } from 'react'
import EmailResetPassword from '../components/reset-password/EmailResetPassword'
import OtpResetPassword from '../components/reset-password/OtpResetPassword'
import NewPasswordForm from '../components/reset-password/NewPasswordForm'

const ResetPasswordPage = () => {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("");
  console.log(step, email)
  return (
    <div>
      <div className='relative py-10'>
        <div className='bg-gradian'></div>
        <div className='flex items-center justify-center min-h-screen'>
          {step === 1 && <EmailResetPassword setStep={setStep} setEmail={setEmail} />}
          {step === 2 && <OtpResetPassword setStep={setStep} email={email} />}
          {step === 3 && <NewPasswordForm email={email} />}
        </div>
      </div>
    </div>
  )
}

export default ResetPasswordPage