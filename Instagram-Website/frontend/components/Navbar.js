import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Icon pack, or you can swap with emoji/icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold tracking-wide hover:text-blue-400 transition-colors duration-200">
            InstaMarket
          </a>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <NavLinks />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white px-6 py-4 space-y-3 text-sm font-medium">
          <NavLinks mobile />
        </div>
      )}
    </nav>
  );
}

// Reusable links
const NavLinks = ({ mobile = false }) => (
  <>
    <Link href="/" legacyBehavior>
      <a className={`block ${mobile ? '' : 'hover:text-blue-400 transition'}`}>Home</a>
    </Link>
    <Link href="/contact" legacyBehavior>
      <a className={`block ${mobile ? '' : 'hover:text-blue-400 transition'}`}>Inquiry</a>
    </Link>
    <Link href="/contact-info" legacyBehavior>
      <a className={`block ${mobile ? '' : 'hover:text-blue-400 transition'}`}>Contact</a>
    </Link>
    <Link href="/admin" legacyBehavior>
      <a className={`block ${mobile ? '' : 'hover:text-blue-400 transition'}`}>Admin</a>
    </Link>
  </>
);
