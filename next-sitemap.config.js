/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL || "https://deadcereal.co",
  generateRobotsTxt: true // (optional)
  // ...other options
};
