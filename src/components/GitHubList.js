import React, { Component } from 'react'
import Link from 'gatsby-link'
import * as _ from 'lodash'
import GitHubDetailsModal from './GitHubDetailsModal'

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
    data.allRepositories.edges.sort(this.sortByCreatedAt);

      return (
        <div>
          <ul className="repos">
            {data.allRepositories.edges.map(n => {
                return (
                    <li key={n.node.id} onClick={() => this.toggleModal(n.node) }><text className="badge">{n.node.name}</text> <span className="description">{n.node.description}</span></li>
                );
            })}
          </ul>
  
          <GitHubDetailsModal show={this.state.isOpen} onClose={this.toggleModal} repo={this.state.selectedNode} />
        </div>
      );
    }
  }

  export default GitHubList;