import {
  BookOpen,
  CircleQuestionMark,
  Calculator,
  Globe,
  Zap,
  Sun,
} from 'lucide-react';

const CGPAtoGPAContent = () => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Main Introduction */}
      <section className="mb-8 shadow-xs border border-gray-200 rounded-lg p-6 md:p-8">
        <div className="bg-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Convert Your CGPA to Any GPA Scale
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Planning to study abroad? Our CGPA to GPA converter helps you
            convert your grades to the GPA scale used by universities worldwide.
            Whether you're applying to the USA, Australia, Canada, or Europe,
            get accurate conversions in seconds for any grading scale.
          </p>
        </div>

        {/* How to Use Section */}
        <div className="bg-white">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Calculator className="text-indigo-600 mr-3 shrink-0" />3 Simple
            Steps to Convert Your GPA Scale
          </h2>
          <p className="text-gray-600 mb-6">
            Converting between different GPA scales is quick and easy with our
            flexible converter.
          </p>

          <ol className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Enter Your Current CGPA/GPA
                </h3>
                <p className="text-gray-600">
                  Input your current grade point average. Make sure it's within
                  your grading scale's maximum value.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Select Your Current Grading Scale
                </h3>
                <p className="text-gray-600">
                  Choose the grading scale your institution uses (4.0, 5.0, 7.0,
                  10.0, 12.0, 20.0) or enter a custom scale if yours is
                  different.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Choose Target Scale
                </h3>
                <p className="text-gray-600">
                  Select the GPA scale you need to convert to based on your
                  target country or university requirements.
                </p>
              </div>
            </li>
          </ol>
        </div>
        <p className="text-gray-600 leading-relaxed mt-4 italic">
          This converter works for students from India, Pakistan, Bangladesh,
          Germany, France, Australia, and all countries applying to universities
          abroad.
        </p>
      </section>
      {/* Grading Scales Section */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Globe className="text-indigo-600 mr-3 shrink-0" />
          Understanding Different GPA Scales Worldwide
        </h2>
        <p className="text-gray-600 mb-6">
          Different countries use different grading scales. Here's a breakdown
          of the most common systems you'll encounter:
        </p>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-gray-900 mb-3">
            GPA Scales by Country and Region
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 gap-x-6">
            <div className="flex justify-between">
              <span className="text-gray-600">USA & Canada:</span>
              <span className="font-medium text-gray-900">4.0 Scale</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">India</span>
              <span className="font-medium text-gray-900">10.0 Scale</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Australia:</span>
              <span className="font-medium text-gray-900">7.0 Scale</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Germany & Austria:</span>
              <span className="font-medium text-gray-900">5.0 Scale</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">France & Portugal:</span>
              <span className="font-medium text-gray-900">20.0 Scale</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Denmark:</span>
              <span className="font-medium text-gray-900">12.0 Scale</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Singapore:</span>
              <span className="font-medium text-gray-900">5.0 Scale</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Pakistan:</span>
              <span className="font-medium text-gray-900">4.0 Scale</span>
            </div>
          </div>
        </div>

        <aside className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-blue-800">
            <span className="font-semibold">Using a different scale?</span> No
            problem! Select "Custom Scale" and enter your university's maximum
            grade point to get accurate conversions.
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
          Why Do International Students Need GPA Conversion?
        </h2>
        <p className="text-gray-600 mb-6">
          Converting your CGPA to different GPA scales is crucial when applying
          to universities abroad. Here's why:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-800 mb-2">
              US University Applications
            </h3>
            <p className="text-gray-600 text-sm">
              American universities require grades on a 4.0 scale for admission
              consideration
            </p>
          </article>
          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-800 mb-2">
              Australian Universities
            </h3>
            <p className="text-gray-600 text-sm">
              Australian institutions use a 7.0 GPA scale for evaluating
              international students
            </p>
          </article>
          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-800 mb-2">
              European Programs
            </h3>
            <p className="text-gray-600 text-sm">
              European universities use various scales (5.0, 20.0) depending on
              the country
            </p>
          </article>
          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-800 mb-2">
              Scholarship Eligibility
            </h3>
            <p className="text-gray-600 text-sm">
              International scholarships often have minimum GPA requirements on
              specific scales
            </p>
          </article>
        </div>
      </section>
      {/* Common Conversions */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <BookOpen className="text-indigo-600 mr-3 shrink-0" />
          Popular GPA Scale Conversions
        </h2>
        <p className="text-gray-600 mb-6">
          Here are some of the most common GPA conversions students search for:
        </p>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">
              10.0 Scale to 4.0 Scale (India to USA)
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-600">8.5 CGPA =</span>
                <span className="font-medium text-gray-900">3.4 GPA</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">9.0 CGPA =</span>
                <span className="font-medium text-gray-900">3.6 GPA</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">7.5 CGPA =</span>
                <span className="font-medium text-gray-900">3.0 GPA</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">
              5.0 Scale to 4.0 Scale (Germany to USA)
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-600">4.0 GPA =</span>
                <span className="font-medium text-gray-900">3.2 GPA</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">3.5 GPA =</span>
                <span className="font-medium text-gray-900">2.8 GPA</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">4.5 GPA =</span>
                <span className="font-medium text-gray-900">3.6 GPA</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">
              4.0 Scale to 7.0 Scale (USA to Australia)
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-600">3.5 GPA =</span>
                <span className="font-medium text-gray-900">6.13 GPA</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">3.0 GPA =</span>
                <span className="font-medium text-gray-900">5.25 GPA</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">3.8 GPA =</span>
                <span className="font-medium text-gray-900">6.65 GPA</span>
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
          Important Tips for GPA Conversion
        </h2>

        <ul className="space-y-3">
          <li className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-2 h-2 bg-purple-600 rounded-full mr-4 shrink-0"></div>
            <p className="text-gray-700">
              <span className="font-semibold">
                Check university requirements
              </span>{' '}
              – Some universities have their own conversion formulas or use
              credential evaluation services like WES
            </p>
          </li>
          <li className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-2 h-2 bg-purple-600 rounded-full mr-4 shrink-0"></div>
            <p className="text-gray-700">
              <span className="font-semibold">Use this as a guide</span> – These
              conversions are estimates. Always confirm with your target
              institution
            </p>
          </li>
          <li className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-2 h-2 bg-purple-600 rounded-full mr-4 shrink-0"></div>
            <p className="text-gray-700">
              <span className="font-semibold">Submit official transcripts</span>{' '}
              – Converted GPAs should accompany your original academic records
            </p>
          </li>
          <li className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-2 h-2 bg-purple-600 rounded-full mr-4 shrink-0"></div>
            <p className="text-gray-700">
              <span className="font-semibold">Consider WES evaluation</span> –
              For official applications, many universities require professional
              credential evaluation
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
              How accurate is this GPA conversion?
            </dt>
            <dd className="text-gray-600">
              Our calculator uses proportional conversion formulas that are
              widely accepted. However, some universities may have specific
              conversion tables, so always verify with your target institution
              for official requirements.
            </dd>
          </dl>

          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              Can I convert from any scale to any scale?
            </dt>
            <dd className="text-gray-600">
              Yes! Our flexible converter supports conversions between all major
              GPA scales (4.0, 5.0, 7.0, 10.0, 12.0, 20.0) and even custom
              scales. Just select your current scale and target scale.
            </dd>
          </dl>

          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              Do US universities accept converted GPAs?
            </dt>
            <dd className="text-gray-600">
              Most US universities evaluate international transcripts through
              credential evaluation services like WES, ECE, or their own
              internal systems. Use this tool for preliminary estimates, but
              official conversions may differ.
            </dd>
          </dl>

          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              What if my university uses a unique grading scale?
            </dt>
            <dd className="text-gray-600">
              Select "Custom Scale" from both dropdowns and enter your
              institution's maximum grade points. Our calculator will handle the
              conversion using the proportional formula.
            </dd>
          </dl>

          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              Is a 3.0 GPA on a 4.0 scale good for international admissions?
            </dt>
            <dd className="text-gray-600">
              A 3.0 GPA (equivalent to a B average) is generally considered
              competitive for many programs, but requirements vary. Top-tier
              universities often look for 3.5+ GPA, while many good schools
              accept students with 3.0 or above.
            </dd>
          </dl>

          <dl>
            <dt className="font-semibold text-gray-900 mb-2">
              Should I round my converted GPA?
            </dt>
            <dd className="text-gray-600">
              Check your application instructions. Some forms require exact
              decimal values (e.g., 3.47) while others ask you to round to one
              decimal place (e.g., 3.5). When in doubt, use the exact calculated
              value.
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
        <h3 className="text-xl font-bold mb-2">Ready to Convert Your GPA?</h3>
        <p className="text-indigo-50">
          Use our calculator above to convert between any GPA scales instantly.
          Perfect for study abroad applications, university admissions, and
          international opportunities!
        </p>
      </div>
    </div>
  );
};

export default CGPAtoGPAContent;
