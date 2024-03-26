/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'uploadthing.com',
          'utfs.io',
          'img.clerk.com',
          'subdomain',
          'files.stripe.com',
        ],
      },
      reactStrictMode: false,
      // typescript: {
      //   ignoreBuildErrors: true,
      // }
    
};

export default nextConfig;
