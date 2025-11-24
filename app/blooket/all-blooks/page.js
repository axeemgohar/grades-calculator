// Main Component
import { packsData } from '@/utils/blooket-packs';
import PackSection from './components/PackSection';
export const metadata = {
  title: 'Blooket - All Blooks Unlocked',
  description:
    'Browse all Blooket blooks in one place! View every blook from Medieval, Space, Breakfast, Safari packs and more. See rarities, prices, and stats for all characters.',
  alternates: {
    canonical: 'https://calculatecgpa.com/blooket/all-blooks',
  },

  openGraph: {
    images: '/opengraph-image.png',
  },
};
export default function AllBlooksUnlocked() {
  return (
    <div className="lg:col-span-2">
      <section className="bg-indigo-50 border-indigo-500/50 rounded-lg md:shadow-xs p-4 md:p-8 border mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-4 max-sm:mt-4 text-center bg-gradient-to-b from-indigo-500 to-indigo-700 bg-clip-text text-transparent">
          Blooket - All Blooks
        </h1>
        <p className="text-slate-700 mb-12 text-center max-sm:px-2">
          Click on a blook to view rarity, blook score and sale price.
        </p>

        {packsData.packs.map((pack, index) => (
          <div key={pack.packId}>
            <PackSection key={pack.packId} pack={pack} />
            {index === 3 && (
              <div>
                <div className="max-lg:hidden mb-8">
                  <div id="ezoic-pub-ad-placeholder-104"></div>
                </div>

                {/* Mobile Version */}
                <div className="lg:hidden mb-8">
                  <div id="ezoic-pub-ad-placeholder-117"></div>
                </div>
              </div>
            )}
            {index === 7 && (
              <div>
                <div className="max-lg:hidden mb-8">
                  <div id="ezoic-pub-ad-placeholder-118"></div>
                </div>

                {/* Mobile Version */}
                <div className="lg:hidden mb-8">
                  <div id="ezoic-pub-ad-placeholder-121"></div>
                </div>
              </div>
            )}
          </div>
        ))}
        {/* Desktop Version */}
        <div className="max-lg:hidden">
          <div id="ezoic-pub-ad-placeholder-122"></div>
        </div>
      </section>
    </div>
  );
}
