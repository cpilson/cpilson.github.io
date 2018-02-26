require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: 'Chris Pilson - GitHub Dev Site'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    { 
      resolve: `gatsby-source-filesystem`, 
      options: { 
        path: `${__dirname}/blog`, 
        name: "markdown-pages", 
      }, 
    }, 
    `gatsby-transformer-remark`,
  ]
};
