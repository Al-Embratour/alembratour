import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/Components/Layout/Navbar';
import './globals.css';
import { Tajawal, Inter } from 'next/font/google';
import { Metadata } from 'next';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-tajawal',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'الإمبراطور | Al Embratour',
  description: 'Premium Elite Digital Creative Agency.',
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
          <main className="flex-grow">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}