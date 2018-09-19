// @flow

import React, { Component } from 'react';

import mignonne from '../../../mignonne.jpg';

type Props = {
  cmsHeader: HeaderType,
};

export default class HeaderProfile extends Component<Props> {
  render() {
    const {
      cmsHeader: { help },
    } = this.props;

    return (
      <div className="information__profile">
        <div className="profile__help">{help}</div>
        <div className="profile__dropdown">
          <img className="dropdown__image" src={mignonne} alt="" />
        </div>
      </div>
    );
  }
}
