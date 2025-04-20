import clsx from "clsx";
import React from "react";

const ButtonSubmit = ({
  children,
  isLoading = false,
  disable = false,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "w-full rounded-xl p-3 font-semibold text-white capitalize transition-all",
        "bg-primary hover:bg-primary-active",
      )}
      type="submit"
    >
      {children}
    </button>
  );
};

export default ButtonSubmit;
