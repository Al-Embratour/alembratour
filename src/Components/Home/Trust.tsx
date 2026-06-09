'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export const TrustBar = () => {
  const { language } = useLanguage();

  const content = {
    ar: {
      stats: [
        {
          highlight: 'جودة في التنفيذ',
          desc: 'نهتم بالتفاصيل الصغيرة التي تصنع الفرق الكبير.',
        },
        {
          highlight: 'حلول مخصصة بالكامل',
          desc: 'كل مشروع يُبنى وفق احتياجاته، دون الاعتماد على قوالب جاهزة.',
        },
        {
          highlight: 'تجربة استخدام استثنائية',
          desc: 'نصمم واجهات واضحة وسلسة تمنح المستخدم تجربة لا تُنسى.',
        },
      ],
    },

    en: {
      stats: [
        {
          highlight: 'Excellence in Execution',
          desc: 'We focus on the small details that create a remarkable difference.',
        },
        {
          highlight: 'Fully Custom Solutions',
          desc: 'Every project is built around its unique requirements, without relying on generic templates.',
        },
        {
          highlight: 'Exceptional User Experience',
          desc: 'We design clear and intuitive interfaces that leave a lasting impression.',
        },
      ],
    },
  };

  const current = content[language];

  return (
    <section className="relative w-full py-12 bg-[#F6F4EF] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          relative
          w-full
          px-8 md:px-20
          py-12 md:py-14
          flex flex-col md:flex-row
          items-center
          justify-between
          gap-10 md:gap-0
          bg-white/70
          backdrop-blur-xl
          border-y border-[#C8A85A]/20
          shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]
        "
      >
        {/* Top Gold Glow Line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A85A]/40 to-transparent" />

        {current.stats.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center text-center px-4 max-w-sm">
              <h3 className="text-[#C8A85A] font-bold text-xl md:text-2xl mb-3">
                {item.highlight}
              </h3>

              <p className="text-[#555] text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>

            {index < 2 && (
              <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-black/10 to-transparent" />
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
};