// hooks/useCalculationLimit.js
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'calc_count';
const FREE_LIMIT = 5;

export const useCalculationLimit = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    setCount(stored ? parseInt(stored) : 0);
  }, []);

  const canCalculate = () => count < FREE_LIMIT;

  const remainingCalculations = Math.max(0, FREE_LIMIT - count);

  const incrementCalculation = () => {
    const newCount = count + 1;
    setCount(newCount);
    sessionStorage.setItem(STORAGE_KEY, newCount.toString());
  };

  const resetAfterAd = () => {
    setCount(0);
    sessionStorage.setItem(STORAGE_KEY, '0');
  };

  return {
    canCalculate,
    remainingCalculations,
    incrementCalculation,
    resetAfterAd,
  };
};
