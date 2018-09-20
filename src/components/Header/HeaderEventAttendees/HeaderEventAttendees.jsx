// @flow

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ButtonUpdate from '../../ButtonUpdate';

type Props = {
  cmsHeader: HeaderType,
  attendeesCount: number,
};

export default class HeaderEventAttendees extends Component<Props> {
  render() {
    const {
      cmsHeader: { myEvent, attendees, update },
      attendeesCount,
    } = this.props;

    return (
      <div className="wrapper__event-attendees">
        <div className="information__event">
          <FontAwesomeIcon icon="th" />
          <span className="event">{myEvent}</span>
        </div>
        <div className="information__attendees">
          <div className="attendees__count">{`${attendeesCount} ${attendees}`}</div>
          <ButtonUpdate updateText={update} />
        </div>
      </div>
    );
  }
}
