// Blook Modal Component
import { X, Coins } from 'lucide-react';

export default function BlookModal({ blook, onClose, pack }) {
  // Rarity color configurations

  if (!blook) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-xs bg-indigo-950/30 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-b from-indigo-400 to-indigo-600 rounded-lg p-8 w-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-1 right-1 p-2 text-white hover:bg-white hover:text-red-600 rounded-full transition cursor-pointer"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Blook Image */}
          <div className=" bg-gray-100 rounded-3xl p-8 w-full md:w-1/2 aspect-square flex items-center justify-center relative overflow-hidden">
            {/* Castle background pattern - simplified */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute bottom-0 left-0 right-0 h-1/2 "></div>
            </div>

            <img
              src={blook.poster}
              alt={blook.name}
              className="w-3/4 h-3/4 object-contain relative z-10"
            />
          </div>

          {/* Blook Info */}
          <div className="flex-1 text-white w-full md:aspect-square flex flex-col">
            <p className="max-md:text-sm mb-2 text-indigo-50 bg-indigo-800 w-fit px-4 py-1 rounded-lg uppercase">
              {pack}
            </p>
            <h2 className="max-md:text-3xl text-4xl font-bold mb-6">
              {blook.name}
            </h2>

            {/* Pack name would go here if we had it in context */}

            {/* Rarity and Stats */}
            <div className="flex gap-3 mb-8 flex-wrap">
              <div className="text-white bg-indigo-950/30  px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                <img
                  src="/assets/blooket/rare.efca39f2.svg"
                  width={20}
                  height={20}
                  className="text-xl"
                />
                {blook.rarity}
              </div>
              <div className="bg-indigo-950/30 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                <img
                  src="/assets/blooket/Token-DmrosBZF.svg"
                  width={20}
                  height={20}
                  className="text-xl"
                />

                {blook.salePrice}
              </div>
              <div className="bg-indigo-950/30 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                <img
                  src="/assets/blooket/score.c7490e53.svg"
                  width={20}
                  height={20}
                  className="text-xl"
                />
                {blook.blookScore}
              </div>
            </div>

            {/* Sell Button */}
            <button
              onClick={onClose}
              className="bg-indigo-50 hover:bg-indigo-100 text-indigo-600 cursor-pointer font-bold py-4 px-8 rounded-lg w-full text-xl inline-flex items-center justify-center gap-3 transition-colors mt-auto"
            >
              <span>Sell 1 for</span>
              <img
                src="/assets/blooket/Token-DmrosBZF.svg"
                width={24}
                height={24}
                className="text-xl"
              />
              <span>{blook.salePrice}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
