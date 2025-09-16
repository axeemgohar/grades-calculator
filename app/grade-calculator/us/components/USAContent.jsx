import {
  BookOpen,
  ChartColumnBig,
  CircleQuestionMark,
  Clipboard,
  Search,
  Sun,
  Zap,
} from 'lucide-react';

const USAContent = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <section className="mb-8 shadow-xs border border-gray-200 rounded-lg p-6 md:p-8">
        {/* <!-- Main Heading --> */}
        <div className="bg-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Use the US GPA Calculator
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            This calculator is designed to help students calculate their overall
            GPA and estimate the GPA they'll need in future classes to reach
            their target. Below, you'll find step-by-step instructions,
            explanations of key terms, and tips to make the most of this tool.
          </p>
        </div>

        {/* <!-- How to Use Section --> */}
        <div className="bg-white ">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Clipboard className="text-indigo-600 mr-3 shrink-0" />3 Simple
            Steps to Calculate Your GPA
          </h2>
          <p className="text-gray-600 mb-6">
            Getting your GPA is as easy as 1-2-3:
          </p>

          <ol className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Enter Your Course Names (Optional)
                </h3>
                <p className="text-gray-600">
                  Type in each class you've taken (for example, "Biology,"
                  "English," or "AP History"). This step is optional, so feel
                  free to skip it if you prefer.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Add Your Credits
                </h3>
                <p className="text-gray-600">
                  Enter how many credit hours each course is worth. If you’re
                  not sure what credits are or where to find them, see the
                  section below.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Select Your Grades
                </h3>
                <p className="text-gray-600">
                  Pick your letter grade for each course from the dropdown menu.
                  If you're unsure what a grade means or where to find it, read
                  the section below.
                </p>
              </div>
            </li>
          </ol>

          <p className="text-gray-600 mt-6 italic">
            When you click “Calculate GPA”, our algorithm will calculate your
            GPA based on the credits and grades you entered.
          </p>
        </div>
      </section>

      {/* <!-- GPA Scale Section --> */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <ChartColumnBig className="text-indigo-600 mr-3 shrink-0" />
          Understanding the US 4.0 GPA Scale
        </h2>
        <p className="text-gray-600 mb-6">
          The American grading system uses a 4.0 scale where:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-green-800">A+ / A</span>
              <span className="text-green-700 font-bold">4.0</span>
            </div>
            <p className="text-green-600 text-sm mt-1">Outstanding work</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-green-800">A-</span>
              <span className="text-green-700 font-bold">3.7</span>
            </div>
            <p className="text-green-600 text-sm mt-1">Excellent</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-blue-800">B+</span>
              <span className="text-blue-700 font-bold">3.3</span>
            </div>
            <p className="text-blue-600 text-sm mt-1">Good</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-blue-800">B</span>
              <span className="text-blue-700 font-bold">3.0</span>
            </div>
            <p className="text-blue-600 text-sm mt-1">Above average</p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-yellow-800">B-</span>
              <span className="text-yellow-700 font-bold">2.7</span>
            </div>
            <p className="text-yellow-600 text-sm mt-1">Satisfactory</p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-yellow-800">C+</span>
              <span className="text-yellow-700 font-bold">2.3</span>
            </div>
            <p className="text-yellow-600 text-sm mt-1">Below average</p>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-orange-800">C</span>
              <span className="text-orange-700 font-bold">2.0</span>
            </div>
            <p className="text-orange-600 text-sm mt-1">Poor</p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-red-800">D</span>
              <span className="text-red-700 font-bold">1.0</span>
            </div>
            <p className="text-red-600 text-sm mt-1">Barely passing</p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-red-800">F</span>
              <span className="text-red-700 font-bold">0.0</span>
            </div>
            <p className="text-red-600 text-sm mt-1">Failing</p>
          </div>
        </div>

        <p className="text-gray-600">
          Your GPA is calculated as a weighted average of your grade points,
          based on the credit hours of each course. For example, if you earned
          an A (4.0) in a 3-credit class and a B (3.0) in another 3-credit
          class, your GPA would be 3.5. If the classes have different credit
          hours, the course with more credits will have a bigger impact on your
          GPA.
        </p>
      </section>

      {/* Mobile Version */}
      <div className="lg:hidden mb-8">
        <div id="ezoic-pub-ad-placeholder-117"></div>
      </div>

      {/* Desktop Version */}
      <div className="max-lg:hidden mb-8">
        <div id="ezoic-pub-ad-placeholder-120"></div>
      </div>

      {/* <!-- Credits Section --> */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <BookOpen className="text-indigo-600 mr-3 shrink-0" />
          What Are Credits and How to Find Them?
        </h2>
        <p className="text-gray-600 mb-6">
          Credits (also called credit hours) show how much a course is "worth"
          based on how much time you spend in class each week.
        </p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Where to Find Your Credits:
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 shrink-0"></div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">High School:</span>{' '}
                Check your transcript, student portal, or class schedule. Most
                classes are 0.5-1 credit
              </p>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3  shrink-0"></div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">College:</span> Look
                at your course catalog, registration system, or syllabus. Most
                courses are 3-4 credits
              </p>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3  shrink-0"></div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Report Card:</span>{' '}
                Credits are usually listed next to each course name
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
              <span className="text-gray-600">High school class:</span>
              <span className="font-medium text-gray-900">0.5-1 credit</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">College lecture course:</span>
              <span className="font-medium text-gray-900">3 credits</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">College lab course:</span>
              <span className="font-medium text-gray-900">1-2 credits</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">College seminar:</span>
              <span className="font-medium text-gray-900">1-3 credits</span>
            </div>
          </div>
        </div>

        <aside className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-blue-800">
            <span className="font-semibold">Can't find your credits?</span> Ask
            your teacher, counselor, or check your school's website for course
            descriptions.
          </p>
        </aside>
      </section>

      {/* <!-- Grades Section --> */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Search className="text-indigo-600 mr-3 shrink-0" />
          What Is a Grade and Where to Find It?
        </h2>
        <p className="text-gray-600 mb-6">
          Your grade is the letter (A, B, C, D, F) that shows how well you
          performed in a class.
        </p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Where to Find Your Grades:
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 shrink-0"></div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">
                  Student Portal/Online:
                </span>{' '}
                Most schools have online systems like PowerSchool, Canvas, or
                Blackboard
              </p>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 shrink-0"></div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Report Cards:</span>{' '}
                Mailed home or given to you at the end of each semester
              </p>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 shrink-0"></div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Transcript:</span>{' '}
                Official document with all your final grades
              </p>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3  shrink-0"></div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Teachers:</span> Ask
                directly if you're unsure about a current grade
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-gray-900 mb-3">Types of Grades:</h4>
          <div className="space-y-2">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2  shrink-0"></div>
              <div>
                <span className="font-medium text-gray-800 ">Final Grade:</span>
                <span className="text-gray-600">
                  {' '}
                  Your grade for the entire course (use this for GPA)
                </span>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2  shrink-0"></div>
              <div>
                <span className="font-medium text-gray-800">
                  Current Grade:
                </span>
                <span className="text-gray-600">
                  {' '}
                  What you have right now (might change)
                </span>
              </div>
            </div>
          </div>
        </div>

        <aside className="bg-green-50 border-l-4 border-green-400 p-4">
          <p className="text-green-800">
            <span className="font-semibold">Pro Tip:</span> Use your final
            grades for the most accurate GPA calculation. If you're currently in
            school, you can estimate using your current grades!
          </p>
        </aside>
      </section>

      {/* Mobile Version */}
      <div className="lg:hidden mb-8">
        <div id="ezoic-pub-ad-placeholder-118"></div>
      </div>

      {/* Desktop Version */}
      <div className="max-lg:hidden mb-8">
        <div id="ezoic-pub-ad-placeholder-121"></div>
      </div>

      {/* <!-- Why GPA Matters --> */}
      <section className="bg-indigo-50 rounded-lg border border-indigo-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Zap className="text-indigo-600 mr-3 shrink-0" />
          Does Your GPA Actually Matter?
        </h2>
        <p className="text-gray-600 mb-6">
          Not as much as your skills, determination, and growth those shape your
          future the most. But your GPA isn't just a number either, it can open
          doors to opportunities like:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-900 mb-2">
              College Admissions
            </h3>
            <p className="text-gray-600 text-sm">
              Most universities have minimum GPA requirements. Top schools
              typically want 3.5+ GPAs.
            </p>
          </article>
          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-900 mb-2">Scholarships</h3>
            <p className="text-gray-600 text-sm">
              Many scholarships require at least a 3.0 GPA. The higher your GPA,
              the more opportunities.
            </p>
          </article>
          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-900 mb-2">
              Job Opportunities
            </h3>
            <p className="text-gray-600 text-sm">
              Some employers ask for your GPA, especially for internships and
              entry-level positions.
            </p>
          </article>
          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-900 mb-2">
              Academic Standing
            </h3>
            <p className="text-gray-600 text-sm">
              Stay above 2.0 to avoid academic probation at most schools.
            </p>
          </article>
        </div>
      </section>

      {/* <!-- Tips Section --> */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Sun className="text-indigo-600 mr-3 shrink-0" />
          Quick Tips to Boost Your GPA
        </h2>
        <p className="text-gray-600 mb-6">
          Want to improve those grades? Here's what actually works:
        </p>

        <ul className="space-y-3">
          <li className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-2 h-2 bg-purple-600 rounded-full mr-4 shrink-0"></div>
            <p className="text-gray-700">
              <span className="font-semibold">Attend every class</span> – You
              can't succeed if you're not there
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
              What's a good GPA in the US?
            </dt>

            <dd>
              <ul className="space-y-1 text-gray-600">
                <li>
                  • <span className="font-medium">2.0-2.5:</span> Below average,
                  might limit college options
                </li>
                <li>
                  • <span className="font-medium">2.5-3.0:</span> Average, gets
                  you into most state schools
                </li>
                <li>
                  • <span className="font-medium">3.0-3.5:</span> Good, opens
                  doors to better colleges
                </li>
                <li>
                  • <span className="font-medium">3.5+:</span> Excellent,
                  competitive for top universities
                </li>
              </ul>
            </dd>
          </dl>

          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              Is a 3.0 GPA good?
            </dt>

            <dd className="text-gray-600">
              A 3.0 GPA is decent and meets most college admission requirements.
              It shows you're a solid B student, which is perfectly respectable.
            </dd>
          </dl>

          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              Can I get into college with a 2.5 GPA?
            </dt>

            <dd className="text-gray-600">
              Yes! Many colleges accept students with 2.5 GPAs, especially
              community colleges and some state schools. You might need strong
              test scores or extracurriculars to help your application.
            </dd>
          </dl>

          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              How often should I calculate my GPA?
            </dt>

            <dd className="text-gray-600">
              Check your GPA at the end of each semester to track your progress.
              If you're applying to colleges, calculate it after each grading
              period to stay on top of your goals.
            </dd>
          </dl>

          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              Do colleges look at weighted or unweighted GPA?
            </dt>

            <dd className="text-gray-600">
              Most colleges look at both. Unweighted GPA shows your actual
              grades, while weighted GPA shows you challenged yourself with
              harder courses like AP or honors classes.
            </dd>
          </dl>

          <dl>
            <dt className="font-semibold text-gray-900 mb-2">
              What if I have pass/fail courses?
            </dt>

            <dd className="text-gray-600">
              Pass/fail courses usually don't count toward your GPA calculation
              since they don't have letter grades. Only include courses with
              actual letter grades in your GPA.
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

      {/* <!-- Call to Action --> */}
      <div className="text-center p-6 bg-primary rounded-lg text-white">
        <h3 className="text-xl font-bold mb-2">
          Ready to see where you stand?
        </h3>
        <p className="text-indigo-50">
          Use our calculator above to get your GPA instantly and start planning
          your academic future!
        </p>
      </div>
    </div>
  );
};

export default USAContent;
