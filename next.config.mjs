/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.ibb.co',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'i.ibb.co.com',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  