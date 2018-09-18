// @flow

import React, { Component } from 'react';

type Props = { onClick?: () => void };

class ButtonUpdate extends Component<Props> {
  static defaultProps = {
    onClick: null,
  };

  render() {
    const { onClick } = this.props;

    return (
      <div className="button-update" onClick={onClick}>
        <div className="button-update__text">METTRE A NIVEAU</div>
      </div>
    );
  }
}

export default ButtonUpdate;
