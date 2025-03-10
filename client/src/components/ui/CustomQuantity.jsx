import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';

const CustomQuantity = () => {
    const [value, setValue] = useState(1);

    return (
        <div className='flex items-center gap-5 border border-textColor py-3 px-5'>
            <button
                onClick={() => setValue((cur) => (cur === 0 ? 0 : cur - 1))}
                className=''>
                <FaMinus />
            </button>
            <input
                type="number"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className='text-center max-w-[50px] outline-none border-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' />
            <button
                onClick={() => setValue((cur) => cur + 1)}
                className=''
            >
                <FaPlus />
            </button>
        </div>
    )
}

export default CustomQuantity