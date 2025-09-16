import RelatedLinks from '@/utils/RelatedLinks';
import CGPAPercentageCalculator from './components/CGPAPercentageCalculator';
import CGPAPercentageContent from './components/CGPAPercentageContent';
import CGPAPercentageCalculatorSchema from '@/JSON-LD Schemas/CGPAPercentageSchema';

export const metadata = {
  title: 'Simple CGPA to Percentage Calculator',
  description:
    'Convert CGPA to percentage and percentage to CGPA with our free calculator. Instant 2-way conversion for all grading scales. Perfect for students worldwide',
  alternates: {
    canonical: 'https://calculatecgpa.com/grade-calculator/cgpa-percentage',
  },
};

const USA = () => {
  return (
    <div className="lg:col-span-2">
      <section className="bg-white rounded-lg md:shadow-xs p-0 md:p-8 md:border">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-6 flex items-center bg-gradient-to-b from-indigo-500 to-indigo-700 bg-clip-text text-transparent">
          CGPA & Percentage Calculator
        </h1>
        <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-1">
          Enter Your Semester GPA & Credits
        </h2>
        <p className="text-slate-600 mb-8">Add each semester GPA & credits</p>

        <CGPAPercentageCalculator />
      </section>
      <RelatedLinks />
      {/* Info Section */}
      <div className="bg-white mt-8">
        <CGPAPercentageContent />
      </div>
      <CGPAPercentageCalculatorSchema />
    </div>
  );
};
export default USA;
