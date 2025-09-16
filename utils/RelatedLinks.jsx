import { LinkIcon } from 'lucide-react';
import Link from 'next/link';

const RelatedLinks = () => {
  return (
    <aside className="mt-10 lg:mt-0 lg:hidden">
      <div className="mb-8">
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
      </div>

      <div id="ezoic-pub-ad-placeholder-115"></div>
    </aside>
  );
};

export default RelatedLinks;
