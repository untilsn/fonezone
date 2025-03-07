import React, { useState, useMemo } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const HeaderLeft = ({ category = [] }) => {
    const [hovered, setHovered] = useState(false);

    // Memoize danh sách danh mục để tránh re-render không cần thiết
    const memoizedCategories = useMemo(() => 
        Array.isArray(category) ? category.slice(0, 6) : [], 
        [category]
    );

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onKeyPress={(e) => e.key === "Enter" && setHovered(!hovered)} // Hỗ trợ keyboard
            className="relative flex items-center justify-between h-full w-full gap-3 px-4 text-darkPrimary hover:bg-yellow group transition-colors duration-200"
            role="button" // Thêm role cho accessibility
            aria-label="Browse Categories"
            aria-expanded={hovered} // Chỉ trạng thái mở/rút gọn
            tabIndex={0} // Cho phép focus bằng bàn phím
        >
            <div className="flex items-center gap-3">
                <span className="text-3xl text-opacity-90 text-dark">
                    {hovered ? (
                        <IoMdClose className="text-light" />
                    ) : (
                        <IoIosMenu className="" />
                    )}
                </span>
                <span className="text-sm font-medium group-hover:text-light">
                    Duyệt danh mục
                </span>
            </div>
            <span className="group-hover:text-light text-grayColor">
                <FaChevronDown className="text-xs" />
            </span>

            {/* Hiển thị danh mục khi hover */}
            {hovered && memoizedCategories.length > 0 && (
                <div className="absolute top-[100%] left-0 right-0 bg-white shadow-lg z-10 max-h-[300px] overflow-y-auto">
                    {memoizedCategories.map((item) => (
                        <Link
                            key={item.id}
                            to={`/shop`}
                            className="block p-5 text-sm capitalize hover:bg-gray hover:bg-opacity-5 text-dark border-b border-darkGray border-opacity-10"
                            aria-label={`Navigate to ${item.name}`}
                        >
                            {item?.name || "Unnamed Category"}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

// Sử dụng React.memo để ngăn re-render không cần thiết
export default React.memo(HeaderLeft);