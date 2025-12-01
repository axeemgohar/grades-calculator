export const calculateGermanGrade = (courses) => {
  let totalWeightedScore = 0;
  let totalWeights = 0;

  courses.forEach((course) => {
    // Parse inputs (handle commas if user types them, though type="number" usually handles dots)
    const grade = parseFloat(course.grade);
    const weight = parseFloat(course.weight) || 1; // Default to 1 if empty

    if (!isNaN(grade) && !isNaN(weight)) {
      totalWeightedScore += grade * weight;
      totalWeights += weight;
    }
  });

  if (totalWeights === 0) return '0.00';

  // German convention: usually 2 decimal places (e.g., 2.35)
  return (totalWeightedScore / totalWeights).toFixed(2);
};

export const getGermanGradeDescription = (gradeValue) => {
  const grade = parseFloat(gradeValue);
  // German University Scale (approximate)
  if (grade <= 1.5) return 'Sehr Gut (Very Good)';
  if (grade <= 2.5) return 'Gut (Good)';
  if (grade <= 3.5) return 'Befriedigend (Satisfactory)';
  if (grade <= 4.0) return 'Ausreichend (Sufficient)';
  return 'Mangelhaft/Ungenügend (Fail)';
};
