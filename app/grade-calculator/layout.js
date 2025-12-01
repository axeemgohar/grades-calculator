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
                  href="/grade-calculator/ch"
                  className="flex items-center hover:underline"
                >
                  <LinkIcon size={15} className="mr-3" />
                  Schweiz Notenrechner
                </Link>
              </li>
              <li>
                <Link
                  href="/grade-calculator/germany"
                  className="flex items-center hover:underline"
                >
                  <LinkIcon size={15} className="mr-3" />
                  Notendurchschnitt Rechner
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
    </div>
  );
};

export default CalculatorLayout;
