import { Checkbox } from "@material-tailwind/react";
import React, { useState } from "react";

const FilterCheckbox = ({ options }) => {
    const [selected, setSelected] = useState([]);
    const handleToggle = (item) => {
        setSelected((prev) =>
            prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
        );
    };

    return (
        <div>
            {options.map((item) => (
                <label
                    key={item}
                    className="flex items-center justify-between px-2 transition duration-300 rounded cursor-pointer group"
                >
                    <div className="flex items-center gap-2">
                        <Checkbox
                            className="!p-0 hover"
                            checked={selected.includes(item)}
                            onChange={() => handleToggle(item)}
                        />
                        <span
                            className={`capitalize transition duration-300 ${
                                selected.includes(item) ? "text-yellowColor font-medium" : "text-darkPrimary"
                            }`}
                        >
                            {item}
                        </span>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium text-gray-600 bg-blue-gray-200 bg-opacity-10 rounded-md">
                        0
                    </span>
                </label>
            ))}
        </div>
    );
};

export default FilterCheckbox;
