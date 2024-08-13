/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
};

const isProd = process.env.NODE_ENV === 'production';

/*module.exports = {
  basePath: isProd ? '/StonyBrookCrewDotCom' : '',
  assetPrefix: isProd ? '/StonyBrookCrewDotCom' : '',
};*/

export default nextConfig;
