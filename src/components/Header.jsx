import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import AdmissionModal from './AdmissionModal';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  return (
    <header className="w-full fixed top-0 z-50 transition-all duration-300">



      {/* Main Red Bar */}
      <div className="w-full bg-[#cc0000] shadow-md relative z-40">
        <div className="container mx-auto px-4 h-16 lg:h-20 flex justify-end lg:justify-end items-center relative">

          {/* Hanging Logo Card */}
          <div className={`absolute left-4 top-0 bg-[#fffbf0] rounded-b-[20px] shadow-lg flex items-center justify-center transition-all duration-300 z-50 ${scrolled ? 'h-16 lg:h-24 w-28 lg:w-48 px-2' : 'h-16 lg:h-32 w-32 lg:w-64 px-4'}`}>
            <Link to="/" className="w-full h-full flex items-center justify-center pt-2 pb-2 lg:pb-4">
              <img
                src="https://gurukul.org/wp-content/uploads/2023/09/head-logo-1.svg"
                alt="logo"
                className={`w-full object-contain transition-all duration-300 ${scrolled ? 'h-10 lg:h-14' : 'h-10 lg:h-20'}`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center pl-[280px]">
            <nav className="flex items-center space-x-6 xl:space-x-8 text-[15px] font-medium text-white">
              <div className="relative group cursor-pointer h-20 flex items-center">
                <span className="flex items-center hover:text-[#fffbf0] transition py-2 text-sm font-bold tracking-wide">
                  Why Gurukul ? <ChevronDown size={14} className="ml-1" />
                </span>
                <div className="absolute top-full left-0 mt-0 w-56 bg-[#fffbf0] shadow-lg rounded-b border-t-2 border-[#90191b] hidden group-hover:block z-50">
                  <Link to="/vision-mission" className="block px-4 py-3 text-sm text-gray-700 border-b border-gray-50 hover:text-[#90191b] hover:bg-gray-50 transition">Vision & Mission</Link>
                  <Link to="/why-swaminarayan-gurukul" className="block px-4 py-3 text-sm text-gray-700 hover:text-[#90191b] hover:bg-gray-50 transition">Gurukul Value System</Link>
                </div>
              </div>

              <div className="relative group cursor-pointer h-20 flex items-center">
                <span className="flex items-center hover:text-[#fffbf0] transition py-2 text-sm font-bold tracking-wide">
                  Life At Gurukul <ChevronDown size={14} className="ml-1" />
                </span>
                <div className="absolute top-full left-0 mt-0 w-56 bg-[#fffbf0] shadow-lg rounded-b border-t-2 border-[#90191b] hidden group-hover:block z-50">
                  <Link to="/life-at-gurukul/academic-life" className="block px-4 py-3 text-sm text-gray-700 border-b border-gray-50 hover:text-[#90191b] hover:bg-gray-50 transition">Academic Life</Link>
                  <Link to="/life-at-gurukul/residential-life" className="block px-4 py-3 text-sm text-gray-700 hover:text-[#90191b] hover:bg-gray-50 transition">Residential Life</Link>
                </div>
              </div>

              <Link to="/events" className="hover:text-[#fffbf0] transition py-2 text-sm font-bold tracking-wide flex items-center h-20">Events</Link>

              <div className="relative group cursor-pointer h-20 flex items-center">
                <span className="flex items-center hover:text-[#fffbf0] transition py-2 text-sm font-bold tracking-wide">
                  About Us <ChevronDown size={14} className="ml-1" />
                </span>
                <div className="absolute top-full left-0 mt-0 w-48 bg-[#fffbf0] shadow-lg rounded-b border-t-2 border-[#90191b] hidden group-hover:block z-50">
                  <Link to="/principal" className="block px-4 py-3 text-sm text-gray-700 hover:text-[#90191b] hover:bg-gray-50 transition">Principal</Link>
                </div>
              </div>

              {/* <Link to="/blog" className="hover:text-[#fffbf0] transition py-2 text-sm font-bold tracking-wide">Blog</Link> */}

              <button
                onClick={() => setIsAdmissionModalOpen(true)}
                className="ml-4 border-2 border-white text-white px-6 py-2 font-bold text-sm hover:bg-[#fffbf0] hover:text-[#cc0000] transition cursor-pointer"
              >
                Apply Online
              </button>
            </nav>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden ml-auto">
            <button
              className="text-white focus:outline-none p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#fffbf0] border-t border-gray-100 shadow-xl h-[calc(100vh-64px)] overflow-y-auto z-40">
          <div className="flex flex-col">
            <button
              className="flex justify-between items-center px-6 py-4 border-b border-gray-100 text-gray-800 font-bold uppercase text-sm"
              onClick={() => toggleDropdown('why')}
            >
              Why Gurukul ? <ChevronDown size={16} className={`transform transition ${activeDropdown === 'why' ? 'rotate-180 text-[#cc0000]' : ''}`} />
            </button>
            {activeDropdown === 'why' && (
              <div className="bg-gray-50 px-8 py-2">
                <Link to="/vision-mission" className="block py-2 text-sm text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Vision & Mission</Link>
                <Link to="/why-swaminarayan-gurukul" className="block py-2 text-sm text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Gurukul Value System</Link>
              </div>
            )}

            <button
              className="flex justify-between items-center px-6 py-4 border-b border-gray-100 text-gray-800 font-bold uppercase text-sm"
              onClick={() => toggleDropdown('life')}
            >
              Life At Gurukul <ChevronDown size={16} className={`transform transition ${activeDropdown === 'life' ? 'rotate-180 text-[#cc0000]' : ''}`} />
            </button>
            {activeDropdown === 'life' && (
              <div className="bg-gray-50 px-8 py-2">
                <Link to="/life-at-gurukul/academic-life" className="block py-2 text-sm text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Academic Life</Link>
                <Link to="/life-at-gurukul/residential-life" className="block py-2 text-sm text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Residential Life</Link>
              </div>
            )}

            <Link to="/events" className="px-6 py-4 border-b border-gray-100 text-gray-800 font-bold uppercase text-sm block" onClick={() => setIsMobileMenuOpen(false)}>Events</Link>

            <button
              className="flex justify-between items-center px-6 py-4 border-b border-gray-100 text-gray-800 font-bold uppercase text-sm"
              onClick={() => toggleDropdown('about')}
            >
              About Us <ChevronDown size={16} className={`transform transition ${activeDropdown === 'about' ? 'rotate-180 text-[#cc0000]' : ''}`} />
            </button>
            {activeDropdown === 'about' && (
              <div className="bg-gray-50 px-8 py-2">
                <Link to="/principal" className="block py-2 text-sm text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>Principal</Link>
              </div>
            )}

            {/* <Link to="/blog" className="px-6 py-4 border-b border-gray-100 text-gray-800 font-bold uppercase text-sm block" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link> */}

            {/* Apply Online Mobile */}
            <div className="px-6 py-4 bg-gray-50 mt-4 border-t border-gray-200">
              <button
                onClick={() => {
                  setIsAdmissionModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-[#cc0000] hover:bg-[#90191b] text-white font-bold py-3 text-center rounded-lg transition cursor-pointer"
              >
                Apply Online
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Admission Form Modal */}
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />
    </header>
  );
};

export default Header;
