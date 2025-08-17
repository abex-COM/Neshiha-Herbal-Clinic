import React from "react";

/** Language Selector Component */
export default function LanguageSelector({ 
  languages, 
  selectedLanguage, 
  setSelectedLanguage, 
  isLanguageOpen, 
  setIsLanguageOpen 
}) {
  return (
    <div className="relative language-selector">
      <button
        onClick={() => setIsLanguageOpen(!isLanguageOpen)}
        className="flex items-center gap-2 bg-white border-2 border-emerald-200 text-gray-700 font-medium px-4 py-2 rounded-full hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300"
      >
        <span className="text-lg">
          {languages.find(lang => lang.name === selectedLanguage)?.flag}
        </span>
        <span className="hidden sm:block">{selectedLanguage}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isLanguageOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {/* Language Dropdown */}
      {isLanguageOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                setSelectedLanguage(language.name);
                setIsLanguageOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-emerald-50 transition-colors duration-200 ${
                selectedLanguage === language.name ? 'bg-emerald-100 text-emerald-700' : 'text-gray-700'
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
      )}
    </div>
  );
}