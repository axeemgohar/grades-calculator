'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

const cvFormSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required'),
  country: z
    .string()
    .min(1, 'Country is required')
    .max(50, 'Country name cannot exceed 50 characters')
    .trim(),
});

const CVInterestForm = () => {
  const [interest, setInterest] = useState(null); // 'yes' | 'no'
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ email: '', country: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (interest === 'no') {
      setSubmitted(true);
      return;
    }

    const validation = cvFormSchema.safeParse(formData);
    if (!validation.success) {
      toast.error(validation.error.issues[0].message, { duration: 4000 });
      return;
    }

    setIsSubmitting(true);
    try {
      const body = new FormData();
      body.append('email', formData.email);
      body.append('country', formData.country);
      body.append('cv_interest', 'yes');

      const response = await fetch('https://formspree.io/f/mjkvbkya', {
        method: 'POST',
        body,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error();
      }
    } catch {
      toast.error('Failed to submit. Please try again later.', {
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-6 space-y-2">
        <p className="text-lg font-semibold text-slate-800">
          Thank you for your response!
        </p>
        <p className="text-sm text-slate-500">
          {interest === 'yes'
            ? "We've received your info and will be in touch soon."
            : 'No worries — feel free to reach out anytime.'}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Question */}
      <div>
        <p className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center">
          Would you like a professional CV/resume for an internship?
        </p>
        <div className="flex gap-6">
          {['yes', 'no'].map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 cursor-pointer  text-slate-700"
            >
              <input
                type="radio"
                name="cv_interest"
                value={option}
                checked={interest === option}
                onChange={() => {
                  setInterest(option);
                  setFormData({ email: '', country: '' });
                }}
                className="accent-indigo-600"
              />
              {option === 'yes' ? "Yes, I'm interested" : 'No, thanks'}
            </label>
          ))}
        </div>
      </div>

      {/* Conditional fields */}
      {interest === 'yes' && (
        <>
          <div className="w-full">
            <label
              htmlFor="cv-email"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Email Address *
            </label>
            <Input
              type="email"
              id="cv-email"
              name="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email address"
              className="w-full border-indigo-300 hover:border-indigo-500 focus:border-indigo-600 py-3.5 rounded-sm focus:shadow-sm bg-white"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="cv-country"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Country *
            </label>
            <Input
              type="text"
              id="cv-country"
              name="country"
              value={formData.country}
              onChange={(e) => handleInputChange('country', e.target.value)}
              placeholder="Enter your country"
              className="w-full border-indigo-300 hover:border-indigo-500 focus:border-indigo-600 py-3.5 rounded-sm focus:shadow-sm bg-white"
              required
              disabled={isSubmitting}
            />
          </div>
        </>
      )}

      {/* Submit — shown once user picks an option */}
      {interest !== null && (
        <Button
          type="submit"
          className="py-2.5 h-full w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader className="animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit'
          )}
        </Button>
      )}
    </form>
  );
};

export default CVInterestForm;
