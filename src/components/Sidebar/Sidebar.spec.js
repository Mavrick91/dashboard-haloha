import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Sidebar from './Sidebar';
import ProgressionBar from './ProgressionBar/ProgressionBar';
import ProgressionSteps from './ProgressionSteps/ProgressionSteps';

describe('<Sidebar />', () => {
  const props = {
    progression: 70,
    cmsSidebar: {
      cmsProgression: {
        title: 'title',
        subtitle: 'subtitle',
      },
    },
    steps: [
      {
        id: 1,
        stepName: 'Créer mon premier évènement',
        validate: true,
      },
      {
        id: 2,
        stepName: 'Définir mes objectifs',
        validate: false,
      },
    ],
  };

  const wrapper = shallow(<Sidebar {...props} />);

  it('should render the component', () => {
    expect(wrapper).to.have.lengthOf(1);
  });

  it('should have 1 <ProgressionBar />', () => {
    expect(wrapper.find(ProgressionBar)).to.have.lengthOf(1);
  });

  it('should render <ProgressionBar /> with the correct props', () => {
    expect(wrapper.find(ProgressionBar).props().progression).to.deep.equal(
      props.progression
    );
  });

  it('should have 1 <ProgressionSteps />', () => {
    expect(wrapper.find(ProgressionSteps)).to.have.lengthOf(1);
  });

  it('should render <ProgressionSteps /> with the correct props', () => {
    expect(wrapper.find(ProgressionSteps).props().steps).to.deep.equal(
      props.steps
    );
  });

  it('should have 1 <FontAwesomeIcon />', () => {
    expect(wrapper.find(FontAwesomeIcon)).to.have.lengthOf(1);
    expect(wrapper.find(FontAwesomeIcon).props().icon).to.equal('arrow-left');
  });

  it('should should change the state', () => {
    expect(wrapper.state().openSidebar).to.equal(false);
    wrapper.find('.sidebar__icon-wrapper').simulate('click');
    expect(wrapper.state().openSidebar).to.equal(true);
  });
});
