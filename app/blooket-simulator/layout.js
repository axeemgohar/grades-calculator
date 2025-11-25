import { LinkIcon } from 'lucide-react';
import Link from 'next/link';
export const metadata = {
  title: 'Blooket Pack Opening Simulator',
  description:
    'Simulate opening Blooket packs and discover which rare, epic, and legendary blooks you can collect. Free online Blooket pack simulator.',
  alternates: {
    canonical: 'https://calculatecgpa.com/blooket-simulator',
  },

  openGraph: {
    images: '/opengraph-image.png',
  },
};
const BlooketPacksLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
      <section className="bg-white mb-8 lg:col-span-2 max-lg:mb-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-2 flex items-center bg-gradient-to-b from-indigo-500 to-indigo-700 bg-clip-text text-transparent">
          Blooket Pack Simulator
        </h1>

        <p className="text-slate-600 mb-2">
          See how you can wisely spend your coins to maximize your blook
          collection!
        </p>

        {children}
      </section>

      <aside className="mt-10 lg:mt-0 order-1 max-lg:mt-0 mb-8">
        <div className="sticky top-6 space-y-8">
          <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
            <h4 className="font-bold text-lg text-indigo-900 mb-2">
              More from Gradian
            </h4>
            <ul className="space-y-1 text-indigo-600">
              <li>
                <Link
                  href="/blooket/all-blooks"
                  className="flex items-center  hover:underline"
                >
                  <LinkIcon size={15} className="mr-3" />
                  All Blooket Blooks Unlocked
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
          <div
            id="ezoic-pub-ad-placeholder-114"
            className="max-lg:hidden"
          ></div>
          <div id="ezoic-pub-ad-placeholder-115" className="lg:hidden"></div>
        </div>
      </aside>
    </div>
  );
};
export default BlooketPacksLayout;
