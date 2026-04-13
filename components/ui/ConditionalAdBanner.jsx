'use client';
import useLocationBasedTerms from '@/utils/useLocationBasedTerms';
import { Check, MoveRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ConditionalAdBanner() {
  // CSS-based hiding (better for ad scripts)
  const { selectedCountry } = useLocationBasedTerms();

  const shouldHide = selectedCountry === 'Pakistan';

  return (
    <div
      className=" text-center max-w-5xl mx-auto"
      style={{
        display: shouldHide ? 'block' : 'none',
      }}
    >
      <div id="ezoic-pub-ad-placeholder-123"></div>

      {/* Pakistan-specific content */}
      {shouldHide && (
        <div className="flex flex-col items-center gap-2">
          <a
            href="https://resumebuilder.calculatecgpa.com/"
            target="_blank"
            rel="noopener"
            className="rb-banner group relative overflow-hidden rounded-xl border border-indigo-200 bg-indigo-50 flex flex-col"
            style={{ width: '300px' }}
          >
            <div className="h-1 w-full bg-indigo-600 flex-shrink-0"></div>

            <div
              className="relative bg-indigo-600 flex-shrink-0"
              style={{ height: '200px' }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              ></div>

              <div
                className="absolute bg-white rounded-lg shadow-xl border border-indigo-100 overflow-hidden"
                style={{
                  width: '170px',
                  top: '24px',
                  left: '50%',
                  transform: 'translateX(-50%) rotate(-2deg)',
                }}
              >
                <div className="bg-indigo-600 px-4 py-3">
                  <div className="h-3 bg-white rounded-full opacity-90 w-24 mb-1.5"></div>
                  <div className="h-2 bg-indigo-300 rounded-full w-16"></div>
                </div>

                <div className="px-4 py-3 space-y-2">
                  <div className="h-1.5 bg-indigo-100 rounded w-full"></div>
                  <div className="h-1.5 bg-indigo-100 rounded w-5/6"></div>
                  <div className="h-1.5 bg-indigo-100 rounded w-4/5"></div>
                  <div className="mt-3 h-1.5 bg-slate-100 rounded w-3/4"></div>
                  <div className="h-1.5 bg-slate-100 rounded w-full"></div>
                  <div className="h-1.5 bg-slate-100 rounded w-2/3"></div>
                  <div className="mt-3 h-1.5 bg-slate-100 rounded w-4/5"></div>
                  <div className="h-1.5 bg-slate-100 rounded w-3/5"></div>
                </div>
              </div>

              <div
                className="absolute bottom-4 right-5 bg-white rounded-full shadow-lg flex items-center justify-center"
                style={{ width: '36px', height: '36px' }}
              >
                <Check size={22} className="text-indigo-600" />
              </div>
            </div>

            <div className="flex flex-col flex-1 p-6">
              <h2
                className="text-gray-800 font-bold leading-snug mb-3"
                style={{ fontSize: '20px' }}
              >
                Get your professional internship CV for just
                <br />
                <span className="text-indigo-600">Rs. 150</span>
              </h2>

              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Based on your feedback, we built a CV maker with 4 professional
                templates designed for Pakistani students.
              </p>

              <div className="shimmer relative overflow-hidden bg-indigo-600 group-hover:bg-indigo-700 transition-colors duration-200 text-white font-semibold rounded-lg px-4 py-3 text-sm flex items-center justify-between">
                <span>Build My CV Now</span>

                <MoveRight size={20} />
              </div>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}

export const LandscapreResumeBanner = () => {
  const { selectedCountry } = useLocationBasedTerms();

  const shouldHide = selectedCountry === 'Pakistan';
  return (
    <div
      className={`flex flex-col items-center gap-2 max-md:hidden ${shouldHide ? 'min-md:block' : 'max-sm:hidden'}`}
      // style={{
      //   display: shouldHide ? 'block' : 'none',
      // }}
    >
      <a
        href="https://resumebuilder.calculatecgpa.com/"
        target="_blank"
        rel="noopener"
        className="rb-banner group relative overflow-hidden rounded-xl border border-indigo-200 bg-indigo-50 flex items-center"
        style={{ height: '90px', width: '100%' }}
      >
        <div className="flex-1 px-5 min-w-0">
          <p className="text-xs font-semibold text-indigo-500 tracking-wide uppercase mb-0.5">
            Based On Your Feedback
          </p>
          <p
            className="font-bold text-gray-800 leading-tight truncate"
            style={{ fontSize: '17px' }}
          >
            Get your professional internship CV for just
            <span className="text-indigo-600"> Rs. 150</span>
          </p>
        </div>

        <div className="flex-shrink-0 mr-5 ml-4">
          <div className="shimmer relative overflow-hidden bg-indigo-600 group-hover:bg-indigo-700 transition-colors duration-200 text-white font-semibold rounded-lg px-5 py-2.5 text-sm flex items-center gap-2 whitespace-nowrap">
            Build My CV <MoveRight size={16} />
          </div>
        </div>
      </a>
    </div>
  );
};

export const MobileResumeBanner = () => {
  const { selectedCountry } = useLocationBasedTerms();

  const shouldHide = selectedCountry === 'Pakistan';
  return (
    <div
      className="flex flex-col items-center gap-2"
      style={{
        display: shouldHide ? 'block' : 'none',
      }}
    >
      <a
        href="https://resumebuilder.calculatecgpa.com/"
        target="_blank"
        rel="noopener"
        className="rb-banner group relative overflow-hidden rounded-xl border border-indigo-200 bg-indigo-50 flex items-center gap-2"
        style={{ height: '100px' }}
      >
        <div className="flex-1 pl-4 pr-2 min-w-0">
          <div className="flex items-center gap-1.5 mb-1"></div>
          <p className="font-bold text-gray-800 leading-snug text-sm">
            Get Professional CV for an internship in just{' '}
            <span className="text-indigo-600">Rs. 150</span>
          </p>
          <p className="text-xs text-slate-400 mt-0.5">
            4 Professional templates
          </p>
        </div>

        <div className="flex-shrink-0 pr-4">
          <div className="shimmer relative overflow-hidden bg-indigo-600 group-hover:bg-indigo-700 transition-colors duration-200 text-white font-semibold rounded-lg px-3.5 py-3 text-xs flex items-center gap-1.5 whitespace-nowrap">
            Get My CV
            <MoveRight size={12} />
          </div>
        </div>
      </a>
    </div>
  );
};
