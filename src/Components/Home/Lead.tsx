import { Hero } from '@/Components/Home/Hero';
import { Services } from '@/Components/Home/Services';
import { TrustBar } from '@/Components/Home/Trust';
import { Portfolio } from './Portfolio';
import { WhyChooseEmbratour } from './Why';
import { BlogSection } from './BlogSection';


export default function Lead() {
  return (
    <main className="relative w-full min-h-screen bg-[#0B0C10] overflow-x-hidden">
      {/* سكشن الهيرو الرئيسي الفاخر */}
      <Hero />
      <TrustBar />
      <Services/>
      <Portfolio/>
      <WhyChooseEmbratour/>
      <BlogSection/>
      {/* 💡 ملاحظة: يمكنك هنا مستقبلاً استدعاء بقية السكاشن مثل (Services, Portfolio, About, Testimonials) */}
    </main>
  );
}