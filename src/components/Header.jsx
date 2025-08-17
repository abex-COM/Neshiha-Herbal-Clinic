import React, { useState, useEffect } from "react";
import LanguageSelector from "./LanguageSelector";

/** Navigation Header */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const links = ["Services", "Testimonials", "About", "Contact"];
  
  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "om", name: "Afaan Oromo", flag: "🇪🇹" },
    { code: "ar", name: "العربية", flag: "🇸🇦" }
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
              Nesiha Herbal Clinic
            </h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200 group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            {/* Language Selector */}
          <LanguageSelector languages={languages} selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} isLanguageOpen={isLanguageOpen} setIsLanguageOpen={setIsLanguageOpen} />  
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
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={handleLinkClick}
                className="block text-base font-medium text-gray-700 hover:text-emerald-600 py-3 px-6 rounded-lg hover:bg-emerald-50 transition-all duration-200 mx-4"
              >
                {link}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200 mx-4 pb-4">
              {/* Mobile Language Selector */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700 text-sm uppercase tracking-wide px-2">
                  Language / Luqataa / اللغة
                </h4>
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => {
                      setSelectedLanguage(language.name);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                      selectedLanguage === language.name 
                        ? 'bg-emerald-100 text-emerald-700 border border-emerald-300' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-lg">{language.flag}</span>
                    <span className="font-medium">{language.name}</span>
                    {selectedLanguage === language.name && (
                      <svg className="w-4 h-4 ml-auto text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
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
