'use client';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

const EzoicScriptsHybrid = () => {
  const pathname = usePathname();

  useEffect(() => {
    const intervalId = setInterval(() => {
      try {
        if (window.ezstandalone && window.ezstandalone.cmd) {
          window.ezstandalone.cmd.push(function () {
            window.ezstandalone.showAds();
          });
          clearInterval(intervalId);
        }
      } catch (err) {
        console.error('Error pushing ads: ', err);
        clearInterval(intervalId);
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, [pathname]);

  return (
    <>
      {/* DNS prefetch and preconnect hints */}
      <link rel="preconnect" href="https://www.ezojs.com" />
      <link rel="dns-prefetch" href="https://www.ezojs.com" />
      <link rel="preconnect" href="https://the.gatekeeperconsent.com" />
      <link rel="dns-prefetch" href="https://the.gatekeeperconsent.com" />
      <link rel="preconnect" href="https://cmp.gatekeeperconsent.com" />
      <link rel="dns-prefetch" href="https://cmp.gatekeeperconsent.com" />

      {/* Privacy/Consent Scripts - Move to Web Worker (these are less DOM-dependent) */}
      <Script
        id="ezoic-privacy"
        src="https://the.gatekeeperconsent.com/cmp.min.js"
        data-cfasync="false"
        type="text/partytown"
      />
      <Script
        id="ezoic-privacy-cmp"
        src="https://cmp.gatekeeperconsent.com/min.js"
        data-cfasync="false"
        type="text/partytown"
      />

      {/* Ezoic Main Script - Keep in MAIN THREAD with lazyOnload */}
      {/* This loads after page is interactive, reducing blocking time */}
      <Script
        src="https://www.ezojs.com/ezoic/sa.min.js"
        id="ezoic-header"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined') {
            window.ezstandalone = window.ezstandalone || {};
            window.ezstandalone.cmd = window.ezstandalone.cmd || [];
          }
          console.log('Ezoic main script loaded');
        }}
        onError={(e) => {
          console.error('Failed to load Ezoic script:', e);
        }}
      />
    </>
  );
};

export default EzoicScriptsHybrid;
