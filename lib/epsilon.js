'use client'; // Required for App Router hooks

import { useEffect } from 'react';
import Script from 'next/script';

const EpsilonAd = ({ siteId }) => {
  const adUnitCode = '35fa03fc';

  useEffect(() => {
    // We define the logic but wait for the script to load via next/script
    window.pbjs = window.pbjs || {};
    window.pbjs.que = window.pbjs.que || [];
  }, []);

  const initBidding = () => {
    const pbjs = window.pbjs;

    const adUnits = [
      {
        code: adUnitCode,
        mediaTypes: {
          banner: {
            sizes: [[728, 90]],
          },
        },
        bids: [
          {
            bidder: 'conversant',
            params: {
              site_id: siteId,
              secure: 1,
            },
          },
        ],
      },
    ];

    pbjs.que.push(() => {
      pbjs.addAdUnits(adUnits);
      pbjs.requestBids({
        bidsBackHandler: () => {
          // This tells Prebid to render the winning ad into the div
          const responses = pbjs.getAdserverTargetingForAdUnitCode(adUnitCode);
          if (responses && responses.hb_pb) {
            console.log('Epsilon Bid Received:', responses.hb_pb);
          }
          pbjs.renderAd(document, adUnitCode);
        },
      });
    });
  };

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}
    >
      {/* Load Prebid Script */}
      <Script src="/prebid10.20.0.js" onLoad={initBidding} />

      {/* The Ad Slot */}
      <div id={adUnitCode} className="max-xl:hidden">
        {/* Placeholder text while loading */}
      </div>
    </div>
  );
};

export default EpsilonAd;
