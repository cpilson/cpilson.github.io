import React from 'react'
import Link from 'gatsby-link'
import * as githubrepos from "../../static/githubrepos.json"

const IndexPage = ({data}) => (
  <div>
    <h3>Welcome to my quasi-portfolio site.</h3>
    <p>I am a software developer and am currently involved with at least {githubrepos.data.user.repositories.totalCount} <Link to="/githubrepos">GitHub repositories.</Link></p>
    <p>I strongly believe in connecting people through software and collaboration. If you think similarly, contact me and we'll chat.</p>
    
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </div>
)

export default IndexPage
