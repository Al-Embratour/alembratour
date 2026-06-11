import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // الرابط الأساسي للموقع (عدله لرابط موقعك النهائي لما تشتريه)
  const baseUrl = 'https://alembratour.vercel.app'; 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly', // تحديث أسبوعي للصفحة الرئيسية
      priority: 1.0,             // أعلى أهمية للموقع
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}