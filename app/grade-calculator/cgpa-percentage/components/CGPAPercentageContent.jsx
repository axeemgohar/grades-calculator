import {
  BookOpen,
  CircleQuestionMark,
  Calculator,
  Globe,
  Zap,
  Sun,
} from 'lucide-react';

const CGPAPercentageContent = () => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Main Introduction */}
      <section className="mb-8 shadow-xs border border-gray-200 rounded-lg p-6 md:p-8">
        <div className="bg-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Use the CGPA & Percentage Calculator
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            This tool allows you to convert your CGPA to percentage or
            percentage to CGPA instantly. Our free conversion tool works for all
            grading scales used worldwide, whether you're applying to
            universities, scholarships, or just need to understand your grades
            better.
          </p>
        </div>

        {/* How to Use Section */}
        <div className="bg-white">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Calculator className="text-indigo-600 mr-3 shrink-0" />3 Simple
            Steps to Convert Your Grades
          </h2>
          <p className="text-gray-600 mb-6">
            Get accurate grade conversion in seconds with our easy-to-use
            calculator.
          </p>

          <ol className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Choose Conversion Type
                </h3>
                <p className="text-gray-600">
                  Select whether you want to convert CGPA to Percentage or
                  Percentage to CGPA from the dropdown menu.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Enter Your CGPA or Percentage
                </h3>
                <p className="text-gray-600">
                  Input your current CGPA or percentage for conversion. Ensure
                  you enter valid values.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Select Grading Scale
                </h3>
                <p className="text-gray-600">
                  Choose your university's grading scale (4.0, 5.0, 7.0, 10.0,
                  12.0, 20.0) or select "Custom Scale" if your institution uses
                  a different maximum grade point.
                </p>
              </div>
            </li>
          </ol>
        </div>
        <p className="text-gray-600 leading-relaxed mt-4 italic">
          This calculator works for students from India, USA, Canada, Australia,
          Pakistan, Bangladesh, and other countries worldwide.
        </p>
      </section>
      {/* Grading Scales Section */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Globe className="text-indigo-600 mr-3 shrink-0" />
          Common Grading Scales by Country
        </h2>
        <p className="text-gray-600 mb-6">
          Different countries use different grading scales. Choose the one that
          matches your university system:
        </p>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-gray-900 mb-3">
            Popular Grading Scales Worldwide
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 gap-x-6">
            <div className="flex justify-between">
              <span className="text-gray-600">United States:</span>
              <span className="font-medium text-gray-900">4.0 Scale</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">India:</span>
              <span className="font-medium text-gray-900">10.0 Scale</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Canada:</span>
              <span className="font-medium text-gray-900">4.0 / 4.3 Scale</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Australia:</span>
              <span className="font-medium text-gray-900">7.0 Scale</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Pakistan:</span>
              <span className="font-medium text-gray-900">4.0 Scale</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Bangladesh:</span>
              <span className="font-medium text-gray-900">4.0 / 5.0 Scale</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Germany:</span>
              <span className="font-medium text-gray-900">5.0 Scale</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Malaysia:</span>
              <span className="font-medium text-gray-900">4.0 Scale</span>
            </div>
          </div>
        </div>

        <aside className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-blue-800">
            <span className="font-semibold">Don't see your scale?</span> Use our
            "Custom Scale" option and enter your university's maximum grade
            point.
          </p>
        </aside>
      </section>
      {/* Mobile Version */}
      <div className="lg:hidden mb-8">
        <div id="ezoic-pub-ad-placeholder-117"></div>
      </div>
      {/* Desktop Version */}
      <div className="max-lg:hidden mb-8">
        <div id="ezoic-pub-ad-placeholder-120"></div>
      </div>
      {/* Why Convert Grades */}
      <section className="bg-indigo-50 rounded-lg border border-indigo-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Zap className="text-indigo-600 mr-3 shrink-0" />
          Why Do You Need Grade Conversion?
        </h2>
        <p className="text-gray-600 mb-6">
          Converting between CGPA and percentage is essential for various
          academic and professional opportunities:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-800 mb-2">
              University Applications
            </h3>
            <p className="text-gray-600 text-sm">
              International universities often require specific grade formats
              for admission
            </p>
          </article>
          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-800 mb-2">
              Scholarship Applications
            </h3>
            <p className="text-gray-600 text-sm">
              Merit-based scholarships may require percentage or CGPA thresholds
            </p>
          </article>
          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-800 mb-2">Study Abroad</h3>
            <p className="text-gray-600 text-sm">
              Different countries use different grading systems for evaluation
            </p>
          </article>
          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-800 mb-2">
              Job Applications
            </h3>
            <p className="text-gray-600 text-sm">
              Employers may request grades in specific formats for recruitment
            </p>
          </article>
        </div>
      </section>
      {/* Common Conversions */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <BookOpen className="text-indigo-600 mr-3 shrink-0" />
          Popular Grade Conversions
        </h2>
        <p className="text-gray-600 mb-6">
          Here are some commonly searched grade conversions to give you an idea:
        </p>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">
              Indian System (10.0 Scale to Percentage)
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-600">8.5 CGPA =</span>
                <span className="font-medium text-gray-900">80.75%</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">7.5 CGPA =</span>
                <span className="font-medium text-gray-900">71.25%</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">9.0 CGPA =</span>
                <span className="font-medium text-gray-900">85.5%</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">
              US System (4.0 Scale to Percentage)
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-600">3.7 GPA =</span>
                <span className="font-medium text-gray-900">92.5%</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">3.5 GPA =</span>
                <span className="font-medium text-gray-900">87.5%</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">3.0 GPA =</span>
                <span className="font-medium text-gray-900">75%</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Mobile Version */}
      <div className="lg:hidden mb-8">
        <div id="ezoic-pub-ad-placeholder-118"></div>
      </div>
      {/* Desktop Version */}
      <div className="max-lg:hidden mb-8">
        <div id="ezoic-pub-ad-placeholder-121"></div>
      </div>
      {/* Tips Section */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Sun className="text-indigo-600 mr-3 shrink-0" />
          Tips for Using Grade Conversions
        </h2>

        <ul className="space-y-3">
          <li className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-2 h-2 bg-purple-600 rounded-full mr-4 shrink-0"></div>
            <p className="text-gray-700">
              <span className="font-semibold">Double-check your scale</span> –
              Make sure you're using the correct grading scale for your
              institution
            </p>
          </li>
          <li className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-2 h-2 bg-purple-600 rounded-full mr-4 shrink-0"></div>
            <p className="text-gray-700">
              <span className="font-semibold">Keep original transcripts</span> –
              Always submit official documents alongside converted grades
            </p>
          </li>
          <li className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-2 h-2 bg-purple-600 rounded-full mr-4 shrink-0"></div>
            <p className="text-gray-700">
              <span className="font-semibold">Verify with institutions</span> –
              Some universities have their own conversion formulas
            </p>
          </li>
          <li className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-2 h-2 bg-purple-600 rounded-full mr-4 shrink-0"></div>
            <p className="text-gray-700">
              <span className="font-semibold">Round appropriately</span> – Check
              if applications require rounded or exact decimal values
            </p>
          </li>
        </ul>
      </section>
      {/* FAQ Section */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <CircleQuestionMark className="text-indigo-600 mr-3 shrink-0" />
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              Is the conversion accurate for all universities?
            </dt>
            <dd className="text-gray-600">
              Our calculator uses standard conversion formulas, but some
              institutions have specific methods. Always verify with your target
              university for official requirements.
            </dd>
          </dl>

          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              Can I convert between different grading scales?
            </dt>
            <dd className="text-gray-600">
              Yes! Our calculator supports all major scales (4.0, 5.0, 7.0,
              10.0, 12.0, 20.0) and custom scales. Just select the appropriate
              scale from the dropdown menu.
            </dd>
          </dl>

          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              What if my university uses a custom grading scale?
            </dt>
            <dd className="text-gray-600">
              Select "Custom Scale" from the dropdown and enter your
              university's maximum grade point. The calculator will adjust the
              conversion accordingly.
            </dd>
          </dl>

          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              Do I need to convert grades for international applications?
            </dt>
            <dd className="text-gray-600">
              Many international universities require grade conversion to
              understand your academic performance. Some may also require
              official credential evaluation services.
            </dd>
          </dl>

          <dl>
            <dt className="font-semibold text-gray-900 mb-2">
              Should I round my converted grades?
            </dt>
            <dd className="text-gray-600">
              Check the application requirements. Some forms need exact decimal
              values while others require rounded numbers. When in doubt, use
              the exact calculated value.
            </dd>
          </dl>
        </div>
      </section>
      {/* Mobile Version */}
      <div className="lg:hidden mb-8">
        <div id="ezoic-pub-ad-placeholder-119"></div>
      </div>
      {/* Desktop Version */}
      <div className="max-lg:hidden mb-8">
        <div id="ezoic-pub-ad-placeholder-122"></div>
      </div>
      {/* Call to Action */}
      <div className="text-center p-6 bg-primary rounded-lg text-white">
        <h3 className="text-xl font-bold mb-2">
          Ready to Convert Your Grades?
        </h3>
        <p className="text-indigo-50">
          Use our calculator above to convert between CGPA and percentage
          instantly. Perfect for applications, scholarships, and academic
          planning!
        </p>
      </div>
    </div>
  );
};

export default CGPAPercentageContent;
