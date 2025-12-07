'use client';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

const EzoicScriptsPartytown = () => {
  const pathname = usePathname();

  useEffect(() => {
    const intervalId = setInterval(() => {
      try {
        // Check if ezstandalone exists and has cmd array
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
      {/* DNS prefetch and preconnect hints - these stay in main thread */}
      <link rel="preconnect" href="https://www.ezojs.com" />
      <link rel="dns-prefetch" href="https://www.ezojs.com" />
      <link rel="preconnect" href="https://the.gatekeeperconsent.com" />
      <link rel="dns-prefetch" href="https://the.gatekeeperconsent.com" />
      <link rel="preconnect" href="https://cmp.gatekeeperconsent.com" />
      <link rel="dns-prefetch" href="https://cmp.gatekeeperconsent.com" />

      {/* Initialize ezstandalone object in main thread FIRST - NOT in web worker */}
      <Script
        id="ezoic-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              window.ezstandalone = window.ezstandalone || {};
              window.ezstandalone.cmd = window.ezstandalone.cmd || [];
              
              // Make it accessible to Partytown
              window.ezstandalone.showAds = window.ezstandalone.showAds || function() {
                console.log('showAds called');
              };
              
              console.log('Ezstandalone initialized in main thread:', window.ezstandalone);
            })();
          `,
        }}
      />

      {/* Ezoic Privacy Scripts - Moved to Web Worker */}
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

      {/* Ezoic Main Script - Moved to Web Worker - Use HTTPS protocol */}
      <Script
        src="https://www.ezojs.com/ezoic/sa.min.js"
        id="ezoic-header"
        type="text/partytown"
        onLoad={() => {
          console.log('Ezoic script loaded in web worker');
        }}
        onError={(e) => {
          console.error('Failed to load Ezoic script in worker:', e);
        }}
      />
    </>
  );
};

export default EzoicScriptsPartytown;
