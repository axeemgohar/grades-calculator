// components/DisplayResultNZ.jsx
import { Button } from '@/components/ui/button';
import { getNZGPADescription } from '@/lib/calculations/new-zealand-gpa';
import { Percent, RotateCcw } from 'lucide-react';
import Link from 'next/link';

const DisplayResultNZ = ({ gpa, onRecalculate }) => {
  const totalPapers = gpa.totalPapers || 0;
  const nzDescription = getNZGPADescription(gpa.score);

  // Function to map the descriptive text to a formal Honours Class for display
  const getHonoursClassification = (description) => {
    if (description.includes('Outstanding')) {
      return 'First Class Honours (Approx.)';
    }
    if (description.includes('Excellent')) {
      return 'Second Class Honours (First Division)';
    }
    if (description.includes('Very Good')) {
      return 'Second Class Honours (Second Division)';
    }
    // For "Good", "Adequate", and "Below Standard"
    return 'Pass/No Honours Classification';
  };

  const honoursClass = getHonoursClassification(nzDescription);

  return (
    <>
      <output
        id="NZ_GPA_calculated"
        className="mt-8 p-6 bg-indigo-50 border border-indigo-300 rounded-lg  block"
      >
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {/* Main GPA Score Section - Left Column */}
          <div className="col-span-1 max-md:col-span-2  text-center md:text-left ">
            <h3 className="text-xl md:text-2xl font-bold text-indigo-900 mb-2">
              Your GPA Result:
            </h3>
            <div
              className={`text-5xl md:text-6xl font-extrabold text-indigo-700 leading-tight`}
            >
              {gpa.score}
            </div>
            <div className="text-sm text-gray-800 mt-1">GPA (9.0 Scale)</div>
          </div>

          {/* Detailed Breakdown - Right Columns (2/3 width on md) */}
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 border-l-0 md:border-l border-indigo-200 pr-0 md:pl-6">
            {/* Performance Level Card */}
            <div className="bg-white p-4 rounded-md shadow-sm ">
              <p className="text-sm font-semibold text-slate-800 mb-1">
                Performance Level:
              </p>
              <span className="font-bold text-indigo-500 text-lg sm:text-xl leading-snug">
                {nzDescription.split('(')[0].trim()}{' '}
                {/* Show primary part of description */}
              </span>
              {/* Optional: Show detailed parenthetical if it exists */}
              {nzDescription.includes('(') && (
                <p className="text-xs text-gray-800 mt-1">
                  ({nzDescription.split('(')[1]})
                </p>
              )}
            </div>

            {/* Honours Equivalent Card */}
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="text-sm font-semibold text-slate-800 mb-1">
                Honours Equivalent:
              </p>
              <span className="font-bold text-indigo-500 text-lg sm:text-xl leading-snug">
                {honoursClass}
              </span>
            </div>

            {/* Total Papers Card (Full width on small screens, or adjust grid) */}
            <div className="sm:col-span-2 bg-white p-4 rounded-md shadow-sm">
              <p className="text-sm font-semibold text-slate-800 mb-1">
                Total Papers Calculated:
              </p>
              <span className="font-bold text-indigo-500 text-xl sm:text-2xl">
                {totalPapers}
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
          Recalculate GPA
        </Button>
        <Link
          prefetch={false}
          href="/grade-calculator/cgpa-percentage"
          className=" !px-12 h-10 bg-white text-indigo-600 !shadow-md border border-indigo-400 hover:bg-indigo-50 rounded-sm flex items-center justify-center gap-2"
        >
          Convert to Percentage
          <Percent size={20} strokeWidth={2} />
        </Link>
      </div>
    </>
  );
};
export default DisplayResultNZ;
