import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import clsx from "clsx";

const Pagination = ({
  currentPage = 0, // page index bắt đầu từ 0
  totalPage = 1, // totalPage từ API
  onPageChange,
}) => {
  const [active, setActive] = useState(currentPage + 1); // hiển thị từ 1

  useEffect(() => {
    setActive(currentPage + 1);
  }, [currentPage]);

  const getItemProps = (index) => ({
    onClick: () => {
      setActive(index);
      onPageChange(index - 1); // truyền index về lại cho cha
    },
  });

  const next = () => {
    if (active === totalPage) return;
    setActive((prev) => {
      const newPage = prev + 1;
      onPageChange(newPage - 1);
      return newPage;
    });
  };

  const prev = () => {
    if (active === 1) return;
    setActive((prev) => {
      const newPage = prev - 1;
      onPageChange(newPage - 1);
      return newPage;
    });
  };

  const getVisiblePages = () => {
    const visiblePages = [];
    const maxVisiblePages = 5;

    if (totalPage <= maxVisiblePages) {
      for (let i = 1; i <= totalPage; i++) visiblePages.push(i);
    } else {
      visiblePages.push(1);
      let startPage = Math.max(2, active - 1);
      let endPage = Math.min(totalPage - 1, active + 1);

      if (active <= 3) endPage = Math.min(totalPage - 1, 4);
      if (active >= totalPage - 2) startPage = Math.max(2, totalPage - 3);

      if (startPage > 2) visiblePages.push("...");
      for (let i = startPage; i <= endPage; i++) visiblePages.push(i);
      if (endPage < totalPage - 1) visiblePages.push("...");
      visiblePages.push(totalPage);
    }

    return visiblePages;
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        className={clsx(
          "flex items-center gap-2 rounded bg-gray-100 px-2 py-1 text-gray-600",
          { "cursor-not-allowed opacity-50": active === 1 },
        )}
        onClick={prev}
        disabled={active === 1}
      >
        <FaAngleLeft />
      </button>

      <div className="flex items-center gap-2">
        {getVisiblePages().map((page, index) =>
          page === "..." ? (
            <span key={`ellipsis-${index}`} className="px-1">
              ...
            </span>
          ) : (
            <button
              key={page}
              className={clsx("rounded border p-1 transition-all", {
                "border-blue-500 bg-blue-500 text-white": active === page,
                "hover:border hover:text-blue-500": active !== page,
              })}
              {...getItemProps(page)}
            >
              {page}
            </button>
          ),
        )}
      </div>

      <button
        className={clsx(
          "flex items-center gap-2 rounded bg-gray-100 px-2 py-1 text-gray-600",
          { "cursor-not-allowed opacity-50": active === totalPage },
        )}
        onClick={next}
        disabled={active === totalPage}
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Pagination;
