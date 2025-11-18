import RelatedLinks from '@/utils/RelatedLinks';
import UKContent from './components/UKContent';
import UKDCCalculator from './components/UKGPACalculator';
import UKDegreeCalculatorSchema from '@/JSON-LD Schemas/UKDCCalculatorSchema';

export const metadata = {
  title: 'Simple UK Degree Calculator',
  description:
    'Calculate your UK degree classification instantly. Convert marks to First Class, 2:1, 2:2, or Third Class honors. Free calculator for UK students.',
  alternates: {
    canonical: 'https://calculatecgpa.com/grade-calculator/uk',
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

const USA = () => {
  return (
    <div className="lg:col-span-2">
      <section className="bg-white rounded-lg md:shadow-xs p-0 md:p-8 md:border mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-6 flex items-center bg-gradient-to-b from-indigo-500 to-indigo-700 bg-clip-text text-transparent">
          UK Degree Calculator
        </h1>
        <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-1">
          Enter Your Modules
        </h2>
        <p className="text-slate-600 mb-6">Add each module and its details.</p>

        <UKDCCalculator />
      </section>
      <RelatedLinks />
      <div className="max-lg:hidden mb-8">
        <div id="ezoic-pub-ad-placeholder-104"></div>
      </div>

      {/* Info Section */}
      <div className="bg-white mt-8">
        <UKContent />
      </div>
      <UKDegreeCalculatorSchema />
    </div>
  );
};
export default USA;
