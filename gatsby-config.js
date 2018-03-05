require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
  siteMetadata: {
    title: `Chris Pilson - GitHub Dev Site`,
    keywords: 'Chris Pilson, Development, ReactJS, React, Gatsby, GatsbyJS, GitHub, JavaScript,' +
      ' Redux, Inferno, React Native',
    name: 'Chris Pilson'
  },
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-114896858-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8
      }
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: 'blog-pages'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [`gatsby-remark-prismjs`]
      }
    }
  ]
};
