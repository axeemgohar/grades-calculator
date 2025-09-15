import RelatedLinks from '@/utils/RelatedLinks';
import UKContent from './components/UKContent';
import UKDCCalculator from './components/UKGPACalculator';

export const metadata = {
  title: 'Simple UK Degree Calculator',
  description:
    'Calculate your UK degree classification instantly. Convert marks to First Class, 2:1, 2:2, or Third Class honors. Free calculator for UK students.',
  alternates: {
    canonical: 'https://calculatecgpa.com/grade-calculator/uk',
  },
};

const USA = () => {
  return (
    <div className="lg:col-span-2">
      <section className="bg-white rounded-lg md:shadow-xs p-0 md:p-8 md:border">
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

      {/* Info Section */}
      <div className="bg-white mt-8">
        <UKContent />
      </div>
    </div>
  );
};
export default USA;
