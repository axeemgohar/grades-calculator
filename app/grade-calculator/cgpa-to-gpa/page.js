import RelatedLinks from '@/utils/RelatedLinks';
import CGPAPercentageContent from './components/CGPAtoGPAContent';
import CGPAtoGPACalculator from './components/CGPAtoGPACalculator';

export const metadata = {
  title: 'Simple CGPA to GPA Converter | Convert Any Scale',
  description:
    'Free CGPA to GPA converter for international students. Convert between 4.0, 5.0, 7.0, 10.0 scales instantly. Perfect for US, UK, Australia applications.',
  alternates: {
    canonical: 'https://calculatecgpa.com/grade-calculator/cgpa-to-gpa',
  },
};

const USA = () => {
  return (
    <div className="lg:col-span-2">
      <section className="bg-white rounded-lg md:shadow-xs p-0 md:p-8 md:border">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-6 flex items-center bg-gradient-to-b from-indigo-500 to-indigo-700 bg-clip-text text-transparent">
          CGPA to GPA Converter
        </h1>
        <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-1">
          Convert Between Any GPA Scale
        </h2>
        <p className="text-slate-600 mb-8">
          Enter your CPGA, select your current and target conversion scale
        </p>

        <CGPAtoGPACalculator />
      </section>
      <RelatedLinks />
      {/* Info Section */}
      <div className="bg-white mt-8">
        <CGPAPercentageContent />
      </div>
    </div>
  );
};
export default USA;
