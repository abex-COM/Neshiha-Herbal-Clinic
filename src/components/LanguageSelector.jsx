import React from "react";

/** Enhanced Language Selector Component */
export default function LanguageSelector({ 
  languages, 
  selectedLanguage, 
  setSelectedLanguage, 
  isLanguageOpen, 
  setIsLanguageOpen 
}) {
  // Get current language info
  const currentLang = languages.find(lang => lang.name === selectedLanguage) || languages[0];
  
  // Language flags/emojis mapping
  const getFlag = (name) => {
    switch(name) {
      case 'English': return '🇺🇸';
      case 'Arabic': return '🇸🇦';
      case 'Afan Oromo': return '🇪🇹';
      case 'Amharic': return '🇪🇹';
      default: return '🌐';
    }
  };

  return (
    <div className="relative language-selector">
      {/* Main Button */}
      <button
        onClick={() => setIsLanguageOpen(!isLanguageOpen)}
        className="group relative flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-5 py-3 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 ease-out border-0 outline-none focus:ring-4 focus:ring-emerald-300/50"
        aria-label={`Select language. Current: ${selectedLanguage}`}
        aria-expanded={isLanguageOpen}
        aria-haspopup="listbox"
      >
        {/* Flag/Emoji */}
        <span className="text-xl filter drop-shadow-sm">
          {getFlag(currentLang?.name)}
        </span>
        
        {/* Language Name */}
        <span className="hidden sm:block text-sm font-medium">
          {selectedLanguage}
        </span>
        
        {/* Dropdown Arrow */}
        <svg
          className={`w-4 h-4 transition-transform duration-300 ease-out ${
            isLanguageOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2.5} 
            d="M19 9l-7 7-7-7" 
          />
        </svg>
        
        {/* Hover Effect Ring */}
        <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
      
      {/* Enhanced Language Dropdown */}
      {isLanguageOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsLanguageOpen(false)}
          />
          
          {/* Dropdown Container */}
          <div className="absolute right-0 top-full mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-50 transform origin-top-right animate-in slide-in-from-top-2 duration-200">
            {/* Dropdown Header */}
            <div className="px-4 py-2 border-b border-gray-100 mb-2">
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Select Language
              </h3>
            </div>
            
            {/* Language Options */}
            <div className="space-y-1">
              {languages.map((language, index) => {
                const isSelected = selectedLanguage === language.name;
                const flag = getFlag(language.name);
                
                return (
                  <button
                    key={language.code}
                    onClick={() => {
                      setSelectedLanguage(language.name);
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
                      {language.name}
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
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
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
            
            {/* Dropdown Footer */}
            <div className="px-4 py-2 border-t border-gray-100 mt-2">
              <p className="text-xs text-gray-500 text-center">
                Language preference saved automatically
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}