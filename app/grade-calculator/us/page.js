import USAGPACalculator from './components/USAGPACalculator';
import USAContent from './components/USAContent';
import RelatedLinks from '@/utils/RelatedLinks';
import USGPACalculatorSchema from '@/JSON-LD Schemas/USGPACalculatorSchema';

export const metadata = {
  title: 'Simple US GPA Calculator',
  description:
    'Calculate your US GPA on the 4.0 scale instantly. Free, accurate GPA calculator with grade forecasting. Perfect for high school and college students.',
  alternates: {
    canonical: 'https://calculatecgpa.com/grade-calculator/us',
  },
};

const USA = () => {
  return (
    <div className="lg:col-span-2">
      <section className="bg-white rounded-lg md:shadow-xs p-0 md:p-8 md:border">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-6 flex items-center bg-gradient-to-b from-indigo-500 to-indigo-700 bg-clip-text text-transparent">
          US GPA Calculator
        </h1>
        <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-1">
          Enter Your Courses
        </h2>
        <p className="text-slate-600 mb-6">Add each course and its details.</p>

        <USAGPACalculator />
      </section>
      <RelatedLinks />

      {/* Info Section */}
      <div className="bg-white mt-8">
        <USAContent />
      </div>
      <USGPACalculatorSchema />
    </div>
  );
};
export default USA;
