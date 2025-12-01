import GermanyContent from './components/GermanyContent';
import GermanyGradeCalculator from './components/GermanyGradeCalculator';
import RelatedLinks from '@/utils/RelatedLinks'; // Assuming you reuse this

export const metadata = {
  title: 'Einfach Notendurchschnitt Rechner',
  description:
    'Berechne deinen Notendurchschnitt (Schule, Uni, Abitur) mit unserem kostenlosen Rechner. Einfache Eingabe von Noten und Gewichtung.',
  alternates: {
    canonical: 'https://calculatecgpa.com/grade-calculator/germany',
  },
};

const Germany = () => {
  return (
    <div className="lg:col-span-2">
      <section className="bg-white rounded-lg md:shadow-xs p-0 md:p-8 md:border">
        {/* German Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-6 flex items-center bg-gradient-to-b from-indigo-500 to-indigo-700 bg-clip-text text-transparent">
          Notendurchschnitt Rechner
        </h1>
        {/* German Subtitle */}
        <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-1">
          Fächer & Noten eingeben
        </h2>
        <p className="text-slate-600 mb-6">
          Trage deine Fächer, Noten (1-6) und die Gewichtung ein.
        </p>

        <GermanyGradeCalculator />
      </section>

      <RelatedLinks />

      <div className="bg-white mt-8">
        <GermanyContent />
      </div>
    </div>
  );
};
export default Germany;
