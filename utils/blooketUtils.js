// Probability Engine - Weighted Random Selection
export const selectRandomBlook = (blooks) => {
  const random = Math.random() * 100;
  let cumulative = 0;

  for (const blook of blooks) {
    cumulative += blook.dropRatePct;
    if (random <= cumulative) {
      return { ...blook };
    }
  }

  return { ...blooks[blooks.length - 1] };
};

// Sell Duplicates and Keep Opening Until No Duplicates
export const sellDuplicatesAndReopen = (
  initialBlooks,
  pack,
  availableCoins
) => {
  let currentBlooks = [...initialBlooks];
  let remainingCoins = availableCoins;
  let totalAdditionalPacks = 0;
  let iterations = 0;
  const maxIterations = 100; // Safety limit

  while (iterations < maxIterations) {
    // Find duplicates
    const uniqueMap = new Map();
    const duplicates = [];

    currentBlooks.forEach((blook) => {
      if (uniqueMap.has(blook.name)) {
        duplicates.push(blook);
      } else {
        uniqueMap.set(blook.name, blook);
      }
    });

    // If no duplicates, we're done
    if (duplicates.length === 0) {
      break;
    }

    // Sell duplicates
    const coinsEarned = duplicates.reduce(
      (sum, blook) => sum + blook.salePrice,
      0
    );
    remainingCoins += coinsEarned;

    // Keep only unique blooks
    currentBlooks = Array.from(uniqueMap.values());

    // Open more packs with earned coins
    let packsOpenedThisRound = 0;
    while (remainingCoins >= pack.costTokens) {
      const newBlook = selectRandomBlook(pack.blooks);
      currentBlooks.push(newBlook);
      remainingCoins -= pack.costTokens;
      packsOpenedThisRound++;
      totalAdditionalPacks++;
    }

    // If we couldn't open any packs, we're done
    if (packsOpenedThisRound === 0) {
      break;
    }

    iterations++;
  }

  return {
    finalBlooks: currentBlooks,
    remainingCoins,
    totalAdditionalPacks,
  };
};

// Rarity color mapping
export const RARITY_COLORS = {
  Uncommon: 'bg-green-400',
  Rare: 'bg-blue-400',
  Epic: 'bg-purple-400',
  Legendary: 'bg-yellow-400',
};

export const RARITY_TEXT_COLORS = {
  Uncommon: 'text-green-600',
  Rare: 'text-blue-600',
  Epic: 'text-purple-600',
  Legendary: 'text-yellow-600',
};
