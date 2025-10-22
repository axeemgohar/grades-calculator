// NZContent.jsx
import {
  BookOpen,
  ChartColumnBig,
  CircleQuestionMark,
  Clipboard,
  Search,
  Sun,
  Zap,
} from 'lucide-react';

const NZContent = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <section className="mb-8 shadow-xs border border-gray-200 rounded-lg p-6 md:p-8">
        {/* */}
        <div className="bg-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {/* Your Kiwi Guide: Calculate Your NZ University GPA (9.0 Scale) */}
            How to Use the NZ GPA Calculator
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Keen to know where you stand? This calculator is built for students
            in Aotearoa (New Zealand) to quickly figure out their official
            weighted Grade Point Average (GPA). Whether you're chasing an
            Honours degree, planning a Masters, or just keeping track, let's get
            that number sorted!
          </p>
        </div>

        {/* */}
        <div className="bg-white ">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Clipboard className="text-indigo-600 mr-3 shrink-0" />3 Easy Steps
            to Find Your GPA
          </h2>
          <p className="text-gray-600 mb-6">
            Figuring out your GPA is quicker than ordering fish and chips:
          </p>

          <ol className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Enter Your Paper Names (Totally Optional)
                </h3>
                <p className="text-gray-600">
                  A university class is called a 'paper' here. Pop in the name
                  (e.g., 'ACCT 101') if you want to keep things organised, but
                  it won't affect the calculation.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Input Your Points
                </h3>
                <p className="text-gray-600">
                  These are the workload credits for your paper. Most core
                  papers are 15 Points, but some are 30 or more. This number is
                  super important as it weights your grades!
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Select Your Final Grades
                </h3>
                <p className="text-gray-600">
                  Grab your official academic transcript and select the letter
                  grade for each paper. Don't worry, we use the standard NZ 9.0
                  scale, so your A+ is worth 9.0!
                </p>
              </div>
            </li>
          </ol>

          <p className="text-gray-600 mt-6 italic">
            Hit “Calculate GPA” and we'll handle the weighted average based on
            the points and grades you've entered. Too easy!
          </p>
        </div>
      </section>
      {/* */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <ChartColumnBig className="text-indigo-600 mr-3 shrink-0" />
          Understanding the NZ 9.0 GPA Scale
        </h2>
        <p className="text-gray-600 mb-6">
          The 9.0 scale is the go-to standard across all major New Zealand
          universities (Auckland, Otago, Victoria, etc.). Here's what your
          letter grade means in points (GPV):
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {/* PASS GRADES (A+ to C-) - No Change, as they are accurate */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-green-800">A+</span>
              <span className="text-green-700 font-bold">9.0</span>
            </div>
            <p className="text-green-600 text-sm mt-1">
              Outstanding (Honours Territory)
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-green-800">A</span>
              <span className="text-green-700 font-bold">8.0</span>
            </div>
            <p className="text-green-600 text-sm mt-1">Excellent Performance</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-blue-800">A-</span>
              <span className="text-blue-700 font-bold">7.0</span>
            </div>
            <p className="text-blue-600 text-sm mt-1">
              Very Good (High Second Class)
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-blue-800">B+</span>
              <span className="text-blue-700 font-bold">6.0</span>
            </div>
            <p className="text-blue-600 text-sm mt-1">Solidly Good</p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-yellow-800">B</span>
              <span className="text-yellow-700 font-bold">5.0</span>
            </div>
            <p className="text-yellow-600 text-sm mt-1">
              Satisfactory (B Average)
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-yellow-800">B-</span>
              <span className="text-yellow-700 font-bold">4.0</span>
            </div>
            <p className="text-yellow-600 text-sm mt-1">Standard Pass</p>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-orange-800">C+</span>
              <span className="text-orange-700 font-bold">3.0</span>
            </div>
            <p className="text-orange-600 text-sm mt-1">Acceptable Pass</p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-red-800">C</span>
              <span className="text-red-700 font-bold">2.0</span>
            </div>
            <p className="text-red-600 text-sm mt-1">Low Pass</p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-red-800">C-</span>
              <span className="text-red-700 font-bold">1.0</span>
            </div>
            <p className="text-red-600 text-sm mt-1">Marginal Pass</p>
          </div>

          {/* FAIL GRADES (D, E) - Aligned with your gradePointsNZ: 0.0 */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-red-800">D / E</span>
              <span className="text-red-700 font-bold">0.0</span>
            </div>
            <p className="text-red-600 text-sm mt-1">
              Fail (Paper counts for 0 points)
            </p>
          </div>
        </div>
        {/* NEW EXPLANATORY BOX for non-numeric grades (P, F) */}
        <aside className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-8 mb-4">
          <p className="text-gray-800">
            <span className="font-semibold">
              What about P (Pass) and F (Fail) grades?
            </span>{' '}
            Papers marked 'P' (Pass) or 'F' (Fail) without a percentage are
            typically excluded from the GPA calculation by New Zealand
            universities, as they don't have an assigned Grade Point Value
            (GPV). They still count toward points passed for graduation.
          </p>
        </aside>

        <p className="text-gray-600">
          Remember, your GPA calculation is a weighted average. This means if
          you get an A+ (9.0) in a 30-point paper and a B (5.0) in a 15-point
          paper, the 30-point paper will have twice the impact on your final
          score.
        </p>
      </section>
      {/* Mobile Version */}
      {/* <div className="lg:hidden mb-8">
        <div id="ezoic-pub-ad-placeholder-117"></div>
      </div> */}
      {/* Desktop Version */}
      {/* <div className="max-lg:hidden mb-8">
        <div id="ezoic-pub-ad-placeholder-120"></div>
      </div> */}
      {/* */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <BookOpen className="text-indigo-600 mr-3 shrink-0" />
          Understanding Points (The Kiwi Credit System)
        </h2>
        <p className="text-gray-600 mb-6">
          In New Zealand, "Points" are the standard way to measure the workload
          or value of a paper. They are the same as "credit hours" used
          overseas, and they are critical for your GPA.
        </p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Where to Find Your Paper's Points:
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 shrink-0"></div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">
                  Your Student Portal:
                </span>{' '}
                Look at the official course description or registration page for
                the paper code (e.g., COMSCI 201).
              </p>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3  shrink-0"></div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">
                  Course Outline/Syllabus:
                </span>{' '}
                The points value is always specified at the top.
              </p>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3  shrink-0"></div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">
                  Standard Load:
                </span>{' '}
                A full-time student usually takes four 15-point papers per
                semester, totalling 120 points for the academic year.
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-gray-900 mb-3">
            Common Points Breakdown:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex justify-between">
              <span className="text-gray-600">
                Standard Single Semester Paper:
              </span>
              <span className="font-medium text-gray-900">15 Points</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Large/Full Year Paper:</span>
              <span className="font-medium text-gray-900">30 Points</span>
            </div>
          </div>
        </div>
      </section>
      {/* Mobile Version */}
      {/* <div className="lg:hidden mb-8">
        <div id="ezoic-pub-ad-placeholder-118"></div>
      </div> */}
      {/* Desktop Version */}
      {/* <div className="max-lg:hidden mb-8">
        <div id="ezoic-pub-ad-placeholder-121"></div>
      </div> */}
      {/* */}
      <section className="bg-indigo-50 rounded-lg border border-indigo-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Zap className="text-indigo-600 mr-3 shrink-0" />
          Why Your GPA is Your Golden Ticket to Postgrad Study
        </h2>
        <p className="text-gray-600 mb-6">
          Your GPA on the 9.0 scale is more than just a number, it’s the
          official measure of your eligibility for advanced degrees and academic
          prestige in New Zealand:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-900 mb-2">
              Honours Classification
            </h3>
            <p className="text-gray-600 text-sm">
              Your final GPA over your degree determines if you get First Class
              Honours (usually GPA 8.0+), Second Class Honours (Div I), or (Div
              II). This is a big deal!
            </p>
          </article>
          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-900 mb-2">
              Masters & PhD Entry
            </h3>
            <p className="text-gray-600 text-sm">
              Applying for a Masters? Most competitive programs need a GPA of at
              least 6.0 (B+ average) or higher in your final year papers to be
              considered.
            </p>
          </article>
          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-900 mb-2">Scholarships</h3>
            <p className="text-gray-600 text-sm">
              The best scholarships (both national and university-specific) are
              only awarded to students with top GPAs. A high score can save you
              serious money.
            </p>
          </article>
          <article className="bg-white rounded-lg p-4 border border-indigo-200">
            <h3 className="font-semibold text-blue-900 mb-2">
              Inter-University Transfer
            </h3>
            <p className="text-gray-600 text-sm">
              Switching universities in NZ or going on exchange often requires
              you to meet a minimum GPA standard, typically a B- or B average
              (4.0–5.0).
            </p>
          </article>
        </div>
      </section>
      {/* */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Sun className="text-indigo-600 mr-3 shrink-0" />
          Quick Tips to Lift Your Grades
        </h2>
        <p className="text-gray-600 mb-6">
          Need to boost your GPA? Here’s the no-nonsense advice straight from
          top students:
        </p>

        <ul className="space-y-3">
          <li className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-2 h-2 bg-purple-600 rounded-full mr-4 shrink-0"></div>
            <p className="text-gray-700">
              <span className="font-semibold">
                Nail the 'High Point' Papers
              </span>{' '}
              – Focus your best effort on papers worth 30 points, as they
              heavily influence your final GPA.
            </p>
          </li>
          <li className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-2 h-2 bg-purple-600 rounded-full mr-4  shrink-0"></div>
            <p className="text-gray-700">
              <span className="font-semibold">Start Assignments Early</span> –
              Don't leave those big 50% reports until the last minute. Get
              feedback and edit, edit, edit.
            </p>
          </li>
          <li className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-2 h-2 bg-purple-600 rounded-full mr-4  shrink-0"></div>
            <p className="text-gray-700">
              <span className="font-semibold">Use Office Hours</span> –
              Lecturers and tutors get paid to help you. Go ask questions,
              especially if you're struggling.
            </p>
          </li>
          <li className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-2 h-2 bg-purple-600 rounded-full mr-4  shrink-0"></div>
            <p className="text-gray-700">
              <span className="font-semibold">
                Team Up with Good Study Mates
              </span>{' '}
              – Join a study group with people who are serious about getting A
              grades.
            </p>
          </li>
        </ul>
      </section>
      {/* */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <CircleQuestionMark className="text-indigo-600 mr-3 shrink-0" />
          Questions you might have in mind
        </h2>

        <div className="space-y-6">
          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              What GPA do I need for First Class Honours?
            </dt>

            <dd className="text-gray-600">
              This varies slightly, but you typically need a GPA of 7.0 or 8.0
              and above across your final year, or across the best papers in
              your degree. A sustained A average is what universities look for.
            </dd>
          </dl>

          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              Is a 5.0 GPA good in New Zealand?
            </dt>

            <dd className="text-gray-600">
              A 5.0 GPA is a solid B average and is considered satisfactory.
              It's often the minimum required to pass a degree. If you want a
              competitive edge for a Masters or Honours, you should aim for a
              GPA of 6.0 (B+) or better.
            </dd>
          </dl>

          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              Do my points-passed count towards my GPA?
            </dt>

            <dd className="text-gray-600">
              Your overall GPA is the average of all papers you attempt
              (including fails). However, the Total Points Passed is an
              important separate metric, as you need a certain number (usually
              360 for a 3-year degree) to graduate.
            </dd>
          </dl>

          <dl className="border-b border-gray-200 pb-4">
            <dt className="font-semibold text-gray-900 mb-2">
              Can I still get an Honours degree if I fail a paper?
            </dt>

            <dd className="text-gray-600">
              It depends on your university's rules. One failed paper won't
              automatically disqualify you if the rest of your GPA is high
              enough, but you may have to retake the paper or substitute it to
              meet the total required points.
            </dd>
          </dl>
        </div>
      </section>
      {/* Mobile Version */}
      {/* {/* <div className="lg:hidden mb-8">
        <div id="ezoic-pub-ad-placeholder-119"></div>
      </div> */}{' '}
      {/* Desktop Version */}
      {/* <div className="max-lg:hidden mb-8">
        <div id="ezoic-pub-ad-placeholder-122"></div>
      </div> */}
      {/* */}
      <div className="text-center p-6 bg-indigo-600 rounded-lg text-white">
        <h3 className="text-xl font-bold mb-2">
          Stop Guessing, Start Calculating!
        </h3>
        <p className="text-indigo-200">
          Scroll up and use our free tool to get your GPA instantly. Good luck
          with your studies!
        </p>
      </div>
    </div>
  );
};

export default NZContent;
