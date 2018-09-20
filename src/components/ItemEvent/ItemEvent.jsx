// @flow

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    backgroundImage: string,
    available: boolean,
  }>,
};

export default class ItemEvent extends Component<Props> {
  render() {
    const { onClick, events } = this.props;

    return (
      <div className="item-event__container">
        {events.map(event => {
          let available = '';

          if (event.available === 'available') available = '#61d6bc';
          else if (event.available === 'unvailable') available = '#ec6963';

          return (
            <div className="item-event" onClick={onClick} key={event.id}>
              <div className="item-event__wrapper">
                <ExtraOptions />
                <PreviewInfoEvent event={event} />
              </div>
              <div
                style={{
                  backgroundImage: `url(${event.backgroundImage})`,
                }}
                className="item-event__background"
              />
              {available !== '' && (
                <FontAwesomeIcon
                  icon="circle"
                  className="item-event__available"
                  style={{
                    color: available,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }
}
