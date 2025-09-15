'use client';
import { useState } from 'react';
import { Check, ChevronsUpDown, Globe, Info } from 'lucide-react';
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
import { countriesData } from '@/utils/countryData';

const CountrySelector = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  // Sort countries alphabetically and prepare for combobox
  const sortedCountries = countriesData
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((country) => ({
      value: country.name.toLowerCase().replace(/\s+/g, '-'),
      label: country.name,
      data: country,
    }));

  const selectedCountry = value
    ? sortedCountries.find((country) => country.value === value)
    : null;

  return (
    <div>
      <div className="w-80 ms-auto">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between h-full mb-4 text-gray-800 border-indigo-500/50 border  hover:bg-gray-50"
            >
              {value ? (
                <span className="flex items-center gap-2 truncate">
                  {selectedCountry.label}
                </span>
              ) : (
                'Select your country...'
              )}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
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
                      onSelect={(currentValue) => {
                        const newValue = country.value;
                        setValue(newValue === value ? '' : newValue);

                        setOpen(false);
                      }}
                    >
                      <div className="flex flex-col items-start flex-1">
                        <span>{country.label}</span>
                      </div>
                      <Check
                        className={cn(
                          'ml-auto h-4 w-4',
                          value === country.value ? 'opacity-100' : 'opacity-0'
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
      {selectedCountry && (
        <div className="rounded-sm border border-purple-300 bg-purple-50 p-4 mb-4">
          <div className="flex items-center gap-2 mb-4">
            <Info strokeWidth={1.5} className="text-purple-700" />
            {/* <div className="w-2 h-2 rounded-full bg-purple-500"></div> */}
            <h4 className="font-medium text-purple-900 text-base">
              Usage example for {selectedCountry.label}:
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {selectedCountry.data.examples.map((example, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white/70 rounded-md px-3 py-3 border border-purple-300"
              >
                <span className="text-sm text-gray-700 ">
                  Semester {example.semester} GPA:{' '}
                  <span className="font-semibold text-gray-600">
                    {example.gpa}
                  </span>
                </span>
                <span className="text-gray-600 text-sm ">
                  Credits:{' '}
                  <span className="font-semibold text-gray-600">
                    {example.credits}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountrySelector;
