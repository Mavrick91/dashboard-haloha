// @flow

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ButtonUpdate from '../../ButtonUpdate';

export default class HeaderEventAttendees extends Component<{}> {
  render() {
    return (
      <div className="wrapper__event-attendees">
        <div className="information__event">
          <FontAwesomeIcon icon="th" />
          <span className="event">MES ÉVÈNEMENTS</span>
        </div>
        <div className="information__attendees">
          <div className="attendees__count">240 PARTICIPANTS</div>
          <ButtonUpdate />
        </div>
      </div>
    );
  }
}
