'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { calculateGermanGrade } from '@/lib/calculations/germany-grade';
import { PlusSquare, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { germanCourseListSchema } from '@/lib/validationSchemas';
import { toast } from 'sonner';
import useElementSize from '@/utils/useElementSize';
import DisplayResultGermany from './DisplayResult';
import Script from 'next/script';

const initialList = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  name: '',
  grade: '', // User types number: 1.3, 2.0
  weight: '1', // Default weight is 1
}));

const GermanyGradeCalculator = () => {
  const [courses, setCourses] = useState(initialList);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    totalCourses: 0,
  });

  const { ref, height } = useElementSize();

  // Add New Course
  const addCourse = () => {
    setCourses((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: '',
        grade: '',
        weight: '1',
      },
    ]);
  };

  // Remove Course
  const removeCourse = () => {
    setCourses((prev) => {
      if (prev.length <= 1) return prev;
      return prev.slice(0, -1);
    });
  };

  // Update Fields
  const updateCourse = (id, field, value) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    const validation = germanCourseListSchema.safeParse(courses);

    if (!validation.success) {
      const firstIssue = validation.error.issues[0];
      toast.error(`Zeile ${firstIssue.path[0] + 1}: ${firstIssue.message}`, {
        className: 'sonner-toast',
      });
      return;
    }

    setLoading(true);

    // Simulate short delay for UX (since Lottie is gone, a spinner is nice)
    const calculated = calculateGermanGrade(courses);
    setResult({
      score: calculated,
      totalCourses: courses.length,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  const handleReset = () => {
    setResult({ score: 0, totalCourses: 0 });
  };

  return (
    <>
      <Script
        src="https://#"
        onError={() => {
          document.documentElement.lang = 'de-DE';
        }}
      />
      {!result.score && !loading ? (
        <form onSubmit={handleCalculate}>
          {/* Header Row */}
          <div className="grid border border-indigo-500/50 bg-indigo-300/10 grid-cols-12 rounded-t items-center">
            <div className="col-span-5 py-4 ps-3">
              <h4 className="font-semibold text-slate-700">Fach (Optional)</h4>
            </div>
            <div className="col-span-3 py-4 border-0 border-x border-indigo-500/50 ps-3">
              <h4 className="font-semibold text-slate-700">Note</h4>
            </div>
            <div className="col-span-4 py-4 ps-3">
              <h4 className="font-semibold text-slate-700">Gewichtung</h4>
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
              {courses.map((course) => (
                <div
                  className="grid grid-cols-12 border-b border-x border-indigo-500/50 transition-all duration-300 ease-in-out last:rounded-b"
                  key={course.id}
                >
                  {/* Subject Name */}
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

                  {/* Grade (Note) - Number Input */}
                  <div className="col-span-3 border-x border-indigo-500/50">
                    <Input
                      type="number"
                      step="0.1"
                      min="0.7"
                      max="6"
                      value={course.grade}
                      onChange={(e) =>
                        updateCourse(course.id, 'grade', e.target.value)
                      }
                      placeholder="1.0"
                      className="border-0 shadow-none focus-visible:ring-0 rounded-none h-12"
                    />
                  </div>

                  {/* Weight (Gewichtung) */}
                  <div className="col-span-4">
                    <Input
                      type="number"
                      step="0.5"
                      min="0.5"
                      value={course.weight}
                      onChange={(e) =>
                        updateCourse(course.id, 'weight', e.target.value)
                      }
                      placeholder="1"
                      className="border-0 shadow-none focus-visible:ring-0 rounded-none h-12"
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
                Mehr Fächer
                <PlusSquare className="ml-2 w-4 h-4" />
              </Button>
              <Button
                type="button"
                className="text-red-500 text-sm border-red-500 hover:bg-red-50 hover:text-red-600 max-md:flex-1"
                variant="outline"
                onClick={removeCourse}
                disabled={courses.length <= 1}
              >
                Löschen <Trash2 className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <Button
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white"
              type="submit"
            >
              Note berechnen
            </Button>
          </div>
        </form>
      ) : result.score && loading ? (
        // Simple Loading Spinner (Replacing Lottie)
        <div className="h-72 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      ) : (
        // Reusing your Result component - ensure it handles the formatting!
        <DisplayResultGermany onRecalculate={handleReset} gpa={result} />
      )}
    </>
  );
};
export default GermanyGradeCalculator;
