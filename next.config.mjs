/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Handle File and filesystem references
    config.resolve.fallback = { 
      fs: false,
      path: false,
      crypto: false 
    };

    return config;
  },
  // Disable TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true
  },
  // Disable ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true
  }
};
  
  export default nextConfig
  