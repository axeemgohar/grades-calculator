export const calculateDutchAverage = (courses) => {
  let totalWeightedScore = 0;
  let totalWeights = 0;

  courses.forEach((course) => {
    // Replace comma with dot for calculation
    const gradeString = course.grade.toString().replace(',', '.');
    const weightString = course.weight.toString().replace(',', '.');

    const grade = parseFloat(gradeString);
    const weight = parseFloat(weightString) || 1; // Default to 1 if empty

    if (!isNaN(grade) && !isNaN(weight)) {
      totalWeightedScore += grade * weight;
      totalWeights += weight;
    }
  });

  if (totalWeights === 0) return '0.0';

  // Dutch grades are typically rounded to 1 decimal place (e.g. 6,5)
  return (totalWeightedScore / totalWeights).toFixed(1);
};

export const getDutchGradeDescription = (gradeValue) => {
  const grade = parseFloat(gradeValue);

  // Official Dutch Grading Scale
  if (grade >= 8.5) return 'Uitstekend (Excellent)';
  if (grade >= 7.5) return 'Goed (Good)';
  if (grade >= 6.5) return 'Ruim Voldoende (More than Satisfactory)';
  if (grade >= 5.5) return 'Voldoende (Satisfactory/Pass)'; // The crucial pass mark
  if (grade >= 4.5) return 'Matig (Unsatisfactory)';
  if (grade >= 3.5) return 'Onvoldoende (Very Unsatisfactory)';
  if (grade >= 1.0) return 'Zeer Slecht (Poor)';
  return '-';
};
