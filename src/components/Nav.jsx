import React, { useState } from 'react';
import logo from '../assets/logo.png';
import Btn from './Btn';
import { Link } from 'react-router-dom';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); // ✅ fixed

  return (
    <>
      {/* Navbar */}
      <nav id='navbar' className=' text-white'>
        <div id='nav' className='h-[80px] w-[95%] mx-auto flex justify-between items-center'>

          {/* Logo Section */}
          <div id='logo' className='flex items-center gap-[50px]'>
            <div id="logo-img">
              <img src={logo} alt="logo" className='w-[200px]' />
            </div>
            <div id='txt' className='hidden md:block text-sm text-gray-200'>
              Search destination or activities
            </div>
          </div>

          {/* Hamburger Icon */}
          <div id='hamb' className='md:hidden cursor-pointer z-50' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </div>

          {/* Nav Links */}
          <ul
            id='link'
            className={`
              flex-col items-center text-black py-4 space-y-4
              absolute top-[80px] left-0 bg-gray-600
              transform transition-transform duration-300 ease-in-out
              ${isOpen ? "translate-x-0" : "-translate-x-[100vw]"}
              md:static md:flex md:flex-row md:translate-x-0 md:bg-transparent md:space-y-0 md:space-x-6 md:py-0
            `}
          >
            <Link to={'/'} onClick={() => setIsOpen(false)}>Destination</Link>
            <Link to={'/activities'} onClick={() => setIsOpen(false)}>Activities</Link>
            <Link to={'/usd'} onClick={() => setIsOpen(false)}>USD</Link>
            <Link to={'/signup'} onClick={() => setIsOpen(false)}>SignUp</Link>
            <Btn />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
