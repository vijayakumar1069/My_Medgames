/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: {
        bodySizeLimit: '10mb', // Adjust size as needed
      },
    },
  }
  
  export default nextConfig
  