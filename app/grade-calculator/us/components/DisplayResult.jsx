import { Button } from '@/components/ui/button';
import { getGPADescription } from '@/lib/calculations/usa-gpa';
import { Percent, RotateCcw } from 'lucide-react';
import Link from 'next/link';

const DisplayResult = ({ gpa, onRecalculate }) => {
  return (
    <>
      <output
        id="US_GPA_calculated"
        className="mt-8 block md:p-6 p-4 bg-indigo-50 border border-indigo-300 rounded-lg"
      >
        <div className="flex md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-indigo-900 mb-4">
              Your GPA Result
            </h3>
            <div className={`text-3xl md:text-4xl font-bold text-indigo-600`}>
              {gpa.score}{' '}
              <div className="text-sm text-indigo-900 mt-1">
                GPA (4.0 Scale)
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-indigo-900">
                Performance:
              </p>
              <span className="font-bold text-indigo-600 md:text-2xl text-xl">
                {getGPADescription(gpa.score)}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-indigo-900">
                Total Courses:
              </p>
              <span className="font-bold text-indigo-600 md:text-[26px] text-2xl">
                {gpa.totalCourses}
              </span>
            </div>
          </div>
        </div>
      </output>
      <div className="text-center flex mt-6 sm:gap-6 justify-center max-sm:flex-col gap-4 ">
        <Button className="!px-12 h-10" onClick={onRecalculate}>
          <RotateCcw className="text-white" size={20} strokeWidth={2.5} />
          Calculate Again
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
export default DisplayResult;
