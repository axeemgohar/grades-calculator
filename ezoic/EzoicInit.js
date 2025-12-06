'use client';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect, useRef } from 'react';

const EzoicScripts = () => {
  const pathname = usePathname();
  const retryCountRef = useRef(0);
  const maxRetries = 30; // 30 attempts = 3 seconds max wait

  useEffect(() => {
    // Only start checking after a slight delay to let scripts load
    const initialDelay = setTimeout(() => {
      const intervalId = setInterval(() => {
        try {
          if (window.ezstandalone?.cmd) {
            window.ezstandalone.cmd.push(function () {
              ezstandalone.showAds();
            });
            clearInterval(intervalId);
            retryCountRef.current = 0;
          } else {
            retryCountRef.current++;
            // Stop trying after max retries to prevent infinite polling
            if (retryCountRef.current >= maxRetries) {
              console.warn('Ezoic ads failed to load after maximum retries');
              clearInterval(intervalId);
            }
          }
        } catch (err) {
          console.error('Error initializing Ezoic ads:', err);
          clearInterval(intervalId);
        }
      }, 100); // Keep 100ms but with retry limit

      return () => clearInterval(intervalId);
    }, 500); // Wait 500ms before starting to check

    return () => clearTimeout(initialDelay);
  }, [pathname]);

  return (
    <>
      {/* DNS Prefetch & Preconnect for faster resource loading */}
      <link rel="preconnect" href="https://www.ezojs.com" />
      <link rel="dns-prefetch" href="https://www.ezojs.com" />
      <link rel="preconnect" href="https://the.gatekeeperconsent.com" />
      <link rel="dns-prefetch" href="https://the.gatekeeperconsent.com" />
      <link rel="preconnect" href="https://cmp.gatekeeperconsent.com" />
      <link rel="dns-prefetch" href="https://cmp.gatekeeperconsent.com" />

      {/* 
        All scripts use afterInteractive strategy for better Core Web Vitals
        - Loads after page is interactive
        - Doesn't block FCP (First Contentful Paint)
        - Doesn't block LCP (Largest Contentful Paint)
      */}

      {/* Ezoic Privacy Scripts */}
      <Script
        id="ezoic-privacy"
        src="https://the.gatekeeperconsent.com/cmp.min.js"
        data-cfasync="false"
        strategy="afterInteractive"
      />
      <Script
        id="ezoic-privacy-cmp"
        src="https://cmp.gatekeeperconsent.com/min.js"
        data-cfasync="false"
        strategy="afterInteractive"
      />

      {/* Ezoic Main Script with initialization */}
      <Script
        id="ezoic-header"
        src="//www.ezojs.com/ezoic/sa.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Initialize ezstandalone object
          if (typeof window !== 'undefined') {
            window.ezstandalone = window.ezstandalone || {};
            window.ezstandalone.cmd = window.ezstandalone.cmd || [];
          }
        }}
        onError={(e) => {
          console.error('Failed to load Ezoic script:', e);
        }}
      />
    </>
  );
};

export default EzoicScripts;
