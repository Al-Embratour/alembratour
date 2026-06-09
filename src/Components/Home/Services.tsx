'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const ServiceCard = ({ item, index }: { item: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const rX = useSpring(rotateX, springConfig);
  const rY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseXRel = (e.clientX - rect.left) / width - 0.5;
    const mouseYRel = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(mouseXRel);
    mouseY.set(mouseYRel);

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--x', `${x}px`);
    cardRef.current.style.setProperty('--y', `${y}px`);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        rotateX: rX,
        rotateY: rY,
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full min-h-[520px] lg:min-h-[560px] xl:min-h-[600px] rounded-3xl border border-white/[0.04] bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-xl p-8 flex flex-col justify-between overflow-hidden cursor-pointer group shadow-[0_30px_100px_-15px_rgba(0,0,0,0.8)]"
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at var(--x, 0px) var(--y, 0px), rgba(200,168,90,0.06), transparent 40%)`
        }}
      />

      <div 
        style={{ transform: 'translateZ(50px)', transformStyle: 'preserve-3d' }}
        className="w-full h-48 relative flex items-center justify-center transition-transform duration-500 ease-out"
      >
        {index === 0 && (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-[85%] h-[75%] rounded-xl border border-white/[0.08] bg-black/60 shadow-2xl relative overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
              <div className="h-6 w-full bg-white/[0.02] border-b border-white/[0.05] flex items-center px-3 gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
              </div>
              <div className="p-3 space-y-2">
                <div className="h-2 w-1/3 bg-gradient-to-r from-[#C8A85A]/40 to-transparent rounded" />
                <div className="h-10 w-full border border-white/[0.03] bg-white/[0.01] rounded flex items-center justify-between px-2">
                  <div className="w-12 h-1 bg-white/20 rounded" />
                  <div className="w-6 h-4 rounded bg-[#C8A85A]/10 border border-[#C8A85A]/20" />
                </div>
              </div>
            </div>
            <div className="absolute w-32 h-32 rounded-full border border-[#C8A85A]/10 bg-radial-gradient from-[#C8A85A]/5 to-transparent blur-xl -z-10 group-hover:scale-125 transition-transform duration-700" style={{ transform: 'translateZ(-10px)' }} />
          </div>
        )}

        {index === 1 && (
          <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
            <div className="w-36 h-24 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md shadow-xl absolute -rotate-12 translate-x-[-20px] translate-y-[-10px]" style={{ transform: 'translateZ(10px)' }} />
            <div className="w-36 h-24 rounded-xl border border-[#C8A85A]/20 bg-black/80 shadow-2xl absolute rotate-6 translate-x-[20px] translate-y-[10px] flex flex-col justify-between p-3" style={{ transform: 'translateZ(35px)' }}>
              <div className="flex justify-between items-center">
                <div className="h-1.5 w-8 bg-white/40 rounded" />
                <div className="w-3 h-3 rounded-full border border-[#C8A85A]" />
              </div>
              <div className="h-6 w-full rounded bg-gradient-to-r from-[#C8A85A] to-[#AA842A] flex items-center justify-center"><div className="h-1 w-10 bg-black/40 rounded" /></div>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />
          </div>
        )}

        {index === 2 && (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-[80%] h-[70%] rounded-xl border border-white/[0.05] bg-gradient-to-tr from-black to-slate-900/40 p-4 flex flex-col justify-between" style={{ transform: 'translateZ(25px)' }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C8A85A] animate-pulse" />
                <div className="h-1.5 w-16 bg-white/30 rounded" />
              </div>
              <div className="flex items-end gap-1 h-16 w-full border-b border-white/[0.05] pb-1">
                <div className="w-full bg-white/[0.03] rounded-t group-hover:h-[80%] h-[40%] transition-all duration-700" />
                <div className="w-full bg-[#C8A85A]/30 rounded-t group-hover:h-[50%] h-[70%] transition-all duration-700" />
                <div className="w-full bg-white/[0.03] rounded-t group-hover:h-[95%] h-[55%] transition-all duration-700" />
                <div className="w-full bg-[#C8A85A] rounded-t group-hover:h-[40%] h-[90%] transition-all duration-700" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div style={{ transform: 'translateZ(30px)' }} className="mt-6">
        <span className="text-[11px] lg:text-xs xl:text-sm font-bold uppercase tracking-[0.2em] text-[#C8A85A] mb-2 block">
          {item.subtitle}
        </span>
        <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-white group-hover:text-[#C8A85A] transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-xs md:text-sm lg:text-base xl:text-lg text-[#9AA4B2] font-light leading-relaxed mt-3 border-t border-white/[0.03] pt-4">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export const Services = () => {
  const { language } = useLanguage();

  const content = {
    ar: {
      heading: 'خدمات رقمية تُصمم لتقود النمو',
      subheading:
        'نحوّل الأفكار الطموحة إلى تجارب ومنصات وأنظمة رقمية متكاملة تجمع بين الأداء، الإبداع، وقابلية التوسع.',
      cards: [
        {
          title: 'تطوير الويب الفاخر',
          subtitle: 'Premium Web Development',
          description:
            'بناء مواقع إلكترونية ومنصات وتطبيقات عالية الأداء باستخدام أحدث التقنيات مثل Next.js و TypeScript لتحقيق السرعة والأمان وقابلية التوسع المطلقة لأعمالك.',
        },
        {
          title: 'تصميم تجربة المستخدم والواجهات',
          subtitle: 'UI/UX Branding',
          description:
            'تصميم هويات رقمية وواجهات مستقبلية فريدة تمنح علامتك التجارية حضوراً استثنائياً وسيطرة كاملة بفضل تجارب استخدام مدروسة وجماليات لا تُنسى.',
        },
        {
          title: 'الأنظمة الرقمية المخصصة',
          subtitle: 'Custom Business Systems',
          description:
            'تصميم أنظمة أعمال سحابية متقدمة وبرمجيات مخصصة تساعد الشركات الكبرى والناشئة على إدارة عملياتها المعقدة بكفاءة، أتمتة المهام، والتوسع بثقة.',
        },
      ],
    },
    en: {
      heading: 'Digital Services Engineered for Growth',
      subheading:
        'We build premium digital experiences, platforms, and systems designed to scale with your business seamlessly.',
      cards: [
        {
          title: 'Premium Web Development',
          subtitle: 'Luxury Web Engineering',
          description:
            'Crafting ultra-high performance websites, web apps, and digital platforms powered by Next.js and TypeScript for bleeding-edge speed, core security, and global scale.',
        },
        {
          title: 'UI/UX Branding',
          subtitle: 'Digital Identity Design',
          description:
            'Architecting premium digital identities and futuristic interfaces that secure absolute market authority and command attention through unforgettable digital product journeys.',
        },
        {
          title: 'Custom Business Systems',
          subtitle: 'Enterprise Architecture',
          description:
            'Engineering high-end custom cloud ecosystems and automated software architectures to optimize mission-critical operations, internal logic, and absolute business scalability.',
        },
      ],
    },
  }; // اتقفلت صح هنا بنجاح

  const current = content[language];

  return (
    <section id="services" className="relative bg-[#0B0F14] py-24 xl:py-32 px-6 overflow-hidden select-none">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-[#C8A85A]/5 blur-[160px]" />
        <div className="absolute top-0 inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-5xl mx-auto mb-20 xl:mb-24 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tight"
          >
            {current.heading}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#9AA4B2] leading-[1.8] mt-6 max-w-3xl mx-auto font-light"
          >
            {current.subheading}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10 perspective-[1500px]">
          {current.cards.map((card, index) => (
            <ServiceCard key={index} item={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};