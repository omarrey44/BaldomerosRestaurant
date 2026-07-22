import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Fija la raíz del workspace a este proyecto (hay lockfiles en carpetas padre).
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
