'use client';
import { useState } from 'react';
import { Menu, X, ChevronDown, Calculator } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    calculators: false,
  });

  const toggleMobileDropdown = (dropdown) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  const calculatorItems = [
    {
      label: 'UK Classification Calculator',
      href: '/grade-calculator/uk',
      description: 'Calculate UK university grades and classifications',
    },
    {
      label: 'US GPA Calculator',
      href: '/grade-calculator/us',
      description: 'Calculate US GPA and letter grades',
    },
    {
      label: 'NZ GPA Calculator',
      href: '/grade-calculator/nz',
      description: 'Calculate New Zealand GPA (9-point scale)',
    },
    {
      label: 'CGPA to Percentage',
      href: '/grade-calculator/cgpa-percentage',
      description: 'Convert CGPA to percentage and Percentage to CGPA',
    },
    {
      label: 'CGPA to GPA',
      href: '/grade-calculator/cgpa-to-gpa',
      description: 'Convert CGPA to GPA on any scale',
    },
  ];

  const staticPages = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ];

  return (
    <header className="w-full border-b bg-white mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex gap-2 items-center text-xl font-bold bg-gradient-to-b from-indigo-500 to-indigo-700 text-transparent bg-clip-text hover:text-indigo-700 transition-colors"
              aria-label="Home"
              prefetch={false}
            >
              <Image
                src="/assets/logo/Gradian-Logo-cropped.svg"
                height={36}
                width={30}
                className="md:h-9 w-auto h-7"
                alt="Gradian Logo"
                priority
                unoptimized
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Grade Calculators Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base cursor-pointer font-medium text-gray-900 hover:!text-indigo-600 hover:!bg-indigo-50">
                    Grade Calculators
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-1 w-[400px] lg:w-[500px] ">
                      {calculatorItems.map((item) => (
                        <li key={item.label}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none text-indigo-600   space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent"
                            >
                              <div className="text-sm font-medium leading-none">
                                {item.label}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Static Pages */}
                {staticPages.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <Link
                      prefetch={false}
                      href={item.href}
                      className="p-2 rounded-sm text-base text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 mr-2 font-medium"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden h-7 ">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-md cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white absolute px-4 left-0 right-0 z-40 w-full border shadow-2xs rounded-b-lg">
            <div className="py-3 space-y-1">
              {/* Mobile Grade Calculators Dropdown */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('calculators')}
                  className="flex items-center justify-between w-full px-3 py-2 text-left rounded-md hover:bg-gray-50"
                >
                  <div className="flex items-center">Grade Calculators</div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileDropdowns.calculators ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {mobileDropdowns.calculators && (
                  <div className="mt-1 space-y-2">
                    {calculatorItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-3 py-2 text-sm rounded-md bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Static Pages */}
              {staticPages.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 rounded-md hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
