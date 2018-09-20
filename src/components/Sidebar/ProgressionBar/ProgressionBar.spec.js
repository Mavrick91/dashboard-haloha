import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

import ProgressionBar from './ProgressionBar';

describe('<ProgressionBar />', () => {
  const props = {
    progression: 70,
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

  const wrapper = shallow(<ProgressionBar {...props} />);

  it('should render the component', () => {
    expect(wrapper).to.have.lengthOf(1);
  });

  it('should render the correct title', () => {
    expect(wrapper.find('.progression-bar__title').text()).to.equal('title');
  });

  it('should render the correct percentage', () => {
    expect(wrapper.find('.progression-bar__percentage').text()).to.equal(
      'subtitle 70%'
    );
  });
});
