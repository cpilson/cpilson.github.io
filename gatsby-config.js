require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: 'Chris Pilson - GitHub Dev Site'
  },
  plugins: [
    'gatsby-plugin-react-helmet', {
      resolve: "gatsby-source-github-gql",
      options: {
        auth: `${process.env.GITHUB_GQL_TOKEN}`,
        query: `{
          viewer {
            name
            repositories(last: 50, orderBy: {field: CREATED_AT, direction: DESC}) {
              edges {
                node {
					        createdAt
                  description
                  id
                  name
					        pushedAt
					        updatedAt
                  url
                }
              }
            }
          }
        }
        `
      }
    }
  ]
};
