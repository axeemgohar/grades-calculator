import React from 'react';
import { RARITY_COLORS, RARITY_TEXT_COLORS } from '@/utils/blooketUtils';
import Image from 'next/image';

export default function BlookCard({ blook, isDuplicate }) {
  return (
    <div
      className={`flex-shrink-0 w-48 bg-white rounded-xl shadow-xs overflow-hidden border relative ${
        isDuplicate ? 'opacity-80' : 'border-gray-200'
      } hover:scale-105 transition-transform relative`}
    >
      {['Epic', 'Legendary', 'Chroma'].includes(blook.rarity) && (
        <span className="flex size-full absolute -left-1 -top-1 0">
          <span
            className={`"absolute inline-flex h-full w-full animate-ping animation-duration-2000 rounded-full ${
              RARITY_COLORS[blook.rarity]
            } opacity-75`}
          ></span>
        </span>
      )}
      {isDuplicate && (
        <div className="absolute top-3 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          DUPLICATE
        </div>
      )}
      <div className={`h-1.5  ${RARITY_COLORS[blook.rarity]}`}></div>
      <div className="p-4">
        <div className="w-full h-32 flex items-center justify-center mb-3 bg-gray-50 rounded-lg">
          {/* <div className="text-6xl">🎯</div> */}
          <Image
            src={blook.poster}
            alt={blook.name}
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
        </div>
        <h3 className="font-bold text-center text-gray-900 mb-1 text-sm">
          {blook.name}
        </h3>
        <p
          className={`text-center font-semibold text-xs ${
            RARITY_TEXT_COLORS[blook.rarity]
          }`}
        >
          {blook.rarity}
        </p>

        <div className="mt-2 text-center text-xs text-gray-500">
          Drop Rate: {blook.dropRatePct}%
        </div>
        {isDuplicate && (
          <div className="mt-2 text-center text-xs font-bold text-red-600">
            Sells for: 🪙 {blook.salePrice}
          </div>
        )}
      </div>
    </div>
  );
}
