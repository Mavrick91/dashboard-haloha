import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ExtraOptions extends Component {
  state = {
    openList: false,
  };

  writeComment() {}

  likeEvent() {}

  copyInfoEvent() {}

  expandOptions() {}

  delete() {}

  team() {}

  render() {
    const { openList } = this.state;
    return (
      <div
        className="item-event__extra-option"
        onMouseLeave={() => this.setState(() => ({ openList: false }))}
      >
        <FontAwesomeIcon icon="pen" onClick={this.writeComment} />
        <FontAwesomeIcon icon="heart" onClick={this.likeEvent} />
        <FontAwesomeIcon icon="clone" onClick={this.copyInfoEvent} />
        <FontAwesomeIcon
          icon="ellipsis-h"
          onClick={() =>
            this.setState(prevState => ({ openList: !prevState.penList }))
          }
        />
        {openList && (
          <ul className="extra-options__options">
            <li onClick={this.delete}>
              <FontAwesomeIcon icon="trash" />
              Supprimer
            </li>
            <li onClick={this.team}>
              <FontAwesomeIcon icon="gopuram" />
              Équipe
            </li>
          </ul>
        )}
      </div>
    );
  }
}
