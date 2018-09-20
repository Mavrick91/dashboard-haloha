import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import moment from 'moment';

import PreviewInfoEvent from './PreviewInfoEvent';

describe('<PreviewInfoEvent />', () => {
  const props = {
    event: {
      id: 0,
      name: 'Astrology or Astronomy',
      location: '94400 vitry-sur-seine',
      date: moment(),
      language: 'FR',
    },
  };

  const wrapper = shallow(<PreviewInfoEvent {...props} />);

  it('should render the component', () => {
    expect(wrapper).to.have.lengthOf(1);
  });

  it('should have the correct props', () => {
    expect(wrapper.instance().props).to.deep.equal(props);
  });

  it("should display event's name", () => {
    expect(wrapper.find('.information-event__name').text()).to.equal(
      'Astrology or Astronomy'
    );
  });
  it("should display event's location", () => {
    expect(wrapper.find('.information-event__location').text()).to.equal(
      '94400 vitry-sur-seine'
    );
  });
  it("should display event's date", () => {
    expect(wrapper.find('.date').text()).to.deep.equal(
      moment(props.event.date).format('MM/DD/YYYY')
    );
  });
  it("should display event's language", () => {
    expect(wrapper.find('.language').text()).to.equal('FR');
  });
});
