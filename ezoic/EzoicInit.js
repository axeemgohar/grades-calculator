'use client';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

const EzoicScripts = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Trigger ads refresh on route change
    const intervalId = setInterval(() => {
      try {
        if (typeof window !== 'undefined' && window.ezstandalone) {
          window.ezstandalone.cmd.push(function () {
            window.ezstandalone.showAds();
          });
          clearInterval(intervalId);
        }
      } catch (err) {
        console.error('Error showing ads: ', err);
        clearInterval(intervalId);
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, [pathname]);

  return (
    <>
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
    </>
  );
};

export default EzoicScripts;
