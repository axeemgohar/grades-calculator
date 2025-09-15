import { Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

const CalculatorLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
      {children}
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
            </ul>
          </div>
          {/* <div className="w-full min-h-[600px] bg-slate-200 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300">
            <span className="text-slate-500 font-medium text-center p-4">
              Sidebar Ad
              <br />
              (e.g., 300x250, 300x600)
            </span>
          </div> */}
        </div>
      </aside>
    </div>
  );
};

export default CalculatorLayout;
