'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

// 📂 الهيكلة الصحيحة باستخدام الـ Query Parameters لتمرير حالة الـ Context بين المواقع
const projectsData = [
  {
    id: 'al-shamel-system',
    category: 'systems',
    liveUrl: {
      ar: 'https://al-shamel-delta.vercel.app/', // 🔗 يفتح الموقع الرئيسي ويمرر لغة الكونتكس عربي
      en: 'https://al-shamel-delta.vercel.app/'  // 🔗 يفتح الموقع الرئيسي ويمرر لغة الكونتكس إنجليزي
    },
    imageUrl: {
      ar: '/alshamelar.png', 
      en: '/alshamelen.png'  
    },
    tags: { ar: ['برنامج تعريفي', 'حسابات ومخازن'], en: ['Showcase', 'Accounting & Inventory'] },
    ar: { title: 'برنامج الشامل للحسابات والمخازن', desc: 'بورتفوليو تعريفي مخصص لعرض مزايا وأنظمة برنامج الشامل لإدارة الحسابات والمخازن والمبيعات بكفاءة.' },
    en: { title: 'Al-Shamel Accounting & Inventory', desc: 'A premium promotional showcase for Al-Shamel ecosystem, engineered for corporate accounting and warehouse logistics.' },
    gradient: 'from-[#141A16] to-[#0A0D0B]'
  },
  {
    id: 'el-rahawy-pipe',
    category: 'web',
    liveUrl: {
      ar: 'https://elrahawy-pipe.vercel.app/', // 🔗 يفتح موقع الرهاوي ويمرر عربي
      en: 'https://elrahawy-pipe.vercel.app/'  // 🔗 يفتح موقع الرهاوي ويمرر إنجليزي
    },
    imageUrl: {
      ar: '/elrahawyar.png', 
      en: '/elrahawyen.png'  
    },
    tags: { ar: ['موقع رسمي', 'Next.js'], en: ['Official Site', 'Next.js'] },
    ar: { title: 'موقع شركة الرهاوي بايب', desc: 'تطوير المنصة الرقمية الرسمية لشركة الرهاوي المتخصصة في حلول شبكات الأنابيب ومضخات المياه بأعلى أداء.' },
    en: { title: 'El-Rahawy Pipe Platform', desc: 'The official web platform developed for El-Rahawy Pipe, optimizing corporate positioning and water pump engineering solutions.' },
    gradient: 'from-[#191610] to-[#0A0906]'
  }
];

export const Portfolio = () => {
  const { language } = useLanguage();
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', ar: 'الكل', en: 'All Work' },
    { id: 'web', ar: 'تطوير الويب', en: 'Web Dev' },
    { id: 'systems', ar: 'الأنظمة والبرامج', en: 'Systems & Software' },
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="relative bg-[#0B0F14] overflow-hidden select-none">
      
      {/* ⚪️ الجزء الأول من السيكشن (الخلفية البيضاء الفاخرة) */}
      <div className="bg-white text-slate-900 pt-24 pb-16 px-6 relative z-10 rounded-b-[2.5rem] md:rounded-b-[4rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 leading-tight"
            >
              {language === 'ar' ? 'مشاريع صُنعت لترك أثر' : 'Architecting Digital Legacies'}
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-500 mt-4 font-light max-w-2xl leading-relaxed"
            >
              {language === 'ar' 
                ? 'تصفح أعمالنا الرقمية الإستراتيجية التي نقلت عملائنا لقمة الصدارة السوقية.' 
                : 'Exploration of our strategic digital products that engineered absolute market authority for industry leaders.'}
            </motion.p>
          </div>

          <div className="flex flex-wrap gap-3 border-b border-slate-100 pb-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`relative px-5 py-2.5 lg:px-6 lg:py-3 text-xs sm:text-sm lg:text-base xl:text-lg font-medium tracking-wide transition-colors duration-300 rounded-full ${
                  filter === cat.id ? 'text-white font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span className="relative z-10">{language === 'ar' ? cat.ar : cat.en}</span>
                {filter === cat.id && (
                  <motion.div 
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-[#C8A85A] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* ⚫️ الجزء الثاني من السيكشن (عرض المشاريع على الخلفية الداكنة) */}
      <div className="py-20 xl:py-28 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const local = language === 'ar' ? project.ar : project.en;
              const tags = language === 'ar' ? project.tags.ar : project.tags.en;
              
              // سحب الرابط والصورة المحددة بناء على لغة كونتكس موقع الإمبراطور الحالي
              const targetUrl = project.liveUrl[language as 'ar' | 'en'];
              const targetImage = project.imageUrl[language as 'ar' | 'en'];

              return (
                <motion.a
                  layout
                  href={targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  key={project.id}
                  className={`group relative rounded-3xl border border-white/[0.04] bg-gradient-to-b ${project.gradient} p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[500px] lg:min-h-[560px] xl:min-h-[620px] overflow-hidden shadow-2xl block decoration-none select-none`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(500px_circle_at_center,rgba(200,168,90,0.04),transparent)] transition-opacity duration-700 pointer-events-none" />

                  {/* الجزء العلوي: الوسوم وزر السهم */}
                  <div className="flex justify-between items-start z-10">
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 text-[10px] lg:text-xs xl:text-sm uppercase font-bold tracking-widest text-[#C8A85A] bg-[#C8A85A]/5 border border-[#C8A85A]/10 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-[#C8A85A] group-hover:text-black group-hover:border-transparent transition-all duration-500 transform group-hover:rotate-45">
                      <svg width="16" height="16" className="lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </div>
                  </div>

                  {/* 🖥️ إطار شاشة المتصفح الذكي */}
                  <div className="my-6 relative rounded-2xl border border-white/[0.06] bg-black/60 aspect-[16/10] group-hover:border-[#C8A85A]/30 transition-all duration-500 z-10 shadow-inner flex flex-col overflow-hidden">
                    
                    {/* شريط المتصفح */}
                    <div className="h-7 w-full bg-white/[0.03] border-b border-white/[0.06] flex items-center px-3 gap-1.5 shrink-0 z-20">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    </div>

                    {/* عرض الصورة المتغيرة بحسب لغة الموقع */}
                    <div className="w-full h-full flex items-center justify-center p-4 overflow-hidden relative">
                      <img 
                        src={targetImage} 
                        alt={local.title}
                        className="max-w-full max-h-full object-contain transform group-hover:scale-[1.02] transition-transform duration-700 ease-[0.16,1,0.3,1]"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>

                  {/* الجزء العلوي الماليست للمعلومات */}
                  <div className="space-y-4 relative z-10 mt-auto">
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white group-hover:text-[#C8A85A] transition-colors duration-300">
                      {local.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-[#9AA4B2] font-light leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {local.desc}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 text-xs lg:text-sm xl:text-base font-bold uppercase tracking-wider pt-2 text-[#C8A85A]">
                      {language === 'ar' ? 'زيارة الموقع' : 'Visit Site'}
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#C8A85A] to-transparent group-hover:w-full transition-all duration-700" />
                </motion.a>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};