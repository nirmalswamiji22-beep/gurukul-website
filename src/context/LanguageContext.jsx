import React, { createContext, useState, useContext } from 'react';
import en from '../translations/en';
import gu from '../translations/gu';

const LanguageContext = createContext();

const translations = {
  EN: en,
  GU: gu
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('EN');

  const t = (key) => {
    return translations[language]?.[key] || translations['EN']?.[key] || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'EN' ? 'GU' : 'EN');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
