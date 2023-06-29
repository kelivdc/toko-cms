const isProd = process.env.NODE_ENV === "production";

module.exports = {
  images: {
    domains: ["mdbcdn.b-cdn.net"],
  },
  env: {    
    api_url: process.env.API_URL,
    admin: process.env.CMS,
  },
};