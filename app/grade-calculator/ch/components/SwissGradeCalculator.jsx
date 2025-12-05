'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  calculateSwissAverage,
  calculateSwissGradeFromPoints,
} from '@/lib/calculations/swiss-grade';
import { PlusSquare, Trash2, Calculator } from 'lucide-react';
import { useState } from 'react';
import {
  swissCourseListSchema,
  swissPointsSchema,
} from '@/lib/validationSchemas';
import { toast } from 'sonner';
import DisplayResultSwitzerland from './DisplayResult';
import useElementSize from '@/utils/useElementSize';

const initialList = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  name: '',
  grade: '',
  weight: '100', // Default to 100 for percentage/marks style
}));

const SwitzerlandCalculator = () => {
  // Mode State: 'average' or 'points'
  const [mode, setMode] = useState('average');

  // State for Mode 1 (Average)
  const [courses, setCourses] = useState(initialList);

  // State for Mode 2 (Points)
  const [pointsData, setPointsData] = useState({
    maxPoints: '',
    achievedPoints: '',
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null); // Can be object (average) or string (grade)

  const { ref, height } = useElementSize();

  // --- Handlers for Mode 1 (Average) ---
  const addCourse = () =>
    setCourses((prev) => [
      ...prev,
      { id: prev.length + 1, name: '', grade: '', weight: '100' },
    ]);
  const removeCourse = () =>
    setCourses((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  const updateCourse = (id, field, value) =>
    setCourses((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );

  // --- Handlers for Mode 2 (Points) ---
  const updatePoints = (field, value) =>
    setPointsData((prev) => ({ ...prev, [field]: value }));

  // --- Calculations ---
  const handleCalculate = (e) => {
    e.preventDefault();
    setResult(null);

    if (mode === 'average') {
      const validation = swissCourseListSchema.safeParse(courses);
      if (!validation.success) {
        toast.error(validation.error.issues[0].message);
        return;
      }
      setLoading(true);
      setTimeout(() => {
        const val = calculateSwissAverage(courses);
        setResult({ type: 'average', score: val, count: courses.length });
        setLoading(false);
      }, 500);
    } else {
      const validation = swissPointsSchema.safeParse(pointsData);
      if (!validation.success) {
        toast.error(validation.error.issues[0].message);
        return;
      }
      setLoading(true);
      setTimeout(() => {
        const val = calculateSwissGradeFromPoints(
          pointsData.achievedPoints,
          pointsData.maxPoints
        );
        // Calculate percentage for display
        const percentage = Math.round(
          (parseFloat(pointsData.achievedPoints) /
            parseFloat(pointsData.maxPoints)) *
            100
        );
        setResult({ type: 'points', score: val, percentage: percentage });
        setLoading(false);
      }, 500);
    }
  };

  const handleReset = () => {
    setResult(null);
    // Data Persistence: We do NOT reset courses or pointsData here anymore.
  };

  return (
    <>
      {/* Mode Switcher Buttons */}
      <div className="flex p-1 bg-slate-100 rounded-lg mb-6 border border-slate-200">
        <button
          type="button"
          onClick={() => {
            setMode('average');
            setResult(null);
          }}
          className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${
            mode === 'average'
              ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          Notendurchschnitt
        </button>
        <button
          type="button"
          onClick={() => {
            setMode('points');
            setResult(null);
          }}
          className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${
            mode === 'points'
              ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          Noten aus Punkten
        </button>
      </div>

      {!result && !loading ? (
        <form onSubmit={handleCalculate}>
          {/* MODE 1: WEIGHTED AVERAGE */}
          {mode === 'average' && (
            <>
              <div className="grid border border-indigo-500/50 bg-indigo-300/10 grid-cols-12 rounded-t items-center">
                <div className="col-span-5 py-4 ps-3">
                  <h4 className="font-semibold text-slate-700">
                    Fach (Optional)
                  </h4>
                </div>
                <div className="col-span-3 py-4 border-0 border-x border-indigo-500/50 ps-3">
                  <h4 className="font-semibold text-slate-700">Note (1-6)</h4>
                </div>
                <div className="col-span-4 py-4 ps-3">
                  {/* Updated Label to "Zählt" */}
                  <h4 className="font-semibold text-slate-700">Zählt</h4>
                </div>
              </div>

              <div
                style={{
                  height: height ? height + 'px' : 'auto',
                  transition: 'height 0.3s ease-in-out',
                  overflow: 'hidden',
                }}
              >
                <div ref={ref}>
                  {courses.map((course) => (
                    <div
                      className="grid grid-cols-12 border-b border-x border-indigo-500/50 last:rounded-b"
                      key={course.id}
                    >
                      <div className="col-span-5">
                        <Input
                          type="text"
                          value={course.name}
                          onChange={(e) =>
                            updateCourse(course.id, 'name', e.target.value)
                          }
                          placeholder="z.B. Mathe"
                          className="border-0 shadow-none focus-visible:ring-0 rounded-none h-12"
                        />
                      </div>
                      <div className="col-span-3 border-x border-indigo-500/50">
                        <Input
                          type="number"
                          step="0.1"
                          min="1"
                          max="6"
                          value={course.grade}
                          onChange={(e) =>
                            updateCourse(course.id, 'grade', e.target.value)
                          }
                          placeholder="5.0"
                          className="border-0 shadow-none focus-visible:ring-0 rounded-none h-12"
                        />
                      </div>
                      <div className="col-span-4 relative flex items-center">
                        <Input
                          type="number"
                          step="0.1"
                          min="0"
                          value={course.weight}
                          onChange={(e) =>
                            updateCourse(course.id, 'weight', e.target.value)
                          }
                          placeholder="100"
                          className="border-0 shadow-none focus-visible:ring-0 rounded-none h-12 pr-8"
                        />
                        {/* % indicator for clarity since we switched to "Zählt" */}
                        <span className="absolute right-3 text-slate-400 text-sm pointer-events-none">
                          %
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-x-4 md:flex-row flex-col">
                <div className="flex gap-x-4 mb-4 max-md:gap-x-6">
                  <Button
                    className="text-primary border-primary text-sm hover:bg-indigo-50 hover:text-indigo-600 max-md:flex-1"
                    variant="outline"
                    onClick={addCourse}
                    type="button"
                  >
                    <PlusSquare className="mr-2 w-4 h-4" /> Mehr
                  </Button>
                  <Button
                    type="button"
                    className="text-red-500 text-sm border-red-500 hover:bg-red-50 hover:text-red-600 max-md:flex-1"
                    variant="outline"
                    onClick={removeCourse}
                    disabled={courses.length <= 1}
                  >
                    <Trash2 className="mr-2 w-4 h-4" /> Löschen
                  </Button>
                </div>
                <Button
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white"
                  type="submit"
                >
                  Durchschnitt berechnen
                </Button>
              </div>
            </>
          )}

          {/* MODE 2: POINTS TO GRADE */}
          {mode === 'points' && (
            <div className="space-y-6">
              <div className="bg-indigo-50/50 border border-indigo-100 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">
                      Max. mögliche Punkte
                    </label>
                    <Input
                      type="number"
                      value={pointsData.maxPoints}
                      onChange={(e) =>
                        updatePoints('maxPoints', e.target.value)
                      }
                      placeholder="z.B. 60"
                      // Updated styling for visibility
                      className="h-12 text-lg bg-white border border-slate-300 focus-visible:ring-indigo-500 rounded"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">
                      Erreichte Punkte
                    </label>
                    <Input
                      type="number"
                      value={pointsData.achievedPoints}
                      onChange={(e) =>
                        updatePoints('achievedPoints', e.target.value)
                      }
                      placeholder="z.B. 45"
                      // Updated styling for visibility
                      className="h-12 text-lg bg-white border border-slate-300 focus-visible:ring-indigo-500 rounded"
                    />
                  </div>
                </div>
              </div>

              <Button
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-12 text-lg"
                type="submit"
              >
                <Calculator className="mr-2 w-5 h-5" /> Note berechnen
              </Button>
            </div>
          )}
        </form>
      ) : result && !loading ? (
        <DisplayResultSwitzerland result={result} onRecalculate={handleReset} />
      ) : (
        <div className="h-72 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      )}
    </>
  );
};
export default SwitzerlandCalculator;
