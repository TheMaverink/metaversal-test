/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/',
          destination: '/feed',
        },
      ]
    },
  }
  
  export default nextConfig
