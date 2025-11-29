// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     trailingSlash: true,
//     ...(process.env.NODE_ENV === 'production' && {
//         output: 'export',
//         basePath: '/todo-list-next-js-15',
//         assetPrefix: '/todo-list-next-js-15',
//     }),
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  experimental: {
    allowedDevOrigins: ["http://192.168.1.3:3000"], // ضع هنا IP جهازك
  },
  ...(process.env.NODE_ENV === "production" && {
    output: "export",
    basePath: "/todo-list-next-js-15",
    assetPrefix: "/todo-list-next-js-15",
  }),
};

export default nextConfig;
