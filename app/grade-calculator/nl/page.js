import NetherlandsCalculator from './components/NetherlandsCalculator';
import RelatedLinks from '@/utils/RelatedLinks';
import NetherlandsContent from './components/NetherlandsContent';

export const metadata = {
  title: 'Gemiddelde Cijfer Berekenen - Eenvoudige Calculator',
  description:
    'Bereken eenvoudig je gewogen gemiddelde cijfer (1-10 schaal). Handig voor middelbare school, MBO, HBO en Universiteit. Voeg weging toe en zie direct je resultaat.',
  alternates: {
    canonical: 'https://calculatecgpa.com/grade-calculator/nl',
    languages: {
      en: 'https://calculatecgpa.com/',
      'en-US': 'https://calculatecgpa.com/grade-calculator/us',
      'en-GB': 'https://calculatecgpa.com/grade-calculator/uk',
      'en-NZ': 'https://calculatecgpa.com/grade-calculator/nz',
      'de-CH': 'https://calculatecgpa.com/grade-calculator/ch',
      'de-DE': 'https://calculatecgpa.com/grade-calculator/germany',
      'nl-NL': 'https://calculatecgpa.com/grade-calculator/nl',
      'x-default': 'https://calculatecgpa.com/',
    },
  },
};

const Netherlands = () => {
  return (
    <div className="lg:col-span-2">
      <section className="bg-white rounded-lg md:shadow-xs p-0 md:p-8 md:border">
        {/* Title styled with Blue gradient for Netherlands theme */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-6 flex items-center bg-gradient-to-b from-indigo-500 to-indigo-700 bg-clip-text text-transparent">
          Gemiddelde cijfer berekenen
        </h1>
        <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-1">
          Vul je cijfers in
        </h2>
        <p className="text-slate-600 mb-6">
          Bereken snel je gewogen gemiddelde. Voeg cijfers toe en geef de weging
          op.
        </p>

        <NetherlandsCalculator />
      </section>

      <RelatedLinks />

      <div className="bg-white mt-8">
        <NetherlandsContent />
      </div>
    </div>
  );
};
export default Netherlands;
