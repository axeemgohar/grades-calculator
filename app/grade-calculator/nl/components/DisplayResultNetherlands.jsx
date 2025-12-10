import { Button } from '@/components/ui/button';
import { getDutchGradeDescription } from '@/lib/calculations/netherlands-grade';
import { RotateCcw } from 'lucide-react';

const DisplayResultNetherlands = ({ result, onRecalculate }) => {
  const description = getDutchGradeDescription(result.score);
  // Ensure we use comma for Dutch display
  const scoreString = String(result.score).replace('.', ',');

  return (
    <>
      <output
        id="NL_Grade_calculated"
        className="mt-8 block bg-white border-2 border-blue-100 rounded-xl overflow-hidden shadow-sm"
      >
        {/* Header Color Bar - Blue Gradient for Netherlands */}
        <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>

        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Side: The Grade */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400 mb-2">
                Jouw Gemiddelde
              </h3>
              <div className="flex items-baseline justify-center md:justify-start gap-2">
                <span className="text-6xl font-extrabold text-slate-800 tracking-tight">
                  {scoreString}
                </span>
                <span className="text-lg font-medium text-slate-400">/ 10</span>
              </div>
            </div>

            {/* Right Side: Context */}
            <div className="w-full md:w-auto min-w-[200px] space-y-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <p className="text-xs font-semibold text-blue-400 uppercase mb-1">
                  Beoordeling
                </p>
                <p className="text-2xl font-bold text-blue-700">
                  {description}
                </p>
              </div>

              {/* Only show if we have a count (which we do for averages) */}
              <div className="flex justify-between items-center text-sm font-medium text-slate-600 px-1">
                <span>Aantal cijfers:</span>
                <span className="text-slate-900">{result.totalCourses}</span>
              </div>
            </div>
          </div>
        </div>
      </output>

      <div className="text-center mt-8">
        <Button
          className="px-8 h-12 text-base shadow-lg hover:shadow-xl transition-all bg-blue-600 hover:bg-blue-700"
          onClick={onRecalculate}
        >
          <RotateCcw className="mr-2 w-5 h-5" />
          Opnieuw Berekenen
        </Button>
      </div>
    </>
  );
};
export default DisplayResultNetherlands;
