// @flow

import React, { Component } from 'react';

import mignonne from '../../../mignonne.jpg';

export default class HeaderProfile extends Component<{}> {
  render() {
    return (
      <div className="information__profile">
        <div className="profile__help">AIDE</div>
        <div className="profile__dropdown">
          <img className="dropdown__image" src={mignonne} alt="" />
        </div>
      </div>
    );
  }
}
