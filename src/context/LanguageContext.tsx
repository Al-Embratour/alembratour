'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ar' | 'en';

export interface NavLink {
  label: string;
  href: string;
}

export interface Dictionary {
  ctaText: string;
  langToggle: string;
  links: NavLink[];
}

const translations: Record<Language, Dictionary> = {
  ar: {
    ctaText: 'ابدأ مشروعك',
    langToggle: 'EN',
    links: [
      { label: 'الرئيسية', href: '/' },
      { label: 'خدماتنا', href: '/#services' },
      { label: 'أعمالنا', href: '/#portfolio' },
      { label: 'لماذا تختار الإمبراطور؟', href: '/#why-choose-us' },
      { label: 'المدونة', href: '/blog' },
      { label: 'تواصل معنا', href: '/#contact' },
    ],
  },
  en: {
    ctaText: 'Start Your Project',
    langToggle: 'عربي',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/#services' },
      { label: 'Portfolio', href: '/#portfolio' },
      { label: 'Why Choose Us?', href: '/#why-choose-us' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact Us', href: '/#contact' },
    ],
  },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ar');

  // قراءة اللغة المفضلة فور تحميل المكون في المتصفح
  useEffect(() => {
    const saved = localStorage.getItem('al-embratour-pref-lang') as Language;
    if (saved && (saved === 'ar' || saved === 'en')) {
      setLanguage(saved);
    }
  }, []);

  // تحديث الـ DOM الخاص بـ html تلقائياً عند تغيير اللغة
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('lang', language);
    root.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('al-embratour-pref-lang', language);
  }, [language]);

  // 🛠️ الدالة المفقودة التي تم إعادتها لإصلاح الـ ReferenceError
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be wrapped in LanguageProvider');
  return context;
};