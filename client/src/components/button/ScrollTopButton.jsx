import React, { useEffect, useState } from 'react';
import { GrLinkTop } from "react-icons/gr";

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isVisible ?
        <button onClick={scrollToTop} className='p-2 hover:shadow-md rounded-full text-secondary flex items-center justify-center bg-transparent bg-opacity-50 border border-textColor fixed bottom-5 right-5 transition-all'>
          <GrLinkTop className='text-sm' />
        </button>
        :
        ""
      }
    </>
  )
}

export default ScrollTopButton