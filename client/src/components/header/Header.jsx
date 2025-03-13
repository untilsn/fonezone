import React from 'react';
import HeaderTop from './HeaderTop';
import Logo from '../ui/Logo';
import HeaderSearch from './HeaderSearch';
import HeaderAction from './HeaderAction';
import HeaderNavbar from './HeaderNavbar';

const Header = () => {
  return (
    <>
      <div className="bg-dark-primary overflow-visible">
        <div className="container mx-auto">
          <HeaderTop />
          <div className="grid grid-cols-4 items-center py-4 ">
            <Logo color='white' subColor="#fcb941" />
            <HeaderSearch />
            <HeaderAction />
          </div>
        </div>
      </div>
      <div className='bg-white shadow-item sticky -top-1 z-50 w-full'>
        <HeaderNavbar />
      </div>
    </>
  );
};

export default Header;
