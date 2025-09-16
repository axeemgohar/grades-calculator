const schemaUSGPACalculator = {
  '@context': 'https://schema.org',
  '@graph': [
    // 1. WebApplication Schema for the US GPA Calculator
    {
      '@type': 'WebApplication',
      '@id': 'https://calculatecgpa.com/grade-calculator/us#webapp',
      name: 'US GPA Calculator',
      url: 'https://calculatecgpa.com/grade-calculator/us',
      description:
        'Free online US GPA calculator using the standard 4.0 scale. Calculate your Grade Point Average instantly for high school and college with credit-weighted calculations.',
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
        'US 4.0 GPA scale calculation',
        'Credit-weighted GPA calculations',
        'Support for A+ to F grade range',
        'Grade forecasting capabilities',
        'Instant results with breakdown',
        'High school and college compatible',
      ],
      audience: {
        '@type': 'EducationalAudience',
        educationalRole: 'student',
        geographicArea: {
          '@type': 'Country',
          name: 'United States',
        },
      },
      inLanguage: 'en-US',
      isAccessibleForFree: true,
      creator: {
        '@type': 'Organization',
        '@id': 'https://calculatecgpa.com#organization',
      },
      mainEntity: {
        '@type': 'Thing',
        name: 'US GPA Scale',
        description: 'American 4.0 Grade Point Average system',
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
      areaServed: ['United States'],
      serviceType: 'Educational Tools',
    },

    // 3. Article Schema for Educational Content
    {
      '@type': 'Article',
      '@id': 'https://calculatecgpa.com/grade-calculator/us#article',
      headline:
        'Complete Guide to US GPA Calculation: Understanding the 4.0 Scale',
      description:
        'Comprehensive guide to calculating GPA on the US 4.0 scale, including grade meanings, credit hours, and tips for academic success.',
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
        '@id': 'https://calculatecgpa.com/grade-calculator/us',
      },
      articleSection: 'Education',
      keywords: [
        'US GPA',
        '4.0 Scale',
        'Grade Point Average',
        'American Grading',
        'College GPA',
      ],
      inLanguage: 'en-US',
      isAccessibleForFree: true,
      about: [
        {
          '@type': 'Thing',
          name: 'US GPA System',
          description: 'American 4.0 Grade Point Average calculation system',
        },
        {
          '@type': 'Thing',
          name: 'Academic Grading',
          description: 'Letter grade to GPA conversion in United States',
        },
      ],
    },

    // 4. FAQ Schema
    {
      '@type': 'FAQPage',
      '@id': 'https://calculatecgpa.com/grade-calculator/us#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: "What's a good GPA in the US?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: '2.0-2.5: Below average, might limit college options. 2.5-3.0: Average, gets you into most state schools. 3.0-3.5: Good, opens doors to better colleges. 3.5+: Excellent, competitive for top universities.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is a 3.0 GPA good?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "A 3.0 GPA is decent and meets most college admission requirements. It shows you're a solid B student, which is perfectly respectable.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can I get into college with a 2.5 GPA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Many colleges accept students with 2.5 GPAs, especially community colleges and some state schools. You might need strong test scores or extracurriculars to help your application.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often should I calculate my GPA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Check your GPA at the end of each semester to track your progress. If you're applying to colleges, calculate it after each grading period to stay on top of your goals.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do colleges look at weighted or unweighted GPA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most colleges look at both. Unweighted GPA shows your actual grades, while weighted GPA shows you challenged yourself with harder courses like AP or honors classes.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I have pass/fail courses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Pass/fail courses usually don't count toward your GPA calculation since they don't have letter grades. Only include courses with actual letter grades in your GPA.",
          },
        },
      ],
    },

    // 5. HowTo Schema for Using the Calculator
    {
      '@type': 'HowTo',
      '@id': 'https://calculatecgpa.com/grade-calculator/us#howto',
      name: 'How to Calculate US GPA Using Our Calculator',
      description:
        'Step-by-step guide to calculate your US Grade Point Average using the 4.0 scale with our free online calculator',
      image: 'https://calculatecgpa.com/images/us-gpa-calculator-guide.jpg', // Add your image URL
      totalTime: 'PT3M',
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'USD',
        value: '0',
      },
      supply: [
        {
          '@type': 'HowToSupply',
          name: 'Course Names (Optional)',
        },
        {
          '@type': 'HowToSupply',
          name: 'Credit Hours for each course',
        },
        {
          '@type': 'HowToSupply',
          name: 'Letter Grades (A-F)',
        },
      ],
      step: [
        {
          '@type': 'HowToStep',
          name: 'Enter Your Course Names (Optional)',
          text: "Type in each class you've taken (for example, 'Biology,' 'English,' or 'AP History'). This step is optional, so feel free to skip it if you prefer.",
          url: 'https://calculatecgpa.com/grade-calculator/us#step1',
        },
        {
          '@type': 'HowToStep',
          name: 'Add Your Credits',
          text: "Enter how many credit hours each course is worth. If you're not sure what credits are or where to find them, see the section below.",
          url: 'https://calculatecgpa.com/grade-calculator/us#step2',
        },
        {
          '@type': 'HowToStep',
          name: 'Select Your Grades',
          text: "Pick your letter grade for each course from the dropdown menu. If you're unsure what a grade means or where to find it, read the section below.",
          url: 'https://calculatecgpa.com/grade-calculator/us#step3',
        },
      ],
    },

    // 6. DefinedTerm Schema for US GPA Scale
    {
      '@type': 'DefinedTerm',
      '@id': 'https://calculatecgpa.com/grade-calculator/us#gpa-scale',
      name: 'US 4.0 GPA Scale',
      description:
        'The American grading system that converts letter grades to numerical values on a 4.0 scale',
      termCode: 'US-4.0-GPA',
      inDefinedTermSet: {
        '@type': 'DefinedTermSet',
        name: 'US Academic Grading Systems',
      },
    },

    // 7. BreadcrumbList Schema
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://calculatecgpa.com/grade-calculator/us#breadcrumb',
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
          name: 'US GPA Calculator',
          item: 'https://calculatecgpa.com/grade-calculator/us',
        },
      ],
    },
  ],
};

export default function USGPACalculatorSchema() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaUSGPACalculator),
        }}
      />
    </>
  );
}
