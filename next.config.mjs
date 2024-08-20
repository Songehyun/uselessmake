/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // 이미지 최적화 비활성화
  },
  output: 'export',
  distDir: 'build',
};

export default nextConfig;
