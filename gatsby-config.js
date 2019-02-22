module.exports = {
  siteMetadata: {
    title: `Get Best Offers`,
    description: `Subscribe today and get the lastest health offers, wealth offers, and relationship offers`,
    author: `@getbestoffers`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/baby-samples-savings-new/*`] },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: '1194868',
        sv: '6',
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '639004186556047',
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            subsets: [`latin`],
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `health-insurance-coverage`,
        short_name: `hic`,
        start_url: `/`,
        background_color: `#354eaa`,
        theme_color: `#354eaa`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
