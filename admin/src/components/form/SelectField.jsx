import React from "react";
import Select from "react-select";

const defaultBrands = [
  // { label: "Apple", value: "apple" },
  // { label: "Samsung", value: "samsung" },
  // { label: "Xiaomi", value: "xiaomi" },
  { label: "Hiển thị 10", value: 10 },
  { label: "Hiển thị 20", value: 20 },
  { label: "Hiển thị 30", value: 30 },
];

const SelectField = ({
  value,
  onChange,
  options = defaultBrands,
  placeholder = "Chọn thương hiệu",
  isMulti = false, // Make it multi-selectable
  isDisabled = false,
}) => {
  const handleChange = (selectedOptions) => {
    // For multi-select, map the selected options to their values
    onChange(
      isMulti
        ? selectedOptions?.map((opt) => opt.value)
        : selectedOptions?.value,
    );
  };

  const selectedValue = options.filter((opt) =>
    isMulti
      ? Array.isArray(value)
        ? value.includes(opt.value)
        : false
      : opt.value === value,
  );

  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "transparent",
      borderColor: state.isFocused
        ? "var(--color-primary)"
        : "var(--color-gray-300)", // Using primary color from theme
      boxShadow: state.isFocused ? "0 0 0 1px var(--color-primary)" : "none",
      // "&:hover": {
      //   borderColor: "var(--color-primary)",
      // },
      "&:hover": {
        borderColor: state.isFocused
          ? "var(--color-primary)"
          : "var(--color-border)",
      },
      minHeight: "48px",
      fontSize: "14px",
      borderRadius: "8px",
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: "var(--color-primary)", // Use primary color
      color: "white",
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: "white",
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: "white",
      ":hover": {
        backgroundColor: "var(--color-primary-active)", // Active hover effect
        color: "var(--color-text-inverse)",
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: "var(--color-text-muted)", // Use muted text color
    }),
    menu: (base) => ({
      ...base,
      zIndex: 40, // Ensure the menu is on top
    }),
  };

  return (
    <Select
      isMulti={isMulti} // Toggle between single and multi select
      options={options}
      value={selectedValue}
      onChange={handleChange}
      placeholder={placeholder}
      isDisabled={isDisabled}
      styles={customStyles}
      className="w-full"
      classNamePrefix="react-select"
    />
  );
};

export default SelectField;
