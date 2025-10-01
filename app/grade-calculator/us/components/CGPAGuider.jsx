'use client';
import { useState } from 'react';
import { Check, ChevronsUpDown, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { countryData } from '@/utils/countryData';
import Link from 'next/link';

const CountrySelector = ({
  selectedCountry,
  onCountrySelect,
  showExample,
  currentExample,
}) => {
  const [open, setOpen] = useState(false);
  console.log(currentExample);

  // Convert countryData to array format for the selector
  const sortedCountries = Object.keys(countryData)
    .map((countryName) => ({
      value: countryName.toLowerCase().replace(/\s+/g, '-'),
      label: countryName,
      name: countryName,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

  const selectedCountryData = selectedCountry
    ? sortedCountries.find((country) => country.name === selectedCountry)
    : null;

  const handleSelect = (countryName) => {
    const newSelection = countryName === selectedCountry ? '' : countryName;
    onCountrySelect(newSelection);
    setOpen(false);
  };

  return (
    <div>
      <div className="w-80 ms-auto">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between h-full mb-2 text-gray-800 border-indigo-500/50 border hover:bg-gray-50 relative"
            >
              <span className="flex size-3 absolute -left-1 -top-1">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-purple-500"></span>
              </span>
              {selectedCountry ? (
                <span className="flex items-center gap-2 truncate">
                  {selectedCountry}
                </span>
              ) : (
                'Select your country...'
              )}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <Link
            prefetch={false}
            href="/contact-us"
            className="text-blue-600 block text-right mb-4 text-sm underline"
          >
            Want us to add your country?
          </Link>
          <PopoverContent className="w-80 p-0" avoidCollisions={false}>
            <Command>
              <CommandInput placeholder="Search countries..." className="h-9" />
              <CommandList>
                <CommandEmpty>No country found.</CommandEmpty>
                <CommandGroup>
                  {sortedCountries.map((country) => (
                    <CommandItem
                      key={country.value}
                      value={country.label}
                      onSelect={() => handleSelect(country.name)}
                    >
                      <div className="flex flex-col items-start flex-1">
                        <span>{country.label}</span>
                      </div>
                      <Check
                        className={cn(
                          'ml-auto h-4 w-4',
                          selectedCountry === country.name
                            ? 'opacity-100'
                            : 'opacity-0'
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* Example Display */}
      {showExample && currentExample && selectedCountry && (
        <div className="rounded-sm border border-purple-300 bg-purple-50 p-4 mb-4">
          <div className="flex items-center gap-2 mb-4">
            <Info strokeWidth={1.5} className="text-purple-700" />
            <h4 className="font-medium text-purple-900 text-base">
              Usage example for {selectedCountry}:
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center justify-between bg-white/70 rounded-md px-3 py-3 border border-purple-300">
              <span className="text-sm text-gray-700 ">
                {currentExample.semester1.GPATerm}:{' '}
                <span className="font-semibold text-gray-600">
                  {currentExample.semester1.gpa}
                </span>
              </span>
              <span className="text-gray-600 text-sm ">
                {currentExample.semester1.creditsTerm}:{' '}
                <span className="font-semibold text-gray-600">
                  {currentExample.semester1.credits}
                </span>
              </span>
            </div>
            <div className="flex items-center justify-between bg-white/70 rounded-md px-3 py-3 border border-purple-300">
              <span className="text-sm text-gray-700 ">
                {currentExample.semester2.GPATerm}:{' '}
                <span className="font-semibold text-gray-600">
                  {currentExample.semester2.gpa}
                </span>
              </span>
              <span className="text-gray-600 text-sm ">
                {currentExample.semester2.creditsTerm}:{' '}
                <span className="font-semibold text-gray-600">
                  {currentExample.semester2.credits}
                </span>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountrySelector;
