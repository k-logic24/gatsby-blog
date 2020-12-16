const path = require('path')

module.exports = {
  siteMetadata: {
    title: `K.Iwata's BLOG`,
    author: {
      name: `K.Iwata`,
      summary: `K.Iwata's Gatsby BLOG`,
    },
    description: `This is K.Iwata BLOG.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    social: {
      twitter: `k-logic24`,
      github: `k-logic24`,
    },
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `50`,
              icon: false,
              maintainCase: false,
            },
          },
          {
            resolve: `gatsby-remark-prismjs-title`,
            options: {
              className: 'md-label',
            },
          },
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `K.Iwata's BLOG`,
        short_name: `K.Iwata's BLOG`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1a7de3`,
        display: `minimal-ui`,
        icon: `content/assets/avater.jpg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typegen`,
  ],
}
