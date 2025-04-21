import React from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import Logo from '../../assets/Logo.png';
const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 z-10 flex w-full items-center justify-between p-6">
      <div className="flex items-center gap-2 font-bold">
        {/* Logo placeholder */}
        <img src={Logo} alt="Logo" className="h-50 w-50 object-contain" />
      </div>
      <div className="Navbar rounded-full border-2">
        <ul className="crimson-text-regular flex gap-12 px-6 py-2 text-[white] backdrop-blur-md">
          <li className="cursor-pointer hover:underline">Home</li>
          <li className="cursor-pointer hover:underline">About</li>
          <li className="cursor-pointer hover:underline">Album</li>
          <li className="cursor-pointer hover:underline">Blogs</li>
          <li className="cursor-pointer hover:underline">Contact</li>
        </ul>
      </div>
      <div style={{ paddingRight: '3rem' }} className="flex gap-10 pr-12 text-[white]">
        <FaSearch className="h-8 w-8" />
        <FaUser className="h-8 w-8" />
      </div>
    </nav>
  );
};

export default Navbar;
