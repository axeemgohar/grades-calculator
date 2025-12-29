import {
  BookOpen,
  ChartColumnBig,
  CircleQuestionMark,
  Clipboard,
  Search,
  Sun,
  Zap,
} from 'lucide-react';

const UKContent = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <section className=" mb-8 shadow-xs border border-gray-200 rounded-lg p-6 md:p-8">
        {/* <!-- Main Heading --> */}
        <div className="bg-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Use the UK Degree Classification Calculator
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            This calculator helps UK students work out their degree
            classification and estimate what marks they need in future modules
            to achieve their target grade. Whether you're aiming for a First
            Class Honours or want to secure a 2:1, our step-by-step guide makes
            it simple to track your academic progress.
          </p>
        </div>

        {/* <!-- How to Use Section --> */}
        <div className="bg-white ">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Clipboard className="text-indigo-600 mr-3 shrink-0" />3 Simple
            Steps to Calculate Your Degree Classification
          </h2>
          <p className="text-gray-600 mb-6">
            Getting your degree classification is straightforward:
          </p>

          <ol className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Enter Your Module Names (Optional)
                </h3>
                <p className="text-gray-600">
                  Type in each module you've completed (like "British History,"
                  or "Advanced Mathematics"). This step is optional but helps
                  you keep track of your progress.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Add Your Credit Values
                </h3>
                <p className="text-gray-600">
                  Enter the credit value for each module. Most undergraduate
                  modules are 15 or 20 credits, but check your course handbook
                  if you're unsure.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Enter Your Marks
                </h3>
                <p className="text-gray-600">
                  Enter your percentage mark for each module. You can find it on
                  your student portal or transcript.
                </p>
              </div>
            </li>
          </ol>

          <p className="text-gray-600 mt-6 italic">
            Click "Calculate Classification" and our tool will instantly show
            you your current degree classification based on your marks and
            credits.
          </p>
        </div>
      </section>
      {/* <!-- GPA Scale Section --> */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <ChartColumnBig className="text-indigo-600 mr-3 shrink-0" />
          Understanding UK Degree Classifications
        </h2>
        <p className="text-gray-600 mb-6">
          UK universities use a classification system based on your overall
          percentage average:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-green-800">
                First Class Honours
              </span>
              <span className="text-green-700 font-bold">70%+</span>
            </div>
            <p className="text-green-600 text-sm mt-1">Excellent</p>
            <p className="text-green-700 font-medium mt-1">1st</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-blue-800">
                Upper Second Class
              </span>
              <span className="text-blue-700 font-bold">60-69%</span>
            </div>
            <p className="text-blue-600 text-sm mt-1">Good standard of work</p>
            <p className="text-blue-700 font-medium mt-1">2:1</p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-yellow-800">
                Lower Second Class
              </span>
              <span className="text-yellow-700 font-bold">50-59%</span>
            </div>
            <p className="text-yellow-600 text-sm mt-1">
              Satisfactory standard
            </p>
            <p className="text-yellow-700 font-medium mt-1">2:2</p>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-orange-800">
                Third Class Honours
              </span>
              <span className="text-orange-700 font-bold">40-49%</span>
            </div>
            <p className="text-orange-600 text-sm mt-1">Pass standard</p>
            <p className="text-orange-700 font-medium mt-1">3rd</p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-red-800">
                Ordinary Degree / Fail
              </span>
              <span className="text-red-700 font-bold">Below 40%</span>
            </div>

            <p className="text-red-600 text-sm mt-1">Below Standard</p>
          </div>
        </div>

        <p className="text-gray-600">
          Your degree classification is calculated as a weighted average of your
          module marks based on credit values. Final year modules typically
          carry more weight than earlier years. Most universities use a 40:60 or
          30:70 split between second and third year results.
        </p>
      </section>

      {/* <!-- Credits Section --> */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <BookOpen className="text-indigo-600 mr-3 shrink-0" />
          What Are Credits and How to Find Them?
        </h2>
        <p className="text-gray-600 mb-6">
          Credits show how much study time and effort each module requires. They
          determine how much each module contributes to your overall degree
          classification.
        </p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Where to Find Your Credits:
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 shrink-0"></div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">
                  Student Portal:
                </span>{' '}
                Check your university's online system (Moodle, Blackboard,
                Canvas, or your uni's custom portal)
              </p>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3  shrink-0"></div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">
                  Course Handbook:
                </span>{' '}
                Your degree programme handbook lists all module credits
              </p>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3  shrink-0"></div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">
                  Module Descriptions:
                </span>{' '}
                Check your university website or course catalogue
              </p>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3  shrink-0"></div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Transcript:</span>{' '}
                Official academic record showing all completed modules with
                credits
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-gray-900 mb-3">
            Common Credit Values:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Standard module:</span>
              <span className="font-medium text-gray-900">15 credits</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Large module:</span>
              <span className="font-medium text-gray-900">20 credits</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Double module:</span>
              <span className="font-medium text-gray-900">30 credits</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Dissertation/Project:</span>
              <span className="font-medium text-gray-900">30-40 credits</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Full academic year:</span>
              <span className="font-medium text-gray-900">120 credits</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Honours degree total:</span>
              <span className="font-medium text-gray-900">360 credits</span>
            </div>
          </div>
        </div>

        <aside className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-blue-800">
            <span className="font-semibold">
              Still Can't find your credits?
            </span>{' '}
            Ask your teacher, programme administrator, or student services.
            They'll have all the information you need.
          </p>
        </aside>
      </section>
      {/* <!-- Grades Section --> */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Search className="text-indigo-600 mr-3 shrink-0" />
          What Is a Mark and Where to Find It?
        </h2>
        <p className="text-gray-600 mb-6">
          Your mark is the percentage score that shows how well you performed in
          each module. These range from 0% to 100% in the UK system.
        </p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Where to Find Your Marks:
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 shrink-0"></div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">
                  Student Portal:
                </span>{' '}
                Most unis use systems like Moodle, Canvas, or their own student
                dashboard
              </p>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 shrink-0"></div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">
                  Official Transcript:
                </span>{' '}
                Request from your university's registry or student services
              </p>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 shrink-0"></div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">
                  Module Results:
                </span>{' '}
                Check individual assignment feedback and final module results
              </p>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3  shrink-0"></div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">
                  Academic Office:
                </span>{' '}
                Contact your department directly for official grade
                confirmations
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-gray-900 mb-3">Types of Marks:</h4>
          <div className="space-y-2">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2  shrink-0"></div>
              <div>
                <span className="font-medium text-gray-800 ">
                  Final Module Mark:
                </span>
                <span className="text-gray-600">
                  {' '}
                  Your overall percentage for the entire module (use this for
                  degree classification)
                </span>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2  shrink-0"></div>
              <div>
                <span className="font-medium text-gray-800">
                  Assignment Marks:
                </span>
                <span className="text-gray-600">
                  {' '}
                  Individual coursework and exam scores that combine to make
                  your final mark
                </span>
              </div>
            </div>
          </div>
        </div>

        <aside className="bg-green-50 border-l-4 border-green-400 p-4">
          <p className="text-green-800">
            <span className="font-semibold">Pro Tip:</span> Use your final
            module marks for accurate degree classification calculations. If
            you're still studying, you can estimate using your current average
            marks to see where you stand!
          </p>
        </aside>
      </section>

      {/* <!-- Why GPA Matters --> */}
      <section className="bg-indigo-50 rounded-lg border border-indigo-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Zap className="text-indigo-600 mr-3 shrink-0" />
          Does Your Degree Classification Matter?
        </h2>
        <p className="text-gray-600 mb-6">
          While your skills and experience matter most, your degree
          classification opens doors to valuable opportunities in the UK job
          market:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-900 mb-2">Graduate Jobs</h3>
            <p className="text-gray-600 text-sm">
              Many graduate schemes and top employers (like Deloitte, PwC, or
              the Civil Service) require a 2:1 or above for applications.
            </p>
          </article>
          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-900 mb-2">
              Postgraduate Study
            </h3>
            <p className="text-gray-600 text-sm">
              Most Master's programmes require at least a 2:2, while competitive
              courses often need a 2:1 or First.
            </p>
          </article>
          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-900 mb-2">
              Professional Training
            </h3>
            <p className="text-gray-600 text-sm">
              Training contracts (law), graduate medicine, or chartered
              accountancy often have minimum degree classification requirements.
            </p>
          </article>
          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-900 mb-2">
              Research Opportunities
            </h3>
            <p className="text-gray-600 text-sm">
              PhD programmes and research positions typically require a 2:1 or
              First, plus relevant experience.
            </p>
          </article>
        </div>
      </section>
      {/* <!-- Tips Section --> */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Sun className="text-indigo-600 mr-3 shrink-0" />
          Tips to Improve Your Degree Classification
        </h2>
        <p className="text-gray-600 mb-6">
          Want to boost those marks? Here are proven strategies that work:
        </p>

        <ul className="space-y-3">
          <li className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-2 h-2 bg-purple-600 rounded-full mr-4 shrink-0"></div>
            <p className="text-gray-700">
              <span className="font-semibold">
                Attend all lectures and seminars
              </span>{' '}
              – You can't succeed if you're not there
            </p>
          </li>
          <li className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-2 h-2 bg-purple-600 rounded-full mr-4  shrink-0"></div>
            <p className="text-gray-700">
              <span className="font-semibold">Turn in all assignments</span> –
              Even if they're not perfect, partial credit beats zero
            </p>
          </li>
          <li className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-2 h-2 bg-purple-600 rounded-full mr-4  shrink-0"></div>
            <p className="text-gray-700">
              <span className="font-semibold">Ask for help early</span> – Don't
              wait until you're failing to talk to your teacher
            </p>
          </li>
          <li className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-2 h-2 bg-purple-600 rounded-full mr-4  shrink-0"></div>
            <p className="text-gray-700">
              <span className="font-semibold">Study consistently</span> – 30
              minutes daily beats cramming all night
            </p>
          </li>
          <li className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-2 h-2 bg-purple-600 rounded-full mr-4  shrink-0"></div>
            <p className="text-gray-700">
              <span className="font-semibold">Join study groups</span> –
              Learning with others makes it easier and more fun
            </p>
          </li>
        </ul>
      </section>
      {/* <!-- FAQ Section --> */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <CircleQuestionMark className="text-indigo-600 mr-3  shrink-0" />
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              What's considered a good US GPA for UK students?
            </dt>

            <dd className="text-gray-600">
              For international applications, aim for 3.0+ (equivalent to a 2:2
              or better). Top US universities prefer 3.5+ GPAs, which means you
              need at least a 2:1 in the UK system.
            </dd>
          </dl>
          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              What's the difference between a 2:1 and 2:2?
            </dt>

            <dd className="text-gray-600">
              A 2:1 (60-69%) is an Upper Second Class degree, while a 2:2
              (50-59%) is a Lower Second. Most graduate jobs and Master's
              programmes prefer a 2:1, but a 2:2 still opens many career doors.
            </dd>
          </dl>

          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              Is a 2:1 considered good in the UK?
            </dt>

            <dd className="text-gray-600">
              Yes! A 2:1 is considered a very good degree classification. It
              shows solid academic achievement and meets the entry requirements
              for most competitive graduate programmes and jobs.
            </dd>
          </dl>

          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              Can I still get a good job with a 2:2?
            </dt>

            <dd className="text-gray-600">
              Absolutely! While some graduate schemes have 2:1 requirements,
              many employers value skills and experience alongside your degree.
              Focus on internships, volunteering, and relevant experience to
              strengthen your CV.
            </dd>
          </dl>

          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              Do all years count equally toward my degree classification?
            </dt>

            <dd className="text-gray-600">
              No, typically your first year doesn't count (as long as you pass).
              Most universities weight second year as 30-40% and third year as
              60-70% of your final classification. Check your student handbook
              for your uni's specific weighting.
            </dd>
          </dl>

          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              What happens if I'm on a borderline between classifications?
            </dt>

            <dd className="text-gray-600">
              Many universities have borderline policies. If you're close to the
              next classification (e.g., 68% when you need 70% for a First),
              they may consider factors like your final year performance or
              overall academic trend.
            </dd>
          </dl>
          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              What if I have resit marks - how do these affect my
              classification?
            </dt>

            <dd className="text-gray-600">
              Resit marks are usually capped at the pass mark (typically 40%)
              for classification purposes, even if you score higher. This means
              resitting can help you progress but may limit your final
              classification. Check your uni's specific resit policy.
            </dd>
          </dl>

          <dl>
            <dt className="font-semibold text-gray-900 mb-2">
              How often should I check my degree classification progress?
            </dt>

            <dd className="text-gray-600">
              Check after each semester results are released. This helps you
              stay on track and adjust your study approach if needed. If you're
              aiming for a specific classification, regular monitoring is
              essential.
            </dd>
          </dl>
        </div>
      </section>

      {/* <!-- Call to Action --> */}
      <div className="text-center p-6 bg-primary rounded-lg text-white">
        <h3 className="text-xl font-bold mb-2">
          Ready to calculate your degree classification?
        </h3>
        <p className="text-indigo-50">
          Use our free calculator above to see exactly where you stand and plan
          your path to your target grade!
        </p>
      </div>
    </div>
  );
};

export default UKContent;
