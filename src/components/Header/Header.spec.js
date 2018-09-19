import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

import Header from './Header';
import HeaderProfile from './HeaderProfile';
import HeaderEventAttendees from './HeaderEventAttendees';

describe('<Header />', () => {
  const props = {
    cmsHeader: {
      help: 'AIDE',
      attendees: 'PAPA',
      myEvent: 'MAMA',
    },
    attendeesCount: 1,
  };
  const wrapper = shallow(<Header {...props} />);

  it('should render the component', () => {
    expect(wrapper).to.have.lengthOf(1);
  });

  it('should have 1 <HeaderProfile />', () => {
    expect(wrapper.find(HeaderProfile)).to.have.lengthOf(1);
  });

  it('should render <HeaderProfile /> with the correct props', () => {
    expect(wrapper.find(HeaderProfile).props().cmsHeader).to.deep.equal({
      help: 'AIDE',
      attendees: 'PAPA',
      myEvent: 'MAMA',
    });
  });

  it('should have 1 <HeaderEventAttendees />', () => {
    expect(wrapper.find(HeaderEventAttendees)).to.have.lengthOf(1);
  });

  it('should render <HeaderEventAttendees /> with the correct props', () => {
    expect(wrapper.find(HeaderEventAttendees).props().cmsHeader).to.deep.equal({
      help: 'AIDE',
      attendees: 'PAPA',
      myEvent: 'MAMA',
    });
    expect(
      wrapper.find(HeaderEventAttendees).props().attendeesCount
    ).to.deep.equal(1);
  });

  it('should display the logo', () => {
    expect(wrapper.find('.header__logo').text()).to.equal('h');
  });
});
