// @flow

import React, { Component } from 'react';

import HeaderProfile from './HeaderProfile';
import HeaderEventAttendees from './HeaderEventAttendees';

type Props = {};

export default class Header extends Component<Props> {
  render() {
    return (
      <div className="header">
        <div className="header__logo">h</div>
        <div className="header__information">
          <div className="information__wrapper">
            <HeaderEventAttendees />
            <HeaderProfile />
          </div>
        </div>
      </div>
    );
  }
}
