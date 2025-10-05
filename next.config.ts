import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/cornerstone-chat/:path*", destination: "https://v0-intelligent-chatbot-for-property-nq2w6hn7i.vercel.app/:path*" }
    ];
  },
};

export default nextConfig;
