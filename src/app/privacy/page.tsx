'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#D4AF37]/20 selection:text-[#AA842A] overflow-hidden relative py-16 md:py-24">
      
      <div className="mx-auto w-full max-w-[900px] px-4 sm:px-6 relative z-10">
        
        {/* زر العودة للرئيسية */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#D4AF37] transition-colors"
          >
            {isAr ? '← العودة للرئيسية' : '← Back to Home'}
          </Link>
        </div>

        {/* كارت المستند الرسمي الأبيض */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/80 p-8 md:p-16 relative overflow-hidden"
          dir={isAr ? 'rtl' : 'ltr'}
        >
          
          {/* 🔮 1. الختم المائي الخلفي العملاق (تم تكبير الحجم هنا لـ 900×900 ليفرش خلف المستند بالكامل) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.055] pointer-events-none select-none z-0">
            <Image
              src="/Logoo.png"
              alt="Watermark Seal"
              width={650} 
              height={650}
              className="rounded-full transform max-w-none"
            />
          </div>
          
          {/* رأس الصفحة الفخم */}
          <div className="border-b border-slate-100 pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
                {isAr ? 'سياسة الخصوصية وسرية المعلومات' : 'Privacy Policy & Confidentiality'}
              </h1>
              <p className="text-sm text-slate-400 font-medium">
                {isAr ? 'آخر تحديث: يونيو 2026' : 'Last Updated: June 2026'}
              </p>
            </div>
            
            {/* اللوجو الصغير في الهيدر كمستند رسمي */}
            <div className="h-20 w-20 rounded-full border border-slate-200 p-0.5 bg-slate-50">
              <Image src="/Logoo.png" alt="Logo" width={60} height={60} className="rounded-full object-cover h-full w-full" />
            </div>
          </div>

          {/* محتوى السياسة */}
          <div className="space-y-8 text-base leading-relaxed text-slate-600 relative z-10">
            <section>
              <h2 className="text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2 text-[#AA842A]">
                ✦ {isAr ? '1. مقدمة ترحيبية' : '1. Introduction'}
              </h2>
              <p>
                {isAr 
                  ? 'مرحباً بكم في وكالة الإمبراطور الرقمية. نحن نولي خصوصية بياناتكم أهمية قصوى. تهدف هذه السياسة إلى توضيح نوعية البيانات التي نجمعها وكيفية حمايتها عند استخدامكم لموقعنا الإلكتروني.'
                  : 'Welcome to Al Embratour Digital Agency. Your privacy is of utmost importance to us. This policy outlines the types of data we collect and how we protect it.'}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2 text-[#AA842A]">
                ✦ {isAr ? '2. البيانات التي نجمعها' : '2. Data We Collect'}
              </h2>
              <p>
                {isAr 
                  ? 'نقوم بجمع المعلومات التي تقدمها لنا طواعية عند تعبئة نموذج "ابدأ مشروعك" أو "تواصل معنا"، وتشمل الاسم, البريد الإلكتروني، وتفاصيل المشروع المطروح للدراسة.'
                  : 'We collect information you provide voluntarily when filling out forms like "Start Your Project" or "Contact Us", including your name, email, and project details.'}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2 text-[#AA842A]">
                ✦ {isAr ? '3. أمن وحماية المعلومات' : '3. Information Security'}
              </h2>
              <p>
                {isAr 
                  ? 'تطبق وكالة الإمبراطور معايير أمان برمجية صارمة وتشفير كامل لحماية بياناتكم من أي وصول غير مصرح به. لا نقوم ببيع، المقايضة، أو تسريب بيانات عملائنا لأي جهة خارجية مطلقاً.'
                  : 'Al Embratour agency applies strict security standards and full encryption to protect your data. We never sell, trade, or leak our clients data to any third party.'}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2 text-[#AA842A]">
                ✦ {isAr ? '4. ملفات تعريف الارتباط (Cookies)' : '4. Cookies Policy'}
              </h2>
              <p>
                {isAr 
                  ? 'نستخدم ملفات تعريف الارتباط لتحسين تجربة تصفحك للموقع، وقياس أداء الصفحات وسرعتها، وضمان تقديم تجربة برمجية سلسة ومخصصة لك.'
                  : 'We use cookies to enhance your browsing experience, measure page performance, and ensure a smooth, tailored digital experience.'}
              </p>
            </section>
          </div>

          {/* 🎯 2. الختم الرسمي النهائي (قفل المستند الملوكي) */}
          <div className="border-t border-slate-100 mt-12 pt-12 flex justify-between items-center relative z-10">
            <div>
              <p className="text-sm font-bold text-slate-900 mb-1">
                {isAr ? 'اعتماد الإدارة القانونية' : 'Legal Administration Approval'}
              </p>
              <p className="text-xs text-slate-400 font-medium">
                {isAr ? 'الإمبراطور' : 'Al Embratour'}
              </p>
            </div>

            {/* سكشن الختم الزاوي الفخم */}
            <motion.div 
              className="relative p-2 flex items-center justify-center select-none"
            >
              {/* حلقة الإطار الذهبي للختم */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#D4AF37]/50 animate-[spin_40s_linear_infinite]" />
              
              {/* الحاوية الداخلية للختم واخدة ميل كأنه مضغوط بـ إيد */}
              <div className="relative h-24 w-24 rounded-full border-4 border-double border-[#D4AF37] bg-white p-1 transform  flex items-center justify-center shadow-lg shadow-[#D4AF37]/10">
                <Image 
                  src="/Logoo.png" 
                  alt="Official Seal" 
                  width={100} 
                  height={100} 
                  className="rounded-full object-cover h-full w-full grayscale contrast-125 opacity-90" 
                />
                {/* كلمة دائرية صغيرة فوق الختم */}
                <div className="absolute -bottom-1 bg-white px-2 border border-[#D4AF37] text-[9px] font-black text-[#AA842A] tracking-widest rounded-md">
                  {isAr ? 'معتمد' : 'APPROVED'}
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>

        {/* فوتر فرعي خفيف */}
        <p className="text-center text-xs text-slate-400 mt-8">
          {isAr 
            ? 'حقوق النشر © 2026 الإمبراطور . جميع الحقوق محفوظة.' 
            : 'Copyright © 2026 Al Embratour. All Rights Reserved.'}
        </p>
      </div>
    </div>
  );
}