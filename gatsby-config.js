module.exports = {
  siteMetadata: {
    title: 'Chris Pilson - GitHub Dev Site'
  },
  plugins: [
    'gatsby-plugin-react-helmet', {
      resolve: "gatsby-source-github-gql",
      options: {
        auth: `6eca7e446ae50daabf6cc7ffea3492da5d372435`,
        query: `{
          viewer {
            name
            repositories(last: 100, orderBy: {field: CREATED_AT, direction: ASC}) {
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
