import React from 'react';
import OtpInput from 'react-otp-input';
import { Controller } from 'react-hook-form';

const InputOtp = ({ control, name, errors }) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <OtpInput
            value={field.value}
            onChange={field.onChange}
            containerStyle="flex justify-center w-full gap-2"
            numInputs={6}
            inputStyle={{
              width: '3rem',
              height: '3rem',
              borderRadius: '0.375rem',
              backgroundColor: 'white',
              color: 'black',
              fontSize: '1.25rem',
              textAlign: 'center',
              border: '1px solid #212529',
              outline: 'none',
              transition: 'all 0.3s ease-in-out',
            }}
            focusStyle={{
              border: '2px solid #6366F1',
              boxShadow: '0 0 8px #6366F1',
            }}
            renderInput={(props) => <input {...props} />}
          />
        )}
      />
      {errors?.otp && <p className="text-yellow-accent text-[13px] mt-4 text-center">{errors.otp.message}</p>}
    </div>
  );
};

export default InputOtp;
