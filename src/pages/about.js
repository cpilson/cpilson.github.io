import React from 'react';
import * as githubrepos from "../../static/githubrepos.json"

const emailSubject=`?subject=${encodeURIComponent("Contact email from portfolio site")}`;
const emailLink=`mailto:${githubrepos.data.user.email}${emailSubject}`;

const AboutPage = ({ data }) => (
  <div>
    <p dangerouslySetInnerHTML={{ __html: (githubrepos.data.user.bioHTML) }}/>
    <p>Currently, I am {githubrepos.data.user.isHireable ? <strong>available</strong> : <strong>unavailable</strong>} for hiring. <a href={emailLink}>Contact me</a> and we'll talk.</p>
  </div>
)

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        name
      }
    }
  }
`

export default AboutPage