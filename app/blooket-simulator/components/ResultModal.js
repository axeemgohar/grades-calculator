import React from 'react';
import { X, Repeat } from 'lucide-react';
import BlookCard from './BlookCard';

export default function ResultModal({
  isOpen,
  onClose,
  results,
  packName,
  openedCount,
  onSellDuplicates,
  hasSoldDuplicates,
  additionalPacksOpened,
}) {
  if (!isOpen) return null;

  // Check if there are duplicates
  const blookNames = results.map((b) => b.name);
  const hasDuplicates = blookNames.length !== new Set(blookNames).size;

  // Mark duplicates for visual indication (only if haven't sold yet)
  const seen = new Set();
  const resultsWithDuplicateFlag = results.map((blook) => {
    const isDuplicate = seen.has(blook.name);
    seen.add(blook.name);
    return { ...blook, isDuplicate: isDuplicate && !hasSoldDuplicates };
  });

  const totalPacksOpened = openedCount + (additionalPacksOpened || 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-b from-indigo-400 to-indigo-500 p-6 text-white relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-1 right-1 p-2 hover:bg-white hover:text-red-600 rounded-full transition cursor-pointer"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
          <h2 className="text-2xl font-bold mb-1 max-sm:text-xl">
            {totalPacksOpened === 1
              ? `You opened a ${packName}!`
              : `You opened ${totalPacksOpened} ${packName}${
                  totalPacksOpened > 1 ? 's' : ''
                } and got:`}
          </h2>
          <p className="text-blue-100">Total Blooks: {results.length}</p>
          {additionalPacksOpened > 0 && (
            <p className="text-yellow-200 font-semibold mt-1">
              ✨ +{additionalPacksOpened} extra packs opened from selling
              duplicates!
            </p>
          )}
        </div>

        {/* Results */}
        <div className="p-6 overflow-x-auto flex-1">
          <div className="flex gap-4 pb-4">
            {resultsWithDuplicateFlag.map((blook, index) => (
              <BlookCard
                key={`${blook.name}-${index}`}
                blook={blook}
                isDuplicate={blook.isDuplicate}
              />
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-gray-200 p-6 bg-gray-50 flex-shrink-0">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {hasDuplicates && !hasSoldDuplicates && openedCount > 1 && (
              <button
                onClick={onSellDuplicates}
                className="px-12 py-3 bg-emerald-600 text-white font-medium rounded-md hover:shadow-lg transition flex items-center gap-2 justify-center cursor-pointer max-sm:w-full max-sm:px-4"
              >
                <Repeat size={20} />
                Sell Duplicates & Reopen Packs
              </button>
            )}
            <button
              onClick={onClose}
              className="px-12 py-3 bg-indigo-500 text-white font-medium rounded-md hover:shadow-lg transition cursor-pointer max-sm:w-full max-sm:px-4"
            >
              Simulate Again
            </button>
          </div>
          {hasDuplicates && !hasSoldDuplicates && openedCount > 1 && (
            <p className="text-center text-sm text-gray-500 mt-3">
              💡 Sell duplicate blooks to earn coins and open more packs. This
              might increase the chance to get legendary blooks.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
