import RelatedLinks from '@/utils/RelatedLinks';
import SwissGradeCalculator from './components/SwissGradeCalculator';
import CHContent from './components/SwissContent';

export const metadata = {
  title: 'Einfacher Notenrechner Schweiz',
  description:
    'Berechne Deine gewichtete Schweizer Note präzise mit ECTS-Punkten. Finde Dein Prädikat (Magna Cum Laude) und vergleiche es mit dem US GPA (4.0). Sofort & kostenlos!',
  alternates: {
    canonical: 'https://calculatecgpa.com/grade-calculator/ch',
    languages: {
      en: 'https://calculatecgpa.com/',
      'en-US': 'https://calculatecgpa.com/grade-calculator/us',
      'en-GB': 'https://calculatecgpa.com/grade-calculator/uk',
      'en-NZ': 'https://calculatecgpa.com/grade-calculator/nz',
      'de-CH': 'https://calculatecgpa.com/grade-calculator/ch',
      'x-default': 'https://calculatecgpa.com/',
    },
  },
};

const USA = () => {
  return (
    <div className="lg:col-span-2">
      <section className="bg-white rounded-lg md:shadow-xs p-0 md:p-8 md:border">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-6 flex items-center bg-gradient-to-b from-indigo-500 to-indigo-700 bg-clip-text text-transparent">
          Schweiz Notenrechner
        </h1>
        <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-1">
          Berechne Deine gewichtete Note (1.0 bis 6.0 Skala)
        </h2>
        <p className="text-slate-600 mb-6">
          Trage Deine Noten und ECTS-Punkte ein.
        </p>

        <SwissGradeCalculator />
      </section>
      <RelatedLinks />

      {/* Info Section */}
      <div className="bg-white mt-8">
        <CHContent />
      </div>
    </div>
  );
};
export default USA;
