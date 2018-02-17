module.exports = {
  siteMetadata: {
    title: 'Chris Pilson - GitHub Dev Site'
  },
  plugins: [
    'gatsby-plugin-react-helmet', {
      resolve: "gatsby-source-github-gql",
      options: {
        auth: `7e88a10f7bca1ebd3bb615265ba840718429dcef`,
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
