'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { calculateCGPA } from '@/lib/calculations/cgpa';
import { PlusSquare, Trash2, MapPin } from 'lucide-react';
import { useState } from 'react';
import { semesterListSchema } from '@/lib/validationSchemas';
import { toast } from 'sonner';
import DisplayResult from './DisplayResult';
import useElementSize from '@/utils/useElementSize';
import Lottie from 'react-lottie-player/dist/LottiePlayerLight';
import printerLoader from '@/public/assets/loader/Printer-Loader.json';
import CountrySelector from '../../us/components/CGPAGuider';
import useLocationBasedTerms from '@/utils/useLocationBasedTerms';

const semesterList = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  gpa: '',
  credits: '',
}));

const CGPACalculator = () => {
  const [semesters, setSemesters] = useState(semesterList);
  const [loader, setLoader] = useState(false);
  const [cgpa, setCGPA] = useState({
    score: 0,
    totalSemesters: 0,
    totalCredits: 0,
    CGPADescription: '',
    semesterTerm: '',
    creditsTerm: '',
  });

  // Location-based terms hook
  const {
    currentTerms,
    showExample,
    selectedCountry,
    handleCountrySelect,
    getCurrentExample,
    isLocationDetected,
  } = useLocationBasedTerms();

  const { ref, height } = useElementSize(); // Custom Hook to calculate height

  // Add New Semester
  const addSemester = () => {
    setSemesters((prevSemesters) => [
      ...prevSemesters,
      {
        id: prevSemesters.length + 1,
        gpa: '',
        credits: '',
      },
    ]);
  };

  // Delete Semester
  const removeSemester = () => {
    setSemesters((prevSemesters) => {
      if (prevSemesters.length <= 1) return prevSemesters;
      return prevSemesters.slice(0, -1);
    });
  };

  // Handle Input Fields Values
  const updateSemester = (id, field, value) => {
    setSemesters((prevSemesters) =>
      prevSemesters.map((semester) => {
        return semester.id === id ? { ...semester, [field]: value } : semester;
      }),
    );
  };

  const calculateCurrentCGPA = (event) => {
    event.preventDefault();
    const validation = semesterListSchema.safeParse(semesters);

    if (!validation.success) {
      const firstIssue = validation.error.issues[0];
      toast.error(`Semester ${firstIssue.path[0] + 1}: ${firstIssue.message}`, {
        duration: 4000,
        className: 'sonner-toast',
      });
      return;
    }

    const calculatedCGPA = calculateCGPA(semesters);

    setCGPA({
      score: calculatedCGPA,
      totalSemesters: semesters.length,
      totalCredits: semesters.reduce(
        (acc, sem) => acc + (parseFloat(sem.credits) || 0),
        0,
      ),
      CGPADescription: currentTerms.resultCGPA,
      semesterTerm: currentTerms.resultTotalSemesters,
      creditsTerm: currentTerms.resultTotalCredits,
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

  const reCalculateCGPA = () => {
    setCGPA({
      score: 0,
      totalSemesters: 0,
      totalCredits: 0,
      CGPADescription: '',
      semesterTerm: '',
      creditsTerm: '',
    });
  };

  return (
    <>
      {!cgpa.score && !loader ? (
        <>
          <CountrySelector
            selectedCountry={selectedCountry}
            onCountrySelect={handleCountrySelect}
            showExample={showExample}
            currentExample={getCurrentExample()}
          />
          <form onSubmit={calculateCurrentCGPA}>
            <div className="grid border border-indigo-500/50 bg-indigo-300/10 grid-cols-12 rounded-t items-center">
              <div className="col-span-6 py-4 ps-3">
                <h4 className="font-semibold text-slate-700">
                  {currentTerms.semesterGPA}
                </h4>
              </div>
              <div className="col-span-6 py-4 border-0 border-l border-indigo-500/50 ps-3">
                <h4 className="font-semibold text-slate-700">
                  {currentTerms.semesterCredits}
                </h4>
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
                {semesters.map((semester) => {
                  return (
                    <div
                      className="grid grid-cols-12 border-b border-x border-indigo-500/50 transition-all duration-300 ease-in-out last:rounded-b"
                      key={semester.id}
                    >
                      <div className="col-span-6">
                        <label
                          htmlFor={'semester-gpa-' + semester.id}
                          className="sr-only"
                        >
                          {currentTerms.placeholderGPA.replace(
                            '{{n}}',
                            semester.id,
                          )}
                        </label>
                        <Input
                          type="number"
                          id={'semester-gpa-' + semester.id}
                          value={semester.gpa}
                          onChange={(e) =>
                            updateSemester(semester.id, 'gpa', e.target.value)
                          }
                          placeholder={currentTerms.placeholderGPA.replace(
                            '{{n}}',
                            semester.id,
                          )}
                          step="0.01"
                          min="0"
                          className="py-3.5"
                        />
                      </div>
                      <div className="col-span-6 border-l border-indigo-500/50">
                        <label
                          htmlFor={'semester-credits-' + semester.id}
                          className="sr-only"
                        >
                          {currentTerms.placeholderCredits.replace(
                            '{{n}}',
                            semester.id,
                          )}
                        </label>
                        <Input
                          type="number"
                          onChange={(e) =>
                            updateSemester(
                              semester.id,
                              'credits',
                              e.target.value,
                            )
                          }
                          id={'semester-credits-' + semester.id}
                          value={semester.credits}
                          placeholder={currentTerms.placeholderCredits.replace(
                            '{{n}}',
                            semester.id,
                          )}
                          min="0"
                          step="1"
                          className="py-3.5"
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
                  className="text-primary border-primary text-sm hover:bg-indigo-50 hover:text-indigo-600 max-md:flex-1 breathing"
                  variant="outline"
                  onClick={addSemester}
                  type="button"
                >
                  {currentTerms.addSemester}
                  <PlusSquare />
                </Button>
                <Button
                  type="button"
                  className="text-red-500 text-sm border-red-500 hover:bg-red-50 hover:text-red-600 max-md:flex-1"
                  variant="outline"
                  onClick={removeSemester}
                  disabled={semesters.length <= 1}
                >
                  {currentTerms.deleteSemester} <Trash2 />
                </Button>
              </div>
              <Button className="flex-1" type="submit">
                {currentTerms.calculateCGPA}
              </Button>
            </div>
          </form>
        </>
      ) : cgpa.score && loader ? (
        <Lottie
          animationData={printerLoader}
          play
          loop={false}
          className="h-72 max-md:h-64 max-sm:h-60"
        />
      ) : (
        <DisplayResult onRecalculate={reCalculateCGPA} gpa={cgpa} />
      )}
    </>
  );
};

export default CGPACalculator;
