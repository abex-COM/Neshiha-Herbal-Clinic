import React, { useState, useEffect } from "react";
import { useLanguage } from "../i18n/hooks/useLanguage";

/** Navigation Header */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  
  const { t, currentLanguage, changeLanguage, languages } = useLanguage();

  const links = [
    { key: "services", href: "#services" },
    { key: "testimonials", href: "#testimonials" },
    { key: "about", href: "#about" },
    { key: "contact", href: "#contact" }
  ];
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLanguageOpen && !event.target.closest('.language-selector')) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLanguageOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-emerald-100' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 text-gray-800">
            <div className="w-8 h-8 lg:w-10 lg:h-10 text-emerald-600">
              <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 45.8C19.7 45.8 15.5 44.5 11.9 42.1C8.3 39.7 5.4 36.4 3.4 32.6C1.4 28.8 0.2 24.6 0.2 20.3C0.2 16 1.4 11.8 3.4 8C5.4 4.2 8.3 0.9 11.9 -1.5C15.5 -3.9 19.7 -5.2 24 -5.2C28.3 -5.2 32.5 -3.9 36.1 -1.5C39.7 0.9 42.6 4.2 44.6 8C46.6 11.8 47.8 16 47.8 20.3C47.8 24.6 46.6 28.8 44.6 32.6C42.6 36.4 39.7 39.7 36.1 42.1C32.5 44.5 28.3 45.8 24 45.8Z" fill="currentColor"/>
              </svg>
            </div>
            <h2 className="text-lg lg:text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              {t('header.title')}
            </h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="relative text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200 group"
              >
                {t(`navigation.${link.key}`)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            
            {/* Enhanced Language Selector */}
            <div className="relative language-selector">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="group flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-200 border border-transparent hover:border-emerald-200"
              >
                <span className="text-lg">🌐</span>
                <span className="hidden sm:block">{t('header.language')}</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ease-out ${
                    isLanguageOpen ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isLanguageOpen && (
                <>
                  {/* Backdrop */}
                  <div 
                    className="fixed inset-0 z-40"
                    onClick={() => setIsLanguageOpen(false)}
                  />
                  
                  {/* Enhanced Dropdown */}
                  <div className="absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-50 transform origin-top-right animate-in slide-in-from-top-2 duration-200">
                    {/* Header */}
                    <div className="px-4 py-2 border-b border-gray-100 mb-2">
                      <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                        {t('header.language')}
                      </h3>
                    </div>
                    
                    {/* Language Options */}
                    <div className="space-y-1">
                      {languages.map((language, index) => {
                        const isSelected = currentLanguage === language.code;
                        const getFlag = (code) => {
                          switch(code) {
                            case 'en': return '🇺🇸';
                            case 'ar': return '🇸🇦';
                            case 'om': return '🇪🇹';
                            case 'am': return '🇪🇹';
                            default: return '🌐';
                          }
                        };
                        const flag = getFlag(language.code);
                        
                        return (
                          <button
                            key={language.code}
                            onClick={() => {
                              changeLanguage(language.code);
                              setIsLanguageOpen(false);
                            }}
                            className={`group w-full flex items-center gap-3 px-4 py-3 text-left rounded-xl mx-2 transition-all duration-200 ${
                              isSelected 
                                ? 'bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 border border-emerald-200 shadow-sm' 
                                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                            style={{
                              animationDelay: `${index * 50}ms`
                            }}
                          >
                            {/* Flag */}
                            <span className={`text-lg filter drop-shadow-sm transition-transform duration-200 group-hover:scale-110 ${
                              isSelected ? 'animate-pulse' : ''
                            }`}>
                              {flag}
                            </span>
                            
                            {/* Language Name */}
                            <span className={`font-medium text-sm transition-colors duration-200 ${
                              isSelected ? 'text-emerald-700' : 'text-gray-700'
                            }`}>
                              {language.nativeName}
                            </span>
                            
                            {/* Selection Indicator */}
                            {isSelected && (
                              <div className="ml-auto flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                                <svg 
                                  className="w-4 h-4 text-emerald-600" 
                                  fill="currentColor" 
                                  viewBox="0 0 20 20"
                                >
                                  <path 
                                    fillRule="evenodd" 
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 7-7-7" 
                                    clipRule="evenodd" 
                                  />
                                </svg>
                              </div>
                            )}
                            
                            {/* Hover Effect */}
                            {!isSelected && (
                              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="pb-6 space-y-4 bg-white rounded-b-2xl shadow-lg border border-emerald-100">
            {links.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={handleLinkClick}
                className="block text-base font-medium text-gray-700 hover:text-emerald-600 py-3 px-6 rounded-lg hover:bg-emerald-50 transition-all duration-200 mx-4"
              >
                {t(`navigation.${link.key}`)}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200 mx-4 pb-4">
              {/* Enhanced Mobile Language Selector */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700 text-sm uppercase tracking-wide px-2 flex items-center gap-2">
                  <span className="text-lg">🌐</span>
                  {t('header.language')}
                </h4>
                {languages.map((language, index) => {
                  const isSelected = currentLanguage === language.code;
                  const getFlag = (code) => {
                    switch(code) {
                      case 'en': return '🇺🇸';
                      case 'ar': return '🇸🇦';
                      case 'om': return '🇪🇹';
                      case 'am': return '🇪🇹';
                      default: return '🌐';
                    }
                  };
                  const flag = getFlag(language.code);
                  
                  return (
                    <button
                      key={language.code}
                      onClick={() => {
                        changeLanguage(language.code);
                        setIsMenuOpen(false);
                      }}
                      className={`group w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                        isSelected
                          ? 'bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 border border-emerald-200 shadow-sm' 
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      {/* Flag */}
                      <span className={`text-lg filter drop-shadow-sm transition-transform duration-200 group-hover:scale-110 ${
                        isSelected ? 'animate-pulse' : ''
                      }`}>
                        {flag}
                      </span>
                      
                      {/* Language Name */}
                      <span className={`font-medium text-sm transition-colors duration-200 ${
                        isSelected ? 'text-emerald-700' : 'text-gray-700'
                      }`}>
                        {language.nativeName}
                      </span>
                      
                      {/* Selection Indicator */}
                      {isSelected && (
                        <div className="ml-auto flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                          <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                      
                      {/* Hover Effect */}
                      {!isSelected && (
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}
