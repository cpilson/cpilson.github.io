require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: 'Chris Pilson - GitHub Dev Site',
    keywords: 'Chris Pilson, Development, ReactJS, React, Gatsby, GatsbyJS, GitHub, JavaScript, Redux, Inferno, React Native'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`, 
      options: { 
        precision: 8, 
      }, 
    }, 
    { 
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: 'blog-pages',
      },
    },
    `gatsby-transformer-remark`,
  ],
}
