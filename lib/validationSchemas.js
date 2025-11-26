import { z } from 'zod';

// US DEGREE CLASSIFICATION SCHEMA
export const courseSchema = z.object({
  id: z.number().positive('ID must be a positive number'),
  name: z.string().optional(),
  credits: z
    .string()
    .min(1, 'Credits are required')
    .refine((val) => {
      const num = parseFloat(val);
      return !isNaN(num) && num >= 0;
    }, 'Credits must be a valid number and cannot be negative'),
  grade: z.string().min(1, 'Please select a grade'),
});

// Course list schema (array of courses)
export const courseListSchema = z
  .array(courseSchema)
  .min(1, 'At least one course is required');

// UK DEGREE CLASSIFICATION SCHEMA
export const moduleSchemaUK = z.object({
  id: z.number().positive('ID must be a positive number'),
  name: z.string().optional(),
  credits: z
    .string()
    .min(1, 'Credits are required')
    .refine((val) => {
      const num = parseFloat(val);
      return !isNaN(num) && num >= 0;
    }, 'Credits must be a valid number and cannot be negative'),
  mark: z
    .string()
    .min(1, 'Mark is required')
    .refine((val) => {
      const num = parseFloat(val);
      return !isNaN(num) && num >= 0;
    }, 'Mark must be a valid number and cannot be negative'),
});

// Course list schema (array of courses)
export const moduleListSchemaUK = z
  .array(moduleSchemaUK)
  .min(1, 'At least one module is required');

// CGPA CALCULATION SCHEMA
export const CGPASchema = z.object({
  id: z.number().positive('ID must be a positive number'),
  gpa: z
    .string()
    .min(1, 'GPA is required')
    .refine((val) => {
      const num = parseFloat(val);
      return !isNaN(num) && num >= 0;
    }, 'GPA must be a valid number and cannot be negative'),
  credits: z
    .string()
    .min(1, 'Credits are required')
    .refine((val) => {
      const num = parseFloat(val);
      return !isNaN(num) && num >= 0;
    }, 'Credits must be a valid number and cannot be negative'),
});

// Course list schema (array of courses)
export const semesterListSchema = z
  .array(CGPASchema)
  .min(1, 'At least one Semester is required');

// CGPA to Percentage validation schema
export const cgpaPercentageSchema = z
  .object({
    inputValue: z
      .number({
        required_error: 'Input value is required',
        invalid_type_error: 'Input value must be a number',
      })
      .positive('Input value must be greater than 0')
      .refine((val) => !isNaN(val), 'Input value must be a valid number'),

    gradingScale: z
      .number({
        required_error: 'Grading scale is required',
        invalid_type_error: 'Grading scale must be a number',
      })
      .positive('Grading scale must be greater than 0')
      .refine((val) => !isNaN(val), 'Grading scale must be a valid number'),

    calculationType: z.enum(['cgpa-to-percentage', 'percentage-to-cgpa'], {
      required_error: 'Calculation type is required',
      invalid_type_error: 'Invalid calculation type',
    }),

    customScale: z
      .number()
      .positive('Custom scale must be greater than 0')
      .optional()
      .nullable(),
  })
  .superRefine((data, ctx) => {
    const { inputValue, gradingScale, calculationType } = data;

    // Validate CGPA to Percentage conversion
    if (calculationType === 'cgpa-to-percentage') {
      if (inputValue > gradingScale) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `CGPA cannot be greater than the maximum scale (${gradingScale})`,
          path: ['inputValue'],
        });
      }
    }

    // Validate Percentage to CGPA conversion
    if (calculationType === 'percentage-to-cgpa') {
      if (inputValue > 100) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Percentage cannot be greater than 100',
          path: ['inputValue'],
        });
      }
    }
  });

