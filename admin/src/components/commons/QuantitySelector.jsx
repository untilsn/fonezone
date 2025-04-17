import React from "react";

const QuantitySelector = ({ quantity = 0, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center justify-center max-w-[200px] w-full">
      <button
        className="px-2 py-1 transition-colors border rounded hover:bg-gray-100"
        onClick={onDecrease}
        disabled={quantity <= 1}
      >
        -
      </button>
      <span className="flex items-center justify-center w-10 px-4 py-1">
        {quantity}
      </span>
      <button
        className="px-2 py-1 transition-colors border rounded hover:bg-gray-100"
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
