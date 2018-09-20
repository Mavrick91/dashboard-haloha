import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ExtraOptions extends Component {
  writeComment() {}

  likeEvent() {}

  copyInfoEvent() {}

  expandOptions() {}

  render() {
    return (
      <div className="item-event__extra-option">
        <FontAwesomeIcon icon="pen" onClick={this.writeComment} />
        <FontAwesomeIcon icon="heart" onClick={this.likeEvent} />
        <FontAwesomeIcon icon="clone" onClick={this.copyInfoEvent} />
        <FontAwesomeIcon icon="ellipsis-h" onClick={this.expandOptions} />
      </div>
    );
  }
}
