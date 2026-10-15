import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // client/ lives inside a repo that also has a root-level lockfile; pin the
  // workspace root so Next.js does not infer the wrong one.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
