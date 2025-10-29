'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { convertCGPAToGPA, gradingScales } from '@/lib/calculations/cgpa-gpa';
import { useState } from 'react';
import { cgpaToGPASchema } from '@/lib/validationSchemas';
import { toast } from 'sonner';
import DisplayResult from './DisplayResult';
import Lottie from 'react-lottie-player/dist/LottiePlayerLight';
import printerLoader from '@/public/assets/loader/Printer-Loader.json';

const CGPAtoGPACalculator = () => {
  const [cgpa, setCgpa] = useState('');
  const [currentScale, setCurrentScale] = useState('');
  const [targetScale, setTargetScale] = useState('');
  const [customCurrentScale, setCustomCurrentScale] = useState('');
  const [customTargetScale, setCustomTargetScale] = useState('');
  const [loader, setLoader] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    currentScale: '',
    targetScale: '',
  });

  // Handle form submission
  const handleCalculation = (event) => {
    event.preventDefault();

    const calculationData = {
      cgpa: parseFloat(cgpa),
      currentScale:
        currentScale === 'custom'
          ? parseFloat(customCurrentScale)
          : parseFloat(currentScale),
      targetScale:
        targetScale === 'custom'
          ? parseFloat(customTargetScale)
          : parseFloat(targetScale),
      customCurrentScale:
        currentScale === 'custom' ? parseFloat(customCurrentScale) : null,
      customTargetScale:
        targetScale === 'custom' ? parseFloat(customTargetScale) : null,
    };

    const validation = cgpaToGPASchema.safeParse(calculationData);

    if (!validation.success) {
      const firstIssue = validation.error.issues[0];
      toast.error(firstIssue.message, {
        duration: 4000,
        className: 'sonner-toast',
      });
      return;
    }

    const calculatedResult = convertCGPAToGPA(
      calculationData.cgpa,
      calculationData.currentScale,
      calculationData.targetScale
    );

    setResult({
      score: calculatedResult,
      currentScale:
        customCurrentScale ||
        gradingScales.find((scale) => scale.value === currentScale)?.label,
      targetScale:
        customTargetScale ||
        gradingScales.find((scale) => scale.value === targetScale)?.label,
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

  const reCalculate = () => {
    setResult({
      score: 0,
      currentScale: '',
      targetScale: '',
    });
    setCgpa('');
    setCurrentScale('');
    setTargetScale('');
    setCustomCurrentScale('');
    setCustomTargetScale('');
  };

  return (
    <>
      {!result.score && !loader ? (
        <form onSubmit={handleCalculation} className="space-y-6">
          {/* CGPA Input Field */}
          <div className="w-full">
            <label
              htmlFor="cgpa"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Enter Your CGPA/GPA/Percentage
            </label>
            <Input
              type="number"
              id="cgpa"
              value={cgpa}
              onChange={(e) => setCgpa(e.target.value)}
              placeholder="e.g., 8.5"
              step="0.01"
              min="0"
              max={
                currentScale === 'custom'
                  ? customCurrentScale
                  : currentScale || undefined
              }
              className="w-full border-indigo-500/50 focus:ring-indigo-500 rounded-sm h-full py-3"
              required
            />
          </div>

          {/* Current Grading Scale Selector */}
          <div className="w-full">
            <label
              htmlFor="current-scale"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Your Current Grading Scale
            </label>
            <Select value={currentScale} onValueChange={setCurrentScale}>
              <SelectTrigger className="w-full border-indigo-500/50 focus:ring-indigo-500">
                <SelectValue placeholder="Select current grading scale" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Current Grading Scale</SelectLabel>
                  {gradingScales.map((scale) => (
                    <SelectItem key={scale.value} value={scale.value}>
                      {scale.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Custom Current Scale Input */}
          {currentScale === 'custom' && (
            <div className="w-full">
              <label
                htmlFor="custom-current-scale"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Which Scale Your Institute Uses?
              </label>
              <Input
                type="number"
                id="custom-current-scale"
                value={customCurrentScale}
                onChange={(e) => setCustomCurrentScale(e.target.value)}
                placeholder="e.g., 8.0"
                step="0.1"
                min="0.1"
                className="w-full border-indigo-500/50 focus:ring-indigo-500 rounded-sm h-full py-3"
                required
              />
            </div>
          )}

          {/* Target Grading Scale Selector */}
          <div className="w-full">
            <label
              htmlFor="target-scale"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Convert to Scale
            </label>
            <Select value={targetScale} onValueChange={setTargetScale}>
              <SelectTrigger className="w-full border-indigo-500/50 focus:ring-indigo-500">
                <SelectValue placeholder="Select target grading scale" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Target Grading Scale</SelectLabel>
                  {gradingScales.map((scale) => (
                    <SelectItem key={scale.value} value={scale.value}>
                      {scale.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Custom Target Scale Input */}
          {targetScale === 'custom' && (
            <div className="w-full">
              <label
                htmlFor="custom-target-scale"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Enter Custom Target Scale
              </label>
              <Input
                type="number"
                id="custom-target-scale"
                value={customTargetScale}
                onChange={(e) => setCustomTargetScale(e.target.value)}
                placeholder="e.g., 4.0"
                step="0.1"
                min="0.1"
                className="w-full border-indigo-500/50 focus:ring-indigo-500 rounded-sm h-full py-3"
                required
              />
            </div>
          )}

          {/* Calculate Button */}
          <Button
            className="w-full"
            type="submit"
            disabled={
              !cgpa ||
              !currentScale ||
              !targetScale ||
              (currentScale === 'custom' && !customCurrentScale) ||
              (targetScale === 'custom' && !customTargetScale)
            }
          >
            Convert GPA Scale
          </Button>
        </form>
      ) : result.score && loader ? (
        <Lottie
          animationData={printerLoader}
          play
          loop={false}
          className="h-72 max-md:h-64 max-sm:h-60"
        />
      ) : (
        <DisplayResult onRecalculate={reCalculate} gpa={result} />
      )}
    </>
  );
};

export default CGPAtoGPACalculator;
