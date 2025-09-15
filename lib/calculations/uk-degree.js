// Might be used in future to convert to US GPA
// export const gradePoints = {
//   'First Class': 4.0,
//   'Upper Second (2:1)': 3.3,
//   'Lower Second (2:2)': 2.7,
//   'Third Class': 2.0,
//   Pass: 1.0,
//   Fail: 0.0,
// };

export const calculateDegreeClassification = (modules) => {
  let totalWeightedMarks = 0;
  let totalCredits = 0;

  modules.forEach((module) => {
    const mark = parseFloat(module.mark) || 0;
    const credits = parseFloat(module.credits) || 0;

    totalWeightedMarks += mark * credits;
    totalCredits += credits;
  });

  const averageMark =
    totalCredits > 0
      ? Number((totalWeightedMarks / totalCredits).toFixed(1))
      : 0;
  const classification = percentageToClassification(parseFloat(averageMark));

  return {
    averageMark,
    classification,
  };
};

export const percentageToClassification = (percentage) => {
  if (percentage >= 70) return 'First Class';
  if (percentage >= 60) return 'Upper Second (2:1)';
  if (percentage >= 50) return 'Lower Second (2:2)';
  if (percentage >= 40) return 'Third Class';
  return 'Fail';
};
