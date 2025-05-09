import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id='nav' className='relative h-[100px] w-full overflow-x-hidden md:justify-center md:gap-[150px]'>

      {/* Logo */}
      <div id='logo' className='flex items-center gap-4 md:gap-10'>
        <div id='logo-img' className='w-[180px] h-[60px] flex justify-center items-center'>
          <img className='w-full object-cover' src={logo} alt="logo" />
        </div>
        <p id='ptxt' className='hidden md:block mt-2.5'>Search destination or activities</p>
      </div>

      {/* Hamburger */}
      <div id='hamb' className="md:hidden cursor-pointer z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoMdClose size={40} color="black" /> : <IoMdMenu size={40} color="black" />}
      </div>

      {/* ONE UL for both desktop and mobile */}
      <ul
        id='link'
        className={`
          flex flex-col md:flex-row gap-6 md:gap-10 text-[18px] items-center
          md:static md:translate-x-0 md:flex bg-red-500 md:bg-transparent
          fixed top-[70px] left-0  z-40 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} `} >

        <Link to="/">Destination</Link>
        <Link to="Activities">Activities</Link>
        <Link to="USD">USD</Link>
        <Link to="SignUp">SignUp</Link>

        <button className='h-[50px] w-[120px] bg-orange-400 rounded-full text-[20px] text-amber-50'><a href="/">Log in</a></button>
      </ul>
    </div>
  );
};

export default Nav;

