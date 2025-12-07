'use client';
import { Partytown } from '@qwik.dev/partytown/react';

const PartyTownConfig = () => {
  return (
    <Partytown
      //   debug={true}
      forward={[
        'dataLayer.push',
        'ezstandalone',
        'ezstandalone.cmd',
        'ezstandalone.cmd.push',
        'ezstandalone.showAds',
        'ezstandalone.refresh',
        'ezstandalone.define',
        'ezstandalone.enable',
        'ezstandalone.display',
      ]}
    />
  );
};

export default PartyTownConfig;
