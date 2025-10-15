import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

const DisplayResult = ({ gpa, onRecalculate }) => {
  return (
    <>
      <output
        id="CGPA_to_GPA_calculated"
        className="mt-8 block md:p-6 p-4 bg-indigo-50 border border-indigo-300 rounded-lg"
      >
        <div className="flex md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-indigo-900 mb-3 md:mb-4">
              Your Converted GPA: {gpa.type}
            </h3>
            <div className={`text-3xl md:text-4xl font-bold text-indigo-600`}>
              {gpa.type === 'Percentage' ? `${gpa.score}%` : gpa.score}
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-indigo-900">
                Converted From:
              </p>
              <span className="font-bold text-indigo-600 md:text-2xl text-xl">
                {gpa.currentScale}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-indigo-900">
                Converted To:
              </p>
              <span className="font-bold text-indigo-600 md:text-2xl text-xl">
                {gpa.targetScale}
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
