import Image from 'next/image';
import CGPAContent from './grade-calculator/cgpa/components/CGPAContent';
import RelatedLinks from '@/utils/RelatedLinks';
import CGPACalculator from './grade-calculator/cgpa/components/CGPACalculator';
import Link from 'next/link';
import { LinkIcon } from 'lucide-react';
import CGPACalculatorSchema from '@/JSON-LD Schemas/CGPACalculatorSchema';

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
      <div className="lg:col-span-2">
        <section className="bg-white rounded-lg md:shadow-xs p-0 md:p-8 md:border mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-6 flex items-center bg-gradient-to-b from-indigo-500 to-indigo-700 bg-clip-text text-transparent">
            CGPA Calculator
          </h1>
          <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-1">
            Enter Your Semester GPA & Credits
          </h2>
          <p className="text-slate-600 mb-8">Add each semester GPA & credits</p>

          <CGPACalculator />
        </section>
        <RelatedLinks />

        <div className="max-lg:hidden mb-8">
          <div id="ezoic-pub-ad-placeholder-104"></div>
        </div>

        {/* Info Section */}
        <div className="bg-white mt-8">
          <CGPAContent />
        </div>
      </div>
      <aside className="mt-10 lg:mt-0 order-1 max-lg:hidden">
        <div className="sticky top-6 space-y-8">
          <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
            <h4 className="font-bold text-lg text-indigo-900 mb-2">
              Related Calculators
            </h4>
            <ul className="space-y-1 text-indigo-600">
              <li>
                <Link
                  href="/grade-calculator/cgpa-percentage"
                  className="flex items-center  hover:underline"
                >
                  <LinkIcon size={15} className="mr-3" />
                  CGPA to Percentage Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/grade-calculator/cgpa-to-gpa"
                  className="flex items-center  hover:underline"
                >
                  <LinkIcon size={15} className="mr-3" />
                  CGPA to GPA Converter
                </Link>
              </li>
              <li>
                <Link
                  href="/grade-calculator/us"
                  className="flex items-center  hover:underline"
                >
                  <LinkIcon size={15} className="mr-3" />
                  US GPA Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/grade-calculator/uk"
                  className="flex items-center  hover:underline"
                >
                  <LinkIcon size={15} className="mr-3" />
                  UK Classification Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/grade-calculator/nz"
                  className="flex items-center  hover:underline"
                >
                  <LinkIcon size={15} className="mr-3" />
                  NZ GPA Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div id="ezoic-pub-ad-placeholder-114"></div>
        </div>
      </aside>
      <CGPACalculatorSchema />
    </div>
  );
}
