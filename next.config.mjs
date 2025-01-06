/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["*"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "2000",
        pathname: "/api/v1/access/file/**",
      },
    ],
  },
};

export default nextConfig;
