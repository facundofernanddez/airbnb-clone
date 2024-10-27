/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "a0.muscache.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "wgqklerajuawttphkbqd.supabase.co",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
