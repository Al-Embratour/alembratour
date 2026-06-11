'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function TermsAndConditions() {
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
          
          {/* 🔮 1. الختم المائي الخلفي العملاق (بنفس المقاس الكبير والشفافية الناعمة) */}
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
                {isAr ? 'الشروط والأحكام لاتفاقية الاستخدام' : 'Terms & Conditions of Service'}
              </h1>
              <p className="text-sm text-slate-400 font-medium">
                {isAr ? 'آخر تحديث: يونيو 2026' : 'Last Updated: June 2026'}
              </p>
            </div>
            
            {/* اللوجو بمقاس الـ 20 الفخم */}
            <div className="h-20 w-20 rounded-full border border-slate-200 p-0.5 bg-slate-50">
              <Image src="/Logoo.png" alt="Logo" width={60} height={60} className="rounded-full object-cover h-full w-full" />
            </div>
          </div>

          {/* محتوى الشروط والأحكام */}
          <div className="space-y-8 text-base leading-relaxed text-slate-600 relative z-10">
            <section>
              <h2 className="text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2 text-[#AA842A]">
                ✦ {isAr ? '1. قبول الشروط والأحكام' : '1. Acceptance of Terms'}
              </h2>
              <p>
                {isAr 
                  ? 'بدخولك واستخدامك لموقع وكالة الإمبراطور الرقمية، فإنك تقر بموافقتك الكاملة على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء منها، يرجى التوقف عن استخدام الخدمات فوراً.'
                  : 'By accessing and using Al Embratour Digital Agency website, you acknowledge your full agreement to comply with these terms. If you disagree with any part, please stop using the services immediately.'}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2 text-[#AA842A]">
                ✦ {isAr ? '2. الملكية الفكرية والبرمجية' : '2. Intellectual Property Rights'}
              </h2>
              <p>
                {isAr 
                  ? 'جميع التصاميم، الأكواد البرمجية، الشعارات، والمحتويات المتاحة على هذا الموقع هي ملكية حصرية لوكالة الإمبراطور. لا يحق لأي جهة نسخ، تعديل، أو إعادة توزيع أي جزء برمجي أو بصري دون إذن كتابي مسبق منا.'
                  : 'All designs, custom source codes, logos, and digital contents on this website are the exclusive property of Al Embratour. No party has the right to copy, modify, or redistribute any part without prior written permission.'}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2 text-[#AA842A]">
                ✦ {isAr ? '3. سياسة التعاقد وتنفيذ المشاريع' : '3. Contracting & Execution'}
              </h2>
              <p>
                {isAr 
                  ? 'يتم الاتفاق على النطاق البرمجي والزمني لكل مشروع بشكل مستقل. تبدأ الوكالة في التنفيذ فور اعتماد العقد واستلام الدفعة الأولى المتفق عليها، وأي طلبات إضافية خارج النطاق تخضع لتقدير مالي منفصل.'
                  : 'The development scope and timeline for each project are agreed upon independently. Execution begins upon contract approval and receiving the initial payment; any extra out-of-scope requests are subject to separate pricing.'}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2 text-[#AA842A]">
                ✦ {isAr ? '4. حدود المسؤولية القانونية' : '4. Limitation of Liability'}
              </h2>
              <p>
                {isAr 
                  ? 'تبذل الوكالة أقصى جهد برمجي لضمان استقرار المواقع وسرعتها وأمنها؛ ومع ذلك، نحن غير مسؤولين عن أي أضرار ناتجة عن سوء استخدام العميل للوحة التحكم، أو مشاكل الاستضافات الخارجية، أو ظروف القوة القهرية.'
                  : 'The agency exerts maximum effort to ensure web stability, speed, and security; however, we are not liable for damages resulting from client misuse of control panels, external hosting faults, or force majeure.'}
              </p>
            </section>
          </div>

          {/* 🎯 2. الختم الرسمي النهائي (نفس قفل المستند الملوكي المعتمد) */}
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
                  width={90} 
                  height={90} 
                  className="rounded-full object-cover h-full w-full grayscale contrast-125 opacity-85" 
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