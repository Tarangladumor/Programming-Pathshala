'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { LuMenuSquare } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import Image from 'next/image';
import LOGO from '../assests/Logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          {/* <span className="text-xl font-semibold">Nexcent</span> */}
          <Image src={LOGO} alt='logo' height={20} />
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/service" className="text-gray-700 hover:text-gray-900">
            Service
          </Link>
          <Link href="/feature" className="text-gray-700 hover:text-gray-900">
            Feature
          </Link>
          <Link href="/product" className="text-gray-700 hover:text-gray-900">
            Product
          </Link>
          <Link href="/testimonial" className="text-gray-700 hover:text-gray-900">
            Testimonial
          </Link>
          <Link href="/faq" className="text-gray-700 hover:text-gray-900">
            FAQ
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/login">
            <Button variant={'link'}>Login</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign up</Button>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <RxCross2 className="h-6 w-6" />
            ) : (
              <LuMenuSquare className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="space-y-4 px-4 py-2">
            <li>
              <Link href="/" className="text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/service" className="text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
                Service
              </Link>
            </li>
            <li>
              <Link href="/feature" className="text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
                Feature
              </Link>
            </li>
            <li>
              <Link href="/product" className="text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
                Product
              </Link>
            </li>
            <li>
              <Link href="/testimonial" className="text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
                Testimonial
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/login" className="text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
                <Button variant={'link'}>Login</Button>
              </Link>
            </li>
            <li>
              <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button>Sign up</Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
