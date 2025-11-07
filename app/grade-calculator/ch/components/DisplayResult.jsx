import { Button } from '@/components/ui/button';
import { getSwissGradeDescription } from '@/lib/calculations/swiss-grade';
import { Percent, RotateCcw } from 'lucide-react';
import Link from 'next/link';

// Helper function to map the average grade to a formal Swiss classification/Prädikat
const getSwissClassification = (averageGrade) => {
  const grade = parseFloat(averageGrade);

  // Note: Swiss classifications can vary widely between universities (e.g., ETH, Uni Zürich, etc.)
  // These are standard representations based on the 1.0-6.0 scale.
  if (grade >= 5.5) {
    return 'Mit Auszeichnung (Summa Cum Laude)'; // With Distinction
  }
  if (grade >= 5.0) {
    return 'Sehr Gut (Magna Cum Laude)'; // Very Good
  }
  if (grade >= 4.5) {
    return 'Gut (Cum Laude)'; // Good
  }
  if (grade >= 4.0) {
    return 'Bestanden (Genügend)'; // Passed (Sufficient) - The standard pass mark
  }

  return 'Nicht Bestanden (Ungenügend)'; // Failed (Insufficient)
};

const DisplayResultCH = ({ gpa, onRecalculate }) => {
  const totalCourses = gpa.totalCourses || 0;
  const swissDescription = getSwissGradeDescription(gpa.score);
  const honoursClass = getSwissClassification(gpa.score);

  return (
    <>
      <output
        id="CH_Grade_calculated"
        className="mt-8 p-6 bg-indigo-50 border border-indigo-300 rounded-lg block"
      >
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {/* Main Grade Score Section - Left Column */}
          <div className="col-span-1 max-md:col-span-2 text-center md:text-left ">
            <h3 className="text-xl md:text-2xl font-bold text-indigo-900 mb-2">
              Ihr Durchschnittsnote: {/* Your Average Grade: */}
            </h3>
            <div
              className={`text-5xl md:text-6xl font-extrabold text-indigo-700 leading-tight`}
            >
              {gpa.score}
            </div>
            <div className="text-sm text-gray-800 mt-1">
              Note (1.0 bis 6.0 Skala) {/* Grade (1.0 to 6.0 Scale) */}
            </div>
          </div>

          {/* Detailed Breakdown - Right Columns (2/3 width on md) */}
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 border-l-0 md:border-l border-indigo-200 pr-0 md:pl-6">
            {/* Performance Level Card */}
            <div className="bg-white p-4 rounded-md shadow-sm ">
              <p className="text-sm font-semibold text-slate-800 mb-1">
                Leistungsniveau: {/* Performance Level: */}
              </p>
              <span className="font-bold text-indigo-500 text-lg sm:text-xl leading-snug">
                {swissDescription.split('(')[0].trim()}{' '}
              </span>
              {/* Optional: Show detailed parenthetical if it exists */}
              {swissDescription.includes('(') && (
                <p className="text-xs text-gray-800 mt-1">
                  ({swissDescription.split('(')[1]})
                </p>
              )}
            </div>

            {/* Classification Card */}
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="text-sm font-semibold text-slate-800 mb-1">
                Prädikat/Klassifikation: {/* Classification/Predicate: */}
              </p>
              <span className="font-bold text-indigo-500 text-lg sm:text-xl leading-snug">
                {honoursClass}
              </span>
            </div>

            {/* Total Courses Card */}
            <div className="sm:col-span-2 bg-white p-4 rounded-md shadow-sm">
              <p className="text-sm font-semibold text-slate-800 mb-1">
                Berechnete Kurse: {/* Total Courses Calculated: */}
              </p>
              <span className="font-bold text-indigo-500 text-xl sm:text-2xl">
                {totalCourses}
              </span>
            </div>
          </div>
        </div>
      </output>

      {/* Recalculate Button */}
      <div className="text-center flex mt-6 sm:gap-6 justify-center max-sm:flex-col gap-4 ">
        <Button
          className="!px-12 h-10 bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all duration-200 ease-in-out"
          onClick={onRecalculate}
        >
          <RotateCcw className="mr-2" size={18} strokeWidth={2.5} />
          Note neu berechnen {/* Recalculate Grade */}
        </Button>
        <Link
          prefetch={false}
          href="/grade-calculator/cgpa-percentage"
          className=" !px-12 h-10 bg-white text-indigo-600 !shadow-md border border-indigo-400 hover:bg-indigo-50 rounded-sm flex items-center justify-center gap-2"
        >
          In Prozent umrechnen {/* Convert to Percentage */}
          <Percent size={20} strokeWidth={2} />
        </Link>
      </div>
    </>
  );
};
export default DisplayResultCH;
