// components/DisplayResultGermany.jsx
import { Button } from '@/components/ui/button';
import { getGermanGradeDescription } from '@/lib/calculations/germany-grade'; // Import German logic
import { Percent, RotateCcw } from 'lucide-react';
import Link from 'next/link';

const DisplayResultGermany = ({ gpa, onRecalculate }) => {
  // Use a local description function for German context
  const performanceDescription = getGermanGradeDescription(gpa.score);

  return (
    <>
      <output
        id="DE_Note_calculated"
        className="mt-8 block md:p-6 p-4 bg-indigo-50 border border-indigo-300 rounded-lg"
      >
        <div className="flex md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-indigo-900 mb-4">
              Dein Notendurchschnitt
            </h3>
            <div className={`text-3xl md:text-4xl font-bold text-indigo-600`}>
              {/* Format to use comma as decimal separator, common in Germany */}
              {gpa.score}
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-indigo-900">
                Leistungsniveau:
              </p>
              <span className="font-bold text-indigo-600 md:text-2xl text-xl">
                {performanceDescription}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-indigo-900">
                Anzahl Fächer/Noten:
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
          Erneut berechnen
        </Button>
        <Link
          prefetch={false}
          // Change this link to a relevant German conversion or a link back home
          href="/grade-calculator/de/notenumrechnung"
          className=" !px-12 h-10 bg-white text-indigo-600 !shadow-md border border-indigo-400 hover:bg-indigo-50 rounded-sm flex items-center justify-center gap-2"
        >
          Zur Notenumrechnung
          <Percent size={20} strokeWidth={2} />
        </Link>
      </div>
    </>
  );
};
export default DisplayResultGermany;
