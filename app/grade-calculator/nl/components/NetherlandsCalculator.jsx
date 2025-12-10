'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { calculateDutchAverage } from '@/lib/calculations/netherlands-grade';
import { PlusSquare, Trash2, Calculator } from 'lucide-react';
import { useState } from 'react';
import { netherlandsCourseListSchema } from '@/lib/validationSchemas';
import { toast } from 'sonner';
import DisplayResultNetherlands from './DisplayResultNetherlands';
import useElementSize from '@/utils/useElementSize';
import Script from 'next/script';

const initialList = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  grade: '',
  weight: '1',
}));

const NetherlandsCalculator = () => {
  const [courses, setCourses] = useState(initialList);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const { ref, height } = useElementSize();

  const addCourse = () => {
    setCourses((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        grade: '',
        weight: '1',
      },
    ]);
  };

  const removeCourse = () => {
    setCourses((prev) => {
      if (prev.length <= 1) return prev;
      return prev.slice(0, -1);
    });
  };

  const updateCourse = (id, field, value) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    const validation = netherlandsCourseListSchema.safeParse(courses);

    if (!validation.success) {
      toast.error(validation.error.issues[0].message, {
        className: 'sonner-toast',
      });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const calculated = calculateDutchAverage(courses);
      setResult({
        score: calculated,
        totalCourses: courses.length,
      });
      setLoading(false);
    }, 500);
  };

  const handleRecalculate = () => {
    setResult(null);
    // Data persistence: We do not reset 'courses' state here.
  };

  return (
    <>
      <Script
        src="https://#"
        onError={() => {
          document.documentElement.lang = 'nl-NL';
        }}
      />
      {!result && !loading ? (
        <form onSubmit={handleCalculate}>
          {/* Header Row */}
          <div className="grid border border-indigo-500/50 bg-indigo-300/10 grid-cols-12 rounded-t items-center">
            <div className="col-span-3 py-4 ps-4">
              <h4 className="font-semibold text-slate-700">Naam</h4>
            </div>
            <div className="col-span-5 py-4 border-0 border-x border-indigo-500/50 ps-3">
              <h4 className="font-semibold text-slate-700">Cijfer (1-10)</h4>
            </div>
            <div className="col-span-4 py-4 ps-3">
              <h4 className="font-semibold text-slate-700">Weging</h4>
            </div>
          </div>

          {/* Dynamic Rows */}
          <div
            style={{
              height: height ? height + 'px' : 'auto',
              transition: 'height 0.3s ease-in-out',
              overflow: 'hidden',
            }}
          >
            <div ref={ref}>
              {courses.map((course, index) => (
                <div
                  className="grid grid-cols-12 border-b border-x border-indigo-500/50 transition-all duration-300 ease-in-out last:rounded-b items-center"
                  key={course.id}
                >
                  {/* Auto-Label Column: Cijfer 1, Cijfer 2... */}
                  <div className="col-span-3 ps-4">
                    <span className="text-slate-600 font-medium">
                      Cijfer {index + 1}
                    </span>
                  </div>

                  {/* Grade Input */}
                  <div className="col-span-5 border-x border-indigo-500/50">
                    <Input
                      type="number"
                      step="0.1"
                      min="1"
                      max="10"
                      value={course.grade}
                      onChange={(e) =>
                        updateCourse(course.id, 'grade', e.target.value)
                      }
                      placeholder="bijv. 6,5"
                      className="border-0 shadow-none focus-visible:ring-0 rounded-none h-14 text-lg"
                    />
                  </div>

                  {/* Weight Input */}
                  <div className="col-span-4 flex items-center">
                    <Input
                      type="number"
                      step="1"
                      min="1"
                      value={course.weight}
                      onChange={(e) =>
                        updateCourse(course.id, 'weight', e.target.value)
                      }
                      placeholder="1"
                      className="border-0 shadow-none focus-visible:ring-0 rounded-none h-14 text-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-x-4 md:flex-row flex-col">
            <div className="flex gap-x-4 mb-4 max-md:gap-x-6">
              <Button
                className="text-primary border-primary text-sm hover:bg-indigo-50 hover:text-indigo-600 max-md:flex-1"
                variant="outline"
                onClick={addCourse}
                type="button"
              >
                Cijfer toevoegen
                <PlusSquare className="ml-2 w-4 h-4" />
              </Button>
              <Button
                type="button"
                className="text-red-500 text-sm border-red-500 hover:bg-red-50 hover:text-red-600 max-md:flex-1"
                variant="outline"
                onClick={removeCourse}
                disabled={courses.length <= 1}
              >
                Verwijderen <Trash2 className="ml-2 w-4 h-4" />
              </Button>
            </div>
            {/* Blue primary button as requested */}
            <Button className="flex-1  text-white" type="submit">
              Berekenen
              <Calculator className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </form>
      ) : result && !loading ? (
        <DisplayResultNetherlands
          result={result}
          onRecalculate={handleRecalculate}
        />
      ) : (
        <div className="h-72 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      )}
    </>
  );
};
export default NetherlandsCalculator;
