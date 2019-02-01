// import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FaLock, FaUnlockAlt, FaCodeFork } from 'react-icons/lib/fa';
import GitHubDetailsModal from './GitHubDetailsModal';
import '../scss/index.scss';

class GitHubList extends Component {
  constructor (props) {
    super(props);
    this.state = { isOpen: false, selectedNode: null };
    this.toggleModal = this.toggleModal.bind(this);
    this.sortByCreatedAt = this.sortByCreatedAt.bind(this);
  }

  toggleModal = (node) => {
    this.setState({ isOpen: !this.state.isOpen, selectedNode: node });
  };

  sortByCreatedAt (a, b) {
    // Use toUpperCase() to ignore character casing
    const dateA = a.createdAt;
    const dateB = b.createdAt;

    let comparison = 0;
    if (dateA > dateB) {
      comparison = 1;
    } else if (dateA < dateB) {
      comparison = -1;
    }
    return comparison * -1;
  }

  render () {
    const { data } = this.props;

    return (
      <div>
        {data.user.repositories.nodes.map((node) => {
          const repoPrivacy = node.isPrivate ? <FaLock className="fa pull-right" /> : <FaUnlockAlt className="fa pull-right" />;
          const privateRepoSpan2 = node.isPrivate ? (<span className="sr-only">Private Repository</span>) : null;
          const isFork = (!!node.homepageUrl && !node.homepageUrl.toString().includes("cpilson")) ? (<a className="fa pull-right" href={node.homepageUrl} alt={"Forked from " + node.homepageUrl}><FaCodeFork className="fa pull-right" /></a>) : null;
          return (
            <div
              className={node.isPrivate ? 'panel panel-danger' : 'panel panel-primary'}
              key={node.id}
            >
              <div className="panel-heading"><h3 className="panel-title">{node.isPrivate ? 'PRIVATE REPO' : node.name}{repoPrivacy}{privateRepoSpan2}{isFork}</h3></div>
              <div className="panel-body" onClick={node.isPrivate ? null : () => this.toggleModal(node)}>{node.isPrivate ? 'DESCRIPTION NOT AVAILABLE; PRIVATE REPO' : node.description}</div>
              <div className="panel-footer">
                {node.repositoryTopics.nodes.map((repositoryTopicsNode, index) => {
                  let topicPillMargin = ['5px', '5px'];
                  topicPillMargin = (index === 0 ? ['0px', '5px'] : topicPillMargin);
                  topicPillMargin = (index === node.repositoryTopics.totalCount - 1 ? ['5px', '0px'] : topicPillMargin);
                  return <span className="badge badge-pill badge-info" key={repositoryTopicsNode.topic.name} style={{ marginLeft: topicPillMargin[0], marginRight: topicPillMargin[1] }}>{repositoryTopicsNode.topic.name}</span>;
                })}
              </div>
            </div>
          );
        })}
        <GitHubDetailsModal show={this.state.isOpen} onClose={this.toggleModal} repo={this.state.selectedNode} />
      </div>
    );
  }
}

GitHubList.propTypes = {
  data: PropTypes.object.isRequired
};

export default GitHubList;
