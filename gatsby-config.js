module.exports = {
  siteMetadata: {
    title: "Miro Kačar",
    siteUrl: "https://mirokacar.si",
    author: "Miro Kacar",
    description: "Spletna stran slikarja iz Sorice, Mira Kačarja"
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        icon: "src/assets/images/website-icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://mirokacar.si",
        sitemap: "https://mirokacar.si/sitemap.xml",
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    }
  ],
}
