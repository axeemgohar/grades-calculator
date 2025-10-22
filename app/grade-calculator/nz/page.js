import NZGPACalculator from './components/NZGPACalculator';
import NZContent from './components/NZContent';
import RelatedLinks from '@/utils/RelatedLinks';
import NZGPACalculatorSchema from '@/JSON-LD Schemas/NZGPACalculatorSchema';

export const metadata = {
  title: 'Simple NZ GPA Calculator',
  description:
    'Calculate your weighted GPA on the New Zealand 9.0 scale. Essential tool for students planning Honours, Masters, or checking scholarship eligibility. Accurate and easy to use!',
  alternates: {
    canonical: 'https://calculatecgpa.com/grade-calculator/nz',
  },
};

const USA = () => {
  return (
    <div className="lg:col-span-2">
      <section className="bg-white rounded-lg md:shadow-xs p-0 md:p-8 md:border">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-6 flex items-center bg-gradient-to-b from-indigo-500 to-indigo-700 bg-clip-text text-transparent">
          New Zealand GPA Calculator
        </h1>
        <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-1">
          Calculate Your GPA on the 9.0 Scale
        </h2>
        <p className="text-slate-600 mb-6">Add each paper and its details.</p>

        <NZGPACalculator />
      </section>
      <RelatedLinks />

      {/* Info Section */}
      <div className="bg-white mt-8">
        <NZContent />
      </div>
      <NZGPACalculatorSchema />
    </div>
  );
};
export default USA;
