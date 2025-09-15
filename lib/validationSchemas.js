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
