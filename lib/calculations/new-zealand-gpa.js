// lib/calculations/new-zealand-gpa.js

/**
 * The New Zealand 9.0 GPA Scale Grade Point Values (GPV).
 * This is the standard scale used by most New Zealand universities (e.g., Otago, Canterbury).
 * Fail grades (D and E) are typically assigned a GPV of 0.
 */
export const gradePointsNZ = {
  // Pass Grades
  'A+': 9.0,
  A: 8.0,
  'A-': 7.0,
  'B+': 6.0,
  B: 5.0,
  'B-': 4.0,
  'C+': 3.0,
  C: 2.0,
  'C-': 1.0,
  // Fail Grades
  D: 0.0,
  E: 0.0,
  // Other potential non-numeric grades
  P: 'N/A', // Ungraded Pass - Excluded from GPA
  F: 'N/A', // Ungraded Fail - Excluded from GPA
};

/**
 * Calculates the weighted Grade Point Average (GPA) for New Zealand.
 * The formula is: Sum(Grade Point Value * Course Points) / Sum(Course Points)
 * The result is rounded to two decimal places.
 *
 * @param {Array<Object>} courses - Array of course objects with 'grade' and 'points' keys.
 * @returns {string} The calculated GPA score as a string, or '0.00'.
 */
export const calculateNZGPA = (courses) => {
  let totalWeightedPoints = 0;
  let totalCoursePoints = 0;

  courses.forEach((course) => {
    // Retrieve the Grade Point Value (GPV). Use 0 if the grade is not found (e.g., due to 'P', 'F', or error).
    const gpv = gradePointsNZ[course.grade] || 0;

    // Ensure the course point value is a number and is not negative
    const coursePoints = parseFloat(course.points) || 0;

    // Only include grades with a numeric GPV in the calculation (excludes 'P', 'F', etc.)
    if (typeof gpv === 'number' && coursePoints > 0) {
      totalWeightedPoints += gpv * coursePoints;
      totalCoursePoints += coursePoints;
    }
  });

  // Calculate and return the GPA, rounded to 2 decimal places.
  return totalCoursePoints > 0
    ? (totalWeightedPoints / totalCoursePoints).toFixed(2)
    : '0.00';
};

/**
 * Provides a description based on the calculated New Zealand GPA on the 9.0 scale.
 * These descriptors often align with university Honours criteria.
 * * @param {string} gpaValue - The calculated GPA score.
 * @returns {string} A descriptive title for the GPA.
 */
export const getNZGPADescription = (gpaValue) => {
  const gpa = parseFloat(gpaValue);

  if (gpa >= 8.0) return 'Outstanding Achievement';
  if (gpa >= 7.0) return 'Excellent';
  if (gpa >= 6.0) return 'Very Good';
  if (gpa >= 5.0) return 'Good';
  if (gpa >= 3.0) return 'Adequate (Pass)';
  if (gpa >= 1.0) return 'Marginal (Pass/Conditional Pass)';
  return 'Below Standard (Fail)';
};
