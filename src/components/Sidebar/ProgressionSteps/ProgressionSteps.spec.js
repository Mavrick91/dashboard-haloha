import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ProgressionSteps from './ProgressionSteps';

describe('<ProgressionSteps />', () => {
  const props = {
    steps: [
      { id: 0, validate: false, stepName: 'gaga' },
      { id: 1, validate: true, stepName: 'gaga' },
    ],
    cmsSidebar: {
      cmsProgression: {
        title: 'title',
        subtitle: 'subtitle',
      },
      cmsSteps: {
        title: 'title',
      },
    },
  };

  const wrapper = shallow(<ProgressionSteps {...props} />);

  it('should render the component', () => {
    expect(wrapper).to.have.lengthOf(1);
  });

  it('should have 1 <FontAwesomeIcon />', () => {
    expect(wrapper.find(FontAwesomeIcon)).to.have.lengthOf(2);
  });

  describe('when the step is not validate', () => {
    it('should should display a gray circle', () => {
      expect(wrapper.find('.progression-step__invalide-step')).to.have.lengthOf(
        1
      );
    });

    it('should display gray text', () => {
      expect(
        wrapper.find('.progression-step__invalide-step-name')
      ).to.have.lengthOf(1);
    });
  });

  describe('when the step is validate', () => {
    it('should should display a green circle', () => {
      expect(wrapper.find('.progression-step__validate-step')).to.have.lengthOf(
        1
      );
    });

    it('should display gray text', () => {
      expect(
        wrapper.find('.progression-step__validate-step-name')
      ).to.have.lengthOf(1);
    });
  });
});
