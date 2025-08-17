import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translation.json';
import arTranslations from './locales/ar/translation.json';
import omTranslations from './locales/om/translation.json';
import amTranslations from './locales/am/translation.json';

const resources = {
  en: {
    translation: enTranslations
  },
  ar: {
    translation: arTranslations
  },
  om: {
    translation: omTranslations
  },
  am: {
    translation: amTranslations
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;
