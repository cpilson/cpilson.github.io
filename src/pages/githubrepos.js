import React from 'react'
import Link from 'gatsby-link'
import GitHubList from '../components/GitHubList'
import * as githubrepos from "../../static/githubrepos.json"

const GitHubRepoPage = ({data}) => (
  <div>
    <h3 style={{textAlign: 'center'}}>Here are a list of my current GitHub repositories or GitHub repositories on which I am a collaborator</h3>
    <GitHubList data={githubrepos.data} />
  </div>
)

export default GitHubRepoPage
