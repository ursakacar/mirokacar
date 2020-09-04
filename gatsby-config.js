module.exports = {
  siteMetadata: {
    title: "Miro Kačar",
    author: "Miro Kacar",
    description: "Spletna stran slikarja Mira Kaćarja"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
