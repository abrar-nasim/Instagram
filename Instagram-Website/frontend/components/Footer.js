import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} Instagram Marketplace. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 text-sm">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
          <a href="/contact-info" className="hover:text-gray-400">Contact</a>
          <a 
            href="https://instagram.com/placeholder" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-400"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
