import React, { useState } from 'react'
import OtpInput from 'react-otp-input';

const InputOtp = () => {
  const [otp, setOtp] = useState('');

  return (
    <div>
     <OtpInput
          value={otp}
          onChange={setOtp}
          containerStyle="flex justify-center w-full gap-2 "
          numInputs={6}
          inputStyle={{
            width: '3rem',
            height: '3rem',
            borderRadius: '0.375rem',
            backgroundColor: '',
            color: 'black',
            fontSize: '1.25rem',
            textAlign: 'center',
            border: '1px solid #212529', 
            outline: 'none',
            focusStyle: "#6366f1",
            transition: 'all 0.3s ease-in-out',
          }}
          focusStyle={{
            border: '2px solid #6366F1',
            boxShadow: '0 0 8px #6366F1',
          }}
          renderInput={(props) => <input {...props} />}
        />
    </div>
  )
}

export default InputOtp