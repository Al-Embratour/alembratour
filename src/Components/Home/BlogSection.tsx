'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

// 📂 مصفوفة المقالات الثابتة بدون تواريخ
const homePosts = [
  {
    id: '1',
    slug: 'why-custom-code-over-wordpress',
    ar: {
      title: 'س: ليه ببعد تماماً عن الووردبريس في المشاريع الكبيرة؟',
      summary: 'الخلاصة: الفارق الجوهري بين الأكواد الخاصة والقوالب الجاهزة من حيث السرعة، الأمان، والتحكم المطلق في الأداء البرمجي.'
    },
    en: {
      title: 'Q: Why do I avoid WordPress for scalable applications?',
      summary: 'In short: The fundamental difference between custom code and templates regarding speed, security, and core performance.'
    }
  },
  {
    id: '2',
    slug: 'clean-code-benefits',
    ar: {
      title: 'جودة الكود مش رفاهية.. دي فلوس بتوفرها للمستقبل!',
      summary: 'ليه تدفع في كود متقفل صح طالما الشكل الخارجي واحد؟ لأن الكود النظيف بيخلي موقعك سريع وقابل للتطوير دايماً من غير ما ينهار.'
    },
    en: {
      title: 'Clean code is not a luxury.. It saves real budget!',
      summary: 'Why invest in solid architecture if the UI looks identical? Because clean code keeps your platform scalable and hyper-fast.'
    }
  }
];

export const BlogSection = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  return (
    // 🎨 الخلفية هنا بقت فاتحة ونظيفة جداً بمحاذاة انسيابية
    <section className="bg-[#F8FAFC] py-20 px-6 border-t border-slate-200/60" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="max-w-3xl mx-auto">
        
        {/* 👑 عنوان السيكشن بالخط الداكن الفخم */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            {isAr ? '✍️ من دفتر الإمبراطور' : '✍️ From The Notebook'}
          </h2>
          <p className="text-slate-500 text-sm mt-2 font-light">
            {isAr ? 'أفكار سريعة وشروحات تقنية مبسطة.' : 'Quick thoughts and straightforward tech insights.'}
          </p>
        </div>

        {/* 📄 عرض المقالات داخل كروت بيضاء متناسقة */}
        <div className="space-y-6">
          {homePosts.map((post) => {
            const data = isAr ? post.ar : post.en;
            return (
              <Link 
                key={post.id}
                href={`/blog/${post.slug}?lang=${language}`}
                className="block p-6 rounded-xl bg-white border border-slate-200 hover:border-[#C8A85A] hover:shadow-md transition-all duration-300 group"
              >
                {/* تعديل لون الخط لدرجة ذهبي غامق ملكي يناسب الخلفيات الفاتحة عند الهوفر */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#B39243] transition-colors duration-300">
                  {data.title}
                </h3>
                <p className="text-slate-600 text-sm mt-2 line-clamp-2 font-light leading-relaxed">
                  {data.summary}
                </p>
              </Link>
            );
          })}
        </div>

        {/* 🔗 زرار الانتقال لصفحة كل المقالات بلون ذهبي متناسق وعميق */}
        <div className="mt-8 text-center">
          <Link 
            href={`/blog?lang=${language}`}
            className="inline-block text-xs sm:text-sm font-bold text-[#B39243] hover:text-[#917331] hover:underline transition-all"
          >
            {isAr ? 'عرض جميع المنشورات ←' : 'View all posts →'}
          </Link>
        </div>

      </div>
    </section>
  );
};