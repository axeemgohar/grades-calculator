const schemaCGPAPercentageCalculator = {
  '@context': 'https://schema.org',
  '@graph': [
    // 1. WebApplication Schema for the CGPA-Percentage Calculator
    {
      '@type': 'WebApplication',
      '@id':
        'https://calculatecgpa.com/grade-calculator/cgpa-percentage#webapp',
      name: 'CGPA & Percentage Calculator',
      url: 'https://calculatecgpa.com/grade-calculator/cgpa-percentage',
      description:
        'Free bidirectional CGPA to percentage and percentage to CGPA converter. Supports all major grading scales (4.0, 5.0, 7.0, 10.0, 12.0, 20.0) and custom scales for students worldwide.',
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
        'Bidirectional CGPA to percentage conversion',
        'Percentage to CGPA conversion',
        'Support for multiple grading scales (4.0, 5.0, 7.0, 10.0, 12.0, 20.0)',
        'Custom grading scale support',
        'Instant accurate conversions',
        'Works for all international education systems',
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
      mainEntity: [
        {
          '@type': 'Thing',
          name: 'CGPA Conversion',
          description: 'Grade conversion between CGPA and percentage formats',
        },
        {
          '@type': 'Thing',
          name: 'International Grading Systems',
          description:
            'Multiple grading scale support for global education systems',
        },
      ],
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
        'India',
        'United States',
        'Canada',
        'Australia',
        'Pakistan',
        'Bangladesh',
        'Germany',
        'Malaysia',
      ],
      serviceType: 'Educational Tools',
    },

    // 3. Article Schema for Educational Content
    {
      '@type': 'Article',
      '@id':
        'https://calculatecgpa.com/grade-calculator/cgpa-percentage#article',
      headline:
        'Complete Guide to CGPA and Percentage Conversion: Understanding International Grading Systems',
      description:
        'Comprehensive guide to converting between CGPA and percentage formats across different international grading scales, including practical examples and tips.',
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
        '@id': 'https://calculatecgpa.com/grade-calculator/cgpa-percentage',
      },
      articleSection: 'Education',
      keywords: [
        'CGPA to Percentage',
        'Percentage to CGPA',
        'Grade Conversion',
        'International Grading',
        'Academic Conversion',
      ],
      inLanguage: 'en-US',
      isAccessibleForFree: true,
      about: [
        {
          '@type': 'Thing',
          name: 'Grade Conversion',
          description: 'Converting between CGPA and percentage formats',
        },
        {
          '@type': 'Thing',
          name: 'International Education',
          description: 'Global grading systems and academic standards',
        },
      ],
    },

    // 4. FAQ Schema
    {
      '@type': 'FAQPage',
      '@id': 'https://calculatecgpa.com/grade-calculator/cgpa-percentage#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is the conversion accurate for all universities?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our calculator uses standard conversion formulas, but some institutions have specific methods. Always verify with your target university for official requirements.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I convert between different grading scales?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Our calculator supports all major scales (4.0, 5.0, 7.0, 10.0, 12.0, 20.0) and custom scales. Just select the appropriate scale from the dropdown menu.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if my university uses a custom grading scale?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Select 'Custom Scale' from the dropdown and enter your university's maximum grade point. The calculator will adjust the conversion accordingly.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to convert grades for international applications?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Many international universities require grade conversion to understand your academic performance. Some may also require official credential evaluation services.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I round my converted grades?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Check the application requirements. Some forms need exact decimal values while others require rounded numbers. When in doubt, use the exact calculated value.',
          },
        },
      ],
    },

    // 5. HowTo Schema for Using the Calculator
    {
      '@type': 'HowTo',
      '@id': 'https://calculatecgpa.com/grade-calculator/cgpa-percentage#howto',
      name: 'How to Convert CGPA to Percentage and Vice Versa',
      description:
        'Step-by-step guide to convert between CGPA and percentage using our free calculator with support for multiple grading scales',
      image:
        'https://calculatecgpa.com/images/cgpa-percentage-converter-guide.jpg', // Add your image URL
      totalTime: 'PT2M',
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'USD',
        value: '0',
      },
      supply: [
        {
          '@type': 'HowToSupply',
          name: 'Current CGPA or Percentage',
        },
        {
          '@type': 'HowToSupply',
          name: 'Knowledge of your grading scale',
        },
      ],
      step: [
        {
          '@type': 'HowToStep',
          name: 'Choose Conversion Type',
          text: 'Select whether you want to convert CGPA to Percentage or Percentage to CGPA from the dropdown menu.',
          url: 'https://calculatecgpa.com/grade-calculator/cgpa-percentage#step1',
        },
        {
          '@type': 'HowToStep',
          name: 'Enter Your CGPA or Percentage',
          text: 'Input your current CGPA or percentage for conversion. Ensure you enter valid values.',
          url: 'https://calculatecgpa.com/grade-calculator/cgpa-percentage#step2',
        },
        {
          '@type': 'HowToStep',
          name: 'Select Grading Scale',
          text: "Choose your university's grading scale (4.0, 5.0, 7.0, 10.0, 12.0, 20.0) or select 'Custom Scale' if your institution uses a different maximum grade point.",
          url: 'https://calculatecgpa.com/grade-calculator/cgpa-percentage#step3',
        },
      ],
    },

    // 6. DefinedTermSet for Grading Scales
    {
      '@type': 'DefinedTermSet',
      '@id':
        'https://calculatecgpa.com/grade-calculator/cgpa-percentage#grading-scales',
      name: 'International Grading Scales',
      description: 'Common grading scales used by universities worldwide',
      hasDefinedTerm: [
        {
          '@type': 'DefinedTerm',
          name: '4.0 Scale',
          termCode: '4.0',
          description: 'Used in United States, Pakistan, Malaysia',
        },
        {
          '@type': 'DefinedTerm',
          name: '5.0 Scale',
          termCode: '5.0',
          description: 'Used in Germany and some institutions',
        },
        {
          '@type': 'DefinedTerm',
          name: '7.0 Scale',
          termCode: '7.0',
          description: 'Used in Australia',
        },
        {
          '@type': 'DefinedTerm',
          name: '10.0 Scale',
          termCode: '10.0',
          description: 'Used in India and many Asian countries',
        },
      ],
    },

    // 7. DataFeed Schema for Popular Conversions
    {
      '@type': 'DataFeed',
      '@id':
        'https://calculatecgpa.com/grade-calculator/cgpa-percentage#conversion-examples',
      name: 'Popular CGPA to Percentage Conversions',
      description: 'Common grade conversion examples for different scales',
      dataFeedElement: [
        {
          '@type': 'DataFeedItem',
          name: '8.5 CGPA (10.0 scale) to Percentage',
          description: 'Indian system conversion example',
          text: '8.5 CGPA = 80.75%',
        },
        {
          '@type': 'DataFeedItem',
          name: '3.7 GPA (4.0 scale) to Percentage',
          description: 'US system conversion example',
          text: '3.7 GPA = 92.5%',
        },
        {
          '@type': 'DataFeedItem',
          name: '9.0 CGPA (10.0 scale) to Percentage',
          description: 'High performance conversion example',
          text: '9.0 CGPA = 85.5%',
        },
      ],
    },

    // 8. BreadcrumbList Schema
    {
      '@type': 'BreadcrumbList',
      '@id':
        'https://calculatecgpa.com/grade-calculator/cgpa-percentage#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://calculatecgpa.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'CGPA & Percentage Calculator',
          item: 'https://calculatecgpa.com/grade-calculator/cgpa-percentage',
        },
      ],
    },
  ],
};

export default function CGPAPercentageCalculatorSchema() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaCGPAPercentageCalculator),
        }}
      />
    </>
  );
}
