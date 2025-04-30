import clsx from "clsx";
import React from "react";
import { Controller } from "react-hook-form";

const FormFieldControl = ({ name, control, label, render }) => {
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => {
          return (
            <div className="w-full">
              {label && (
                <label
                  className={clsx("mb-2 block text-xs font-medium capitalize")}
                  htmlFor={name}
                >
                  {label} <span className="text-danger ml-1">*</span>
                </label>
              )}
              <div className="w-full">{render(field)}</div>
              <p
                className={clsx(
                  "mt-1 min-h-[20px] text-xs",
                  error ? "text-danger" : "text-transparent",
                )}
              >
                {error ? error.message : "placeholder"}
              </p>
            </div>
          );
        }}
      ></Controller>
    </div>
  );
};

export default FormFieldControl;
