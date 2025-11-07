'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusSquare, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import DisplayResultCH from './DisplayResult'; // <-- UPDATED IMPORT
import useElementSize from '@/utils/useElementSize'; // Reference existing hook
import Lottie from 'react-lottie-player/dist/LottiePlayerLight'; // Reference existing library
import printerLoader from '@/public/assets/loader/Printer-Loader.json'; // Reference existing asset
import { courseListSchemaCH } from '@/lib/validationSchemas'; // New Schema Import
import { calculateSwissGrade } from '@/lib/calculations/swiss-grade'; // New Logic File
import Script from 'next/script';

// Initial state for the course list, adapted to Swiss terminology
const courseList = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  grade: '', // 1.0 to 6.0
  weight: '', // Credits/ECTS/Wochenstunden
}));

const SwissGradeCalculator = () => {
  const [courses, setCourses] = useState(courseList);
  const [loader, setLoader] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    totalCourses: 0,
  });

  const { ref, height } = useElementSize(); // Custom Hook to calculate height

  // Add New Course
  const addCourse = () => {
    setCourses((prevCourses) => [
      ...prevCourses,
      {
        id: prevCourses.length + 1,
        grade: '',
        weight: '',
      },
    ]);
  };

  // Delete Course
  const removeCourse = () => {
    setCourses((prevCourses) => {
      if (prevCourses.length <= 1) return prevCourses;
      return prevCourses.slice(0, -1);
    });
  };

  // Hanlde Input Fields Values
  const updateCourse = (id, field, value) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) => {
        return course.id === id ? { ...course, [field]: value } : course;
      })
    );
  };

  const calculateCurrentGrade = (event) => {
    event.preventDefault();
    const validation = courseListSchemaCH.safeParse(courses);

    if (!validation.success) {
      const firstIssue = validation.error.issues[0];
      // Adapt error message to German
      toast.error(`Eintrag ${firstIssue.path[0] + 1}: ${firstIssue.message}`, {
        duration: 4000,
        className: 'sonner-toast',
      });
      return;
    }

    // Use the new Swiss calculation logic
    const calculatedGrade = calculateSwissGrade(courses);

    setResult({
      score: calculatedGrade,
      totalCourses: courses.length,
    });
    setLoader(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setTimeout(() => {
      setLoader(false);
    }, 3900);
  };

  const reCalculateGrade = () => {
    setResult({
      score: 0,
      totalCourses: 0,
    });
  };

  return (
    <>
      <Script
        src="https://#"
        onError={() => {
          document.documentElement.lang = 'de-CH';
        }}
      />
      {!result.score && !loader ? (
        <form onSubmit={calculateCurrentGrade}>
          <div className="grid border border-indigo-500/50 bg-indigo-300/10 grid-cols-12 rounded-t items-center">
            <div className="col-span-4 sm:col-span-6 py-4 ps-3">
              <h4 className="font-semibold text-slate-700">Kurs / Fach</h4>{' '}
              {/* Course / Subject */}
            </div>
            <div className="col-span-4 sm:col-span-3 py-4 border-0 border-x border-indigo-500/50 ps-3">
              <h4 className="font-semibold text-slate-700">
                Gewichtung (Kreditpunkte / ECTS)
              </h4>{' '}
              {/* Weighting (Credit Points / ECTS) */}
            </div>
            <div className="col-span-4 sm:col-span-3 py-4 ps-3">
              <h4 className="font-semibold text-slate-700">
                Note (1.0 bis 6.0)
              </h4>{' '}
              {/* Grade (1.0 to 6.0) */}
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
              {courses.map((course, index) => {
                return (
                  <div
                    className="grid grid-cols-12 border-b border-x border-indigo-500/50 transition-all duration-300 ease-in-out last:rounded-b"
                    key={course.id}
                  >
                    {/* 1. Static 'Course X' Label (Replaces Paper Name Input) */}
                    <div className="col-span-4 sm:col-span-6 flex items-center h-12 p-3">
                      <span className="font-medium text-slate-600  w-full h-full flex items-center px-1">
                        Kurs {index + 1}
                      </span>
                    </div>

                    {/* 2. Weight Input (Credits/ECTS) */}
                    <div className="col-span-4 sm:col-span-3 border-x border-indigo-500/50">
                      <label
                        htmlFor={'weight-' + course.id}
                        className="sr-only"
                      >
                        Gewichtung
                      </label>
                      <Input
                        type="number"
                        onChange={(e) =>
                          updateCourse(course.id, 'weight', e.target.value)
                        }
                        id={'weight-' + course.id}
                        value={course.weight}
                        placeholder="z.B. 3 / 6" // e.g., 3 / 6 (common ECTS values)
                        min="0"
                        step="0.1" // Allow floating point weights
                        className="rounded-none border-0 focus-visible:ring-0"
                      />
                    </div>

                    {/* 3. Grade Input (1.0 to 6.0) */}
                    <div className="col-span-4 sm:col-span-3">
                      <label htmlFor={'grade-' + course.id} className="sr-only">
                        Note
                      </label>
                      <Input
                        type="number"
                        onChange={(e) =>
                          updateCourse(course.id, 'grade', e.target.value)
                        }
                        id={'grade-' + course.id}
                        value={course.grade}
                        placeholder="z.B. 4.5" // e.g., 4.5
                        min="1.0"
                        max="6.0"
                        step="0.25" // CRITICAL: Allow Swiss quarter steps
                        className="rounded-none border-0 focus-visible:ring-0"
                      />
                    </div>
                  </div>
                );
              })}
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
                Kurs hinzufügen {/* Add Course */}
                <PlusSquare />
              </Button>
              <Button
                type="button"
                className="text-red-500 text-sm border-red-500 hover:bg-red-50 hover:text-red-600 max-md:flex-1"
                variant="outline"
                onClick={removeCourse}
                disabled={courses.length <= 1}
              >
                Kurs entfernen <Trash2 />
              </Button>
            </div>
            <Button className=" flex-1" type="submit">
              Note berechnen {/* Calculate Grade */}
            </Button>
          </div>
        </form>
      ) : result.score && loader ? (
        <Lottie
          animationData={printerLoader}
          play
          loop={false}
          className="h-72 max-md:h-64 max-sm:h-60"
        />
      ) : (
        // Pass the result object to the new DisplayResultCH component
        <DisplayResultCH onRecalculate={reCalculateGrade} gpa={result} />
      )}
    </>
  );
};
export default SwissGradeCalculator;
