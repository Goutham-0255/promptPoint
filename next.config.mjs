/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      // Ensure only supported experimental features are included
      serverComponentsExternalPackages: ['mongoose'],
    },
    images: {
      domains: ['lh3.googleusercontent.com'],
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      };
      return config;
    },
  };
  
  export default nextConfig;
  
