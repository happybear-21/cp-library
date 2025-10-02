import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: ['cp-algorithms.com', "upload.wikimedia.org"],
  },
};

export default withMDX(config);
