import {
  Users,
  Globe,
  Lightbulb,
  Target,
  TrendingUp,
  Heart,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us - Gradian',
  description:
    'Our Calculator is a tool designed to simplify grades calculation worldwide. Learn about our mission to empower students in achieving academic success effortlessly.',
  alternates: {
    canonical: 'https://calculatecgpa.com/about-us',
  },
};
const AboutUsContent = () => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="md:mb-16 mb-12  ">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-indigo-500 to-indigo-700 bg-clip-text text-transparent mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed   mx-auto px-2">
            We're here to make grade calculations simple, accurate, and
            stress-free for students worldwide. No more confusing interfaces or
            overwhelming tools and just clean, easy-to-use calculators all in
            one place.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Lightbulb className="text-indigo-600 mr-3 shrink-0" />
          How Gradian Started
        </h2>

        <div className="bg-indigo-50 border-l-4 border-indigo-300 md:p-6 p-4 rounded-r-lg mb-6">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            When I was in university, my friends and I were constantly trying to
            calculate and forecast our grades. We'd spend hours figuring out
            what we needed on finals, converting between different grading
            systems, and planning our academic goals.
          </p>
          <p className="text-gray-700 text-base md:text-lg  leading-relaxed mb-4">
            The problem? Every calculator we found was either confusing,
            outdated, or just plain overwhelming to use. Complex interfaces,
            unclear instructions, and tools that seemed designed by people who
            forgot what it's like to be a stressed student.
          </p>
          <p className="text-gray-700 text-base md:text-lg  leading-relaxed">
            So I thought:{' '}
            <span className="font-semibold text-indigo-600">
              "Why not build something better?"
            </span>{' '}
            Something clean, simple, and actually helpful for students who just
            want quick, accurate answers.
          </p>
        </div>

        <div className="text-center">
          <p className="text-gray-600">
            That's how Gradian was born, by students, for students.
          </p>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className=" rounded-lg border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Globe className="text-green-600 mr-3 shrink-0" />
          Students Worldwide Trust Gradian
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
          <div className="bg-white rounded-lg p-4 text-center border border-indigo-200">
            <Users className="text-green-600 w-8 h-8 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900 mb-1">
              High School Students
            </h3>
            <p className="text-gray-600 text-sm">
              Planning for college applications and tracking academic progress
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center border border-indigo-200">
            <Target className="text-blue-600 w-8 h-8 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900 mb-1">
              University Students
            </h3>
            <p className="text-gray-600 text-sm">
              Managing coursework and forecasting final grades
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center border border-indigo-200">
            <TrendingUp className="text-purple-600 w-8 h-8 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900 mb-1">
              International Students
            </h3>
            <p className="text-gray-600 text-sm">
              Converting grades between different educational systems
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-white rounded-lg shadow-xs border border-gray-200 p-6 md:p-8 mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Heart className="text-pink-600 mr-3 shrink-0" />
          What We Believe In
        </h2>

        <div className="space-y-4">
          <div className="flex items-start p-4 bg-pink-50 rounded-lg border border-pink-200">
            <CheckCircle className="text-pink-600 w-6 h-6 mr-3 mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-pink-900 mb-1">
                Simplicity First
              </h3>
              <p className="text-pink-700 text-sm">
                Academic tools should be intuitive, not confusing. We design
                every feature with real students in mind.
              </p>
            </div>
          </div>

          <div className="flex items-start p-4 bg-blue-50 rounded-lg border border-blue-200">
            <CheckCircle className="text-blue-600 w-6 h-6 mr-3 mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">
                Accuracy Matters
              </h3>
              <p className="text-blue-700 text-sm">
                Your grades are important. We ensure our calculations are
                precise and reliable, so you can make informed decisions.
              </p>
            </div>
          </div>

          <div className="flex items-start p-4 bg-green-50 rounded-lg border border-green-200">
            <CheckCircle className="text-green-600 w-6 h-6 mr-3 mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-green-900 mb-1">Always Free</h3>
              <p className="text-green-700 text-sm">
                Education tools should be accessible to everyone. All our
                calculators are completely free to use.
              </p>
            </div>
          </div>

          <div className="flex items-start p-4 bg-purple-50 rounded-lg border border-purple-200">
            <CheckCircle className="text-purple-600 w-6 h-6 mr-3 mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-purple-900 mb-1">
                Continuous Improvement
              </h3>
              <p className="text-purple-700 text-sm">
                We're always listening to student feedback and adding new
                features to make your academic journey easier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center bg-indigo-500 rounded-lg text-white p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold mb-3">
          Join Millions of Students
        </h3>
        <p className="text-indigo-50 mb-4  md:text-xl">
          Ready to take control of your grades? Start calculating today and see
          why students worldwide choose Gradian for their academic planning.
        </p>

        <Link
          href="/contact-us"
          className="mt-6 p-4 bg-white bg-opacity-10 rounded-lg block"
        >
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-gray-800 font-semibold">
              Got feedback or questions?
            </span>
          </div>
          <p className="text-gray-700 text-sm">
            We'd love to hear from you! Your input helps us build better tools
            for students everywhere.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AboutUsContent;
