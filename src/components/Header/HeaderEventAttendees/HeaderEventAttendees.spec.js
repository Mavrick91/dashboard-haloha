import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ButtonUpdate from '../../ButtonUpdate';
import HeaderEventAttendees from './HeaderEventAttendees';

describe('<HeaderEventAttendees />', () => {
  const props = {
    cmsHeader: {
      myEvent: 'myEvent',
      attendees: 'PARTICIPANTS',
    },
    attendeesCount: 230,
  };
  const wrapper = shallow(<HeaderEventAttendees {...props} />);

  it('should render component', () => {
    expect(wrapper).to.have.lengthOf(1);
  });

  it('should have the correct props', () => {
    expect(wrapper.instance().props.attendeesCount).to.equal(230);
    expect(wrapper.instance().props.cmsHeader).to.deep.equal({
      myEvent: 'myEvent',
      attendees: 'PARTICIPANTS',
    });
  });

  it('should have 1 <FontAwesomeIcon />', () => {
    expect(wrapper.find(FontAwesomeIcon)).to.have.lengthOf(1);
    expect(wrapper.find(FontAwesomeIcon).props().icon).to.equal('th');
  });

  it('should have 1 <ButtonUpdate />', () => {
    expect(wrapper.find(ButtonUpdate)).to.have.lengthOf(1);
  });

  it('should display number of attendees correctly', () => {
    expect(wrapper.find('.attendees__count').text()).to.equal(
      '230 PARTICIPANTS'
    );
  });
});
