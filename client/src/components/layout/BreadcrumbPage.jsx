import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { MdChevronRight } from "react-icons/md";

const BreadcrumbPage = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <div className=" h-[50px] w-full flex flex-col justify-center  border-b border-gray-200">
      <nav className="container breadcrumb ">
        <ul className="flex items-center gap-2 text-gray-500 px-2">
          {breadcrumbs.map(({ match, breadcrumb }, index) => (
            <li key={match.pathname} className="flex items-center">
              <Link
                to={match.pathname}
                className={`${index === breadcrumbs.length - 1 ? "font-medium text-darkPrimary" : "hover:underline"
                  } text-sm `}
              >
                {breadcrumb}
              </Link>
              {index < breadcrumbs.length - 1 && <span className="mx-2 ">{<MdChevronRight />}</span>}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default BreadcrumbPage;
 