/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.imgur.com",
      },
      {
        hostname: "img.freepik.com",
      },
      {
        hostname: "api-dev.itstoni.com",
        protocol: "https",
      },
      {
        hostname: "api.itstoni.com",
      },
      {
        hostname: "res.cloudinary.com",
        protocol: "https",
      },
      {
        protocol: "http",
        port: "1337",
        hostname: "localhost",
      },
    ],
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

// Merge MDX config with Next.js config
export default nextConfig;
