'use client';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

const EzoicScripts = () => {
  const pathname = usePathname(); // Triggers on route changes

  useEffect(() => {
    const intervalId = setInterval(() => {
      try {
        if (window.ezstandalone) {
          ezstandalone.cmd.push(function () {
            ezstandalone.showAds();
          });

          clearInterval(intervalId);
        }
      } catch (err) {
        console.error('Error pushing ads: ', err);
        clearInterval(intervalId);
      }
    }, 500);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [pathname]);

  return (
    <>
      <link rel="preconnect" href="https://www.ezojs.com" />
      <link rel="dns-prefetch" href="https://www.ezojs.com" />
      <link rel="preconnect" href="https://the.gatekeeperconsent.com" />
      <link rel="dns-prefetch" href="https://the.gatekeeperconsent.com" />
      <link rel="preconnect" href="https://cmp.gatekeeperconsent.com" />
      <link rel="dns-prefetch" href="https://cmp.gatekeeperconsent.com" />

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

      {/* Ezoic Main Script */}
      <Script
        src="//www.ezojs.com/ezoic/sa.min.js"
        id="ezoic-header"
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
