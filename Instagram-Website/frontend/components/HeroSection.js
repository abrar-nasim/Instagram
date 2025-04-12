import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Buy & Sell Instagram Accounts with Confidence
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-10">
          Discover verified accounts with real followers and active engagement.
        </p>

        <Link href="/explore" legacyBehavior>
          <a className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-xl shadow-md transition-transform transform hover:scale-105 duration-300">
            Browse Accounts
          </a>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
