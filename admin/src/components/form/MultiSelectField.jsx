import React from "react";
import Select from "react-select";

const MultiSelectField = ({
  field,
  options,
  placeholder = "Chọn...",
  isDisabled = false,
}) => {
  const handleChange = (selectedOptions) => {
    field.onChange(selectedOptions?.map((opt) => opt.value));
  };

  const value = options.filter((opt) => field.value?.includes(opt.value));

  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "transparent", // Tailwind's transparent background
      borderColor: state.isFocused
        ? "var(--color-primary)" // Custom primary color from your theme
        : "var(--color-border)", // Border color from theme
      boxShadow: state.isFocused ? "0 0 0 1px var(--color-primary)" : "none",
      "&:hover": {
        borderColor: state.isFocused
          ? "var(--color-primary)"
          : "var(--color-border)",
      },
      minHeight: "48px",
      fontSize: "14px",
      borderRadius: "8px", // Slightly rounded corners, you can adjust
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: "var(--color-primary)", // Use primary color for selected options
      color: "var(--color-text-inverse)", // Text color for selected options
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: "var(--color-text-inverse)", // Inverse text color
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: "var(--color-text-inverse)", // Remove icon color
      ":hover": {
        backgroundColor: "var(--color-primary-active)", // Active hover effect
        color: "var(--color-text-inverse)",
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: "var(--color-text-muted)", // Muted text color for placeholder
    }),
    menu: (base) => ({
      ...base,
      zIndex: 9999, // Ensure the menu is above other elements
    }),
  };
  return (
    <Select
      isMulti
      options={options}
      value={value}
      onChange={handleChange}
      onBlur={field.onBlur}
      placeholder={placeholder}
      isDisabled={isDisabled}
      styles={customStyles}
      className="w-full"
      classNamePrefix="react-select"
    />
  );
};

export default MultiSelectField;
