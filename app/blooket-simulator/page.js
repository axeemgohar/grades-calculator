// app/blooket-pack-simulator/page.js
'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import PackCard from './components/PackCard';
import ResultModal from './components/ResultModal';
import {
  selectRandomBlook,
  sellDuplicatesAndReopen,
} from '@/utils/blooketUtils';
import { packsData } from '@/utils/blooket-packs';
import Link from 'next/link';

export default function BlooketPackSimulator() {
  const [coins, setCoins] = useState(600);
  const [openOneAtATime, setOpenOneAtATime] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [currentPack, setCurrentPack] = useState(null);
  const [packsOpened, setPacksOpened] = useState(0);
  const [hasSoldDuplicates, setHasSoldDuplicates] = useState(false);
  const [additionalPacksOpened, setAdditionalPacksOpened] = useState(0);

  const handleCoinsChange = (e) => {
    const value = e.target.value;
    if (value === '' || parseInt(value) < 0) {
      setCoins('');
    } else {
      setCoins(parseInt(value));
    }
  };

  const handlePackClick = (pack) => {
    setCurrentPack(pack);
    setHasSoldDuplicates(false);
    setAdditionalPacksOpened(0);

    if (openOneAtATime) {
      // Open single pack
      const selectedBlook = selectRandomBlook(pack.blooks);
      setResults([selectedBlook]);
      setPacksOpened(1);
      setCoins((prev) => prev - pack.costTokens);
      toast.success(`Opened 1 ${pack.name}!`, { className: 'sonner-toast' });
    } else {
      // Open multiple packs until coins run out
      const openedBlooks = [];
      let remainingCoins = coins;
      let count = 0;

      while (remainingCoins >= pack.costTokens) {
        const selectedBlook = selectRandomBlook(pack.blooks);
        openedBlooks.push(selectedBlook);
        remainingCoins -= pack.costTokens;
        count++;
      }

      setResults(openedBlooks);
      setPacksOpened(count);
      setCoins(remainingCoins);
      toast.success(`Opened ${count} ${pack.name}${count > 1 ? 's' : ''}!`, {
        className: 'sonner-toast',
      });
    }

    setModalOpen(true);
  };

  const handleSellDuplicates = () => {
    const { finalBlooks, remainingCoins, totalAdditionalPacks } =
      sellDuplicatesAndReopen(results, currentPack, coins);

    const duplicatesSold =
      results.length - new Set(results.map((b) => b.name)).size;

    toast.success(
      `Sold duplicates and opened ${totalAdditionalPacks} more pack${
        totalAdditionalPacks !== 1 ? 's' : ''
      }!`,
      { className: 'sonner-toast' }
    );

    setResults(finalBlooks);
    setCoins(remainingCoins);
    setHasSoldDuplicates(true);
    setAdditionalPacksOpened(totalAdditionalPacks);

    // Check if still have duplicates after all reopening
    const finalDuplicates =
      finalBlooks.length - new Set(finalBlooks.map((b) => b.name)).size;
    if (finalDuplicates > 0) {
      toast.info('No more coins to eliminate remaining duplicates.');
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setResults([]);
    setCurrentPack(null);
    setPacksOpened(0);
    setHasSoldDuplicates(false);
    setAdditionalPacksOpened(0);
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        {/* Controls */}
        <section className=" mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between max-sm:items-end gap-6 border-b pb-6 mb-6 max-sm:gap-3 max-sm:mb-2">
            {/* Coin Input */}
            <div className="flex items-center gap-3 max-sm:justify-end">
              <label
                htmlFor="coins"
                className="text-lg font-semibold text-gray-700 flex-shrink-0"
              >
                Your Coins:
              </label>
              <div className="relative">
                <img
                  src="/assets/blooket/Token-DmrosBZF.svg"
                  width={28}
                  height={28}
                  alt="Coins"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl"
                />
                <input
                  id="coins"
                  type="number"
                  value={coins}
                  onChange={handleCoinsChange}
                  min="0"
                  className="pl-12 pr-4 py-3 w-64 max-sm:w-full text-xl font-bold border-2 border-indigo-500/50 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-300/50 bg-white"
                  aria-label="Number of coins available"
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-3">
              <input
                id="openOneAtATime"
                type="checkbox"
                checked={openOneAtATime}
                onChange={(e) => setOpenOneAtATime(e.target.checked)}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                aria-label="Open one pack at a time"
              />
              <label
                htmlFor="openOneAtATime"
                className="text-lg font-medium text-gray-700 cursor-pointer"
              >
                Open one at a time
              </label>
            </div>
          </div>
          {/* <div className="mb-4 rounded-md border border-red-200 bg-red-50 p-3">
            <p className="text-sm text-red-800 text-center">
              <span className="font-bold">Blizzard Pack</span> is coming around{' '}
              <span className="font-bold">Dec 3</span>, save up your coins for
              the Chroma!
            </p>
          </div> */}
          <div className="flex gap-8 max-sm:flex-col max-sm:gap-0">
            <Link
              href="/blooket/all-blooks"
              className="mt-4 block bg-indigo-500 px-4 sm:px-8 py-3 rounded-md text-white font-medium w-full text-center shadow-xs"
            >
              Blook Guarantee Predictor
            </Link>
            <Link
              href="/blooket/all-blooks"
              className="mt-4 block bg-indigo-100 px-4 sm:px-8 py-3 rounded-md text-indigo-700 font-medium w-full border shadow-xs border-indigo-200 text-center"
            >
              See All Blooks Unlocked
            </Link>
          </div>
        </section>

        {/* Pack Grid */}
        <section
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Available blook packs"
        >
          {packsData.packs.map((pack, index) => (
            <PackCard
              key={pack.packId}
              pack={pack}
              coins={coins}
              onPackClick={handlePackClick}
              packIndex={index}
            />
          ))}
        </section>

        {/* Footer Info */}
        <footer className="mt-12 text-center text-gray-500 text-sm max-sm:mt-8">
          <p>
            💡 Tip: Uncheck &quot;Open one at a time &quot; to spend all your
            coins on multiple packs!
          </p>
        </footer>
      </div>

      {/* Result Modal */}
      <ResultModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        results={results}
        packName={currentPack?.name}
        openedCount={packsOpened}
        onSellDuplicates={handleSellDuplicates}
        hasSoldDuplicates={hasSoldDuplicates}
        additionalPacksOpened={additionalPacksOpened}
      />
    </div>
  );
}
