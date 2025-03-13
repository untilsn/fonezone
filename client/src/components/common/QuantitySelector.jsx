import React from "react";

const QuantitySelector = ({ quantity = 0, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center justify-center max-w-[200px] w-full">
      <button
        className="px-2 py-1 border rounded hover:bg-gray-100 transition-colors"
        onClick={onDecrease}
        disabled={quantity <= 1}
      >
        -
      </button>
      <span className="px-4 py-1 w-10 flex items-center justify-center">{quantity}</span>
      <button
        className="px-2 py-1 border rounded hover:bg-gray-100 transition-colors"
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;