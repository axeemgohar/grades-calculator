/** @type {import('next').NextConfig} */
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            value: '<https://www.ezojs.com>; rel=preconnect',
          },
        ],
      },
    ];
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/ads.txt',
  //       destination: 'https://srv.adstxtmanager.com/19390/calculatecgpa.com',
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default withBundleAnalyzer(nextConfig);
