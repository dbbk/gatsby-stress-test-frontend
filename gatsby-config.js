const endpoints = {
  development: "http://localhost:4000/graphql",
  production: "https://bk-gatsby-stress-test-backend.herokuapp.com/graphql",
}

module.exports = {
  siteMetadata: {
    title: `Gatsby TV Shows Stress Test`,
    description: `This is a test of how many pages Gatsby can handle.`,
    author: `Ben King`,
  },
  plugins: [
    // Simple config, passing URL
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "TenantContent",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "tenantContent",
        // Url to query from
        url: endpoints[process.env.NODE_ENV || "development"],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
