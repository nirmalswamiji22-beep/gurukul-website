import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

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
      
      {/* Top White Bar (Desktop) */}
      <div className={`hidden lg:block w-full bg-[#fef3de] transition-all duration-300 ${scrolled ? 'h-0 overflow-hidden opacity-0' : 'h-10 opacity-100'}`}>
        <div className="container mx-auto px-4 h-full flex justify-end items-center">
          <nav className="flex items-center space-x-6 text-[13px] font-medium text-[#90191b]">
            <Link to="/" className="flex items-center hover:text-red-700 transition">
              <img src="https://gurukul.org/wp-content/themes/gurukularts/assets/gurukul_monogram.svg" alt="Monogram" className="h-5 mr-2" />
              Home
            </Link>
            <Link to="/parents" className="hover:text-red-700 transition">Parents</Link>
            <Link to="/alumni" className="hover:text-red-700 transition">Alumni</Link>
            <Link to="/contributions" className="hover:text-red-700 transition">Contributions</Link>
            <Link to="/our-branches" className="hover:text-red-700 transition">Our Branches</Link>
            <Link to="/downloads" className="hover:text-red-700 transition">Downloads</Link>
          </nav>
        </div>
      </div>

      {/* Main Red Bar */}
      <div className="w-full bg-[#cc0000] shadow-md relative z-40">
        <div className="container mx-auto px-4 h-16 lg:h-20 flex justify-end lg:justify-end items-center relative">
          
          {/* Hanging Logo Card */}
          <div className={`absolute left-4 top-0 bg-[#fef3de] rounded-b-[20px] shadow-lg flex items-center justify-center transition-all duration-300 z-50 ${scrolled ? 'h-20 lg:h-24 w-32 lg:w-48 px-2' : 'h-24 lg:h-32 w-40 lg:w-64 px-4'}`}>
            <Link to="/" className="w-full h-full flex items-center justify-center pt-2 pb-4">
              <img 
                src="https://gurukul.org/wp-content/uploads/2023/09/head-logo-1.svg" 
                alt="logo" 
                className={`w-full object-contain transition-all duration-300 ${scrolled ? 'h-10 lg:h-14' : 'h-12 lg:h-20'}`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center pl-[280px]">
            <nav className="flex items-center space-x-6 xl:space-x-8 text-[15px] font-medium text-white">
              <div className="relative group cursor-pointer h-20 flex items-center">
                <span className="flex items-center hover:text-[#fbefd5] transition py-2 text-sm font-bold tracking-wide">
                  Why Swaminarayan Gurukul ? <ChevronDown size={14} className="ml-1" />
                </span>
                <div className="absolute top-full left-0 mt-0 w-56 bg-[#fef3de] shadow-lg rounded-b border-t-2 border-[#90191b] hidden group-hover:block z-50">
                  <Link to="/vision-mission" className="block px-4 py-3 text-sm text-gray-700 border-b border-gray-50 hover:text-[#90191b] hover:bg-gray-50 transition">Vision & Mission</Link>
                  <Link to="/why-swaminarayan-gurukul" className="block px-4 py-3 text-sm text-gray-700 border-b border-gray-50 hover:text-[#90191b] hover:bg-gray-50 transition">Gurukul Value System</Link>
                  <Link to="/testimonials" className="block px-4 py-3 text-sm text-gray-700 border-b border-gray-50 hover:text-[#90191b] hover:bg-gray-50 transition">Testimonials</Link>
                  <Link to="/life-at-gurukul/academic-life" className="block px-4 py-3 text-sm text-gray-700 border-b border-gray-50 hover:text-[#90191b] hover:bg-gray-50 transition">Academic Life</Link>
                  <Link to="/life-at-gurukul/residential-life" className="block px-4 py-3 text-sm text-gray-700 hover:text-[#90191b] hover:bg-gray-50 transition">Residential Life</Link>
                </div>
              </div>

              <div className="relative group cursor-pointer h-20 flex items-center">
                <span className="flex items-center hover:text-[#fbefd5] transition py-2 text-sm font-bold tracking-wide">
                  Our Branches <ChevronDown size={14} className="ml-1" />
                </span>
                <div className="absolute top-full left-0 mt-0 w-48 bg-[#fef3de] shadow-lg rounded-b border-t-2 border-[#90191b] hidden group-hover:block z-50">
                  <Link to="/ahmedabad" className="block px-4 py-2 text-sm text-gray-700 hover:text-[#90191b] hover:bg-gray-50 transition">Ahmedabad</Link>
                  <Link to="/bangalore" className="block px-4 py-2 text-sm text-gray-700 hover:text-[#90191b] hover:bg-gray-50 transition">Bangalore</Link>
                  <Link to="/hyderabad" className="block px-4 py-2 text-sm text-gray-700 hover:text-[#90191b] hover:bg-gray-50 transition">Hyderabad</Link>
                </div>
              </div>

              <Link to="/admissions" className="hover:text-[#fbefd5] transition py-2 text-sm font-bold tracking-wide">Admissions</Link>
              <Link to="/events" className="hover:text-[#fbefd5] transition py-2 text-sm font-bold tracking-wide">Events</Link>
              <Link to="/blog" className="hover:text-[#fbefd5] transition py-2 text-sm font-bold tracking-wide">Blog</Link>
              
              <Link to="/admissions" className="ml-4 border-2 border-white text-white px-6 py-2 font-bold text-sm hover:bg-[#fef3de] hover:text-[#cc0000] transition">
                Apply Online
              </Link>
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
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#fef3de] border-t border-gray-100 shadow-xl h-[calc(100vh-80px)] overflow-y-auto z-40">
          <div className="flex flex-col">
            <button 
              className="flex justify-between items-center px-6 py-4 border-b border-gray-100 text-gray-800 font-bold uppercase text-sm"
              onClick={() => toggleDropdown('why')}
            >
              Why Swaminarayan Gurukul ? <ChevronDown size={16} className={`transform transition ${activeDropdown === 'why' ? 'rotate-180 text-[#cc0000]' : ''}`} />
            </button>
            {activeDropdown === 'why' && (
              <div className="bg-gray-50 px-8 py-2">
                <Link to="/vision-mission" className="block py-2 text-sm text-gray-600">Vision & Mission</Link>
                <Link to="/why-swaminarayan-gurukul" className="block py-2 text-sm text-gray-600">Gurukul Value System</Link>
                <Link to="/testimonials" className="block py-2 text-sm text-gray-600">Testimonials</Link>
              </div>
            )}

            <button 
              className="flex justify-between items-center px-6 py-4 border-b border-gray-100 text-gray-800 font-bold uppercase text-sm"
              onClick={() => toggleDropdown('branches')}
            >
              Our Branches <ChevronDown size={16} className={`transform transition ${activeDropdown === 'branches' ? 'rotate-180 text-[#cc0000]' : ''}`} />
            </button>
            {activeDropdown === 'branches' && (
              <div className="bg-gray-50 px-8 py-2">
                <Link to="/ahmedabad" className="block py-2 text-sm text-gray-600">Ahmedabad</Link>
                <Link to="/bangalore" className="block py-2 text-sm text-gray-600">Bangalore</Link>
                <Link to="/hyderabad" className="block py-2 text-sm text-gray-600">Hyderabad</Link>
              </div>
            )}

            <Link to="/admissions" className="px-6 py-4 border-b border-gray-100 text-gray-800 font-bold uppercase text-sm" onClick={() => setIsMobileMenuOpen(false)}>Admissions</Link>
            <Link to="/events" className="px-6 py-4 border-b border-gray-100 text-gray-800 font-bold uppercase text-sm" onClick={() => setIsMobileMenuOpen(false)}>Events</Link>
            <Link to="/blog" className="px-6 py-4 border-b border-gray-100 text-gray-800 font-bold uppercase text-sm" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
            
            {/* Quick Links Mobile */}
            <div className="px-6 py-4 bg-gray-50 mt-4 border-t border-gray-200">
              <h4 className="font-bold text-gray-800 mb-2">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                <Link to="/parents" className="text-sm text-[#cc0000]">Parents</Link>
                <Link to="/alumni" className="text-sm text-[#cc0000]">Alumni</Link>
                <Link to="/contributions" className="text-sm text-[#cc0000]">Contributions</Link>
                <Link to="/downloads" className="text-sm text-[#cc0000]">Downloads</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
