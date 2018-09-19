// @flow

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ResearchEvent extends Component<{}> {
  render() {
    return (
      <div className="research-event">
        <div className="research-event__input">
          <FontAwesomeIcon icon="search" />
          <input type="text" placeholder="Rechercher un événement" size="34" />
        </div>
        <div className="research-event__dropdown-add">
          <div className="dropdown">dropdown</div>
          <FontAwesomeIcon icon="plus-circle" />
        </div>
      </div>
    );
  }
}
