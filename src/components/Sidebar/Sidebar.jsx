// @flow

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ProgressionBar from './ProgressionBar/ProgressionBar';
import ProgressionSteps from './ProgressionSteps/ProgressionSteps';

type Props = {
  cmsSidebar: CMSSidebar,
  progression: number,
  steps: Array<{
    id: number,
    validate: boolean,
    stepName: string,
  }>,
};

type State = {
  openSidebar: boolean,
};

class Sidebar extends Component<Props, State> {
  state = {
    openSidebar: false,
  };

  render() {
    const { progression, steps, cmsSidebar } = this.props;
    const { openSidebar } = this.state;

    return (
      <div className={`sidebar ${openSidebar ? 'sidebar--active' : ''}`}>
        <div
          className="sidebar__icon-wrapper"
          onClick={() => this.setState({ openSidebar: !openSidebar })}
        >
          <FontAwesomeIcon icon="arrow-left" className="sidebar__icon" />
        </div>
        <div className="sidebar__content">
          <ProgressionBar cmsSidebar={cmsSidebar} progression={progression} />
          <ProgressionSteps cmsSidebar={cmsSidebar} steps={steps} />
        </div>
      </div>
    );
  }
}

export default Sidebar;
