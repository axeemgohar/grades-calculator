// Main Component

import BlooketGuaranteeCalculator from './components/BlooketGuaranteeCalculator';
export const metadata = {
  title: 'Blooket Pack Calculator - Calculate Your Blook Drop Chances',
  description:
    'Calculate your exact chances of getting rare Blooks in Blooket! Find out how many packs you need to open for Legendary, Chroma, and Epic Blooks. Free Blooket probability calculator with 90% guarantee predictions.',
  alternates: {
    canonical: 'https://calculatecgpa.com/blooket/blooket-pack-calculator',
  },

  openGraph: {
    images: '/opengraph-image.png',
  },
};
export default function BlooketCalculator() {
  return (
    <div className="lg:col-span-2">
      <section className="bg-white rounded-lg md:shadow-xs p-0 md:p-8 md:border mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-4 max-sm:mt-4 text-center bg-gradient-to-b from-indigo-500 to-indigo-700 bg-clip-text text-transparent">
          Blooket Pack Calculator
        </h1>
        <p className="text-slate-700 mb-12 text-center max-sm:px-2">
          Check if your coins are enough to grab a chroma, legendary, or epic
          blook!
        </p>
        <BlooketGuaranteeCalculator />
        {/* Desktop Version */}
        <div className="max-lg:hidden">
          <div id="ezoic-pub-ad-placeholder-122"></div>
        </div>
      </section>
    </div>
  );
}
