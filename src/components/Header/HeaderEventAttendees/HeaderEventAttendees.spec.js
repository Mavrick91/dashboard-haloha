import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import HeaderEventAttendees from './HeaderEventAttendees';

describe('<HeaderEventAttendees />', () => {
  const wrapper = shallow(<HeaderEventAttendees />);

  it('should render component', () => {
    expect(wrapper).to.have.lengthOf(1);
  });
});
