'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { language } = useLanguage();
    const isAr = language === 'ar';

    // 🎯 الروابط السريعة المحدثة بالترتيب الدقيق الذي طلبته
    const navLinks = [
        
        { nameAr: 'خدماتنا', nameEn: 'Our Services', href: '/#services' },
        { nameAr: 'أعمالنا', nameEn: 'Portfolio', href: '/#portfolio' },
        { nameAr: 'لماذا الإمبراطور', nameEn: 'Why Al Embratour', href: '/#why-choose-us' },
        { nameAr: 'المدونة', nameEn: 'Blog', href: '/blog' },
        { nameAr: 'اتصل بنا', nameEn: 'Contact Us', href: '/contact' },
        { href: '/' },
    ];

    return (
        // 🖤 لون أسود فاخر متطابق تماماً مع حواف صورة اللوجو لإخفاء أي حواف مربعة
        <footer className="bg-[#050505] text-slate-400 relative border-t border-neutral-900 overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
            
            {/* ⚜️ الخط الذهبي الإمبراطوري الفاصل المتدرج بدقة */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C8A85A]/60 to-transparent z-20" />
            
            {/* 🌌 تأثير ديكوري مستوحى من شبكة الخطوط الرقمية المترابطة بالصورة الأولى */}
            <div className="absolute inset-0 opacity-25 pointer-events-none z-0 mix-blend-screen bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute top-[-150px] left-1/4 w-[400px] h-[400px] bg-[#C8A85A]/[0.025] rounded-full blur-[120px] pointer-events-none animate-pulse duration-[6000ms]" />

            <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900/70">
                    
                    {/* العمود الأول: اللوجو المطور بـ Next Image والكلام الفخم */}
                    <div className="md:col-span-5 space-y-6">
                        <div className="flex items-center gap-3 group">
                            {/* 🚀 تكبير وتثبيت أبعاد اللوجو باستخدام مكوّن Next.js الرسمي لسرعة فائقة */}
                            <div className="relative w-30 h-30 transition-transform duration-500  rounded-full overflow-hidden ">
                                <Image 
                                    src="/Logos.png" 
                                    alt={isAr ? "شعار الإمبراطور" : "Al Embratour Logo"} 
                                    fill
                                    sizes="100px"
                                    className="object-contain brightness-110 drop-shadow-[0_0_15px_rgba(200,168,90,0.15)]"
                                    priority
                                />
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400/90 font-light max-w-sm">
                            {isAr 
                                ? 'نصنع المنصات الرقمية الفاخرة ونعيد هندسة الأنظمة البرمجية المخصصة لتلبي طموحات الشركات الواعدة وتفرض هيبتها بالكامل في السوق الرقمي.' 
                                : 'Architecting elite digital platforms and engineering custom software ecosystems tailored to empower enterprises to command absolute authority.'}
                        </p>
                    </div>

                    {/* العمود الثاني: الروابط المرتبة والمنسقة بعناية */}
                    <div className="md:col-span-3 space-y-5">
                        <h4 className="text-xs font-bold text-slate-200 tracking-wider uppercase border-r-2 border-[#C8A85A] pr-3 rtl:border-r-2 rtl:border-l-0 ltr:border-l-2 ltr:border-r-0 px-2.5">
                            {isAr ? 'الروابط السريعة' : 'QUICK LINKS'}
                        </h4>
                        <ul className="space-y-3 text-sm">
                            {navLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a 
                                        href={link.href} 
                                        className="inline-block text-slate-400 transition-all duration-300 hover:text-[#C8A85A] hover:translate-x-2 rtl:hover:-translate-x-2 font-medium"
                                    >
                                        {isAr ? link.nameAr : link.nameEn}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* العمود الثالث: تواصل معنا بأيقونات هندسية حية وتأثيرات تفاعلية */}
                    <div className="md:col-span-4 space-y-5">
                        <h4 className="text-xs font-bold text-slate-200 tracking-wider uppercase border-r-2 border-[#C8A85A] pr-3 rtl:border-r-2 rtl:border-l-0 ltr:border-l-2 ltr:border-r-0 px-2.5">
                            {isAr ? 'تواصل معنا' : 'CONTACT US'}
                        </h4>
                        <div className="space-y-4 text-sm">
                            {/* اتصال هاتفي ذكي بأيقونة SVG احترافية */}
                            <a 
                                href="tel:01122422314" 
                                className="flex items-center gap-3.5 group text-slate-300 hover:text-[#C8A85A] transition-colors w-fit"
                            >
                                <div className="w-8 h-8 rounded-full bg-neutral-900/80 flex items-center justify-center border border-neutral-800 text-[#C8A85A] group-hover:bg-[#C8A85A]/10 group-hover:border-[#C8A85A]/30 transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                </div>
                                <span dir="ltr" className="font-semibold tracking-wide text-slate-300 group-hover:text-slate-100 transition-colors">01122422314</span>
                            </a>

                            {/* بريد إلكتروني بأيقونة SVG احترافية */}
                            <a 
                                href="mailto:mohamedsamara0113@gmail.com" 
                                className="flex items-center gap-3.5 group text-slate-300 hover:text-[#C8A85A] transition-colors w-fit"
                            >
                                <div className="w-8 h-8 rounded-full bg-neutral-900/80 flex items-center justify-center border border-neutral-800 text-[#C8A85A] group-hover:bg-[#C8A85A]/10 group-hover:border-[#C8A85A]/30 transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                                </div>
                                <span className="font-medium break-all text-slate-300 group-hover:text-slate-100 transition-colors">mohamedsamara0113@gmail.com</span>
                            </a>
                        </div>

                        {/* 🌐 أيقونات تطبيقات التواصل الاجتماعي الرسمية متفاعلة وحية */}
                        <div className="pt-4 flex items-center gap-3.5">
                            {/* واتساب */}
                            <a 
                                href="https://wa.me/201122422314" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-slate-400 hover:text-emerald-500 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(16,185,129,0.1)]"
                                title="WhatsApp"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12.004 2c-5.51 0-9.99 4.49-9.99 10 0 1.77.47 3.49 1.35 5.02L2 22l5.13-1.34c1.47.8 3.12 1.22 4.87 1.22 5.51 0 9.99-4.49 9.99-10s-4.48-10-9.99-10zm6.84 14.28c-.28.78-1.42 1.43-1.97 1.54-.5.1-1.14.18-3.33-.72-2.8-1.15-4.61-4.01-4.75-4.2-.14-.19-1.15-1.53-1.15-2.92a2.9 2.9 0 01.88-2.14c.26-.27.57-.33.77-.33.2 0 .4 0 .57.01.18.01.41-.07.65.5.24.58.83 2.02.9 2.16.07.14.12.31.02.51-.1.2-.2.32-.35.5-.15.17-.32.39-.45.52-.15.15-.31.32-.13.63.18.31.81 1.33 1.74 2.16.1.1.23.16.35.16.3 0 .49-.14.67-.35.18-.21.77-.9 1-.12.21.32.11.45.65.73.53.27 1.05.54 1.2.62.15.08.25.12.33.25.09.14.09.8-.19 1.58z"/>
                                </svg>
                            </a>

                            {/* فيسبوك */}
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]"
                                title="Facebook"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>

                            {/* لينكد إن */}
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-slate-400 hover:text-sky-500 hover:border-sky-500/40 hover:bg-sky-500/5 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(14,165,233,0.1)]"
                                title="LinkedIn"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
                                </svg>
                            </a>

                            {/* انستجرام */}
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-slate-400 hover:text-pink-500 hover:border-pink-500/40 hover:bg-pink-500/5 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(236,72,153,0.1)]"
                                title="Instagram"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* 🎯 ديل الفوتر الممركز متضمناً سياسة الخصوصية والشروط لرفع درجات الـ SEO وجوجل */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-xs text-neutral-500 font-medium">
                    <p className="tracking-wide">
                        © {new Date().getFullYear()}{' '}
                        {isAr ? 'الإمبراطور. جميع الحقوق محفوظة.' : 'Al Embratour. All rights reserved.'}
                    </p>
                    
                    <div className="flex items-center gap-4">
                        <a href="/privacy" className="hover:text-[#C8A85A] transition-colors duration-300 relative group">
                            <span>{isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}</span>
                            <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-[#C8A85A] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <span className="text-neutral-800 select-none">|</span>
                        <a href="/terms" className="hover:text-[#C8A85A] transition-colors duration-300 relative group">
                            <span>{isAr ? 'الشروط والأحكام' : 'Terms & Conditions'}</span>
                            <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-[#C8A85A] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}