// CGPA to GPA validation schema
export const cgpaToGPASchema = z
  .object({
    cgpa: z
      .number({
        required_error: 'CGPA is required',
        invalid_type_error: 'CGPA must be a number',
      })
      .positive('CGPA must be greater than 0')
      .refine((val) => !isNaN(val), 'CGPA must be a valid number'),

    currentScale: z
      .number({
        required_error: 'Current grading scale is required',
        invalid_type_error: 'Current grading scale must be a number',
      })
      .positive('Current grading scale must be greater than 0')
      .refine(
        (val) => !isNaN(val),
        'Current grading scale must be a valid number'
      ),

    targetScale: z
      .number({
        required_error: 'Target grading scale is required',
        invalid_type_error: 'Target grading scale must be a number',
      })
      .positive('Target grading scale must be greater than 0')
      .refine(
        (val) => !isNaN(val),
        'Target grading scale must be a valid number'
      ),

    customCurrentScale: z
      .number()
      .positive('Custom current scale must be greater than 0')
      .optional()
      .nullable(),

    customTargetScale: z
      .number()
      .positive('Custom target scale must be greater than 0')
      .optional()
      .nullable(),
  })
  .superRefine((data, ctx) => {
    const { cgpa, currentScale, targetScale } = data;

    // Validate CGPA is not greater than current scale
    if (cgpa > currentScale) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `CGPA cannot be greater than the current scale (${currentScale})`,
        path: ['cgpa'],
      });
    }

    // Validate current scale and target scale are not the same
    if (currentScale === targetScale) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Current scale and target scale must be different',
        path: ['targetScale'],
      });
    }
  });

// NZ PAPER SCHEMA
export const paperSchemaNZ = z.object({
  id: z.number().positive('ID must be a positive number'),
  name: z.string().optional(),

  // Renamed 'credits' to 'points'
  points: z
    .string()
    .min(1, 'Points are required') // Updated error message
    .refine((val) => {
      const num = parseFloat(val);
      // Validates that the input is a non-negative number (0 or greater)
      return !isNaN(num) && num >= 0;
    }, 'Points must be a valid number and cannot be negative (e.g., 15, 30)'), // Updated error message

  grade: z.string().min(1, 'Please select a grade'),
});

// Paper list schema (array of papers)
export const paperListSchemaNZ = z
  .array(paperSchemaNZ)
  .min(1, 'At least one paper is required');

// Swiss Course Schema (Note & Gewichtung)
export const courseSchemaCH = z.object({
  id: z.number().positive(),

  // Weight (Kreditpunkte/ECTS)
  weight: z
    .string()
    .min(1, 'Die Gewichtung ist erforderlich (z.B. 3 oder 6 ECTS)') // Weight is required
    .refine((val) => {
      const num = parseFloat(val);
      // Validates that the input is a non-negative number
      return !isNaN(num) && num > 0;
    }, 'Die Gewichtung muss eine positive Zahl sein (z.B. 3.0 oder 6.0)'), // Must be a positive number

  // Grade (Note 1.0 to 6.0)
  grade: z
    .string()
    .min(1, 'Die Note ist erforderlich (1.0 bis 6.0)') // Grade is required
    .refine((val) => {
      const num = parseFloat(val);
      // CRITICAL: Swiss grades are 1.0 to 6.0, typically in quarter steps (0.25)
      return (
        !isNaN(num) &&
        num >= 1.0 &&
        num <= 6.0 &&
        // Check for quarter step validity: num * 4 must be an integer
        (num * 4) % 1 === 0
      );
    }, 'Die Note muss zwischen 1.0 und 6.0 liegen und in Viertelschritten (z.B. 4.25, 5.5) angegeben werden.'),
});

// Course list schema (array of courses)
export const courseListSchemaCH = z
  .array(courseSchemaCH)
  .min(1, 'Mindestens ein Eintrag ist erforderlich');

// Blooket Guarantee Calculator validation schema
export const blooketGuaranteeSchema = z.object({
  tokens: z
    .number({
      required_error: 'Tokens are required',
      invalid_type_error: 'Tokens must be a number',
    })
    .int('Tokens must be a whole number')
    .positive('You must have at least 1 token')
    .refine((val) => !isNaN(val), 'Tokens must be a valid number'),

  packId: z
    .string({
      required_error: 'Please select a pack',
    })
    .min(1, 'Please select a pack'),

  blookName: z
    .string({
      required_error: 'Please select a blook',
    })
    .min(1, 'Please select a blook'),
});
