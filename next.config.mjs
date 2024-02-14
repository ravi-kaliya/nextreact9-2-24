/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'i.imgur.com',
      'cdn.dummyjson.com',
      'skyyogashala.com',
      'images.pexels.com',
    ],
    deviceSizes: [100, 200, 300, 400],
  },
};

export default nextConfig;
