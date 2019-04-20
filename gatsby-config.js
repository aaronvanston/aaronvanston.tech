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
        path: `${__dirname}/content/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: "projects",
      },
    },
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
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
            },
          },
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              username: 'aaronvanston',
              includeDefaultCss: true
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ],
}
