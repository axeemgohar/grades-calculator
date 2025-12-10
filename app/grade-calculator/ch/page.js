import RelatedLinks from '@/utils/RelatedLinks';
import SwitzerlandCalculator from './components/SwissGradeCalculator';
import SwitzerlandContent from './components/SwissContent';

export const metadata = {
  title: 'Schweizer Notenrechner',
  description:
    'Berechne deinen Notendurchschnitt oder wandle Punkte in Noten um (Schweizer System 1-6). Kostenlos, einfach und präzise.',
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
          Durchschnitt oder Prüfung
        </h2>
        <p className="text-slate-600 mb-6">
          Wähle zwischen Notendurchschnitt und Punkterechner.
        </p>

        {/* <SwissGradeCalculator /> */}
        <SwitzerlandCalculator />
      </section>
      <RelatedLinks />

      {/* Info Section */}
      <div className="bg-white mt-8">
        <SwitzerlandContent />
      </div>
    </div>
  );
};
export default USA;
