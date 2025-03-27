// Import React
import React from 'react';
import Link from 'next/link';

/**
 * Navbar component: Displays navigation links across the site.
 * Contains links to Home, Contact, and Admin Dashboard pages.
 */
export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-xl font-bold">Instagram Website</a>
        </Link>
        <div className="space-x-4">
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a>Contact</a>
          </Link>
          <Link href="/admin" legacyBehavior>
            <a>Admin</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
