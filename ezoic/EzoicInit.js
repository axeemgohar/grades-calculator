'use client';
import { usePathname } from 'next/navigation';
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

  // No scripts needed - Zaraz handles everything
  return null;
};

export default EzoicScripts;
