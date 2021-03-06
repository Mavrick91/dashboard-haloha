// @flow

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropdownMenu from '../DropdownMenu';

type Props = {
  placeholder: string,
  filterEvent: Array<{
    id: number,
    name: string,
  }>,
  onClick?: () => void,
};

export default class ResearchEvent extends Component<Props> {
  handleKeyPress = (e: *) => {
    if (e.key === 'Enter') {
      // Key Enter pressed, do something
    }
  };

  render() {
    const { filterEvent, placeholder, onClick } = this.props;

    return (
      <div className="research-event">
        <div className="research-event__input">
          <FontAwesomeIcon icon="search" />
          <input
            type="text"
            placeholder={placeholder}
            size="34"
            onKeyPress={this.handleKeyPress}
          />
        </div>
        <div className="research-event__dropdown-add">
          <DropdownMenu items={filterEvent} />
          <FontAwesomeIcon icon="plus-circle" onClick={onClick} />
        </div>
      </div>
    );
  }
}
