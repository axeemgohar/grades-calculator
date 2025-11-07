// lib/calculations/swiss-grade.js

/**
 * Calculates the weighted average grade for the Swiss 1.0 to 6.0 scale.
 * The formula is: Sum(Grade * Weight) / Sum(Weight)
 * The result is rounded to one decimal place, which is common for final certificate/semester grades.
 *
 * @param {Array<Object>} courses - Array of course objects with 'grade' and 'weight' keys.
 * @returns {string} The calculated average grade as a string, rounded to one decimal place.
 */
export const calculateSwissGrade = (courses) => {
  let totalWeightedGrade = 0;
  let totalWeight = 0;

  courses.forEach((course) => {
    // Parse grade (Note) and weight (Kreditpunkte/ECTS)
    const grade = parseFloat(course.grade) || 0;
    const weight = parseFloat(course.weight) || 0;

    // Only include valid grades (1.0 to 6.0) and positive weights in the calculation
    if (grade >= 1.0 && grade <= 6.0 && weight > 0) {
      totalWeightedGrade += grade * weight;
      totalWeight += weight;
    }
  });

  // Calculate and return the average grade, rounded to 1 decimal place.
  // This is a common rounding convention for final Swiss grades.
  return totalWeight > 0
    ? (totalWeightedGrade / totalWeight).toFixed(1)
    : '0.0';
};

/**
 * Provides a descriptive title for the calculated Swiss average grade (Durchschnittsnote).
 * The minimum passing grade (Genügend) is 4.0.
 *
 * @param {string} gradeValue - The calculated average grade score.
 * @returns {string} A descriptive title in German for the grade.
 */
export const getSwissGradeDescription = (gradeValue) => {
  const grade = parseFloat(gradeValue);

  if (grade >= 5.5) return 'Ausgezeichnet (Herausragend)'; // Excellent (Outstanding)
  if (grade >= 5.0) return 'Sehr Gut'; // Very Good
  if (grade >= 4.5) return 'Gut'; // Good
  if (grade >= 4.0) return 'Genügend (Bestanden)'; // Sufficient (Passed) - The pass mark
  if (grade >= 3.0) return 'Ungenügend (Knapp Nicht Bestanden)'; // Insufficient (Narrowly Failed)
  if (grade >= 1.0) return 'Schlecht (Mangelhaft)'; // Bad (Deficient)
  return 'Keine Berechnung möglich'; // No calculation possible
};
