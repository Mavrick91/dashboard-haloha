import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import moment from 'moment';

import ItemEvent from './ItemEvent';
import ExtraOptions from './ExtraOptions';
import PreviewInfoEvent from './PreviewInfoEvent';

chai.use(sinonChai);

describe('<ItemEvent />', () => {
  const props = {
    onClick: sinon.spy(),
    events: [
      {
        id: 0,
        name: 'Astrology or Astronomy',
        location: '94400 vitry-sur-seine',
        date: moment(),
        language: 'FR',
      },
    ],
  };
  const wrapper = shallow(<ItemEvent {...props} />);

  it('should render the component', () => {
    expect(wrapper).to.have.lengthOf(1);
  });

  it('should render <ExtraOptions />', () => {
    expect(wrapper.find(ExtraOptions)).to.have.lengthOf(1);
  });

  it('should render <PreviewInfoEvent />', () => {
    expect(wrapper.find(PreviewInfoEvent)).to.have.lengthOf(1);
  });

  describe('when clicking the component', () => {
    it('should trigger the function', () => {
      wrapper
        .find('div')
        .at(0)
        .simulate('click');
      expect(props.onClick).to.be.calledOnce;
    });
  });
});
