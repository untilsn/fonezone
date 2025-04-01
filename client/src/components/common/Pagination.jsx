import React, { useState, useEffect } from 'react';
import { Button, IconButton } from "@material-tailwind/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Pagination = ({ currentPage = 0, totalItems, itemsPerPage = 10, onPageChange }) => {
  const [active, setActive] = useState(currentPage + 1);
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    setActive(currentPage + 1);
  }, [currentPage]);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "blue",
    onClick: () => {
      setActive(index);
      onPageChange(index - 1);
    },
  });

  const next = () => {
    if (active === pageCount) return;
    setActive(active + 1);
    onPageChange(active);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
    onPageChange(active - 2);
  };

  const getVisiblePages = () => {
    const visiblePages = [];
    const maxVisiblePages = 5;

    if (pageCount <= maxVisiblePages) {
      for (let i = 1; i <= pageCount; i++) visiblePages.push(i);
    } else {
      visiblePages.push(1);
      let startPage = Math.max(2, active - 1);
      let endPage = Math.min(pageCount - 1, active + 1);

      if (active <= 3) endPage = Math.min(pageCount - 1, 4);
      if (active >= pageCount - 2) startPage = Math.max(2, pageCount - 3);

      if (startPage > 2) visiblePages.push("...");
      for (let i = startPage; i <= endPage; i++) visiblePages.push(i);
      if (endPage < pageCount - 1) visiblePages.push("...");
      visiblePages.push(pageCount);
    }

    return visiblePages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-10 mx-auto w-full">
      <Button className='flex items-center gap-2' variant="text" color="blue" onClick={prev} disabled={active === 1}>
        <FaArrowLeftLong className='mb-[2px]' />
        trang trước
      </Button>
      <div className="flex items-center gap-2">
        {getVisiblePages().map((page, index) => (
          page === "..." ? (
            <span key={`ellipsis-${index}`} className="px-0">...</span>
          ) : (
            <IconButton
              key={page}
              className={` px-2 py-3 hover:border transition-all ${active === page ? 'text-yellow border' : ''}`}
              {...getItemProps(page)}
            >
              {page}
            </IconButton>
          )
        ))}
      </div>
      <Button className='flex items-center gap-2' variant="text" color="blue" onClick={next} disabled={active === pageCount}>
        trang sau
        <FaArrowRightLong className='mb-[2px]' />
      </Button>
    </div>
  );
};

export default Pagination;
