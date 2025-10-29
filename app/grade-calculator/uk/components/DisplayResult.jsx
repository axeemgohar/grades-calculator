import { Button } from '@/components/ui/button';

import { RotateCcw } from 'lucide-react';
import Link from 'next/link';

const DisplayResult = ({ degreeClassification, onRecalculateDC }) => {
  return (
    <>
      <output
        id="UK_DC_calculated"
        className="mt-8 block md:p-6 p-4 bg-indigo-50 border border-indigo-300 rounded-lg"
      >
        <div className="flex md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-indigo-900 mb-4">
              Your Degree Classification
            </h3>
            <div className={`text-3xl md:text-4xl font-bold text-indigo-600`}>
              {degreeClassification.score}
              {'%'}
              <div className="text-sm text-indigo-900 mt-1">
                Weighted Average Mark
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-indigo-900">
                Classification:
              </p>
              <span className="font-bold text-indigo-600 md:text-2xl text-xl">
                {degreeClassification.classification}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-indigo-900">
                Modules Calculated:
              </p>
              <span className="font-bold text-indigo-600 md:text-[26px] text-2xl">
                {degreeClassification.totalModules}
              </span>
            </div>
          </div>
        </div>
      </output>

      <div className="text-center flex mt-6 sm:gap-6 justify-center max-sm:flex-col gap-4 ">
        <Button className="!px-12 h-10" onClick={onRecalculateDC}>
          <RotateCcw className="text-white" size={20} strokeWidth={2.5} />
          Calculate Again
        </Button>
        <Link
          prefetch={false}
          href="/grade-calculator/cgpa-to-gpa"
          className=" !px-12 h-10 bg-white text-indigo-600 !shadow-md border border-indigo-400 hover:bg-indigo-50 rounded-sm flex items-center justify-center gap-2"
        >
          Convert to 4.0 GPA
        </Link>
      </div>
    </>
  );
};
export default DisplayResult;
