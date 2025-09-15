// CGPA to Percentage conversion
export const calculateCGPAToPercentage = (cgpa, maxScale) => {
  if (!cgpa || !maxScale || cgpa <= 0 || maxScale <= 0) {
    throw new Error('Invalid CGPA or grading scale values');
  }

  if (cgpa > maxScale) {
    throw new Error('CGPA cannot be greater than the maximum scale');
  }

  // Formula: (CGPA ÷ Max Scale) × 100
  const percentage = (cgpa / maxScale) * 100;

  // Round to 2 decimal places
  return Number(((percentage * 100) / 100).toFixed(2));
};

// Percentage to CGPA conversion
export const calculatePercentageToCGPA = (percentage, maxScale) => {
  if (
    !percentage ||
    !maxScale ||
    percentage < 0 ||
    percentage > 100 ||
    maxScale <= 0
  ) {
    throw new Error('Invalid percentage or grading scale values');
  }

  // Formula: (Percentage ÷ 100) × Max Scale
  const cgpa = (percentage / 100) * maxScale;

  // Round to 2 decimal places
  return Number(((cgpa * 100) / 100).toFixed(4));
};

export const gradingScales = [
  { value: '4.0', label: '4.0 Scale' },
  { value: '5.0', label: '5.0 Scale' },
  { value: '7.0', label: '7.0 Scale' },
  { value: '10.0', label: '10.0 Scale' },
  { value: '12.0', label: '12.0 Scale' },
  { value: '20.0', label: '20.0 Scale' },
  { value: 'custom', label: 'Custom Scale' },
];
