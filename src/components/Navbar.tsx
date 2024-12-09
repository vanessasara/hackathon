'use client'
import Logo from '@/app/asssests/Logo.png'
import HandBag from '@/app/asssests/Handbag.svg'
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/'); // Track the active path
  const secondaryColor = 'text-secondary'; // Your secondary color class

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Blog', path: '/blog' },
    { name: 'Pages', path: '/pages' },
    { name: 'About', path: '/about' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-transparent">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Navigation Links */}
        <nav className="flex items-center">
          {links.map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              onClick={() => setActiveLink(path)} // Set the active path on click
              className={`font-medium transition mr-4 relative ${
                activeLink === path
                  ? `${secondaryColor} after:content-[''] after:absolute after:w-2 after:h-2 after:rounded-full after:bg-secondary after:bottom-[-6px] after:left-1/2 after:transform after:-translate-x-1/2`
                  : 'text-white'
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <div className="flex items-center -mt-7 ml-[94px] mr-[264px]">
          <Link href="/">
            <Image src={Logo} alt="Logo" height={32} width={109} />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="relative items-center hidden lg:block">
          <input
            type="text"
            placeholder="Search"
            className="w-64 border bg-transparent border-secondary rounded-full px-4 py-2 text-sm"
          />
          <FiSearch className="absolute top-2 right-4" size={20} />
        </div>

        {/* Shopping Cart Icon */}
        <div className="flex items-center ml-4">
          <Image src={HandBag} height={24} width={24} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;