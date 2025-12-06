'use client';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect, useRef } from 'react';

const EzoicScripts = () => {
  const pathname = usePathname();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    const triggerEzoicAds = () => {
      try {
        if (window.ezstandalone?.cmd) {
          window.ezstandalone.cmd.push(function () {
            ezstandalone.showAds();
          });
          return true;
        }
        return false;
      } catch (err) {
        console.error('Error initializing Ezoic ads:', err);
        return false;
      }
    };

    // On initial page load, wait a bit for scripts to load
    if (isInitialLoad.current) {
      isInitialLoad.current = false;

      const initialDelay = setTimeout(() => {
        let retryCount = 0;
        const maxRetries = 30;

        const intervalId = setInterval(() => {
          const success = triggerEzoicAds();
          retryCount++;

          if (success || retryCount >= maxRetries) {
            clearInterval(intervalId);
            if (!success && retryCount >= maxRetries) {
              console.warn('Ezoic ads failed to load after maximum retries');
            }
          }
        }, 100);

        return () => clearInterval(intervalId);
      }, 500);

      return () => clearTimeout(initialDelay);
    } else {
      // On route changes, ezstandalone is already loaded, trigger immediately
      // Try a few times in case there's a brief delay
      let attempts = 0;
      const maxAttempts = 10;

      const intervalId = setInterval(() => {
        const success = triggerEzoicAds();
        attempts++;

        if (success || attempts >= maxAttempts) {
          clearInterval(intervalId);
        }
      }, 100);

      return () => clearInterval(intervalId);
    }
  }, [pathname]);

  // Monitor for empty ad placeholders and retry loading
  useEffect(() => {
    const checkEmptyPlaceholders = () => {
      // Target Ezoic placeholders: <div id="ezoic-pub-ad-placeholder-123"></div>
      const placeholders = document.querySelectorAll(
        '[id^="ezoic-pub-ad-placeholder-"]'
      );

      let hasEmptyPlaceholders = false;

      placeholders.forEach((placeholder) => {
        // Check if placeholder has no child elements (empty)
        // Ezoic injects content as child elements when ads load
        const isEmpty = placeholder.children.length === 0;

        if (isEmpty) {
          hasEmptyPlaceholders = true;
        }
      });

      return hasEmptyPlaceholders;
    };

    // Start checking after ads should have loaded (3 seconds after route change)
    const checkTimer = setTimeout(() => {
      const retryInterval = setInterval(() => {
        const hasEmpty = checkEmptyPlaceholders();

        if (hasEmpty && window.ezstandalone?.cmd) {
          console.log('Empty Ezoic placeholders detected, retrying...');
          window.ezstandalone.cmd.push(function () {
            ezstandalone.showAds();
          });
        } else if (!hasEmpty) {
          // All placeholders filled, stop checking
          clearInterval(retryInterval);
        }
      }, 2000); // Check every 2 seconds

      // Stop checking after 20 seconds total
      const stopTimer = setTimeout(() => {
        clearInterval(retryInterval);
      }, 20000);

      return () => {
        clearInterval(retryInterval);
        clearTimeout(stopTimer);
      };
    }, 3000);

    return () => clearTimeout(checkTimer);
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
