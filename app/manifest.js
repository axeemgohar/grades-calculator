export default function manifest() {
  return {
    name: 'Simple CGPA Calculator',
    short_name: 'CGPA Calculator',
    description: 'Easily calculate your GPA & CGPA',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '64x64 48x48 32x32 24x24 16x16',
        type: 'image/x-icon',
      },
      {
        src: '/logo512.webp',
        sizes: '512x512',
        type: 'image/webp',
      },
      {
        src: '/logo192.webp',
        type: 'image/webp',
        sizes: '192x192',
        purpose: 'maskable',
      },
      {
        src: '/apple-icon.png',
        type: 'image/png',
        sizes: '180x180',
      },
    ],
  };
}
