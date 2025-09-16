const schemaUKDegreeCalculator = {
  '@context': 'https://schema.org',
  '@graph': [
    // 1. WebApplication Schema for the UK Degree Calculator
    {
      '@type': 'WebApplication',
      '@id': 'https://calculatecgpa.com/grade-calculator/uk#webapp',
      name: 'UK Degree Classification Calculator',
      url: 'https://calculatecgpa.com/grade-calculator/uk',
      description:
        'Free online UK degree classification calculator. Calculate your First Class, 2:1, 2:2, or Third Class honours classification using percentage marks and credit values.',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires JavaScript',
      softwareVersion: '1.0',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'GBP',
      },
      featureList: [
        'UK honours degree classification calculation',
        'Credit-weighted percentage calculations',
        'First Class, 2:1, 2:2, Third Class classifications',
        'Module mark tracking with credits',
        'Instant classification results',
        'Target grade forecasting',
      ],
      audience: {
        '@type': 'EducationalAudience',
        educationalRole: 'student',
        geographicArea: {
          '@type': 'Country',
          name: 'United Kingdom',
        },
      },
      inLanguage: 'en-GB',
      isAccessibleForFree: true,
      creator: {
        '@type': 'Organization',
        '@id': 'https://calculatecgpa.com#organization',
      },
      mainEntity: {
        '@type': 'Thing',
        name: 'UK Degree Classification System',
        description:
          'British honours degree classification based on percentage marks',
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
      areaServed: ['United Kingdom'],
      serviceType: 'Educational Tools',
    },

    // 3. Article Schema for Educational Content
    {
      '@type': 'Article',
      '@id': 'https://calculatecgpa.com/grade-calculator/uk#article',
      headline:
        'Complete Guide to UK Degree Classifications: Understanding First Class, 2:1, 2:2, and Third Class Honours',
      description:
        'Comprehensive guide to UK degree classification system, including percentage requirements, credit weighting, and tips for achieving your target classification.',
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
        '@id': 'https://calculatecgpa.com/grade-calculator/uk',
      },
      articleSection: 'Education',
      keywords: [
        'UK Degree Classification',
        'First Class Honours',
        '2:1',
        '2:2',
        'Third Class',
        'British University',
        'Honours Degree',
      ],
      inLanguage: 'en-GB',
      isAccessibleForFree: true,
      about: [
        {
          '@type': 'Thing',
          name: 'UK Degree Classification System',
          description:
            'British honours degree classification based on weighted percentage marks',
        },
        {
          '@type': 'Thing',
          name: 'Honours Degree',
          description: 'UK undergraduate degree classification system',
        },
      ],
    },

    // 4. FAQ Schema
    {
      '@type': 'FAQPage',
      '@id': 'https://calculatecgpa.com/grade-calculator/uk#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: "What's considered a good US GPA for UK students?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For international applications, aim for 3.0+ (equivalent to a 2:2 or better). Top US universities prefer 3.5+ GPAs, which means you need at least a 2:1 in the UK system.',
          },
        },
        {
          '@type': 'Question',
          name: "What's the difference between a 2:1 and 2:2?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "A 2:1 (60-69%) is an Upper Second Class degree, while a 2:2 (50-59%) is a Lower Second. Most graduate jobs and Master's programmes prefer a 2:1, but a 2:2 still opens many career doors.",
          },
        },
        {
          '@type': 'Question',
          name: 'Is a 2:1 considered good in the UK?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! A 2:1 is considered a very good degree classification. It shows solid academic achievement and meets the entry requirements for most competitive graduate programmes and jobs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I still get a good job with a 2:2?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely! While some graduate schemes have 2:1 requirements, many employers value skills and experience alongside your degree. Focus on internships, volunteering, and relevant experience to strengthen your CV.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do all years count equally toward my degree classification?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "No, typically your first year doesn't count (as long as you pass). Most universities weight second year as 30-40% and third year as 60-70% of your final classification. Check your student handbook for your uni's specific weighting.",
          },
        },
        {
          '@type': 'Question',
          name: "What happens if I'm on a borderline between classifications?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Many universities have borderline policies. If you're close to the next classification (e.g., 68% when you need 70% for a First), they may consider factors like your final year performance or overall academic trend.",
          },
        },
        {
          '@type': 'Question',
          name: 'What if I have resit marks - how do these affect my classification?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Resit marks are usually capped at the pass mark (typically 40%) for classification purposes, even if you score higher. This means resitting can help you progress but may limit your final classification. Check your uni's specific resit policy.",
          },
        },
        {
          '@type': 'Question',
          name: 'How often should I check my degree classification progress?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Check after each semester results are released. This helps you stay on track and adjust your study approach if needed. If you're aiming for a specific classification, regular monitoring is essential.",
          },
        },
      ],
    },

    // 5. HowTo Schema for Using the Calculator
    {
      '@type': 'HowTo',
      '@id': 'https://calculatecgpa.com/grade-calculator/uk#howto',
      name: 'How to Calculate UK Degree Classification Using Our Calculator',
      description:
        'Step-by-step guide to calculate your UK degree classification using percentage marks and credit values with our free online calculator',
      image: 'https://calculatecgpa.com/images/uk-degree-calculator-guide.jpg', // Add your image URL
      totalTime: 'PT3M',
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'GBP',
        value: '0',
      },
      supply: [
        {
          '@type': 'HowToSupply',
          name: 'Module Names (Optional)',
        },
        {
          '@type': 'HowToSupply',
          name: 'Credit Values for each module',
        },
        {
          '@type': 'HowToSupply',
          name: 'Percentage Marks (0-100%)',
        },
      ],
      step: [
        {
          '@type': 'HowToStep',
          name: 'Enter Your Module Names (Optional)',
          text: "Type in each module you've completed (like 'British History,' or 'Advanced Mathematics'). This step is optional but helps you keep track of your progress.",
          url: 'https://calculatecgpa.com/grade-calculator/uk#step1',
        },
        {
          '@type': 'HowToStep',
          name: 'Add Your Credit Values',
          text: "Enter the credit value for each module. Most undergraduate modules are 15 or 20 credits, but check your course handbook if you're unsure.",
          url: 'https://calculatecgpa.com/grade-calculator/uk#step2',
        },
        {
          '@type': 'HowToStep',
          name: 'Enter Your Marks',
          text: 'Enter your percentage mark for each module. You can find it on your student portal or transcript.',
          url: 'https://calculatecgpa.com/grade-calculator/uk#step3',
        },
      ],
    },

    // 6. DefinedTermSet for UK Degree Classifications
    {
      '@type': 'DefinedTermSet',
      '@id':
        'https://calculatecgpa.com/grade-calculator/uk#degree-classifications',
      name: 'UK Degree Classifications',
      description:
        'British honours degree classification system based on percentage marks',
      hasDefinedTerm: [
        {
          '@type': 'DefinedTerm',
          name: 'First Class Honours',
          termCode: '1st',
          description: 'Excellent academic performance, 70%+ average',
        },
        {
          '@type': 'DefinedTerm',
          name: 'Upper Second Class Honours',
          termCode: '2:1',
          description: 'Good standard of work, 60-69% average',
        },
        {
          '@type': 'DefinedTerm',
          name: 'Lower Second Class Honours',
          termCode: '2:2',
          description: 'Satisfactory standard, 50-59% average',
        },
        {
          '@type': 'DefinedTerm',
          name: 'Third Class Honours',
          termCode: '3rd',
          description: 'Pass standard, 40-49% average',
        },
      ],
    },

    // 7. BreadcrumbList Schema
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://calculatecgpa.com/grade-calculator/uk#breadcrumb',
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
          name: 'UK Degree Calculator',
          item: 'https://calculatecgpa.com/grade-calculator/uk',
        },
      ],
    },
  ],
};

export default function UKDegreeCalculatorSchema() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaUKDegreeCalculator),
        }}
      />
    </>
  );
}
