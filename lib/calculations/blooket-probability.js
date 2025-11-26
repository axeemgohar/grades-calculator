// Blooket probability calculations

/**
 * Calculate the probability of getting a specific blook after opening N packs
 * Formula: 1 - (1 - dropRate)^N
 */
export const calculateProbability = (dropRate, numberOfPacks) => {
  const probability = 1 - Math.pow(1 - dropRate / 100, numberOfPacks);
  return Number((probability * 100).toFixed(2));
};

/**
 * Calculate expected number of packs needed (50% chance)
 * Formula: ln(0.5) / ln(1 - dropRate)
 */
export const calculateExpectedPacks = (dropRate) => {
  const expected = Math.log(0.5) / Math.log(1 - dropRate / 100);
  return Math.ceil(expected);
};

/**
 * Calculate packs needed for a given confidence level (default 90%)
 * Formula: ln(1 - confidence) / ln(1 - dropRate)
 */
export const calculatePacksForGuarantee = (dropRate, confidence = 0.9) => {
  const packs = Math.log(1 - confidence) / Math.log(1 - dropRate / 100);
  return Math.ceil(packs);
};

/**
 * Calculate how many packs user can afford
 */
export const calculateAffordablePacks = (tokens, packCost) => {
  return Math.floor(tokens / packCost);
};

/**
 * Main calculation function
 */
export const calculateBlooketGuarantee = (tokens, packCost, dropRate) => {
  const affordablePacks = calculateAffordablePacks(tokens, packCost);
  const currentChance = calculateProbability(dropRate, affordablePacks);
  const expectedPacks = calculateExpectedPacks(dropRate);
  const guaranteePacks = calculatePacksForGuarantee(dropRate, 0.9);
  const guaranteeCost = guaranteePacks * packCost;

  return {
    affordablePacks,
    currentChance,
    expectedPacks,
    guaranteePacks,
    guaranteeCost,
    hasEnoughForGuarantee: tokens >= guaranteeCost,
    tokensNeeded: Math.max(0, guaranteeCost - tokens),
  };
};

/**
 * Get rarity color for UI
 */
export const getRarityColor = (rarity) => {
  const colors = {
    Uncommon: 'text-green-600 bg-green-50 border-green-200',
    Rare: 'text-blue-600 bg-blue-50 border-blue-200',
    Epic: 'text-purple-600 bg-purple-50 border-purple-200',
    Legendary: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    Chroma: 'text-red-600 bg-red-50 border-red-200',
  };
  return colors[rarity] || 'text-gray-600 bg-gray-50 border-gray-200';
};

/**
 * Get rarity gradient for circular progress
 */
export const getRarityGradient = (rarity) => {
  const gradients = {
    Uncommon: '#10b981', // green
    Rare: '#3b82f6', // blue
    Epic: '#a855f7', // purple
    Legendary: '#eab308', // yellow/gold
    Chroma: '#ef4444', // red
  };
  return gradients[rarity] || '#6366f1';
};
