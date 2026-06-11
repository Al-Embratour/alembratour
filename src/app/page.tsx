import Lead from '@/Components/Home/Lead';


export default function HomePage() {
  return (
    <main className="relative w-full min-h-screen bg-[#0B0C10] overflow-x-hidden">
      {/* سكشن الهيرو الرئيسي الفاخر */}
      <Lead />
      {/* 💡 ملاحظة: يمكنك هنا مستقبلاً استدعاء بقية السكاشن مثل (Services, Portfolio, About, Testimonials) */}
    </main>
  );
}