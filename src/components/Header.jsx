import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

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
      <div className={`hidden lg:block w-full bg-white transition-all duration-300 ${scrolled ? 'h-0 overflow-hidden opacity-0' : 'h-10 opacity-100'}`}>
        <div className="container mx-auto px-4 h-full flex justify-end items-center">
          <nav className="flex items-center space-x-6 text-[13px] font-medium text-[#90191b]">
            <Link to="/" className="flex items-center hover:text-red-700 transition">
              <img src="https://gurukul.org/wp-content/themes/gurukularts/assets/gurukul_monogram.svg" alt="Monogram" className="h-5 mr-2" />
              {t('nav.home')}
            </Link>
            <Link to="/parents" className="hover:text-red-700 transition">{t('nav.parents')}</Link>
            <Link to="/alumni" className="hover:text-red-700 transition">{t('nav.alumni')}</Link>
            <Link to="/contributions" className="hover:text-red-700 transition">{t('nav.contributions')}</Link>
            <Link to="/our-branches" className="hover:text-red-700 transition">{t('nav.ourBranches')}</Link>
            <Link to="/downloads" className="hover:text-red-700 transition">{t('nav.downloads')}</Link>
            
            {/* Language Toggle Button */}
            <div className="ml-4 pl-4 border-l border-gray-200 flex items-center">
              <button 
                onClick={toggleLanguage}
                className="flex items-center text-[#90191b] font-bold text-[13px] border border-[#90191b] rounded-full px-3 py-0.5 hover:bg-[#90191b] hover:text-white transition shadow-sm"
                title={`Switch to ${language === 'EN' ? 'Gujarati' : 'English'}`}
              >
                {language === 'EN' ? 'EN / GU' : 'GU / EN'}
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Red Bar */}
      <div className="w-full bg-[#cc0000] shadow-md relative z-40">
        <div className="container mx-auto px-4 h-16 lg:h-20 flex justify-end lg:justify-end items-center relative">
          
          {/* Hanging Logo Card */}
          <div className={`absolute left-4 top-0 bg-white rounded-b-[20px] shadow-lg flex items-center justify-center transition-all duration-300 z-50 ${scrolled ? 'h-20 lg:h-24 w-32 lg:w-48 px-2' : 'h-24 lg:h-32 w-40 lg:w-64 px-4'}`}>
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
                  {t('nav.whyGurukul')} <ChevronDown size={14} className="ml-1" />
                </span>
                <div className="absolute top-full left-0 mt-0 w-56 bg-white shadow-lg rounded-b border-t-2 border-[#90191b] hidden group-hover:block z-50">
                  <Link to="/vision-mission" className="block px-4 py-3 text-sm text-gray-700 border-b border-gray-50 hover:text-[#90191b] hover:bg-gray-50 transition">{t('nav.visionMission')}</Link>
                  <Link to="/why-swaminarayan-gurukul" className="block px-4 py-3 text-sm text-gray-700 border-b border-gray-50 hover:text-[#90191b] hover:bg-gray-50 transition">{t('nav.gurukulValueSystem')}</Link>
                  <Link to="/testimonials" className="block px-4 py-3 text-sm text-gray-700 border-b border-gray-50 hover:text-[#90191b] hover:bg-gray-50 transition">{t('nav.testimonials')}</Link>
                  <Link to="/life-at-gurukul/academic-life" className="block px-4 py-3 text-sm text-gray-700 border-b border-gray-50 hover:text-[#90191b] hover:bg-gray-50 transition">{t('nav.academicLife')}</Link>
                  <Link to="/life-at-gurukul/residential-life" className="block px-4 py-3 text-sm text-gray-700 hover:text-[#90191b] hover:bg-gray-50 transition">{t('nav.residentialLife')}</Link>
                </div>
              </div>

              <div className="relative group cursor-pointer h-20 flex items-center">
                <span className="flex items-center hover:text-[#fbefd5] transition py-2 text-sm font-bold tracking-wide">
                  {t('nav.ourBranches')} <ChevronDown size={14} className="ml-1" />
                </span>
                <div className="absolute top-full left-0 mt-0 w-48 bg-white shadow-lg rounded-b border-t-2 border-[#90191b] hidden group-hover:block z-50">
                  <Link to="/ahmedabad" className="block px-4 py-2 text-sm text-gray-700 hover:text-[#90191b] hover:bg-gray-50 transition">{t('nav.ahmedabad')}</Link>
                  <Link to="/bangalore" className="block px-4 py-2 text-sm text-gray-700 hover:text-[#90191b] hover:bg-gray-50 transition">{t('nav.bangalore')}</Link>
                  <Link to="/hyderabad" className="block px-4 py-2 text-sm text-gray-700 hover:text-[#90191b] hover:bg-gray-50 transition">{t('nav.hyderabad')}</Link>
                </div>
              </div>

              <Link to="/admissions" className="hover:text-[#fbefd5] transition py-2 text-sm font-bold tracking-wide">{t('nav.admissions')}</Link>
              <Link to="/events" className="hover:text-[#fbefd5] transition py-2 text-sm font-bold tracking-wide">{t('nav.events')}</Link>
              <Link to="/blog" className="hover:text-[#fbefd5] transition py-2 text-sm font-bold tracking-wide">{t('nav.blog')}</Link>
              
              <Link to="/admissions" className="ml-4 border-2 border-white text-white px-6 py-2 font-bold text-sm hover:bg-white hover:text-[#cc0000] transition">
                {t('nav.applyOnline')}
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
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl h-[calc(100vh-80px)] overflow-y-auto z-40">
          <div className="flex flex-col">
            <button 
              className="flex justify-between items-center px-6 py-4 border-b border-gray-100 text-gray-800 font-bold uppercase text-sm"
              onClick={() => toggleDropdown('why')}
            >
              {t('nav.whyGurukul')} <ChevronDown size={16} className={`transform transition ${activeDropdown === 'why' ? 'rotate-180 text-[#cc0000]' : ''}`} />
            </button>
            {activeDropdown === 'why' && (
              <div className="bg-gray-50 px-8 py-2">
                <Link to="/vision-mission" className="block py-2 text-sm text-gray-600">{t('nav.visionMission')}</Link>
                <Link to="/why-swaminarayan-gurukul" className="block py-2 text-sm text-gray-600">{t('nav.gurukulValueSystem')}</Link>
                <Link to="/testimonials" className="block py-2 text-sm text-gray-600">{t('nav.testimonials')}</Link>
              </div>
            )}

            <button 
              className="flex justify-between items-center px-6 py-4 border-b border-gray-100 text-gray-800 font-bold uppercase text-sm"
              onClick={() => toggleDropdown('branches')}
            >
              {t('nav.ourBranches')} <ChevronDown size={16} className={`transform transition ${activeDropdown === 'branches' ? 'rotate-180 text-[#cc0000]' : ''}`} />
            </button>
            {activeDropdown === 'branches' && (
              <div className="bg-gray-50 px-8 py-2">
                <Link to="/ahmedabad" className="block py-2 text-sm text-gray-600">{t('nav.ahmedabad')}</Link>
                <Link to="/bangalore" className="block py-2 text-sm text-gray-600">{t('nav.bangalore')}</Link>
                <Link to="/hyderabad" className="block py-2 text-sm text-gray-600">{t('nav.hyderabad')}</Link>
              </div>
            )}

            <Link to="/admissions" className="px-6 py-4 border-b border-gray-100 text-gray-800 font-bold uppercase text-sm" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.admissions')}</Link>
            <Link to="/events" className="px-6 py-4 border-b border-gray-100 text-gray-800 font-bold uppercase text-sm" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.events')}</Link>
            <Link to="/blog" className="px-6 py-4 border-b border-gray-100 text-gray-800 font-bold uppercase text-sm" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.blog')}</Link>
            
            {/* Quick Links Mobile */}
            <div className="px-6 py-4 bg-gray-50 mt-4 border-t border-gray-200">
              <h4 className="font-bold text-gray-800 mb-2">{t('nav.quickLinks')}</h4>
              <div className="grid grid-cols-2 gap-2">
                <Link to="/parents" className="text-sm text-[#cc0000]">{t('nav.parents')}</Link>
                <Link to="/alumni" className="text-sm text-[#cc0000]">{t('nav.alumni')}</Link>
                <Link to="/contributions" className="text-sm text-[#cc0000]">{t('nav.contributions')}</Link>
                <Link to="/downloads" className="text-sm text-[#cc0000]">{t('nav.downloads')}</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
