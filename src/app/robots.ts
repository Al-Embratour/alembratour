import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // السماح لجميع محركات البحث (جوجل، بينج، إلخ)
      allow: '/',     // السماح بأرشفة الموقع بالكامل
      disallow: '/api/', // منع أرشفة ملفات الـ API الخلفية
    },
    // رابط خريطة الموقع اللي هيقرا منها جوجل
    sitemap: 'https://alembratour.com/sitemap.xml', 
  };
}