'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  calculateBlooketGuarantee,
  getRarityColor,
} from '@/lib/calculations/blooket-probability';
import { useState } from 'react';
import { blooketGuaranteeSchema } from '@/lib/validationSchemas';
import { toast } from 'sonner';
import BlooketResult from './BlooketResult';

import { packsData } from '@/utils/blooket-packs';

const BlooketGuaranteeCalculator = () => {
  const [tokens, setTokens] = useState('');
  const [selectedPackId, setSelectedPackId] = useState('');
  const [selectedBlookName, setSelectedBlookName] = useState('');
  const [result, setResult] = useState(null);

  // Get available blooks for selected pack
  const getBlooksForPack = () => {
    if (!selectedPackId) return [];
    const pack = packsData.packs.find((p) => p.packId === selectedPackId);
    return pack ? pack.blooks : [];
  };

  // Group blooks by rarity
  const groupedBlooks = () => {
    const blooks = getBlooksForPack();
    const grouped = {
      Uncommon: [],
      Rare: [],
      Epic: [],
      Legendary: [],
      Chroma: [],
    };

    blooks.forEach((blook) => {
      if (grouped[blook.rarity]) {
        grouped[blook.rarity].push(blook);
      }
    });

    return grouped;
  };

  // Handle form submission
  const handleCalculation = (event) => {
    event.preventDefault();

    const calculationData = {
      tokens: parseFloat(tokens),
      packId: selectedPackId,
      blookName: selectedBlookName,
    };

    const validation = blooketGuaranteeSchema.safeParse(calculationData);

    if (!validation.success) {
      const firstIssue = validation.error.issues[0];
      toast.error(firstIssue.message, {
        duration: 4000,
        className: 'sonner-toast',
      });
      return;
    }

    // Find pack and blook data
    const pack = packsData.packs.find((p) => p.packId === selectedPackId);
    const blook = pack.blooks.find((b) => b.name === selectedBlookName);

    if (!pack || !blook) {
      toast.error('Invalid pack or blook selection', {
        duration: 4000,
        className: 'sonner-toast',
      });
      return;
    }

    // Calculate results
    const calculatedResult = calculateBlooketGuarantee(
      calculationData.tokens,
      pack.costTokens,
      blook.dropRatePct
    );

    setResult({
      ...calculatedResult,
      tokens: calculationData.tokens,
      packName: pack.name,
      packCost: pack.costTokens,
      blookName: blook.name,
      rarity: blook.rarity,
      dropRate: blook.dropRatePct,
    });

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const reCalculate = () => {
    setResult(null);
  };

  // Reset blook selection when pack changes
  const handlePackChange = (packId) => {
    setSelectedPackId(packId);
    setSelectedBlookName('');
  };

  return (
    <>
      {!result ? (
        <form onSubmit={handleCalculation} className="space-y-6">
          {/* Tokens Input Field */}
          <div className="w-full">
            <label
              htmlFor="tokens"
              className="block max-sm:text-sm font-medium text-slate-700 mb-2"
            >
              How Many Tokens Do You Have?
            </label>
            <div className="relative">
              <img
                src="/assets/blooket/Token-DmrosBZF.svg"
                width={20}
                height={20}
                alt="Coins"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl"
              />
              <Input
                type="number"
                id="tokens"
                value={tokens}
                onChange={(e) => setTokens(e.target.value)}
                placeholder="2500"
                step="1"
                min="1"
                className="w-full border-indigo-500/50 focus:ring-indigo-500 rounded-sm h-full py-3 indent-7 placeholder:text-gray-800"
                required
              />
            </div>
          </div>

          {/* Pack Selector */}
          <div className="w-full">
            <label
              htmlFor="pack"
              className="block max-sm:text-sm font-medium text-slate-700 mb-2"
            >
              Select Blook Pack
            </label>
            <Select value={selectedPackId} onValueChange={handlePackChange}>
              <SelectTrigger className="w-full border-indigo-500/50 focus:ring-indigo-500">
                <SelectValue placeholder="Choose a pack to open" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Available Packs</SelectLabel>
                  {packsData.packs.map((pack) => (
                    <SelectItem key={pack.packId} value={pack.packId}>
                      <img src={pack.poster} alt={pack.name} width={20} />
                      {pack.name} - {pack.costTokens} tokens
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Blook Selector (only show if pack is selected) */}
          {selectedPackId && (
            <div className="w-full">
              <label
                htmlFor="blook"
                className="block max-sm:text-sm font-medium text-slate-700 mb-2"
              >
                Select Target Blook
              </label>
              <Select
                value={selectedBlookName}
                onValueChange={setSelectedBlookName}
              >
                <SelectTrigger className="w-full border-indigo-500/50 focus:ring-indigo-500">
                  <SelectValue placeholder="Choose the blook you want" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(groupedBlooks()).map(
                    ([rarity, blooks]) =>
                      blooks.length > 0 && (
                        <SelectGroup key={rarity}>
                          <SelectLabel className={getRarityColor(rarity)}>
                            {rarity}
                          </SelectLabel>
                          {blooks.map((blook) => (
                            <SelectItem key={blook.name} value={blook.name}>
                              <img
                                src={blook.poster}
                                alt={blook.name}
                                width={20}
                              />
                              {blook.name} ({blook.dropRatePct}%)
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      )
                  )}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Calculate Button */}
          <Button
            className="w-full"
            type="submit"
            disabled={!tokens || !selectedPackId || !selectedBlookName}
          >
            Calculate My Chances
          </Button>
        </form>
      ) : (
        <BlooketResult onRecalculate={reCalculate} result={result} />
      )}
    </>
  );
};

export default BlooketGuaranteeCalculator;
