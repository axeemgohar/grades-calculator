import { Lock } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { toast } from 'sonner';

export default function PackCard({ pack, coins, onPackClick, packIndex }) {
  const canAfford = coins >= pack.costTokens;

  const handleClick = () => {
    if (!canAfford) {
      toast.error(
        `Not enough coins! You need ${pack.costTokens} coins to open this pack.`,
        { className: 'sonner-toast' }
      );
      return;
    }
    onPackClick(pack);
  };

  return (
    <div
      onClick={handleClick}
      className={`relative rounded-md overflow-hidden transition-all duration-300 cursor-pointer
        ${canAfford ? 'hover:scale-105 ' : 'cursor-not-allowed'}`}
    >
      <div className="text-center">
        <Image
          src={pack.poster}
          alt={pack.name}
          width={200}
          height={200}
          className="mx-auto  shadow-lg hover:shadow-2xl"
          quality={100}
          loading={packIndex < 3 ? 'eager' : 'lazy'}
        />
      </div>
      {!canAfford && (
        <div className="absolute inset-0 bg-gray-900/40 bg-opacity-30 flex flex-col items-center justify-center">
          <Lock color="#fff" />
          <span className="text-white font-bold text-lg">Locked</span>
        </div>
      )}
    </div>
  );
}
