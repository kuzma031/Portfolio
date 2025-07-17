/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ["./src/sass"],
  },
  images: {
    domains: [],
  },
  // Enable static exports if needed
  // trailingSlash: true,
  // exportPathMap: async function () {
  //   return {
  //     '/': { page: '/' },
  //     '/gridzone': { page: '/gridzone' },
  //     '/valudio': { page: '/valudio' },
  //     '/heata': { page: '/heata' },
  //     '/scorpio': { page: '/scorpio' },
  //     '/inboxroad': { page: '/inboxroad' },
  //     '/buildwithhubs': { page: '/buildwithhubs' },
  //   }
  // }
}

module.exports = nextConfig
