// @flow

import React, { Component } from 'react';

type Props = { onClick?: () => void, updateText: string };

class ButtonUpdate extends Component<Props> {
  static defaultProps = {
    onClick: null,
  };

  render() {
    const { onClick, updateText } = this.props;

    return (
      <div className="button-update" onClick={onClick}>
        <div className="button-update__text">{updateText}</div>
      </div>
    );
  }
}

export default ButtonUpdate;
