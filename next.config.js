/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    connectionString:
      "mongodb+srv://latifahleni03:G9fogv8jSvbgcjh1@clusterpsikotes.rnddnzq.mongodb.net/psikotesDatabase",
    secret: "psikotes",
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api" // development api
        : "https://psikotes-theta.vercel.app/api", // production api
  },
};

module.exports = nextConfig;
