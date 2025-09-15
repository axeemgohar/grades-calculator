export const gradePoints = {
  'A+': 4.0,
  A: 4.0,
  'A-': 3.7,
  'B+': 3.3,
  B: 3.0,
  'B-': 2.7,
  'C+': 2.3,
  C: 2.0,
  'C-': 1.7,
  'D+': 1.3,
  D: 1.0,
  'D-': 0.7,
  F: 0.0,
};

export const calculateGPA = (courses) => {
  let totalPoints = 0;
  let totalCredits = 0;

  courses.forEach((course) => {
    const points = gradePoints[course.grade] || 0;
    const credits = parseFloat(course.credits) || 0;

    totalPoints += points * credits;
    totalCredits += credits;
  });

  return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
};

export const getGPADescription = (gpaValue) => {
  const gpa = parseFloat(gpaValue);
  if (gpa >= 3.7) return 'Excellent';
  if (gpa >= 3.0) return 'Good';
  if (gpa >= 2.0) return 'Satisfactory';
  if (gpa >= 1.0) return 'Below Average';
  return 'Poor';
};

// Will be used in future versions
// export const percentageToGrade = (percentage) => {
//   if (percentage >= 97) return 'A+';
//   if (percentage >= 93) return 'A';
//   if (percentage >= 90) return 'A-';
//   if (percentage >= 87) return 'B+';
//   if (percentage >= 83) return 'B';
//   if (percentage >= 80) return 'B-';
//   if (percentage >= 77) return 'C+';
//   if (percentage >= 73) return 'C';
//   if (percentage >= 70) return 'C-';
//   if (percentage >= 67) return 'D+';
//   if (percentage >= 65) return 'D';
//   if (percentage >= 60) return 'D-';
//   return 'F';
// };

// Not in used but might be used in future
// export const getGradeColor = (grade) => {
//   const colors = {
//     'A+': 'text-green-600',
//     A: 'text-green-600',
//     'A-': 'text-green-500',
//     'B+': 'text-blue-600',
//     B: 'text-blue-600',
//     'B-': 'text-blue-500',
//     'C+': 'text-yellow-600',
//     C: 'text-yellow-600',
//     'C-': 'text-yellow-500',
//     'D+': 'text-orange-600',
//     D: 'text-orange-600',
//     'D-': 'text-orange-500',
//     F: 'text-red-600',
//   };
//   return colors[grade] || 'text-gray-600';
// };
