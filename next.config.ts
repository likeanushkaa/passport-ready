import type { NextConfig } from "next";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS && repositoryName ? `/${repositoryName}` : "",
  images: { unoptimized: true },
};
export default nextConfig;
