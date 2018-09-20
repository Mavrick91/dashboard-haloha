// @flow

import React, { Component } from 'react';
import moment from 'moment';

type Props = {
  event: {
    id: number,
    name: string,
    location: string,
    date: Date,
    language: string,
  },
};

export default class PreviewInfoEvent extends Component<Props> {
  render() {
    const { event } = this.props;

    return (
      <div className="information-event">
        <div className="information-event__name">{event.name}</div>
        <div className="information-event__location">{event.location}</div>
        <div className="information-event__date-language">
          <div className="date">
            {moment(event.date, 'DDMMYYYY').format('DD MM YYYY')}
          </div>
          <div className="language">{event.language}</div>
        </div>
      </div>
    );
  }
}
