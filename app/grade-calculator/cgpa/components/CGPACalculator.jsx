// components/CGPACalculator.jsx
'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { calculateCGPA } from '@/lib/calculations/cgpa';
import { PlusSquare, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { semesterListSchema } from '@/lib/validationSchemas';
import { toast } from 'sonner';
import DisplayResult from './DisplayResult';
import useElementSize from '@/utils/useElementSize';
import Lottie from 'react-lottie-player/dist/LottiePlayerLight';
import printerLoader from '@/public/assets/loader/Printer-Loader.json';
import CountrySelector from '../../us/components/CGPAGuider';
import useLocationBasedTerms from '@/utils/useLocationBasedTerms';
import CalculationLimitModal from '@/components/ui/CalculationLimitModal';
import { useCalculationLimit } from '@/utils/useCalculationLimit';

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
  const [showLimitModal, setShowLimitModal] = useState(false);

  const {
    currentTerms,
    showExample,
    selectedCountry,
    handleCountrySelect,
    getCurrentExample,
  } = useLocationBasedTerms();

  const { ref, height } = useElementSize();

  const {
    canCalculate,
    remainingCalculations,
    incrementCalculation,
    resetAfterAd,
  } = useCalculationLimit();

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

  const removeSemester = () => {
    setSemesters((prevSemesters) => {
      if (prevSemesters.length <= 1) return prevSemesters;
      return prevSemesters.slice(0, -1);
    });
  };

  const updateSemester = (id, field, value) => {
    setSemesters((prevSemesters) =>
      prevSemesters.map((semester) => {
        return semester.id === id ? { ...semester, [field]: value } : semester;
      })
    );
  };

  const calculateCurrentCGPA = (event) => {
    event.preventDefault();

    // Check if user can calculate
    if (!canCalculate()) {
      setShowLimitModal(true);
      return;
    }

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
        0
      ),
      CGPADescription: currentTerms.resultCGPA,
      semesterTerm: currentTerms.resultTotalSemesters,
      creditsTerm: currentTerms.resultTotalCredits,
    });

    incrementCalculation();

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

  const handleShowAd = () => {
    if (typeof window !== 'undefined' && window.ezRewardedAds) {
      window.ezRewardedAds.cmd = window.ezRewardedAds.cmd || [];

      window.ezRewardedAds.cmd.push(function () {
        window.ezRewardedAds.requestWithOverlay(
          function (result) {
            if (result.status && result.reward) {
              resetAfterAd();
              setShowLimitModal(false);
              toast.success('Success! You earned 5 more calculations.', {
                duration: 3000,
              });
            } else if (result.status && !result.reward) {
              toast.warning(
                'Ad not completed. Please watch the full ad to continue.',
                {
                  duration: 3000,
                }
              );
            } else {
              toast.error('Unable to load ad. Please try again.', {
                duration: 3000,
              });
            }
          },
          {
            title: 'Watch Ad to Continue?',
            body: [
              'You will receive 5 more free calculations after watching this ad.',
            ],
            accept: 'Watch Ad',
            cancel: 'Cancel',
          }
        );
      });
    } else {
      toast.error('Ad service is not available.', {
        duration: 3000,
      });
    }
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

          {remainingCalculations <= 2 && remainingCalculations > 0 && (
            <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800">
                ⚠️ You have{' '}
                <span className="font-semibold">{remainingCalculations}</span>{' '}
                calculation{remainingCalculations !== 1 ? 's' : ''} left. Watch
                an ad to get 5 more!
              </p>
            </div>
          )}

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
                            semester.id
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
                            semester.id
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
                            semester.id
                          )}
                        </label>
                        <Input
                          type="number"
                          onChange={(e) =>
                            updateSemester(
                              semester.id,
                              'credits',
                              e.target.value
                            )
                          }
                          id={'semester-credits-' + semester.id}
                          value={semester.credits}
                          placeholder={currentTerms.placeholderCredits.replace(
                            '{{n}}',
                            semester.id
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
              <Button className="flex-1" onClick={calculateCurrentCGPA}>
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

      <CalculationLimitModal
        isOpen={showLimitModal}
        onClose={() => setShowLimitModal(false)}
        onShowAd={handleShowAd}
      />
    </>
  );
};

export default CGPACalculator;
