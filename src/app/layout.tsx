import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/Components/Layout/Navbar';
import './globals.css';
import { Tajawal, Inter } from 'next/font/google';
import { Metadata, Viewport } from 'next';
import Footer from '@/Components/Layout/Footer';

// تظبيط الخط العربي
const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-tajawal',
  display: 'swap',
});

// تظبيط الخط اللاتيني
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-inter',
  display: 'swap',
});

// تظبيط شاشة العرض ولون شريط المتصفح
export const viewport: Viewport = {
  themeColor: '#0B0C10',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// 👑 الميتا داتا الرسمية والنظيفة لـ "الإمبراطور" (عربي صريح / إنجليزي صريح)
export const metadata: Metadata = {
  metadataBase: new URL('https://alembratour.vercel.app'),
  // 1. العناوين والوصف باللغة العربية الصريحة
  title: {
    template: '%s | الإمبراطور', 
    default: 'الإمبراطور | وكالة رقمية إبداعية لخدمات البرمجة والتصميم والتسويق', 
  },
  description:
    'وكالة الإمبراطور الرقمية هي شريكك الإبداعي المعتمد لخدمات البرمجة الخاصة، تصميم المواقع الاحترافية، التسويق الإلكتروني الشامل، وإدارة الهوية التجارية بأعلى معايير الفخامة والاحترافية.',
  
  applicationName: 'الإمبراطور',
  authors: [{ name: 'الإمبراطور', url: 'https://alembratour.vercel.app' }],
  generator: 'Next.js',
  
  // 2. الكلمات المفتاحية (مفصولة تماماً بدون أي خلط داخل الكلمة الواحدة)
  keywords: [
    // كلمات مفتاحية عربية صريحة
    'الإمبراطور',
    'فرونت',
    'فرونت اند',
    'وكالة رقمية',
    'وكالة تسويق إلكتروني',
    'برمجة خاصة للمواقع',
    'تصميم مواقع ويب احترافية',
    'تطوير برمجيات ومتاجر',
    'إدارة سيو',
    'إدارة هوية تجارية',
    'تطوير مشاريع رقمية',
    
    // الكلمات المفتاحية الإنجليزية الصريحة
    'Al Embratour',
    'Digital Agency',
    'Creative Agency',
    'Web Development',
    'Branding',
    'front',
    'front end',
    'front-end',
    'SEO'
  ],
  referrer: 'origin-when-cross-origin',

  // 3. بيانات الشير للفيسبوك والواتساب (عربي صريح)
  openGraph: {
    type: 'website',
    locale: 'ar_EG',
    url: 'https://alembratour.vercel.app',
    siteName: 'الإمبراطور',
    title: 'الإمبراطور | وكالة رقمية إبداعية لخدمات البرمجة والتصميم والتسويق',
    description:
      'نحول أفكارك البرمجية والتسويقية إلى واقع رقمي فخم يليق بعلامتك التجارية. خدمات برمجة خاصة، تصميم مواقع، وتسويق إلكتروني شامل.',
    images: [
      {
        url: '/Logoo.png',
        width: 1200,
        height: 630,
        alt: 'شعار الإمبراطور الرسمي',
      },
    ],
  },

  // 4. كروت تويتر (عربي صريح)
  twitter: {
    card: 'summary_large_image',
    title: 'الإمبراطور | وكالة رقمية إبداعية ',
    description:
      'خدمات برمجية وتسويقية فخمة. ارفع مستوى عملك الرقمي اليوم.',
    images: ['/Logoo.png'],
  },

  icons: {
    icon: '/Logoo.png',
    shortcut: '/Logoo.png',
    apple: '/Logoo.png',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="ar" 
      dir="rtl" 
      suppressHydrationWarning 
      className={`${tajawal.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-[#0B0C10] text-[#F5F5F7] antialiased min-h-screen flex flex-col font-sans">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow relative z-10">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}