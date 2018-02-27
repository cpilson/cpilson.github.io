import React, { Component } from 'react'
import {FaLock, FaUnlockAlt} from 'react-icons/lib/fa'
import Link from 'gatsby-link'
import GitHubDetailsModal from './GitHubDetailsModal'
import '../scss/index.scss'

class GitHubList extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false, selectedID: null };
    }
  
    toggleModal = (node) => {
        this.setState({isOpen: !this.state.isOpen, selectedNode: node});
    }

    sortByCreatedAt(a, b) {
        // Use toUpperCase() to ignore character casing
        const dateA = a.node.createdAt;
        const dateB = b.node.createdAt;
      
        let comparison = 0;
        if (dateA > dateB) {
          comparison = 1;
        } else if (dateA < dateB) {
          comparison = -1;
        }
        return comparison * -1;
    }
  
    render() {
    const data = this.props.data;
    data.repositoryOwner.repositories.edges.sort(this.sortByCreatedAt);

      return (
        <div>
          {data.repositoryOwner.repositories.edges.map(repositoriesEdge => {
            let repoPrivacy = repositoriesEdge.node.isPrivate ? <FaLock className="fa pull-right" /> : <FaUnlockAlt className="fa pull-right" />;
            let privateRepoSpan2 = repositoriesEdge.node.isPrivate ? (<span className="sr-only">Private Repository</span>) : null;
            // console.log(repositoriesEdge.node.repositoryTopics.edges.sort());
            return (
              <div 
                className={repositoriesEdge.node.isPrivate ? "panel panel-danger" : "panel panel-primary"} 
                key={repositoriesEdge.node.id} onClick={() => this.toggleModal(repositoriesEdge.node)}
              >
                <div className="panel-heading"><h3 className="panel-title">{repositoriesEdge.node.name}{repoPrivacy}{privateRepoSpan2}</h3></div>
                <div className="panel-body">{repositoriesEdge.node.description}</div>
                <div className="panel-footer">
                  {repositoriesEdge.node.repositoryTopics.edges.map((repositoryTopicsEdge, index) => {
                    let topicPillMargin = ["5px", "5px"];
                    index === 0 ? topicPillMargin = ["0px", "5px"] : null;
                    index === repositoriesEdge.node.repositoryTopics.totalCount-1 ? topicPillMargin = ["5px", "0px"] : null;
                    return <span className="badge badge-pill badge-info" key={repositoryTopicsEdge.node.topic.name} style={{"marginLeft": topicPillMargin[0], "marginRight": topicPillMargin[1]}}>{repositoryTopicsEdge.node.topic.name}</span> 
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

  export default GitHubList;