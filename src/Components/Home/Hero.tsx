'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export const Hero = () => {
  const { language } = useLanguage();

  const content = {
    ar: {
      headlineLine1: 'من الفكرة',
      headlineLine2: 'إلى تأثير رقمي حقيقي',
      subheadline:
        'نحوّل رؤيتك إلى حضور رقمي لا يُنسى، ونصنع تجارب ذكية تجمع بين التصميم المميز والأداء العالي لتحقيق نمو ملموس لعلامتك التجارية.',
      primaryCta: 'ابدأ رحلتك معنا',
      secondaryCta: 'استعرض أعمالنا',
    },
    en: {
      headlineLine1: 'From Concept',
      headlineLine2: 'To Real Digital Impact',
      subheadline:
        'We transform your vision into an unforgettable digital presence, crafting smart experiences that combine distinctive design with high performance to drive tangible growth for your brand.',
      primaryCta: 'Start Your Journey',
      secondaryCta: 'View Our Portfolio',
    },
  };

  const current = content[language];

  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-gradient-to-b from-[#22242A] via-[#131419] to-[#0B0C10] flex items-center justify-center px-6 py-12 sm:py-0 select-none">

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

        {/* Glow 1 */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[140px]"
        />

        {/* Glow 2 */}
        <motion.div
          animate={{
            x: [0, -30, 50, 0],
            y: [0, 40, -40, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-20 right-1/4 h-[600px] w-[600px] rounded-full bg-[#D4AF37]/8 blur-[160px]"
        />

        {/* Glow 3 */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[180px]"
        />

        {/* Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl text-center w-full">

        {/* Headline - 👑 تم تكبير الخط هنا للشاشات الكبيرة باستخدام lg و xl */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.2] xl:leading-[1.15] tracking-tight text-balance"
        >
          <span className="bg-gradient-to-b from-[#F4D76B] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent drop-shadow-[0_8px_30px_rgba(212,175,55,0.25)] block">
            {current.headlineLine1}
          </span>
          <span className="text-white block mt-2 sm:mt-1">
            {current.headlineLine2}
          </span>
        </motion.h1>

        {/* Description - 📝 تم تكبير النص لـ xl:text-2xl وتوسيع الحاوية لـ max-w-4xl */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto mt-8 max-w-4xl text-base sm:text-lg lg:text-xl xl:text-2xl leading-[1.8] sm:leading-9 xl:leading-10 text-slate-200 px-4 text-balance"
        >
          {current.subheadline}
        </motion.p>

        {/* Buttons - 🎯 تم زيادة الحجم لـ lg:text-lg لتتناسب مع فخامة الهيدر الجديد */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-y-6 sm:gap-y-0 sm:gap-x-6 w-full max-w-xs sm:max-w-none mx-auto px-2 sm:px-0"
        >
          {/* Primary Button */}
          <motion.div
            whileHover={{
              y: -5,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 18,
            }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/contact"
              className="
                relative
                flex
                w-full
                sm:w-auto
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                px-10
                py-4
                font-black
                text-[#0B0C10]
                bg-gradient-to-b
                from-[#FFE8A3]
                via-[#D4AF37]
                to-[#AA842A]
                shadow-[0_15px_40px_rgba(212,175,55,0.3)]
                text-center
              "
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
              <span className="absolute top-0 left-0 right-0 h-[1px] bg-white/60" />
              <span className="relative z-10 text-sm sm:text-base lg:text-lg">
                {current.primaryCta}
              </span>
            </Link>
          </motion.div>

          {/* Secondary Button */}
          <motion.div
            whileHover={{
              y: -4,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/portfolio"
              className="
                flex
                w-full
                sm:w-auto
                items-center
                justify-center
                rounded-2xl
                border
                border-[#D4AF37]/40
                bg-white/[0.04]
                backdrop-blur-md
                px-10
                py-4
                font-semibold
                text-white
                text-center
                transition-all
                duration-300
                hover:border-[#D4AF37]
                hover:bg-[#D4AF37]/10
                text-sm sm:text-base lg:text-lg
              "
            >
              {current.secondaryCta}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/20">
          <div className="mt-2 h-2 w-2 rounded-full bg-[#D4AF37]" />
        </div>
      </motion.div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};