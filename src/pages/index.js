import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';
import * as githubrepos from '../../static/githubrepos.json';

const emailSubject = `?subject=${encodeURIComponent('Contact email from portfolio site')}`;
const emailLink = `mailto:${githubrepos.data.user.email}${emailSubject}`;

const IndexPage = ({ data }) => (
  <div>
    <h3>This site provides a web-friendly to my GitHub data</h3>
    <blockquote dangerouslySetInnerHTML={{ __html: (githubrepos.data.user.bioHTML) }} />
    <p>I am a software developer and am currently involved with at least {githubrepos.data.user.repositories.totalCount} <Link to="/githubrepos">GitHub repositories.</Link></p>
    <p>I strongly believe in connecting people through software and collaboration. Currently, I am {githubrepos.data.user.isHireable ? <a href={emailLink}><strong>available</strong></a> : <strong>unavailable</strong>} for hiring.</p>
    <p>If you think along similar lines insofar as technology, {githubrepos.data.user.isHireable ? 'or are looking to hire a seasoned DevOps type with current experience in the JavaScript full stack,' : null} <a href={emailLink}>contact me</a> and we&apos;ll chat.</p>
  </div>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;
