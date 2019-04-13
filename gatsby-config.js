module.exports = {
  siteMetadata: {
    title: `AaronVanston Tech Portfolio`,
    description: `A tech portfolio for Aaron Vanston, Front-end developer in Melbourne.`,
    author: `@aaronvanston`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/projects`,
        name: "projects",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AaronVanston Tech Portfolio`,
        short_name: `AaronVanston`,
        start_url: `/`,
        description: `A tech portfolio for Aaron Vanston, Front-end developer in Melbourne.`,
        display: `fullscreen`,
        background_color: `#fff`,
        theme_color: `#000`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `src/images/icon-192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `src/images/icon-512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`
  ],
}