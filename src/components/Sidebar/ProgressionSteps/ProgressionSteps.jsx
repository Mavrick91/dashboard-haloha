// @flow

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle } from '@fortawesome/free-regular-svg-icons';

type Props = {
  cmsSidebar: CMSSidebar,
  steps: Array<{
    id: number,
    validate: boolean,
    stepName: string,
  }>,
};

class ProgressionSteps extends Component<Props> {
  render() {
    const {
      steps,
      cmsSidebar: { cmsSteps },
    } = this.props;

    return (
      <div className="progression-steps">
        <p className="progression-steps__title">{cmsSteps.title}</p>
        {steps.map(step => (
          <div key={step.id} className="progression-step__wrapper">
            <FontAwesomeIcon
              icon={step.validate ? faCheckCircle : faCircle}
              className={`${
                step.validate
                  ? 'progression-step__validate-step'
                  : 'progression-step__invalide-step'
              }`}
            />
            <p
              className={`progression-step__step-name ${
                step.validate
                  ? 'progression-step__validate-step-name'
                  : 'progression-step__invalide-step-name'
              }`}
            >
              {step.stepName}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default ProgressionSteps;
