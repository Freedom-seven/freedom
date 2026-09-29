/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [],
  },
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  env: {
    // Stamped once per build; the ledger prints it as "built".
    __BUILD_TIME__: new Date().toISOString(),
  },
};

export default nextConfig;
