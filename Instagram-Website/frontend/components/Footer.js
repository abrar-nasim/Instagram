import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16 border-t border-gray-700">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Instagram Marketplace. All Rights Reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
          <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
          <a href="/contact-info" className="hover:text-blue-400 transition">Contact</a>
          <a 
            href="https://instagram.com/placeholder" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-400 transition"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
