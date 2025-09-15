export const calculateCGPA = (semesters) => {
  let totalGPA = 0;
  let totalCredits = 0;

  semesters.forEach((semester) => {
    const points = semester.gpa || 0;
    const credits = parseFloat(semester.credits) || 0;

    totalGPA += points * credits;
    totalCredits += credits;
  });

  return totalCredits > 0 ? (totalGPA / totalCredits).toFixed(2) : '0.00';
};
