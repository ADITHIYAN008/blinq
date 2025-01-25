/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true, // Disables TypeScript build checks
  },
};

export default nextConfig;
