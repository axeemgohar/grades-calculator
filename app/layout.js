import Header from '@/components/ui/Header';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { Roboto } from 'next/font/google';
import Footer from '@/components/ui/Footer';
import { GoogleTagManager } from '@next/third-parties/google';
import EzoicScripts from '@/ezoic/EzoicInit';

const robotoSans = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const metadata = {
  title: 'Simple CGPA Calculator',
  description:
    "Easily calculate your overall GPA with our simple CGPA calculator. You just have to select the number of semesters, enter your GPA, click on the 'calculate' button, and we will do the rest.",
  alternates: {
    canonical: 'https://calculatecgpa.com',
  },

  metadataBase: new URL('https://calculatecgpa.com'),
  openGraph: {
    images: '/opengraph-image.png',
  },
  languages: {
    en: 'https://calculatecgpa.com/',
    'en-US': 'https://calculatecgpa.com/grade-calculator/us',
    'en-GB': 'https://calculatecgpa.com/grade-calculator/uk',
    'en-NZ': 'https://calculatecgpa.com/grade-calculator/nz',
    'de-CH': 'https://calculatecgpa.com/grade-calculator/ch',
    'x-default': 'https://calculatecgpa.com/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoSans.variable} font-sans antialiased`}>
        <Header />

        <Toaster position="top-right" />
        {/* <GoogleTagManager gtmId="GTM-MPPN39V" /> */}
        <EzoicScripts />
        <div className="h-[100px] text-center">
          <div id="ezoic-pub-ad-placeholder-123"></div>
        </div>

        <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
