'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const featuresData = [
  {
    id: 'custom-built',
    icon: (
      <svg className="w-8 h-8 text-[#C8A85A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="16 11 12 15 8 11" />
      </svg>
    ),
    ar: {
      title: 'بدون ووردبريس أو قوالب جاهزة',
      desc: 'كل سطر كود يتم تصميمه وتطويره خصيصاً لاحتياجات مشروعك، مما يضمن أقصى درجات الأمان، المرونة، والأداء بعيداً عن القيود التقليدية للقوالب الجاهزة.',
    },
    en: {
      title: 'Custom-Built From Scratch',
      desc: 'Every single line of code is engineered explicitly for your business needs, guaranteeing absolute security, absolute flexibility, and unrivaled performance without template limitations.',
    }
  },
  {
    id: 'seo-performance',
    icon: (
      <svg className="w-8 h-8 text-[#C8A85A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5" />
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.57.36 3.05 1 4.38L12 4l9 12.38c.64-1.33 1-2.81 1-4.38 0-5.52-4.48-10-10-10z" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
    ),
    ar: {
      title: 'أداء خارق وتهيئة لمحركات البحث',
      desc: 'نبني مواقع ومنصات عالية السرعة ومهيأة تقنياً لمحركات البحث لضمان تجربة استخدام استثنائية وفرص ظهور أفضل في نتائج البحث.',
    },
    en: {
      title: 'Performance & SEO Excellence',
      desc: 'We architect hyper-fast platforms optimized perfectly for search engine crawlers, driving organic traffic while offering an elite user experience.',
    }
  },
  {
    id: 'partnership',
    icon: (
      <svg className="w-8 h-8 text-[#C8A85A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    ar: {
      title: 'شراكة ودعم طويل المدى',
      desc: 'لا نتوقف عند تسليم المشروع، بل نواصل دعمك وتطوير حلولك الرقمية لضمان استمرارية النجاح والنمو بثقة.',
    },
    en: {
      title: 'Long-Term Strategic Partnership',
      desc: 'Our commitment extends far past deployment. We continuously support, maintain, and iterate your ecosystem to secure permanent market leadership.',
    }
  }
];

export const WhyChooseEmbratour = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  // إعدادات الأنيميشن للظهور المتتابع (Staggered Animation)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 20 }
    }
  };

  return (
    <section 
      id="why-choose-us" 
      className="relative bg-[#0B0C10] py-24 lg:py-32 px-6 overflow-hidden select-none"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* 🌌 الخلفية السينمائية والإضاءات الذهبية الناعمة (Ambient Lighting) */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#C8A85A]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#C8A85A]/[0.02] rounded-full blur-[150px] pointer-events-none" />
      
      {/* شبكة جرافيك خفيفة جداً لإعطاء طابع هندسي فاخر */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 👑 الهيدر الرئيسي للسيكشن */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight"
          >
            {isAr ? (
              <>
                لماذا تختار <span className="text-[#C8A85A] bg-gradient-to-r from-[#C8A85A] via-[#E4CB8E] to-[#C8A85A] bg-clip-text text-transparent">الإمبراطور؟</span>
              </>
            ) : (
              <>
                Why Choose <span className="text-[#C8A85A] bg-gradient-to-r from-[#C8A85A] via-[#E4CB8E] to-[#C8A85A] bg-clip-text text-transparent">Al Embratour?</span>
              </>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base lg:text-lg text-slate-400 mt-6 font-light leading-relaxed px-4"
          >
            {isAr 
              ? 'نبني حلولاً رقمية مصممة خصيصاً لتحقيق النمو، الأداء، والاستدامة على المدى الطويل.' 
              : 'We create premium digital solutions engineered for growth, performance, and long-term success.'}
          </motion.p>
        </div>

        {/* 🎴 كروت المزايا والـ Value Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
        >
          {featuresData.map((feat) => {
            const content = isAr ? feat.ar : feat.en;

            return (
              <motion.div
                key={feat.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.01,
                  transition: { type: 'spring', stiffness: 300, damping: 20 }
                }}
                className="group relative rounded-2xl border border-white/[0.04] bg-gradient-to-b from-white/[0.03] to-transparent p-8 lg:p-10 flex flex-col justify-between overflow-hidden backdrop-blur-md shadow-2xl transition-all duration-500 hover:border-[#C8A85A]/30"
              >
                {/* تأثير المسح الضوئي الذهبي عند التحويم (Gold Light Sweep) */}
                <div className="absolute inset-0 w-[200%] translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-[#C8A85A]/[0.03] to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />

                <div>
                  {/* 🌌 الأيقونة الفاخرة مع تأثير الـ Glowing والـ Idle animation */}
                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
                    className="w-16 h-16 rounded-xl border border-white/[0.08] bg-black/40 flex items-center justify-center relative shadow-inner mb-8 group-hover:border-[#C8A85A]/50 group-hover:bg-[#C8A85A]/5 transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-[#C8A85A]/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 text-[#C8A85A] transform group-hover:scale-110 transition-transform duration-500">
                      {feat.icon}
                    </div>
                  </motion.div>

                  {/* النصوص والعناوين الهندسية */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white tracking-wide group-hover:text-[#C8A85A] transition-colors duration-300">
                    {content.title}
                  </h3>

                  <p className="text-sm lg:text-base text-slate-400 font-light leading-relaxed mt-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {content.desc}
                  </p>
                </div>

                {/* خط بريميوم سفلي يكتمل عند عمل Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#C8A85A]/40 to-transparent w-0 group-hover:w-full mx-auto transition-all duration-700" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* 📜 الجملة الختامية العميقة (Bottom Statement) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 lg:mt-28 text-center border-t border-white/[0.05] pt-12 max-w-4xl mx-auto"
        >
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium tracking-wide text-slate-300 italic opacity-90 leading-relaxed px-4">
            " {isAr 
              ? 'نحن لا نبني مواقع إلكترونية فقط، بل نصنع أصولاً رقمية تدعم نمو أعمالك لسنوات.' 
              : "We don't just build websites. We create digital assets designed to support your business growth for years to come."
            } "
          </p>
        </motion.div>

      </div>
    </section>
  );
};