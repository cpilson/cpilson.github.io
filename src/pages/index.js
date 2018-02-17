import React from 'react'
import Link from 'gatsby-link'
import GitHubList from '../components/GitHubList'

const IndexPage = ({data}) => (
  <div>
    <h3>Welcome to my GitHub Dev Site, home to at least {data.allRepositories.totalCount} GitHub repositories.</h3>

    <GitHubList data={data} />
    
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export const query = graphql `
query IndexQuery {
	allRepositories {
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
    totalCount
  }
}
`

export default IndexPage
