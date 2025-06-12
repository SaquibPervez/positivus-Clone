'use client';
import { Inter } from 'next/font/google';
import React, { useState } from 'react';
import '../globals.css';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="logo" width={150} height={60} />
        </div>

        <div className={`${spaceGrotesk.className} hidden md:flex items-center space-x-6`}>
          <ul className="flex space-x-6">
            <li className="cursor-pointer hover:text-blue-600">About Us</li>
            <li className="cursor-pointer hover:text-blue-600">Services</li>
            <li className="cursor-pointer hover:text-blue-600">Use Cases</li>
            <li className="cursor-pointer hover:text-blue-600">Pricing</li>
            <li className="cursor-pointer hover:text-blue-600">Blog</li>
          </ul>
          <button className="ml-6 px-4 py-2 text-black rounded-md border">
            Request a quote
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <ul className="space-y-4">
            <li className="cursor-pointer hover:text-blue-600">About Us</li>
            <li className="cursor-pointer hover:text-blue-600">Services</li>
            <li className="cursor-pointer hover:text-blue-600">Use Cases</li>
            <li className="cursor-pointer hover:text-blue-600">Pricing</li>
            <li className="cursor-pointer hover:text-blue-600">Blog</li>
          </ul>
          <button className="mt-4 w-full px-4 py-2 text-black rounded-md border">
            Request a quote
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
