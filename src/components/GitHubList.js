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
  
    render() {
    const data = this.props.data;
    data.user.repositories.nodes.sort(this.sortByCreatedAt);

      return (
        <div>
          {data.user.repositories.nodes.map(node => {
            let repoPrivacy = node.isPrivate ? <FaLock className="fa pull-right" /> : <FaUnlockAlt className="fa pull-right" />;
            let privateRepoSpan2 = node.isPrivate ? (<span className="sr-only">Private Repository</span>) : null;
            // console.log(node.repositoryTopics.edges.sort());
            return (
              <div 
                className={node.isPrivate ? "panel panel-danger" : "panel panel-primary"} 
                key={node.id} onClick={() => this.toggleModal(node)}
              >
                <div className="panel-heading"><h3 className="panel-title">{node.name}{repoPrivacy}{privateRepoSpan2}</h3></div>
                <div className="panel-body">{node.description}</div>
                <div className="panel-footer">
                  {node.repositoryTopics.nodes.map((repositoryTopicsNode, index) => {
                    let topicPillMargin = ["5px", "5px"];
                    index === 0 ? topicPillMargin = ["0px", "5px"] : null;
                    index === node.repositoryTopics.totalCount-1 ? topicPillMargin = ["5px", "0px"] : null;
                    return <span className="badge badge-pill badge-info" key={repositoryTopicsNode.topic.name} style={{"marginLeft": topicPillMargin[0], "marginRight": topicPillMargin[1]}}>{repositoryTopicsNode.topic.name}</span> 
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