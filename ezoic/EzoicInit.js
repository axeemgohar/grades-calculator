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
    }, 100);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [pathname]);

  return (
    <>
      {/* Ezoic Privacy Scripts */}
      <Script
        id="ezoic-privacy"
        src="https://the.gatekeeperconsent.com/cmp.min.js"
        data-cfasync="false"
        strategy="beforeInteractive"
      />
      <Script
        id="ezoic-privacy-cmp"
        src="https://cmp.gatekeeperconsent.com/min.js"
        data-cfasync="false"
        strategy="beforeInteractive"
      />

      {/* Ezoic Main Script */}
      <Script
        id="ezoic-header"
        async
        src="//www.ezojs.com/ezoic/sa.min.js"
        onLoad={() => {
          window.ezstandalone = window.ezstandalone || {};
          window.ezstandalone.cmd = window.ezstandalone.cmd || [];
        }}
      />
    </>
  );
};

export default EzoicScripts;
