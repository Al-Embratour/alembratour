'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { allPosts } from '@/data/blogPosts';

export const POSTS_PER_PAGE = 6;

export default function BlogListPage() {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  
  const [currentPage, setCurrentPage] = useState(1);

  // حسابات التنقل والصفحات
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 relative overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* 🌌 الخلفية الفخمة الغامقة */}
      <div className="absolute top-0 left-0 w-full h-[45vh] sm:h-[40vh] bg-[#0B0C10] z-0 border-b border-white/[0.04]" />
      <div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[600px] h-[300px] bg-[#C8A85A]/[0.08] rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10 px-6 pt-20 pb-24">
        
        {/* الهيدر المركزي للإمبراطور */}
        <div className="mb-20 text-center flex flex-col items-center justify-center">
          <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight leading-none">
            {isAr ? 'مدونة الإمبراطور' : 'Al Embratour'}
          </h1>
          <p className="text-slate-400 text-base sm:text-xl mt-5 font-normal max-w-3xl leading-relaxed">
            {isAr ? 'مساحة معرفية موسعة لتوثيق الأفكار التقنية والمعمارية وفلسفة التصميم الرقمي الراقي.' : 'An expanded technical notebook documenting architecture paradigms and digital luxury design.'}
          </p>
        </div>

        {/* شبكة المقالات الـ 30 المقسمة تلقائياً */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {currentPosts.map((post) => {
            const data = isAr ? post.ar : post.en;
            
            return (
              <Link 
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col justify-between p-8 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(200,168,90,0.08)] hover:border-[#C8A85A]/40 transition-all duration-500 transform hover:-translate-y-1"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#A47E2B] bg-[#C8A85A]/10 px-3 py-1 rounded-md inline-block mb-5">
                    {isAr ? 'منشور تقني' : 'TECHNICAL POST'}
                  </span>

                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-[#A47E2B] transition-colors duration-300 leading-snug line-clamp-2">
                    {data.title}
                  </h2>
                  
                  <p className="text-slate-600 text-sm sm:text-base mt-4 font-normal leading-relaxed line-clamp-3">
                    {data.summary}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-5 mt-8 flex items-center justify-between text-xs sm:text-sm font-medium text-slate-400">
                  <div className="flex items-center gap-2.5">
                    <img 
                      src="/Logo.jpg" 
                      alt="Al Embratour" 
                      className="w-6 h-6 rounded-full object-cover border border-slate-200/60 shadow-sm"
                    />
                    <span className="text-slate-700 font-bold">
                      {isAr ? 'الإمبراطور' : 'Al Embratour'}
                    </span>
                  </div>
                  
                  <span className="bg-slate-50 px-3 py-1 rounded text-slate-500 font-medium text-xs">
                    {isAr ? post.date.ar : post.date.en}
                  </span>
                </div>

              </Link>
            );
          })}
        </div>

        {/* 🎹 سلايدر الأرقام الفاخر (سيظهر الأرقام من 1 إلى 5 بالكامل) */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-16 border-t border-slate-200/60 pt-10">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`w-12 h-12 rounded-xl text-sm font-bold tracking-wider transition-all duration-300 transform active:scale-95 shadow-sm ${
                  currentPage === pageNumber
                    ? 'bg-[#0B0C10] text-white border border-[#C8A85A]'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-[#C8A85A] hover:text-[#A47E2B]'
                }`}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}