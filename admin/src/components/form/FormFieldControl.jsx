import clsx from "clsx";
import React from "react";
import { Controller } from "react-hook-form";

const FormFieldControl = ({ name, control, label, render }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className="w-full space-y-1.5">
          {label && (
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor={name}
            >
              {label}
              <span className="text-danger ml-0.5">*</span>
            </label>
          )}
          <div className="w-full">{render(field)}</div>
          <p className={`text-xs ${error ? "text-danger" : "invisible"}`}>
            {error?.message || "placeholder"}
          </p>
        </div>
      )}
    />
  );
};

export default FormFieldControl;
