// @flow

import React, { Component } from 'react';

import ExtraOptions from './ExtraOptions';
import PreviewInfoEvent from './PreviewInfoEvent';

type Props = {
  onClick: () => void,
  events: Array<{
    id: number,
    name: string,
    location: string,
    date: Date,
    language: string,
  }>,
};

export default class ItemEvent extends Component<Props> {
  render() {
    const { onClick, events } = this.props;

    return events.map(event => (
      <div className="item-event" onClick={onClick} key={event.id}>
        <div className="item-event__wrapper">
          <ExtraOptions />
          <PreviewInfoEvent event={event} />
        </div>
        <div className="item-event__background" />
      </div>
    ));
  }
}
