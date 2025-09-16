const schemaCGPACalculator = {
  '@context': 'https://schema.org',
  '@graph': [
    // 1. WebApplication Schema for the Calculator
    {
      '@type': 'WebApplication',
      '@id': 'https://calculatecgpa.com#webapp',
      name: 'CGPA Calculator',
      url: 'https://calculatecgpa.com',
      description:
        'Free online CGPA calculator that helps students calculate their Cumulative Grade Point Average accurately. Supports weighted courses with semester GPA and credit inputs.',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires JavaScript',
      softwareVersion: '1.0',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: [
        'Calculate CGPA using semester GPA and credits',
        'Supports weighted course calculations',
        'Works with multiple grading scales (4.0, 5.0, 7.0, 10.0)',
        'Instant results with detailed breakdown',
        'Mobile-friendly calculator',
      ],
      audience: {
        '@type': 'EducationalAudience',
        educationalRole: 'student',
      },
      inLanguage: 'en-US',
      isAccessibleForFree: true,
      creator: {
        '@type': 'Organization',
        '@id': 'https://calculatecgpa.com#organization',
      },
    },

    // 2. Organization Schema
    {
      '@type': 'Organization',
      '@id': 'https://calculatecgpa.com#organization',
      name: 'Gradian',
      url: 'https://calculatecgpa.com',
      description:
        'Educational platform providing free grade calculation tools for students worldwide',
      areaServed: [
        'Australia',
        'Azerbaijan',
        'Bahrain',
        'Bangladesh',
        'Brazil',
        'Brunei',
        'Canada',
        'China',
        'Cyprus',
        'Egypt',
        'Ethiopia',
        'France',
        'Germany',
        'Ghana',
        'Hong Kong',
        'Hungary',
        'India',
        'Indonesia',
        'Ireland',
        'Italy',
        'Japan',
        'Jordan',
        'Kazakhstan',
        'Kuwait',
        'Malaysia',
        'Morocco',
        'Nepal',
        'Netherlands',
        'New Zealand',
        'Nigeria',
        'Norway',
        'Oman',
        'Pakistan',
        'Philippines',
        'Poland',
        'Qatar',
        'Romania',
        'Saudi Arabia',
        'Singapore',
        'South Korea',
        'Spain',
        'Sri Lanka',
        'Switzerland',
        'Thailand',
        'Tunisia',
        'Turkey',
        'Uganda',
        'United Arab Emirates',
        'United Kingdom',
        'United States',
      ],
      serviceType: 'Educational Tools',
    },

    // 3. Main Article Schema for Educational Content
    {
      '@type': 'Article',
      '@id': 'https://calculatecgpa.com#article',
      headline:
        'Complete Guide to CGPA Calculation: Understanding Cumulative Grade Point Average',
      description:
        'Comprehensive guide explaining what CGPA is, how to calculate it, and why it matters for students. Includes tips for improvement and detailed explanations.',
      author: {
        '@type': 'Organization',
        '@id': 'https://calculatecgpa.com#organization',
      },
      publisher: {
        '@type': 'Organization',
        '@id': 'https://calculatecgpa.com#organization',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://calculatecgpa.com',
      },
      articleSection: 'Education',
      keywords: [
        'CGPA',
        'Grade Point Average',
        'Academic Calculator',
        'Student GPA',
        'Educational Tools',
      ],
      inLanguage: 'en-US',
      isAccessibleForFree: true,
      about: [
        {
          '@type': 'Thing',
          name: 'CGPA',
          description: 'Cumulative Grade Point Average',
        },
        {
          '@type': 'Thing',
          name: 'Academic Performance',
          description: 'Student academic achievement measurement',
        },
      ],
    },

    // 4. FAQ Schema
    {
      '@type': 'FAQPage',
      '@id': 'https://calculatecgpa.com#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: "What's the difference between GPA and CGPA?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GPA (Grade Point Average) is usually calculated for one semester or year, while CGPA (Cumulative Grade Point Average) includes all your semesters from the beginning of your degree program.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I calculate CGPA if my university uses a different grading scale?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes! Our calculator works with most common scales (4.0, 5.0, 7.0, 10.0). Just make sure you're entering your semester GPAs in the same scale that your university uses.",
          },
        },
        {
          '@type': 'Question',
          name: 'What if I have failed or repeated a semester?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Enter the GPA you actually received for that semester, even if it's 0 or very low. The calculator will include it in your overall CGPA calculation, which gives you an accurate picture.",
          },
        },
        {
          '@type': 'Question',
          name: 'Is it possible to significantly improve CGPA in final semesters?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, but it gets harder as you have more semesters. Early improvement has more impact. Focus on getting the highest grades possible in remaining semesters.',
          },
        },
        {
          '@type': 'Question',
          name: "What's considered a good CGPA for university admissions?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This varies by country and institution. Generally, 3.0+ (on 4.0 scale) or 7.0+ (on 10.0 scale) is considered good. Top universities may require 3.5+ or 8.5+ respectively.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can internships or projects improve my CGPA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Usually not directly, but some universities offer credit courses for internships or projects. Check with your academic advisor about opportunities that could boost your CGPA.',
          },
        },
      ],
    },

    // 5. HowTo Schema for Using the Calculator
    {
      '@type': 'HowTo',
      '@id': 'https://calculatecgpa.com#howto',
      name: 'How to Calculate CGPA Using Our Calculator',
      description:
        'Step-by-step guide to calculate your Cumulative Grade Point Average using our free online calculator',
      image: 'https://calculatecgpa.com/images/cgpa-calculator-guide.jpg', // Add your image URL
      totalTime: 'PT2M',
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'USD',
        value: '0',
      },
      supply: [
        {
          '@type': 'HowToSupply',
          name: 'Semester GPAs',
        },
        {
          '@type': 'HowToSupply',
          name: 'Semester Credits',
        },
        {
          '@type': 'HowToSupply',
          name: 'Academic Transcript or Marksheet',
        },
      ],
      step: [
        {
          '@type': 'HowToStep',
          name: 'Enter Your Semester GPAs',
          text: "Type in the GPA you got for each completed semester (for example, 'Semester 1 GPA: 3.7'). You can find this on your official marksheet or transcript.",
          url: 'https://calculatecgpa.com#step1',
        },
        {
          '@type': 'HowToStep',
          name: 'Enter Your Semester Credits',
          text: "Type in the total credits for each semester (for example, 'Semester 1 Credits: 17'). You can find these on your marksheet or transcript.",
          url: 'https://calculatecgpa.com#step2',
        },
        {
          '@type': 'HowToStep',
          name: 'Get Your Results',
          text: 'See your current CGPA with a clear breakdown. Perfect for applications, planning, and tracking progress!',
          url: 'https://calculatecgpa.com#step3',
        },
      ],
    },

    // 6. BreadcrumbList Schema (for homepage - single item)
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://calculatecgpa.com#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'CGPA Calculator',
          item: 'https://calculatecgpa.com',
        },
      ],
    },
  ],
};

export default function CGPACalculatorSchema() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaCGPACalculator),
        }}
      />
    </>
  );
}
