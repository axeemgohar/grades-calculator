// CGPA to GPA scale conversion
export const convertCGPAToGPA = (cgpa, currentScale, targetScale) => {
  if (
    !cgpa ||
    !currentScale ||
    !targetScale ||
    cgpa <= 0 ||
    currentScale <= 0 ||
    targetScale <= 0
  ) {
    throw new Error('Invalid CGPA or grading scale values');
  }

  if (cgpa > currentScale) {
    throw new Error('CGPA cannot be greater than the current scale');
  }

  if (currentScale === targetScale) {
    throw new Error('Current scale and target scale cannot be the same');
  }

  // Simple proportional conversion formula
  const convertedGPA = (cgpa / currentScale) * targetScale;

  // Round to 2 decimal places
  return Number(convertedGPA.toFixed(2));
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
