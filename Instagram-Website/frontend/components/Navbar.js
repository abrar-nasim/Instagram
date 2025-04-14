import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold tracking-wide hover:text-blue-400 transition-colors duration-200">
            HellyeahMedia
          </a>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium items-center">
          <NavLinks />
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none transition-transform"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-64 opacity-100 py-4 px-6' : 'max-h-0 opacity-0 px-6'
        } bg-gray-800 text-white text-sm font-medium`}
      >
        <NavLinks mobile />
      </div>
    </nav>
  );
}

const NavLinks = ({ mobile = false }) => (
  <>
    <Link href="/" legacyBehavior>
      <a className={`block py-1 ${mobile ? '' : 'hover:text-blue-400 transition'}`}>Home</a>
    </Link>
    <Link href="/contact" legacyBehavior>
      <a className={`block py-1 ${mobile ? '' : 'hover:text-blue-400 transition'}`}>Inquiry</a>
    </Link>
    <Link href="/contact-info" legacyBehavior>
      <a className={`block py-1 ${mobile ? '' : 'hover:text-blue-400 transition'}`}>Contact</a>
    </Link>
    {/* Uncomment when auth added
    <Link href="/admin" legacyBehavior>
      <a className={`block py-1 ${mobile ? '' : 'hover:text-blue-400 transition'}`}>Admin</a>
    </Link> */}
  </>
);
