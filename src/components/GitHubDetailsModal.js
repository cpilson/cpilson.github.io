import React, { Component } from 'react';
import PropTypes from 'prop-types';
const moment = require('moment');

class GitHubDetailsModal extends Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {/* {this.props.children} */}
          <h2><a href={this.props.repo.url} target="_blank" rel="noopener noreferrer">{this.props.repo.name}</a></h2>
          <p>{this.props.repo.description}</p>
          <p>Created: {moment(this.props.repo.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
          <p>Updated: {moment(this.props.repo.updatedAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}, {moment(this.props.repo.updatedAt).fromNow()}</p>
          <p>Pushed: {moment(this.props.repo.pushedAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>

          <div className="footer">
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

GitHubDetailsModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default GitHubDetailsModal;