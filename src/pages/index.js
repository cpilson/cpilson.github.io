import React from 'react'
import Link from 'gatsby-link'
import GitHubList from '../components/GitHubList'
import * as githubrepos from "../../static/githubrepos.json"

const IndexPage = ({data}) => (
  <div>
    <h3>Welcome to my GitHub Dev Site, home to at least {githubrepos.data.repositoryOwner.repositories.totalCount} GitHub repositories.</h3>

    <GitHubList data={githubrepos.data} />
    
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
