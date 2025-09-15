import { Button } from '@/components/ui/button';
import { getGPADescription } from '@/lib/calculations/usa-gpa';
import { RotateCcw } from 'lucide-react';

const DisplayResult = ({ gpa, onRecalculate }) => {
  return (
    <>
      <output
        id="CGPA_calculated"
        className="mt-8 block md:p-6 p-4 bg-indigo-50 border border-indigo-300 rounded-lg"
      >
        <div className="flex md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-indigo-900 mb-4">
              Your CGPA Result
            </h3>
            <div className={`text-3xl md:text-4xl font-bold text-indigo-600`}>
              {gpa.score}{' '}
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-indigo-900">
                Total Semesters:
              </p>
              <span className="font-bold text-indigo-600 md:text-[26px] text-2xl">
                {gpa.totalSemesters}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-indigo-900">
                Total Credits:
              </p>
              <span className="font-bold text-indigo-600 md:text-[26px] text-2xl">
                {gpa.totalCredits}
              </span>
            </div>
          </div>
        </div>
      </output>
      <div className="text-center ">
        <Button className="mt-6   !px-12 h-10" onClick={onRecalculate}>
          <RotateCcw className="text-white" size={20} strokeWidth={2.5} />
          Calculate Again
        </Button>
      </div>
    </>
  );
};
export default DisplayResult;
