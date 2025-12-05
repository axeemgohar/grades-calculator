// Mode 1: Weighted Average (Notendurchschnitt)
export const calculateSwissAverage = (courses) => {
  let totalWeightedScore = 0;
  let totalWeights = 0;

  courses.forEach((course) => {
    const grade = parseFloat(course.grade);
    const weight = parseFloat(course.weight) || 1; // Default to 1

    if (!isNaN(grade) && !isNaN(weight)) {
      totalWeightedScore += grade * weight;
      totalWeights += weight;
    }
  });

  if (totalWeights === 0) return '0.00';

  // Swiss grades are usually rounded to 1 or 2 decimal places.
  // We will return 2 for precision.
  return (totalWeightedScore / totalWeights).toFixed(2);
};

// Mode 2: Points to Grade (Notenberechnung nach Punkten)
// Formula: (Achieved / Max) * 5 + 1
export const calculateSwissGradeFromPoints = (achieved, max) => {
  const ach = parseFloat(achieved);
  const m = parseFloat(max);

  if (isNaN(ach) || isNaN(m) || m === 0) return null;

  let grade = (ach / m) * 5 + 1;

  // Cap at 6.0 and Floor at 1.0
  if (grade > 6) grade = 6;
  if (grade < 1) grade = 1;

  return grade.toFixed(2);
};

export const getSwissGradeDescription = (gradeValue) => {
  const grade = parseFloat(gradeValue);

  if (grade >= 5.75) return 'Sehr gut (6)';
  if (grade >= 5.25) return 'Gut bis Sehr gut (5.5)';
  if (grade >= 4.75) return 'Gut (5)';
  if (grade >= 4.25) return 'Genügend bis Gut (4.5)';
  if (grade >= 3.75) return 'Genügend (4)'; // Passing threshold
  if (grade >= 2.75) return 'Ungenügend (3)';
  if (grade >= 1.75) return 'Schwach (2)';
  return 'Schlecht (1)';
};
