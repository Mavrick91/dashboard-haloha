// @flow

import React, { Component } from 'react';
import { Line } from 'rc-progress';

type Props = {
  cmsSidebar: CMSSidebar,
  progression: number,
};

class ProgressionBar extends Component<Props> {
  render() {
    const {
      progression,
      cmsSidebar: { cmsProgression },
    } = this.props;

    return (
      <div className="progression-bar">
        <h4 className="progression-bar__title">{cmsProgression.title}</h4>
        <Line
          percent={progression}
          strokeWidth="1.5"
          strokeColor="#6400e3"
          trailWidth="1.5"
        />
        <p className="progression-bar__percentage">{`${
          cmsProgression.subtitle
        } ${progression}%`}</p>
      </div>
    );
  }
}

export default ProgressionBar;
