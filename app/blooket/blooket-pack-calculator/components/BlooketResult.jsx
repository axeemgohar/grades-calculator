'use client';
import { Button } from '@/components/ui/button';
import {
  getRarityColor,
  getRarityGradient,
} from '@/lib/calculations/blooket-probability';
import { Info } from 'lucide-react';

const CircularProgress = ({ percentage, rarity }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  const color = getRarityGradient(rarity);

  return (
    <div className="relative w-48 h-48 mx-auto">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
        {/* Background circle */}
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke="#f0f0f0"
          strokeWidth="12"
        />
        {/* Progress circle */}
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      {/* Percentage text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl font-bold text-slate-800">{percentage}%</div>
          <div className="text-xs text-slate-500 mt-1">Chance</div>
        </div>
      </div>
    </div>
  );
};

const BlooketResult = ({ onRecalculate, result }) => {
  const {
    blookName,
    rarity,
    dropRate,
    packName,
    packCost,
    affordablePacks,
    currentChance,
    guaranteePacks,
    guaranteeCost,
    hasEnoughForGuarantee,
    tokensNeeded,
    tokens,
  } = result;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-slate-800">
          Your Blook Chances
        </h3>
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${getRarityColor(
            rarity
          )}`}
        >
          <span className="font-semibold">{blookName}</span>
          <span className="text-xs">({rarity})</span>
        </div>
      </div>

      {/* Circular Progress */}
      <CircularProgress percentage={currentChance} rarity={rarity} />

      {/* Stats Summary */}
      <div className="bg-slate-50 rounded-lg p-4 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-slate-600">Pack Selected:</span>
          <span className="font-semibold text-slate-800">{packName}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-slate-600">Your Tokens:</span>
          <span className="font-semibold text-slate-800">{tokens}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-slate-600">Packs You Can Open:</span>
          <span className="font-semibold text-slate-800">
            {affordablePacks}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-slate-600">Drop Rate:</span>
          <span className="font-semibold text-slate-800">{dropRate}%</span>
        </div>
      </div>

      {/* Total Chance Display */}
      <div className="text-center py-4 bg-indigo-50 rounded-lg border border-indigo-200">
        <div className="text-sm text-slate-600 mb-1">
          Total Chance with Your Tokens
        </div>
        <div className="text-3xl font-bold text-indigo-600">
          {currentChance}%
        </div>
      </div>

      {/* Guarantee Tip */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex gap-3">
          <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h4 className="font-semibold text-amber-900">90% Guarantee Tip</h4>
            <p className="text-sm text-amber-800">
              For a 90% chance of getting{' '}
              <span className="font-semibold">{blookName}</span>, you need to
              open <span className="font-semibold">{guaranteePacks} packs</span>
              , which costs{' '}
              <span className="font-semibold">{guaranteeCost} tokens</span>.
            </p>
            {!hasEnoughForGuarantee && (
              <p className="text-sm text-amber-700 mt-2">
                💡 You need{' '}
                <span className="font-semibold">
                  {tokensNeeded} more tokens
                </span>{' '}
                to reach the 90% guarantee threshold.
              </p>
            )}
            {hasEnoughForGuarantee && (
              <p className="text-sm text-green-700 mt-2">
                ✅ Great news! You have enough tokens to reach 90% guarantee!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Recalculate Button */}
      <Button onClick={onRecalculate} className="w-full py-6">
        Calculate Another Blook
      </Button>
    </div>
  );
};

export default BlooketResult;
