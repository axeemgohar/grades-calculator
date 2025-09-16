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
import {
  calculateCGPAToPercentage,
  calculatePercentageToCGPA,
  gradingScales,
} from '@/lib/calculations/cgpa-percentage';
import { useState } from 'react';
import { cgpaPercentageSchema } from '@/lib/validationSchemas';
import { toast } from 'sonner';
import DisplayResult from './DisplayResult';
import Lottie from 'react-lottie-player/dist/LottiePlayerLight';
import printerLoader from '@/public/assets/loader/Printer-Loader.json';

const CGPAPercentageCalculator = () => {
  const [calculationType, setCalculationType] = useState('cgpa-to-percentage');
  const [inputValue, setInputValue] = useState('');
  const [gradingScale, setGradingScale] = useState('');
  const [customScale, setCustomScale] = useState('');
  const [loader, setLoader] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    type: '',
    gradingScale: '',
  });

  // Handle calculation type change
  const handleCalculationTypeChange = (value) => {
    setCalculationType(value);
    setInputValue('');
    setGradingScale('');
    setCustomScale('');
    setResult({ score: 0, type: '', gradingScale: '' });
  };

  // Handle form submission
  const handleCalculation = (event) => {
    event.preventDefault();

    const calculationData = {
      inputValue: parseFloat(inputValue),
      gradingScale:
        gradingScale === 'custom'
          ? parseFloat(customScale)
          : parseFloat(gradingScale),
      calculationType,
      customScale: gradingScale === 'custom' ? parseFloat(customScale) : null,
    };

    const validation = cgpaPercentageSchema.safeParse(calculationData);

    if (!validation.success) {
      const firstIssue = validation.error.issues[0];
      toast.error(firstIssue.message, {
        duration: 4000,
        className: 'sonner-toast',
      });
      return;
    }

    let calculatedResult;
    let resultType;

    if (calculationType === 'cgpa-to-percentage') {
      calculatedResult = calculateCGPAToPercentage(
        calculationData.inputValue,
        calculationData.gradingScale
      );
      resultType = 'Percentage';
    } else {
      calculatedResult = calculatePercentageToCGPA(
        calculationData.inputValue,
        calculationData.gradingScale
      );
      resultType = 'CGPA';
    }

    setResult({
      score: calculatedResult,
      type: resultType,
      gradingScale: calculationData.gradingScale,
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
      type: '',
      gradingScale: '',
    });
    setInputValue('');
    setGradingScale('');
    setCustomScale('');
  };

  const isCGPAToPercentage = calculationType === 'cgpa-to-percentage';
  const inputLabel = isCGPAToPercentage ? 'Enter CGPA' : 'Enter Percentage';
  const inputPlaceholder = isCGPAToPercentage ? 'e.g., 3.5' : 'e.g., 85';
  const buttonText = isCGPAToPercentage
    ? 'Convert to Percentage'
    : 'Convert to CGPA';

  return (
    <>
      {!result.score && !loader ? (
        <form onSubmit={handleCalculation} className="space-y-6">
          {/* Calculation Type Selector */}
          <div className="w-full">
            <label
              htmlFor="calculation-type"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Select Conversion Type
            </label>
            <Select
              value={calculationType}
              onValueChange={handleCalculationTypeChange}
            >
              <SelectTrigger className="w-full border-indigo-500/50 focus:ring-indigo-500 ">
                <SelectValue placeholder="Select conversion type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Conversion Type</SelectLabel>
                  <SelectItem value="cgpa-to-percentage">
                    CGPA to Percentage
                  </SelectItem>
                  <SelectItem value="percentage-to-cgpa">
                    Percentage to CGPA
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Input Value Field */}
          <div className="w-full">
            <label
              htmlFor="input-value"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              {inputLabel}
            </label>
            <Input
              type="number"
              id="input-value"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={inputPlaceholder}
              step="0.01"
              min="0"
              max={
                isCGPAToPercentage
                  ? gradingScale === 'custom'
                    ? customScale
                    : gradingScale
                  : '100'
              }
              className="w-full border-indigo-500/50 focus:ring-indigo-500 rounded-sm h-full py-3"
              required
            />
          </div>

          {/* Grading Scale Selector */}
          <div className="w-full">
            <label
              htmlFor="grading-scale"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Select Grading Scale
            </label>
            <Select value={gradingScale} onValueChange={setGradingScale}>
              <SelectTrigger className="w-full border-indigo-500/50 focus:ring-indigo-500">
                <SelectValue placeholder="Select grading scale" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Grading Scale</SelectLabel>
                  {gradingScales.map((scale) => (
                    <SelectItem key={scale.value} value={scale.value}>
                      {scale.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Custom Scale Input (shown when custom scale is selected) */}
          {gradingScale === 'custom' && (
            <div className="w-full">
              <label
                htmlFor="custom-scale"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Enter Custom Scale Maximum
              </label>
              <Input
                type="number"
                id="custom-scale"
                value={customScale}
                onChange={(e) => setCustomScale(e.target.value)}
                placeholder="e.g., 8.0"
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
              !inputValue ||
              !gradingScale ||
              (gradingScale === 'custom' && !customScale)
            }
          >
            {buttonText}
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

export default CGPAPercentageCalculator;
