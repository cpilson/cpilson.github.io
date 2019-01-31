// import Link from 'gatsby-link';
import React from 'react';
import PropTypes from 'prop-types';
import GitHubList from '../components/GitHubList';
import * as githubrepos from '../../static/githubrepos.json';
const moment = require('moment');

const getMostRecentRepoPush = (a, b) => {
    if(moment(a.pushedAt) > moment(b.pushedAt)) return -1;
    if(moment(a.pushedAt) < moment(b.pushedAt)) return 1;
    return 0;
};

const currentThrough = githubrepos.data.user.repositories.nodes.sort(getMostRecentRepoPush);
const currentThroughFormatted = `${moment(currentThrough[0].pushedAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}, ${moment(currentThrough[0].pushedAt).fromNow()}`;

const GitHubRepoPage = ({ data }) => (
  <div>
    <h3 style={{ textAlign: 'center' }}>Here are a list of my current GitHub repositories or GitHub repositories on which I am a collaborator.</h3>
      <p style={{ textAlign: 'center' }}>(Current through {currentThroughFormatted})</p>
    <GitHubList data={githubrepos.data} />
  </div>
);

GitHubRepoPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default GitHubRepoPage;
