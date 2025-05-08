import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderSearch from "./HeaderSearch";
import HeaderAction from "./HeaderAction";
import HeaderNavbar from "./HeaderNavbar";
import Logo from "../../ui/Logo";

const Header = () => {
  return (
    <>
      <div className="overflow-visible bg-dark-primary">
        <div className="container mx-auto">
          <HeaderTop />
          <div className="grid items-center grid-cols-4 py-4 ">
            <Logo color="white" subColor="#fcb941" />
            <HeaderSearch />
            <HeaderAction />
          </div>
        </div>
      </div>
      <div className="sticky z-40 w-full bg-white shadow-item -top-1">
        <HeaderNavbar />
      </div>
    </>
  );
};

export default Header;
