'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { allPosts } from '@/data/blogPosts';

export default function SingleBlogPost() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const [copied, setCopied] = useState(false);

  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center text-slate-900">
        <p className="font-bold text-lg">{isAr ? 'المقال غير موجود ⚠️' : 'Article not found ⚠️'}</p>
      </div>
    );
  }

  const data = isAr ? post.ar : post.en;

  // 📝 دالة نسخ نص وصياغة المقال بالكامل (العنوان + المحتوى الكامل)
  const handleCopyContent = () => {
    const formattedText = `📌 ${data.title}\n\n📅 ${isAr ? post.date.ar : post.date.en}\n\n${data.content}`;
    navigator.clipboard.writeText(formattedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-24 relative overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* خلفية علوية غامقة لعمق الواجهة */}
      <div className="absolute top-0 left-0 w-full h-[40vh] bg-[#0B0C10] z-0 border-b border-white/[0.04]" />
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#C8A85A]/[0.04] rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto relative z-10 px-6 pt-24">
        
        {/* 📑 كارت القراءة عريض ملوكي ضخم */}
        <article className="bg-white border border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-3xl p-8 sm:p-14 mb-10">
          
          <header className="mb-10 border-b border-slate-100 pb-8">
            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-400 mb-5">
              <img 
                src="/Logo.jpg" 
                alt="Al Embratour" 
                className="w-5 h-5 rounded-full object-cover border border-slate-200/60 shadow-sm"
              />
              <span className="text-slate-800 font-bold">{isAr ? 'الإمبراطور' : 'Al Embratour'}</span>
              <span>•</span>
              <span className="bg-slate-100 px-2.5 py-0.5 rounded text-slate-500 font-medium">
                {isAr ? post.date.ar : post.date.en}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 leading-tight tracking-tight">
              {data.title}
            </h1>
          </header>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-light whitespace-pre-line">
              {data.content}
            </p>
          </div>

        </article>

        {/* 🔙 صف الأزرار المتراصة أفقياً بشكل شيك متناسق جداً في الأسفل */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          
          {/* زر العودة التفاعلي */}
          <Link 
            href={`/blog`} 
            className="w-full sm:w-auto text-center inline-block text-sm font-bold text-[#A47E2B] hover:text-[#7C5E1F] bg-white border border-slate-200 hover:border-[#C8A85A] px-8 py-3.5 rounded-full shadow-sm hover:shadow transition-all duration-300 transform active:scale-95"
          >
            {isAr ? '← العودة إلى قائمة المقالات' : '← Back to All Articles'}
          </Link>

          {/* زر نسخ المقال بالكامل بأيكونة نسخته الفاخرة بجانبه تماماً */}
          <button
            onClick={handleCopyContent}
            className={`w-full sm:w-auto flex items-center justify-center gap-2.5 text-sm font-bold px-8 py-3.5 rounded-full border transition-all duration-300 shadow-sm transform active:scale-95 ${
              copied 
                ? 'bg-emerald-50 border-emerald-300 text-emerald-700' 
                : 'bg-white border-slate-200 text-slate-700 hover:border-[#C8A85A] hover:bg-slate-50'
            }`}
          >
            {copied ? (
              <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
              </svg>
            )}
            <span>{copied ? (isAr ? 'تم نسخ المقال كاملاً!' : 'Article Copied!') : (isAr ? 'نسخ المقال بالكامل' : 'Copy Full Article')}</span>
          </button>

        </div>

        {/* فوتر المنصة */}
        <div className="text-center mt-12">
          <footer className="text-[11px] text-slate-400 font-light tracking-wide">
            © {new Date().getFullYear()} {isAr ? 'منصة الإمبراطور الرقمية' : 'Al Embratour Digital Platform'}
          </footer>
        </div>

      </div>
    </div>
  );
}