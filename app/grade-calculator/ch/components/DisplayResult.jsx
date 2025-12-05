import { Button } from '@/components/ui/button';
import { getSwissGradeDescription } from '@/lib/calculations/swiss-grade';

import { RotateCcw } from 'lucide-react';

const DisplayResultSwitzerland = ({ result, onRecalculate }) => {
  const description = getSwissGradeDescription(result.score);
  const scoreString = result.score;

  return (
    <>
      <output className="mt-8 block bg-white border-2 border-indigo-100 rounded-xl overflow-hidden shadow-sm">
        {/* Header Color Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>

        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Side: The Grade */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-400 mb-2">
                {result.type === 'average'
                  ? 'Dein Notendurchschnitt'
                  : 'Deine Berechnete Note'}
              </h3>
              <div className="flex items-baseline justify-center md:justify-start gap-2">
                <span className="text-6xl font-extrabold text-slate-800 tracking-tight">
                  {scoreString}
                </span>
                <span className="text-lg font-medium text-slate-400">/ 6</span>
              </div>
            </div>

            {/* Right Side: Context */}
            <div className="w-full md:w-auto min-w-[200px] space-y-4">
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                <p className="text-xs font-semibold text-indigo-400 uppercase mb-1">
                  Bewertung
                </p>
                <p className="text-2xl font-bold text-indigo-700">
                  {description}
                </p>
              </div>

              {result.type === 'points' && (
                <div className="flex justify-between items-center text-sm font-medium text-slate-600 px-1">
                  <span>Erreicht:</span>
                  <span className="text-slate-900">{result.percentage}%</span>
                </div>
              )}

              {result.type === 'average' && (
                <div className="flex justify-between items-center text-sm font-medium text-slate-600 px-1">
                  <span>Anzahl Noten:</span>
                  <span className="text-slate-900">{result.count}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </output>

      <div className="text-center mt-8">
        <Button
          className="px-8 h-12 text-base shadow-lg hover:shadow-xl transition-all"
          onClick={onRecalculate}
        >
          <RotateCcw className="mr-2 w-5 h-5" />
          Neue Berechnung starten
        </Button>
      </div>
    </>
  );
};
export default DisplayResultSwitzerland;
