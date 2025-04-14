import React from 'react';
import Link from 'next/link';
import { ShieldCheck, User, UserPlus } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-16 px-4 sm:px-8">

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-evenly px-6 lg:px-12 gap-12">

        {/* Left Section */}
        <div className="flex-1">
          <div className="mb-6">
            <span className="inline-block -mb-1 bg-gray-200 text-gray-800 px-3 py-0.5 rounded-full text-xs sm:text-sm font-medium tracking-wide">
              Buy Instagram Accounts
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-wider leading-tight mb-0">
              BUY & SELL
            </h1>


            <h2 className="text-xl sm:text-3xl font-extrabold text-gray-700 -mt-0.5 mb-3">
              Instagram Account
            </h2>
          </div>

          <p className="text-blue-600 font-semibold mb-6 text-sm sm:text-base">
            Authentic • Fast • Trusted
          </p>

          <Link href="/explore" legacyBehavior>
            <a className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-xl shadow-md transition hover:scale-105 duration-300">
              Browse Accounts
            </a>
          </Link>

          <ul className="mt-8 space-y-2 text-gray-700 text-sm sm:text-base">
            <li className="flex items-center">
              ✅ <span className="ml-2">Authentic Instagram Accounts</span>
            </li>
            <li className="flex items-center">
              ✅ <span className="ml-2">Risk-Free Transaction</span>
            </li>
            <li className="flex items-center">
              ✅ <span className="ml-2">Quick Process</span>
            </li>
          </ul>

          <p className="text-sm text-gray-600 mt-4 whitespace-nowrap">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="text-blue-500" size={16} />
              Delivered more than <span className="font-semibold">30k Instagram accounts</span>.
            </span>
          </p>
        </div>

        {/* Middle section only visible on Mobile/xs devices */}
        <div className="absolute right-3 top-[12%] w-28 h-40 sm:hidden z-10 pointer-events-none rounded-2xl overflow-hidden">
          <img
            src="/images/instagram-visual2.png"
            alt="Instagram Visual"
            className="w-full h-full object-cover border-2 border-blue-300 shadow-md opacity-70 animate-float"
          />
          <div className="absolute inset-0 bg-blue-200 opacity-40 mix-blend-multiply"></div>
        </div>



        {/* Right Section */}
        <div className="hidden lg:block flex-1 relative w-full h-96 max-w-md">
          <div className="absolute inset-0 rounded-full border-2 border-dotted border-blue-200 animate-spin-slow" />

          {/* Buyer Card */}
          <div className="absolute top-10 left-0 sm:left-4 bg-white shadow-lg rounded-xl p-4 w-44 text-sm">
            <div className="flex items-center text-green-500">
              <UserPlus className="w-5 h-5 mr-2" />
              <span className="font-bold text-black">Buyer</span>
            </div>
            <p className="text-gray-500 mt-1">Purchased an account</p>
          </div>

          {/* Seller Card */}
          <div className="absolute bottom-10 right-0 sm:right-4 bg-white shadow-lg rounded-xl p-4 w-44 text-sm">
            <div className="flex items-center text-blue-500">
              <User className="w-5 h-5 mr-2" />
              <span className="font-bold text-black">Seller</span>
            </div>
            <p className="text-gray-500 mt-1">Sold an account</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
