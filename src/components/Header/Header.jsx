// @flow

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import mignonne from '../../mignonne.jpg';

type Props = {};

export default class Header extends Component<Props> {
  render() {
    return (
      <div className="header">
        <div className="header__logo">h</div>
        <div className="header__information">
          <div className="information__wrapper">
            <div className="wrapper__event-attendees">
              <div className="information__event">
                <FontAwesomeIcon icon="th" />
                <span className="event">MES ÉVÈNEMENTS</span>
              </div>
              <div className="information__attendees">
                <div className="attendees__count">240 PARTICIPANTS</div>
              </div>
            </div>
            <div className="information__profile">
              <div className="profile__help">AIDE</div>
              <div className="profile__dropdown">
                <img className="dropdown__image" src={mignonne} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
