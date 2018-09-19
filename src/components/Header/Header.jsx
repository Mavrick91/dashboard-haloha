// @flow

import React, { Component } from 'react';

import HeaderProfile from './HeaderProfile';
import HeaderEventAttendees from './HeaderEventAttendees';

type Props = {
  cmsHeader: HeaderType,
  attendeesCount: number,
};

export default class Header extends Component<Props> {
  render() {
    const { attendeesCount, cmsHeader } = this.props;

    return (
      <div className="header">
        <div className="header__logo">h</div>
        <div className="header__information">
          <div className="information__wrapper">
            <HeaderEventAttendees
              attendeesCount={attendeesCount}
              cmsHeader={cmsHeader}
            />
            <HeaderProfile cmsHeader={cmsHeader} />
          </div>
        </div>
      </div>
    );
  }
}
