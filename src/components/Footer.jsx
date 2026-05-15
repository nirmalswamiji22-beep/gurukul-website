import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300 pt-16 pb-8 text-sm">
      <div className="container mx-auto px-4">

        {/* Monogram Logo Centered */}
        <div className="flex justify-center mb-8">
          <Link to="/">
            <img
              src="https://gurukul.org/wp-content/themes/gurukularts/assets/gurukul_monogram.svg"
              alt="Gurukul Monogram"
              className="h-24 hover:opacity-80 transition duration-300"
            />
          </Link>
        </div>

        {/* Horizontal Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10 text-white font-medium">
          <Link className="hover:text-[#90191b] transition" to="/why-swaminarayan-gurukul">Why Swaminarayan Gurukul?</Link>
          <Link className="hover:text-[#90191b] transition" to="/residential-life">Life at Gurukul</Link>
          <Link className="hover:text-[#90191b] transition" to="/our-branches">Our Branches</Link>
          <Link className="hover:text-[#90191b] transition" to="/admissions">Admissions</Link>
          <Link className="hover:text-[#90191b] transition" to="/events">Events</Link>
          <Link className="hover:text-[#90191b] transition" to="/career">Career</Link>
          <Link className="hover:text-[#90191b] transition" to="/blog">Blog</Link>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-12">
          <a href="https://facebook.com/gurukul.org" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#90191b] flex items-center justify-center text-white hover:bg-[#fef3de] hover:text-[#90191b] transition duration-300 shadow-md">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12 2.04c-5.5 0-10 4.5-10 10 0 5.08 3.73 9.24 8.6 9.88v-7h-2.6v-2.88h2.6V9.8c0-2.5 1.48-3.9 3.77-3.9 1.1 0 2.24.2 2.24.2v2.4h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.88h-2.33v7A10 10 0 0 0 12 2.04z" />
            </svg>
          </a>
          <a href="https://instagram.com/gurukul_org" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#90191b] flex items-center justify-center text-white hover:bg-[#fef3de] hover:text-[#90191b] transition duration-300 shadow-md">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://youtube.com/gurukulevents" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#90191b] flex items-center justify-center text-white hover:bg-[#fef3de] hover:text-[#90191b] transition duration-300 shadow-md">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M21.58 6.5A2.73 2.73 0 0 0 19.66 4.6C17.96 4.14 12 4.14 12 4.14s-5.96 0-7.66.46A2.73 2.73 0 0 0 2.42 6.5C1.96 8.2 1.96 12 1.96 12s0 3.8.46 5.5a2.73 2.73 0 0 0 1.92 1.9c1.7.46 7.66.46 7.66.46s5.96 0 7.66-.46a2.73 2.73 0 0 0 1.92-1.9c.46-1.7.46-5.5.46-5.5s0-3.8-.46-5.5z" />
              <path fill="white" d="M9.99 15.3l6.5-3.3-6.5-3.3v6.6z" />
            </svg>
          </a>
          <a href="https://twitter.com/gurukul_org" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#90191b] flex items-center justify-center text-white hover:bg-[#fef3de] hover:text-[#90191b] transition duration-300 shadow-md">
            {/* Custom X Icon */}
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left border-t border-gray-800 pt-6 text-gray-400 text-xs">
          <p className="mb-4 md:mb-0">Copyright @ 2025. Shree Swaminarayan Gurukul. All Rights Reserved.</p>
          <ul className="flex space-x-6">
            <li><Link to="/terms-conditions" className="hover:text-white transition">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link to="/refund-policy" className="hover:text-white transition">Refund Policy</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
