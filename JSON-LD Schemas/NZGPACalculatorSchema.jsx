const schemaNZGPACalculator = {
  '@context': 'https://schema.org',
  '@graph': [
    // 1. WebApplication Schema for the NZ GPA Calculator
    {
      '@type': 'WebApplication',
      '@id': 'https://calculatecgpa.com/grade-calculator/nz#webapp', // Update URL to NZ version
      name: 'New Zealand GPA Calculator',
      url: 'https://calculatecgpa.com/grade-calculator/nz', // Update URL to NZ version
      description:
        'Free online New Zealand GPA calculator using the official 9.0 scale. Calculate your Grade Point Average instantly for NZ universities based on weighted points.',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires JavaScript',
      softwareVersion: '1.0',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'NZD', // Changed to NZD
      },
      featureList: [
        'New Zealand 9.0 GPA scale calculation',
        'Weighted GPA calculations based on Points', // Changed from Credit-weighted to Points
        'Support for A+ to C- grade range',
        'Honours classification forecasting', // Relevant for NZ students
        'Instant results with detailed breakdown',
        'Compatible with all NZ Universities (e.g., Auckland, Otago, Victoria)', // NZ-specific relevance
      ],
      audience: {
        '@type': 'EducationalAudience',
        educationalRole: 'student',
        geographicArea: {
          '@type': 'Country',
          name: 'New Zealand', // Changed to New Zealand
        },
      },
      inLanguage: 'en-NZ', // Changed to en-NZ for New Zealand English
      isAccessibleForFree: true,
      creator: {
        '@type': 'Organization',
        '@id': 'https://calculatecgpa.com#organization',
      },
      mainEntity: {
        '@type': 'Thing',
        name: 'NZ 9.0 GPA Scale',
        description:
          'New Zealand 9.0 Grade Point Average system used in universities.',
      },
    },

    // 2. Organization Schema (Retains global brand info but changes areaServed)
    {
      '@type': 'Organization',
      '@id': 'https://calculatecgpa.com#organization',
      name: 'Gradian',
      url: 'https://calculatecgpa.com',
      description:
        'Educational platform providing free grade calculation tools for students worldwide',
      areaServed: ['New Zealand'], // Added NZ focus
      serviceType: 'Educational Tools',
    },

    // 3. Article Schema for Educational Content
    {
      '@type': 'Article',
      '@id': 'https://calculatecgpa.com/grade-calculator/nz#article',
      headline:
        'Your Kiwi Guide to GPA: Understanding the NZ 9.0 Scale and University Points', // Updated headline
      description:
        'A comprehensive guide for New Zealand students on how to calculate their weighted GPA on the 9.0 scale, focusing on university Points and Honours requirements.', // Updated description
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
        '@id': 'https://calculatecgpa.com/grade-calculator/nz',
      },
      articleSection: 'Education',
      keywords: [
        'NZ GPA',
        'New Zealand GPA',
        '9.0 Scale',
        'University Points',
        'NZ Honours Classification',
        'Kiwi Grading System',
      ],
      inLanguage: 'en-NZ',
      isAccessibleForFree: true,
      about: [
        {
          '@type': 'Thing',
          name: 'New Zealand University Grading System',
          description: 'NZ 9.0 Grade Point Average calculation system',
        },
        {
          '@type': 'Thing',
          name: 'Points (Academic Credit)',
          description:
            'Credit system used by New Zealand universities to weight courses.',
        },
      ],
    },

    // 4. FAQ Schema (Updated Q&A for NZ context)
    {
      '@type': 'FAQPage',
      '@id': 'https://calculatecgpa.com/grade-calculator/nz#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What NZ GPA do I need for First Class Honours?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This varies slightly by university, but you generally need a GPA of 7.0 or 8.0 (an A- or A average) and above across your final year or best papers to be considered for First Class Honours.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is a 5.0 GPA good in New Zealand?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A 5.0 GPA is a solid B average and is considered a satisfactory passing grade. For competitive post-graduate programs like Masters, you should aim for a GPA of 6.0 (B+) or better in your relevant papers.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are Points in the New Zealand university system?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Points are the academic credits assigned to a paper (course) that reflect its workload. Most papers are 15 Points. Your GPA is calculated using a weighted average based on these Points.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does the 9.0 scale work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "The 9.0 scale assigns a Grade Point Value (GPV) from 9.0 (for an A+) down to 0.0 (for a Fail). The average of these GPVs, weighted by the paper's Points, gives you your final GPA.",
          },
        },
      ],
    },

    // 5. HowTo Schema for Using the Calculator (Updated steps for NZ terms)
    {
      '@type': 'HowTo',
      '@id': 'https://calculatecgpa.com/grade-calculator/nz#howto',
      name: 'How to Calculate Your NZ GPA Using Our Calculator',
      description:
        'Step-by-step guide to calculate your New Zealand Grade Point Average on the 9.0 scale with our free online tool.',
      image: 'https://calculatecgpa.com/images/nz-gpa-calculator-guide.jpg', // Update image URL for NZ relevance
      totalTime: 'PT3M',
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'NZD',
        value: '0',
      },
      supply: [
        {
          '@type': 'HowToSupply',
          name: 'Paper Names (Optional)',
        },
        {
          '@type': 'HowToSupply',
          name: 'Points (Credits) for each paper', // Changed from Credit Hours to Points
        },
        {
          '@type': 'HowToSupply',
          name: 'Letter Grades (A+ to F)',
        },
      ],
      step: [
        {
          '@type': 'HowToStep',
          name: 'Enter Your Paper Names (Optional)', // Changed Course to Paper
          text: "Type in the name of your university paper (e.g., 'ACCT 101'). This step is optional.",
          url: 'https://calculatecgpa.com/grade-calculator/nz#step1',
        },
        {
          '@type': 'HowToStep',
          name: 'Input Your Points', // Changed Add Your Credits to Input Your Points
          text: 'Enter the Points value for each paper (most are 15 Points). This is crucial as it determines the weighting of the grade.',
          url: 'https://calculatecgpa.com/grade-calculator/nz#step2',
        },
        {
          '@type': 'HowToStep',
          name: 'Select Your Grades',
          text: 'Pick your final letter grade for each paper from the dropdown menu, based on your official academic transcript.',
          url: 'https://calculatecgpa.com/grade-calculator/nz#step3',
        },
      ],
    },

    // 6. DefinedTerm Schema for NZ GPA Scale
    {
      '@type': 'DefinedTerm',
      '@id': 'https://calculatecgpa.com/grade-calculator/nz#gpa-scale',
      name: 'New Zealand 9.0 GPA Scale',
      description:
        'The standard grading system used by New Zealand universities that converts letter grades to numerical values on a 9.0 scale.',
      termCode: 'NZ-9.0-GPA',
      inDefinedTermSet: {
        '@type': 'DefinedTermSet',
        name: 'New Zealand Academic Grading Systems',
      },
    },

    // 7. BreadcrumbList Schema
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://calculatecgpa.com/grade-calculator/nz#breadcrumb',
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
          name: 'NZ GPA Calculator', // Changed Breadcrumb name
          item: 'https://calculatecgpa.com/grade-calculator/nz', // Changed Breadcrumb URL
        },
      ],
    },
  ],
};

export default function NZGPACalculatorSchema() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaNZGPACalculator),
        }}
      />
    </>
  );
}
