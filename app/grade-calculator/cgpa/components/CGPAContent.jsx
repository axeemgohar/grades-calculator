import {
  BookOpen,
  CircleQuestionMark,
  Clipboard,
  Globe,
  Search,
  Sun,
  Zap,
} from 'lucide-react';

const CGPAContent = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <section className=" mb-8 shadow-xs border border-gray-200 rounded-lg p-6 md:p-8">
        {/* <!-- Main Heading --> */}
        <div className="bg-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What is a CGPA?
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            CGPA (Cumulative Grade Point Average) is the overall average of your
            GPAs across all semesters. Where GPA tells you how you did in one
            semester, CGPA adds them all together to show your performance
            throughout your entire program.
          </p>
        </div>

        {/* <!-- How to Use Section --> */}
        <div className="bg-white ">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Clipboard className="text-indigo-600 mr-3 shrink-0" />3 Simple
            Steps to Calculate Your CGPA
          </h2>
          <p className="text-gray-600 mb-6">
            Just follow these simple steps and get your CGPA in seconds.
          </p>

          <ol className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Enter Your Semester GPAs
                </h3>
                <p className="text-gray-600">
                  Type in the GPA you got for each completed semester (for
                  example, "Semester 1 GPA: 3.7" ). You can find this on your
                  official marksheet or transcript.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Enter Your Semester Credits
                </h3>
                <p className="text-gray-600">
                  Type in the total credits for each semester (for example,
                  "Semester 1 Credits: 17"). You can find these on your
                  marksheet or transcript.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Get Your Results
                </h3>
                <p className="text-gray-600">
                  See your current CGPA with a clear breakdown. Perfect for
                  applications, planning, and tracking progress!
                </p>
              </div>
            </li>
          </ol>
        </div>
        <p className="text-gray-600 leading-relaxed mt-4 italic">
          This calculator is perfect for students in India, Pakistan,
          Bangladesh, and other countries using the CGPA system.
        </p>
      </section>

      {/* <!-- Grades Section --> */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Search className="text-indigo-600 mr-3 shrink-0" />
          What is Semester GPA and Where to Find It?
        </h2>
        <p className="text-gray-600 mb-1">
          Semester GPA (also called SGPA) is your Grade Point Average for one
          specific semester or term. Think of it as your "report card score" for
          that particular period.
        </p>
        <p className="text-gray-600 mb-6">
          It's calculated by your university based on the grades you got in all
          subjects during that semester, considering the credit hours of each
          course.
        </p>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Where to Find Your Semester GPA:
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 shrink-0"></div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">
                  Student Portal/Online:
                </span>{' '}
                University student portal or online dashboard
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
      </section>

      {/* <!-- Credits Section --> */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <BookOpen className="text-indigo-600 mr-3 shrink-0" />
          What Are Credits and How to Find Them?
        </h2>
        <p className="text-gray-600 mb-6">
          Credits (also called credit hours) show how much a course is "worth"
          based on how much time you spend in class each week. They show how
          much each course contributes to your overall CGPA.
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
                  Official Transcript:
                </span>{' '}
                Credits or credit points are often listed next to each course or
                semester.
              </p>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 shrink-0"></div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">
                  Academic Portal:
                </span>{' '}
                Your university or college portal usually displays semester-wise
                credits.
              </p>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 shrink-0"></div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">
                  Syllabus or Course Outline:
                </span>{' '}
                Some institutions mention credits in the official syllabus or
                course description.
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-gray-900 mb-3">
            Common credits per semester by Country
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 gap-x-6">
            <div className="flex justify-between">
              <span className="text-gray-600">United States:</span>
              <span className="font-medium text-gray-900">15–16 credits</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Canada:</span>
              <span className="font-medium text-gray-900">15 credits</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Pakistan:</span>
              <span className="font-medium text-gray-900">18–20 credits</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">India:</span>
              <span className="font-medium text-gray-900">22–24 credits</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Malaysia:</span>
              <span className="font-medium text-gray-900">18–19 credits</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Germany:</span>
              <span className="font-medium text-gray-900">28–30 credits</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Philippines:</span>
              <span className="font-medium text-gray-900">21–22 credits</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">France:</span>
              <span className="font-medium text-gray-900">28–30 credits</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Netherlands:</span>
              <span className="font-medium text-gray-900">28–30 credits</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Saudi Arabia:</span>
              <span className="font-medium text-gray-900">17–18 credits</span>
            </div>
          </div>
        </div>

        <aside className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-blue-800">
            <span className="font-semibold">
              Still can't find your credits?
            </span>{' '}
            Check with your department, teacher, or your university's official
            website for details on course credit allocation.
          </p>
        </aside>
      </section>

      {/* Why CGPA Matters? */}
      <section className="bg-indigo-50 rounded-lg border border-indigo-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Zap className="text-indigo-600 mr-3 shrink-0" />
          Does Your CGPA Actually Matter?
        </h2>
        <p className="text-gray-600 mb-6">
          Not as much as your skills, determination, and growth those shape your
          future the most. But your CGPA isn't just a number either, it can open
          doors to opportunities like:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-800 mb-2">
              University Admissions
            </h3>
            <p className="text-gray-600 text-sm">
              Higher CGPA = better chances for master's programs and top
              universities
            </p>
          </article>
          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-800 mb-2">Scholarships</h3>
            <p className="text-gray-600 text-sm">
              Merit-based scholarships often have minimum CGPA requirements
            </p>
          </article>
          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-800 mb-2">Study Abroad</h3>
            <p className="text-gray-600 text-sm">
              International universities consider CGPA for admission decisions
            </p>
          </article>
          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-800 mb-2">
              Job Opportunities
            </h3>
            <p className="text-gray-600 text-sm">
              Many companies have CGPA cutoffs for campus placements
            </p>
          </article>
        </div>
      </section>

      {/* <!-- Tips Section --> */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Sun className="text-indigo-600 mr-3 shrink-0" />
          Quick Tips to Boost Your CGPA
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
              What's the difference between GPA and CGPA?
            </dt>

            <dd className="text-gray-600">
              GPA (Grade Point Average) is usually calculated for one semester
              or year, while CGPA (Cumulative Grade Point Average) includes all
              your semesters from the beginning of your degree program.
            </dd>
          </dl>

          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              Can I calculate CGPA if my university uses a different grading
              scale?
            </dt>

            <dd className="text-gray-600">
              Yes! Our calculator works with most common scales (4.0, 5.0, 7.0,
              10.0). Just make sure you're entering your semester GPAs in the
              same scale that your university uses.
            </dd>
          </dl>

          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              What if I have failed or repeated a semester?
            </dt>

            <dd className="text-gray-600">
              Enter the GPA you actually received for that semester, even if
              it's 0 or very low. The calculator will include it in your overall
              CGPA calculation, which gives you an accurate picture.
            </dd>
          </dl>

          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              Is it possible to significantly improve CGPA in final semesters?
            </dt>

            <dd className="text-gray-600">
              Yes, but it gets harder as you have more semesters. Early
              improvement has more impact. Focus on getting the highest grades
              possible in remaining semesters.
            </dd>
          </dl>

          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              What's considered a good CGPA for university admissions?
            </dt>

            <dd className="text-gray-600">
              This varies by country and institution. Generally, 3.0+ (on 4.0
              scale) or 7.0+ (on 10.0 scale) is considered good. Top
              universities may require 3.5+ or 8.5+ respectively.
            </dd>
          </dl>

          <dl>
            <dt className="font-semibold text-gray-900 mb-2">
              Can internships or projects improve my CGPA?
            </dt>

            <dd className="text-gray-600">
              Usually not directly, but some universities offer credit courses
              for internships or projects. Check with your academic advisor
              about opportunities that could boost your CGPA.
            </dd>
          </dl>
        </div>
      </section>

      {/* <!-- Call to Action --> */}
      <div className="text-center p-6 bg-primary rounded-lg text-white">
        <h3 className="text-xl font-bold mb-2">
          Ready to see where you stand?
        </h3>
        <p className="text-indigo-50">
          Don't wait! Calculate your current CGPA now and start planning your
          academic future. It takes less than 2 minutes!
        </p>
      </div>
    </div>
  );
};

export default CGPAContent;
