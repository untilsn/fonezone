import React from 'react';
import HeaderTop from './HeaderTop';
import Logo from '../common/Logo';
import HeaderSearch from './HeaderSearch';
import HeaderAction from './HeaderAction';
import HeaderNavbar from './HeaderNavbar';

const Header = () => {
  return (
    <header className="bg-dark-primary" role="banner">
      <div className="container mx-auto">
        <HeaderTop />
        <div className="grid grid-cols-4 items-center py-4 ">
          <Logo color='white' subColor="#fcb941" />
          <HeaderSearch />
          <HeaderAction />
        </div>
      </div>
      <div className='bg-white shadow-sm'>
        <div className='container'>
          <HeaderNavbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
