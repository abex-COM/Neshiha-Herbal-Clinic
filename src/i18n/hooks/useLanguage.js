import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { languages, isRTL } from '../config';

export const useLanguage = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = useCallback((languageCode) => {
    i18n.changeLanguage(languageCode);
    
    // Update document direction for RTL languages
    const direction = isRTL(languageCode) ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
    document.documentElement.lang = languageCode;
    
    // Store language preference in localStorage
    localStorage.setItem('i18nextLng', languageCode);
  }, [i18n]);

  const currentLanguage = i18n.language;
  const currentLanguageInfo = languages.find(lang => lang.code === currentLanguage) || languages[0];

  return {
    t,
    currentLanguage,
    currentLanguageInfo,
    changeLanguage,
    languages,
    isRTL: isRTL(currentLanguage)
  };
};
