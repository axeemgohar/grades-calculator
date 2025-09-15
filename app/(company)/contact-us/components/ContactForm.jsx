'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader, LoaderCircle } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

// Validation schema
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters long')
    .max(50, 'Name cannot exceed 50 characters')
    .trim(),
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required'),
  country: z
    .string()
    .min(1, 'Country is required')
    .max(50, 'Country name cannot exceed 50 characters')
    .trim(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters long')
    .max(1000, 'Message cannot exceed 1000 characters')
    .trim(),
});

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      country: '',
      message: '',
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form data
    const validation = contactFormSchema.safeParse(formData);

    if (!validation.success) {
      const firstError = validation.error.issues[0];
      toast.error(firstError.message, {
        duration: 4000,
        className: 'sonner-toast',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mvoearvr', {
        method: 'POST',
        body: new FormData(event.target),
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        toast.success(
          "Message sent successfully! We'll get back to you soon.",
          {
            duration: 5000,
            className: 'sonner-toast',
          }
        );
        resetForm();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again later.', {
        duration: 4000,
        className: 'sonner-toast',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div className="w-full">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Full Name *
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          placeholder="Enter your full name"
          className="w-full border-indigo-300 hover:border-indigo-500 focus:border-indigo-600 py-3.5 rounded-sm focus:shadow-sm bg-white"
          required
          disabled={isSubmitting}
        />
      </div>

      {/* Email Field */}
      <div className="w-full">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Email Address *
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          placeholder="Enter your email address"
          className="w-full border-indigo-300 hover:border-indigo-500 focus:border-indigo-600 py-3.5 rounded-sm focus:shadow-sm bg-white"
          required
          disabled={isSubmitting}
        />
      </div>

      {/* Country Field */}
      <div className="w-full">
        <label
          htmlFor="country"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Country *
        </label>
        <Input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={(e) => handleInputChange('country', e.target.value)}
          placeholder="Enter your country"
          className="w-full border-indigo-300 hover:border-indigo-500 focus:border-indigo-600 py-3.5 rounded-sm focus:shadow-sm bg-white"
          required
          disabled={isSubmitting}
        />
      </div>

      {/* Message Field */}
      <div className="w-full">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Message *
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          placeholder="Tell us about your question, feedback, or how we can help you..."
          rows={6}
          className="w-full border-indigo-300 hover:border-indigo-500 focus:!border-indigo-600 focus:!ring-0 max-sm:text-sm  resize-none rounded-sm bg-white"
          required
          disabled={isSubmitting}
        />
        <p className="text-xs text-slate-500 mt-1">
          {formData.message.length}/1000 characters
        </p>
      </div>

      {/* Submit Button */}

      <Button
        type="submit"
        className="py-2.5 h-full w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader className="animate-spin" />
            Sending Message...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );
};

export default ContactUsForm;
