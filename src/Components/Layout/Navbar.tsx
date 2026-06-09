'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const currentPath = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // 🎯 ستيت مخصصة لتتبع الـ Hash الحالي في المتصفح لدعم الانتقال المباشر بين السكاشن
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    // تحديث الـ Hash فوراً عند تحميل الصفحة لأول مرة
    setActiveHash(window.location.hash);

    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    // الاستماع لأي تغيير في الـ Hash أو التنقل في التاريخ (Back/Forward)
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, [currentPath]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full h-20 bg-[#0A0A0A]/70 backdrop-blur-md border-b border-white/5 flex items-center select-none font-sans"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="flex h-full items-center justify-between gap-4">
          
          {/* شعار الشركة واسم الهوية الملوكي */}
          <div className="flex flex-shrink-0 items-center">
            <Link href="/" onClick={() => setActiveHash('')} className="flex items-center gap-3 focus:outline-none group">
              <motion.div
                whileHover={{ scale: 1.06, boxShadow: '0 0 20px rgba(212, 175, 55, 0.45)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="relative h-11 w-11 overflow-hidden rounded-full border border-[#D4AF37]/30 bg-black p-[1px]"
              >
                <Image
                  src="/Logo.jpg"
                  alt="Al Embratour Visual Mark"
                  width={44}
                  height={44}
                  className="h-full w-full object-cover rounded-full"
                  priority
                />
              </motion.div>
              
              <div className="flex font-black tracking-wide text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                {language === 'ar' ? (
                  <span className="text-xl md:text-2xl drop-shadow-[0_1px_2px_rgba(212,175,55,0.15)]">
                    الإمبراطور
                  </span>
                ) : (
                  <span className="text-sm md:text-base font-sans tracking-wider">
                    Al Embratour
                  </span>
                )}
              </div>
            </Link>
          </div>

          {/* روابط التنقل في المنتصف للـ Desktop */}
          <div className="hidden md:flex md:items-center md:gap-x-2 lg:gap-x-4">
            {t.links.map((link) => {
              // 🧠 فك الرابط ومطابقة الـ Path والـ Hash معاً بدقة من مصفوفة اللغات الخاصة بك
              const [linkPath, linkHash] = link.href.split('#');
              const targetHash = linkHash ? `#${linkHash}` : '';
              
              const isActive = 
                currentPath === (linkPath || '/') && activeHash === targetHash;

              return (
                <motion.div
                  key={link.href}
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="relative"
                >
                  <Link
                    href={link.href}
                    onClick={() => setActiveHash(targetHash)} // استجابة فورية للبرواز الذهبي عند الضغط
                    className="relative px-5 py-2.5 text-sm lg:text-base font-bold transition-all duration-300 rounded-lg group focus:outline-none block"
                  >
                    <span
                      className={`relative z-10 transition-all duration-300 block ${
                        isActive 
                          ? 'text-[#D4AF37] font-extrabold' 
                          : 'text-slate-200 group-hover:text-white'
                      }`}
                    >
                      {link.label}
                    </span>

                    {/* المربع الثابت الفخم للصفحة الحالية */}
                    {isActive && (
                      <span className="absolute inset-0 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/25 shadow-[0_0_15px_rgba(212,175,55,0.08)] -z-0" />
                    )}

                    {/* هالة التوهج المربعة الناعمة وقت الهوفر */}
                    {!isActive && (
                      <span className="absolute inset-0 rounded-lg bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 shadow-[0_0_25px_rgba(212,175,55,0.35)] transition-all duration-300 -z-0" />
                    )}

                    {/* الخط السفلي الذهبي المستقر للصفحة الحالية */}
                    <span 
                      className={`absolute bottom-0 h-[2px] bg-[#D4AF37] shadow-[0_0_10px_#D4AF37] transition-all duration-300 ease-out right-0 left-0 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`} 
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* أزرار اللغات وطلب المشاريع للـ Desktop */}
          <div className="hidden md:flex md:items-center md:gap-x-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-200 border border-white/10 bg-white/5 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300"
            >
              {t.langToggle}
            </button>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden text-xs font-bold rounded-xl text-[#0A0A0A] bg-gradient-to-b from-[#FFE8A3] via-[#D4AF37] to-[#AA842A] shadow-[0_4px_15px_rgba(212,175,55,0.25)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
              >
                {t.ctaText}
              </Link>
            </motion.div>
          </div>

          {/* زر الهامبرغر للموبايل */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 rounded-lg text-white/90 hover:text-[#D4AF37] focus:outline-none transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                {isMobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* قائمة الموبايل المتجاوبة */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? '100%' : '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: language === 'ar' ? '100%' : '-100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-y-0 top-20 left-0 w-full h-[calc(100vh-80px)] bg-[#0A0A0A]/98 backdrop-blur-2xl border-t border-white/5 z-40 overflow-y-auto md:hidden"
          >
            <div className="flex flex-col justify-between h-full px-6 py-8 space-y-6">
              <div className="flex flex-col space-y-2">
                {t.links.map((link) => {
                  // نفس الحسبة الذكية للموبايل لضمان اتساق التجربة بالكامل
                  const [linkPath, linkHash] = link.href.split('#');
                  const targetHash = linkHash ? `#${linkHash}` : '';
                  
                  const isActive = 
                    currentPath === (linkPath || '/') && activeHash === targetHash;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => {
                        setActiveHash(targetHash);
                        setIsMobileOpen(false);
                      }}
                      className={`block rounded-xl px-4 py-3.5 text-base font-bold transition-all ${
                        isActive 
                          ? `bg-[#D4AF37]/10 text-[#D4AF37] ${
                              language === 'ar' ? 'border-r-4' : 'border-l-4'
                            } border-[#D4AF37] shadow-[inset_0_0_12px_rgba(212,175,55,0.05)]` 
                          : 'text-slate-200 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div className="flex flex-col gap-4 border-t border-white/5 pt-6 pb-6">
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsMobileOpen(false);
                  }}
                  className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-white/5 border border-white/10 text-center"
                >
                  {t.langToggle}
                </button>
                
                <Link
                  href="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA842A] text-center text-sm font-black text-[#0A0A0A]"
                >
                  {t.ctaText}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};