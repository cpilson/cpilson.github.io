import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';
import * as githubrepos from '../../static/githubrepos.json';

const IndexPage = ({ data }) => (
  <div>
    <h3>Welcome to my GitHub site.</h3>
    <h4>This site provides a web-friendly to my GitHub data.</h4>
    <p>I am a software developer and am currently involved with at least {githubrepos.data.user.repositories.totalCount} <Link to="/githubrepos">GitHub repositories.</Link></p>
    <p>I strongly believe in connecting people through software and collaboration. If you think similarly, contact me and we&apos;ll chat.</p>
  </div>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;
