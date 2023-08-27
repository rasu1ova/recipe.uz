// @type {import('next').NextConfig}

const nextConfig = {
  proxyPath: "/api",
  images: {
    domains: [
      "localhost:3000",
      "https://my-json-server.typicode.com/rasu1ova/recipeApi/articles",
      "http://127.0.0.1:8000/api/category"
    ],
  },
};

module.exports = nextConfig;
